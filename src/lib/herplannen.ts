import { StudieSessie } from "@/types/agenda";
import { Vak } from "@/types";

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function tijdNaarMin(tijd: string): number {
  const [h, m] = tijd.split(":").map(Number);
  return h * 60 + m;
}

export function minNaarTijd(min: number): string {
  const h = Math.floor(min / 60) % 24;
  const m = min % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function rondAf15(n: number): number {
  return Math.round(n / 15) * 15;
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface VakInfo {
  vakId: string;
  examDatum?: string;
  totaalLeerdoelen: number;
  afgevinkt: number;
  confidenceScore: number;
}

export interface HerplanResultaat {
  sessies: StudieSessie[];
  weggelaten: { sessie: StudieSessie; reden: string }[];
  ingekort: { sessie: StudieSessie; origineel: number; nieuw: number }[];
  nettoMinuten: number;
  pauzeMinuten: number;
}

// ─── Herplan functie ──────────────────────────────────────────────────────────

export function herplanDag(
  sessies: StudieSessie[],
  startTijd: string,
  eindTijd: string,
  vakInfo: VakInfo[],
  bestaandeSessies: StudieSessie[],  // sessies die al vastliggen (bv. voltooide)
): HerplanResultaat {
  const startMin = tijdNaarMin(startTijd);
  const eindMin = tijdNaarMin(eindTijd);

  if (eindMin <= startMin || sessies.length === 0) {
    return { sessies: [], weggelaten: [], ingekort: [], nettoMinuten: 0, pauzeMinuten: 0 };
  }

  // 1. Bereken netto tijd
  const totaalMin = eindMin - startMin;
  const aantalPauzes = Math.floor(totaalMin / 120);
  const pauzeMin = aantalPauzes * 15;
  const nettoMin = totaalMin - pauzeMin;

  // 2. Prioriteer vakken
  function berekenScore(vakId: string): number {
    const info = vakInfo.find(v => v.vakId === vakId);
    if (!info) return 0;

    const dagenTotExamen = info.examDatum
      ? Math.max(1, Math.ceil((new Date(info.examDatum).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
      : 365;

    const urgentie = 1 / dagenTotExamen;
    const voortgangFactor = info.totaalLeerdoelen > 0
      ? 1 - (info.afgevinkt / info.totaalLeerdoelen)
      : 0.5;
    const confidenceFactor = (10 - info.confidenceScore) / 10;

    return urgentie * 0.5 + voortgangFactor * 0.3 + confidenceFactor * 0.2;
  }

  const gescoord = sessies.map(s => ({
    sessie: s,
    score: berekenScore(s.vakId),
  })).sort((a, b) => b.score - a.score);

  // 3. Verdeel tijd proportioneel
  const totaalScore = gescoord.reduce((sum, g) => sum + g.score, 0) || 1;

  const verdeeld = gescoord.map(g => {
    let toegewezen = rondAf15((g.score / totaalScore) * nettoMin);
    toegewezen = Math.max(30, toegewezen);                    // minimum 30 min
    toegewezen = Math.min(g.sessie.duurMinuten, toegewezen);  // max = origineel
    return { ...g, toegewezenMin: toegewezen };
  });

  // Bouw bezet-kaart van bestaande sessies
  const bezetSlots = new Set<number>();
  for (const bs of bestaandeSessies) {
    const bsStart = tijdNaarMin(bs.startTijd);
    const bsEind = bsStart + bs.duurMinuten;
    for (let m = bsStart; m < bsEind; m++) bezetSlots.add(m);
  }

  // 4. Plan sessies in tijdslots
  let cursor = startMin;
  let sindsLaatsePauze = 0;
  const PAUZE = 15;
  const MAX_ZONDER_PAUZE = 90;

  const resultaat: StudieSessie[] = [];
  const weggelaten: { sessie: StudieSessie; reden: string }[] = [];
  const ingekort: { sessie: StudieSessie; origineel: number; nieuw: number }[] = [];

  for (const item of verdeeld) {
    // Pauze toevoegen na elke 90 minuten studietijd
    if (sindsLaatsePauze >= MAX_ZONDER_PAUZE && cursor + PAUZE <= eindMin) {
      cursor += PAUZE;
      sindsLaatsePauze = 0;
    }

    // Skip bezette slots
    while (cursor < eindMin && bezetSlots.has(cursor)) {
      cursor++;
    }

    // Check of er nog tijd is
    const beschikbaar = eindMin - cursor;
    if (beschikbaar < 30) {
      weggelaten.push({ sessie: item.sessie, reden: "Onvoldoende tijd beschikbaar" });
      continue;
    }

    // Bepaal duur (mogelijk ingekort)
    let duur = Math.min(item.toegewezenMin, beschikbaar);
    duur = rondAf15(duur);
    if (duur < 30) duur = 30;
    if (cursor + duur > eindMin) duur = eindMin - cursor;

    if (duur < 30) {
      weggelaten.push({ sessie: item.sessie, reden: "Past niet meer in de planning" });
      continue;
    }

    // Check overlap met bestaande sessies
    let heeftOverlap = false;
    for (let m = cursor; m < cursor + duur; m++) {
      if (bezetSlots.has(m)) { heeftOverlap = true; break; }
    }

    if (heeftOverlap) {
      // Probeer na de overlap te plannen
      let nieuweCursor = cursor;
      while (nieuweCursor < eindMin && bezetSlots.has(nieuweCursor)) nieuweCursor++;
      if (nieuweCursor + 30 <= eindMin) {
        cursor = nieuweCursor;
        duur = Math.min(duur, eindMin - cursor);
      } else {
        weggelaten.push({ sessie: item.sessie, reden: "Conflict met bestaande sessie" });
        continue;
      }
    }

    // Track inkorten
    if (duur < item.sessie.duurMinuten) {
      ingekort.push({ sessie: item.sessie, origineel: item.sessie.duurMinuten, nieuw: duur });
    }

    resultaat.push({
      ...item.sessie,
      startTijd: minNaarTijd(cursor),
      duurMinuten: duur,
    });

    sindsLaatsePauze += duur;
    cursor += duur;
  }

  return {
    sessies: resultaat,
    weggelaten,
    ingekort,
    nettoMinuten: nettoMin,
    pauzeMinuten: pauzeMin,
  };
}

// ─── Bereken beschikbare tijd ─────────────────────────────────────────────────

export function berekenBeschikbareTijd(startTijd: string, eindTijd: string): {
  totaalMin: number; pauzeMin: number; nettoMin: number;
} {
  const startMin = tijdNaarMin(startTijd);
  const eindMin = tijdNaarMin(eindTijd);
  const totaalMin = Math.max(0, eindMin - startMin);
  const pauzeMin = Math.floor(totaalMin / 120) * 15;
  const nettoMin = totaalMin - pauzeMin;
  return { totaalMin, pauzeMin, nettoMin };
}

"use client";
import { useState, useEffect, useCallback } from "react";
import { db } from "@/lib/firebase";
import {
  collection, doc, setDoc, deleteDoc, getDoc,
  onSnapshot, query, orderBy
} from "firebase/firestore";
import { StudieSessie } from "@/types/agenda";
import { Vak } from "@/types";

export function useAgenda(uid: string) {
  const [sessies, setSessies] = useState<StudieSessie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset immediately so stale sessions from a previous uid never show
    setSessies([]);
    setLoading(true);

    if (!uid || !db) return;
    const q = query(
      collection(db, "users", uid, "agenda"),
      orderBy("datum", "asc")
    );
    const unsub = onSnapshot(q, (snap) => {
      setSessies(snap.docs.map(d => ({ ...d.data(), id: d.id } as StudieSessie)));
      setLoading(false);
    }, () => {
      // On error, stop loading and show empty
      setLoading(false);
    });
    return unsub;
  }, [uid]);

  const voegToe = useCallback(async (sessie: Omit<StudieSessie, "id" | "aangemaaktOp">) => {
    if (!db) return;
    const id = `sessie_${Date.now()}`;
    await setDoc(doc(db, "users", uid, "agenda", id), {
      ...sessie,
      id,
      aangemaaktOp: new Date().toISOString(),
    });
  }, [uid]);

  const update = useCallback(async (id: string, data: Partial<StudieSessie>) => {
    if (!db) return;
    await setDoc(doc(db, "users", uid, "agenda", id), data, { merge: true });
  }, [uid]);

  const verwijder = useCallback(async (id: string) => {
    if (!db) return;
    await deleteDoc(doc(db, "users", uid, "agenda", id));
  }, [uid]);

  const markeerVoltooid = useCallback(async (id: string, voltooid: boolean) => {
    if (!db) return;
    await setDoc(doc(db, "users", uid, "agenda", id), { voltooid }, { merge: true });
  }, [uid]);

  const sessiesOpDatum = useCallback((datum: string) => {
    return sessies.filter(s => s.datum === datum);
  }, [sessies]);

  const sessiesPerVak = useCallback((vakId: string) => {
    return sessies.filter(s => s.vakId === vakId);
  }, [sessies]);

  const minutenPerVak = useCallback((vakId: string) => {
    return sessies
      .filter(s => s.vakId === vakId)
      .reduce((sum, s) => sum + s.duurMinuten, 0);
  }, [sessies]);

  const ingeplandeSyllabusItems = useCallback((vakId: string): string[] => {
    return sessies
      .filter(s => s.vakId === vakId && s.syllabusItem)
      .map(s => s.syllabusItem as string);
  }, [sessies]);

  return {
    sessies, loading, voegToe, update, verwijder,
    markeerVoltooid, sessiesOpDatum, sessiesPerVak,
    minutenPerVak, ingeplandeSyllabusItems,
  };
}

// ─── Herplan limiet ───────────────────────────────────────────────────────────

const HERPLAN_MAX = 3;

export function useHerplanLimiet(uid: string) {
  const [herplanCount, setHerplanCount] = useState(0);
  const [herplanDatum, setHerplanDatum] = useState("");

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!uid || !db) return;
    getDoc(doc(db, "users", uid, "instellingen", "algemeen")).then(snap => {
      const data = snap.data() ?? {};
      const savedDatum: string = data.herplanDatum ?? "";
      const savedCount: number = data.herplanCount ?? 0;
      setHerplanDatum(savedDatum);
      setHerplanCount(savedDatum === today ? savedCount : 0);
    }).catch(() => { /* stay at 0 */ });
  }, [uid, today]);

  const effectiveCount = herplanDatum === today ? herplanCount : 0;
  const resterend = Math.max(0, HERPLAN_MAX - effectiveCount);

  const checkEnVerhoog = useCallback(async (): Promise<boolean> => {
    if (!db) return false;
    const currentToday = new Date().toISOString().split("T")[0];
    const snap = await getDoc(doc(db, "users", uid, "instellingen", "algemeen"));
    const data = snap.data() ?? {};
    const savedDatum: string = data.herplanDatum ?? "";
    const savedCount: number = data.herplanCount ?? 0;
    const count = savedDatum === currentToday ? savedCount : 0;
    if (count >= HERPLAN_MAX) {
      setHerplanCount(count);
      setHerplanDatum(currentToday);
      return false;
    }
    const newCount = count + 1;
    await setDoc(doc(db, "users", uid, "instellingen", "algemeen"), {
      herplanCount: newCount,
      herplanDatum: currentToday,
    }, { merge: true });
    setHerplanCount(newCount);
    setHerplanDatum(currentToday);
    return true;
  }, [uid]);

  return { resterend, checkEnVerhoog };
}

// ─── standalone helpers ────────────────────────────────────────────────────────

function tijdNaarMinuten(tijd: string): number {
  const [h, m] = tijd.split(":").map(Number);
  return h * 60 + m;
}

function minutenNaarTijd(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

const BLOK_GAP = 60;

function berekenStudieBlokken(sessies: StudieSessie[]): StudieSessie[][] {
  if (sessies.length === 0) return [];
  const gesorteerd = [...sessies].sort((a, b) =>
    tijdNaarMinuten(a.startTijd) - tijdNaarMinuten(b.startTijd)
  );
  const blokken: StudieSessie[][] = [];
  let huidigBlok: StudieSessie[] = [gesorteerd[0]];
  for (let i = 1; i < gesorteerd.length; i++) {
    const vorige = huidigBlok[huidigBlok.length - 1];
    const vorigeEind = tijdNaarMinuten(vorige.startTijd) + vorige.duurMinuten;
    const huidigeStart = tijdNaarMinuten(gesorteerd[i].startTijd);
    if (huidigeStart - vorigeEind <= BLOK_GAP) {
      huidigBlok.push(gesorteerd[i]);
    } else {
      blokken.push(huidigBlok);
      huidigBlok = [gesorteerd[i]];
    }
  }
  blokken.push(huidigBlok);
  return blokken;
}

export function getHuidigBlok(sessies: StudieSessie[], activeSessieId: string): StudieSessie[] {
  const blokken = berekenStudieBlokken(sessies);
  return blokken.find(blok => blok.some(s => s.id === activeSessieId)) ?? [];
}

export function getBlokEindtijd(blok: StudieSessie[], dagEindTijd = "17:00"): string {
  if (blok.length === 0) return dagEindTijd;
  const laatste = blok[blok.length - 1];
  return minutenNaarTijd(tijdNaarMinuten(laatste.startTijd) + laatste.duurMinuten);
}

export function herplanBlok(
  huidigBlok: StudieSessie[],
  uitgelopenSessieId: string | null,
  extraMinuten: number,
  vakken: Vak[],
  confidenceScores: Record<string, number>,
  checks: Record<string, Record<string, boolean>>,
  seCijfers?: Record<string, number>,
): StudieSessie[] {
  if (huidigBlok.length === 0) return [];

  const gesorteerd = [...huidigBlok].sort((a, b) =>
    tijdNaarMinuten(a.startTijd) - tijdNaarMinuten(b.startTijd)
  );

  // Block end = end of last session
  const laatste = gesorteerd[gesorteerd.length - 1];
  const blokEindMinuten = tijdNaarMinuten(laatste.startTijd) + laatste.duurMinuten;

  const uitgelopen = uitgelopenSessieId
    ? gesorteerd.find(s => s.id === uitgelopenSessieId)
    : null;

  const PAUZE = 15;
  let cursor = uitgelopen
    ? tijdNaarMinuten(uitgelopen.startTijd) + uitgelopen.duurMinuten + extraMinuten + PAUZE
    : tijdNaarMinuten(gesorteerd[0].startTijd);

  const resterend = gesorteerd.filter(s => s.id !== uitgelopenSessieId);

  function prioriteit(vakId: string): number {
    const vak = vakken.find(v => v.id === vakId);
    if (!vak?.examDatum) return 0;
    const daysLeft = Math.ceil(
      (new Date(vak.examDatum).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    );
    const confidence = confidenceScores[vakId] ?? 5;
    const vakChecks = checks[vakId] ?? {};
    const totaal = vak.syllabus?.length ?? 1;
    const gedaan = Object.values(vakChecks).filter(Boolean).length;
    const open = totaal - gedaan;
    const seCijfer = seCijfers?.[vakId] ?? 6.0;
    const seScore = (10 - seCijfer) / 10 * 0.2;
    return (1 / Math.max(daysLeft, 1)) * 0.4
      + ((10 - confidence) / 10) * 0.3
      + (open / Math.max(totaal, 1)) * 0.1
      + seScore;
  }

  const gesorteerOpPrioriteit = [...resterend].sort(
    (a, b) => prioriteit(b.vakId) - prioriteit(a.vakId)
  );

  const nieuwePlannen: StudieSessie[] = [];
  for (const sessie of gesorteerOpPrioriteit) {
    if (cursor >= blokEindMinuten) break;
    const maxDuur = blokEindMinuten - cursor;
    const nieuweD = Math.min(sessie.duurMinuten, maxDuur);
    if (nieuweD < 10) break;
    nieuwePlannen.push({
      ...sessie,
      startTijd: minutenNaarTijd(cursor),
      duurMinuten: nieuweD,
    });
    cursor += nieuweD + PAUZE;
  }

  return nieuwePlannen;
}

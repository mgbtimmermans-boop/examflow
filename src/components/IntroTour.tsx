"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Portal } from "@/components/Portal";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface IntroTourProps {
  uid: string;
  onVoltooid: () => void;
}

// ─── Animerende illustraties ──────────────────────────────────────────────────

function AnimatieWelkom() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "8px 0 4px" }}>
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 56, height: 56, borderRadius: 14,
          background: "linear-gradient(135deg, #2563EB, #7C3AED)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 24px rgba(37,99,235,0.35)",
          marginBottom: 10,
        }}
      >
        <span style={{ fontSize: 26 }}>📚</span>
      </motion.div>
      <div style={{ display: "flex", gap: 6 }}>
        {["E", "x", "a", "m", "F", "l", "o", "w"].map((l, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
            style={{ fontSize: 18, fontWeight: 700, color: i >= 4 ? "#2563EB" : "#0F172A" }}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ fontSize: 11, color: "#94A3B8", marginTop: 6, textAlign: "center" }}
      >
        Gemaakt door leerlingen, voor leerlingen
      </motion.p>
    </div>
  );
}

function AnimatieVakken() {
  const vakken = [
    { naam: "Economie", kleur: "#f97316", score: 7, pct: 62 },
    { naam: "Wiskunde A", kleur: "#10b981", score: 8, pct: 78 },
    { naam: "Biologie", kleur: "#3b82f6", score: 6, pct: 41 },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, margin: "8px 0" }}>
      {vakken.map((v, i) => (
        <motion.div
          key={v.naam}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.15, duration: 0.35 }}
          style={{
            border: "1px solid #E8ECF0", borderRadius: 10,
            padding: "8px 12px", background: "#FFFFFF",
            borderLeft: `3px solid ${v.kleur}`,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#0F172A" }}>{v.naam}</span>
            <span style={{ fontSize: 11, background: "#F0FDF4", color: "#16A34A", padding: "1px 6px", borderRadius: 20 }}>
              {v.score}/10
            </span>
          </div>
          <div style={{ height: 3, background: "#E8ECF0", borderRadius: 99 }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${v.pct}%` }}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.6, ease: "easeOut" }}
              style={{ height: "100%", background: v.kleur, borderRadius: 99 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function AnimatieSyllabus() {
  const [afgevinkt, setAfgevinkt] = useState<number[]>([]);
  const [voortgang, setVoortgang] = useState(0);

  useEffect(() => {
    const items = [0, 1, 2];
    items.forEach((i, idx) => {
      setTimeout(() => {
        setAfgevinkt(prev => [...prev, i]);
        setVoortgang((idx + 1) / items.length * 100);
      }, 600 + idx * 700);
    });
  }, []);

  const leerdoelen = [
    "Nash-evenwicht begrijpen",
    "Prijselasticiteit berekenen",
    "Marktvormen vergelijken",
  ];

  return (
    <div style={{ margin: "8px 0" }}>
      <div style={{ height: 4, background: "#E8ECF0", borderRadius: 99, marginBottom: 8 }}>
        <motion.div
          animate={{ width: `${voortgang}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ height: "100%", background: "#2563EB", borderRadius: 99 }}
        />
      </div>
      <div style={{ border: "1px solid #E8ECF0", borderRadius: 10, overflow: "hidden" }}>
        {leerdoelen.map((tekst, i) => (
          <motion.div
            key={i}
            animate={{ background: afgevinkt.includes(i) ? "#F0FDF4" : "#FFFFFF" }}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "8px 12px",
              borderBottom: i < 2 ? "1px solid #F1F5F9" : "none",
            }}
          >
            <motion.div
              animate={{
                background: afgevinkt.includes(i) ? "#16A34A" : "#FFFFFF",
                borderColor: afgevinkt.includes(i) ? "#16A34A" : "#CBD5E1",
              }}
              style={{
                width: 16, height: 16, borderRadius: 4, flexShrink: 0,
                border: "1.5px solid #CBD5E1",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              {afgevinkt.includes(i) && (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  width="9" height="7" viewBox="0 0 9 7" fill="none"
                >
                  <path d="M1 3.5l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </motion.svg>
              )}
            </motion.div>
            <span style={{
              fontSize: 12,
              color: afgevinkt.includes(i) ? "#94A3B8" : "#374151",
              textDecoration: afgevinkt.includes(i) ? "line-through" : "none",
            }}>
              {tekst}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AnimatieAgenda() {
  const [blokPos, setBlokPos] = useState(1);
  useEffect(() => {
    const t = setTimeout(() => setBlokPos(3), 1200);
    return () => clearTimeout(t);
  }, []);

  const dagen = ["Ma", "Di", "Wo", "Do", "Vr"];
  return (
    <div style={{ margin: "8px 0", border: "1px solid #E8ECF0", borderRadius: 10, overflow: "hidden" }}>
      <div style={{ display: "flex", borderBottom: "1px solid #E8ECF0" }}>
        {dagen.map((dag, i) => (
          <div key={dag} style={{
            flex: 1, textAlign: "center", padding: "6px 0",
            fontSize: 10, color: i === blokPos ? "#2563EB" : "#94A3B8",
            fontWeight: i === blokPos ? 600 : 400,
            borderTop: i === blokPos ? "2px solid #2563EB" : "2px solid transparent",
            transition: "all 0.3s",
          }}>{dag}</div>
        ))}
      </div>
      <div style={{ display: "flex", padding: "8px 4px", gap: 4, background: "#F8F9FC", minHeight: 56, position: "relative" }}>
        {dagen.map((_, i) => (
          <div key={i} style={{ flex: 1, position: "relative" }}>
            {i === blokPos && (
              <motion.div
                layout
                style={{
                  background: "#FFFFFF", borderRadius: 6,
                  borderLeft: "2px solid #f97316",
                  border: "1px solid #E8ECF0",
                  padding: "4px 6px", fontSize: 9, color: "#374151",
                }}
              >
                Economie<br /><span style={{ color: "#94A3B8" }}>14:00</span>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function AnimatieTimer() {
  const [seconden, setSeconden] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setSeconden(s => (s + 1) % 60), 100);
    return () => clearInterval(interval);
  }, []);
  const minuten = 24;
  const sec = String(59 - (seconden % 60)).padStart(2, "0");
  return (
    <div style={{ margin: "8px 0", background: "#0F172A", borderRadius: 12, padding: "14px", textAlign: "center" }}>
      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>● Focus</div>
      <div style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", fontFamily: "monospace", letterSpacing: -1 }}>
        {minuten}:{sec}
      </div>
      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>Economie · Nash-evenwicht</div>
      <div style={{ height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 99, marginTop: 10 }}>
        <motion.div
          animate={{ width: ["35%", "37%", "35%"] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ height: "100%", background: "#2563EB", borderRadius: 99 }}
        />
      </div>
    </div>
  );
}

function AnimatieHerhaling() {
  const [fase, setFase] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setFase(1), 800);
    const t2 = setTimeout(() => setFase(2), 1600);
    const t3 = setTimeout(() => setFase(3), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const intervals = [
    { label: "Dag 1", sub: "Basis", kleur: "#DC2626" },
    { label: "Dag 3", sub: "Gemiddeld", kleur: "#D97706" },
    { label: "Dag 7", sub: "Moeilijk", kleur: "#16A34A" },
  ];

  return (
    <div style={{ margin: "8px 0" }}>
      <div style={{ border: "1px solid #E8ECF0", borderRadius: 10, padding: "10px 12px", marginBottom: 8, background: "#F8F9FC" }}>
        <div style={{ fontSize: 11, color: "#94A3B8", marginBottom: 4 }}>LEERDOEL</div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#0F172A" }}>Nash-evenwicht begrijpen en toepassen</div>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {intervals.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: fase > i ? 1 : 0.3, scale: fase > i ? 1 : 0.9 }}
            transition={{ duration: 0.3 }}
            style={{
              flex: 1, background: fase > i ? "#F8F9FC" : "#FFFFFF",
              border: `1px solid ${fase > i ? item.kleur : "#E8ECF0"}`,
              borderRadius: 8, padding: "6px", textAlign: "center",
            }}
          >
            <div style={{ fontSize: 11, color: item.kleur, fontWeight: 600 }}>{item.label}</div>
            <div style={{ fontSize: 9, color: "#94A3B8", marginTop: 2 }}>{item.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AnimatieFormules() {
  const begrippen = ["break-even punt", "dekkingsbijdrage", "vaste kosten", "variabele kosten"];
  return (
    <div style={{ margin: "8px 0", border: "1px solid #E8ECF0", borderRadius: 10, overflow: "hidden" }}>
      <div style={{ background: "#F8F9FC", padding: "8px 12px", borderBottom: "1px solid #E8ECF0", display: "flex", gap: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#2563EB", borderBottom: "2px solid #2563EB", paddingBottom: 2 }}>Formules</span>
        <span style={{ fontSize: 11, color: "#94A3B8" }}>Begrippen</span>
      </div>
      <div style={{ padding: "10px 12px" }}>
        <div style={{ background: "#F8F9FC", borderRadius: 8, padding: "8px 10px", fontFamily: "monospace", fontSize: 12, color: "#2563EB", marginBottom: 8 }}>
          BEP = TFK ÷ (p − vk)
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {begrippen.map((b, i) => (
            <motion.span
              key={b}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
              style={{
                fontSize: 10, padding: "3px 8px", borderRadius: 20,
                background: "#F1F5F9", color: "#374151",
              }}
            >
              {b}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnimatieBioSync() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(s => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ margin: "8px 0", border: "1px solid #E8ECF0", borderRadius: 10, padding: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#0F172A" }}>Examen morgen</span>
        <span style={{ fontSize: 11, color: "#3b82f6", fontWeight: 500 }}>Biologie</span>
      </div>
      {[
        { label: "Ga slapen om", waarde: "22:30", kleur: "#8b5cf6" },
        { label: "Wektijd", waarde: "07:00", kleur: "#10b981" },
        { label: "Slaapkwaliteit", waarde: "5 cycli · 90 min", kleur: "#f97316" },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
          style={{
            display: "flex", justifyContent: "space-between",
            padding: "5px 0",
            borderBottom: i < 2 ? "1px solid #F1F5F9" : "none",
          }}
        >
          <span style={{ fontSize: 11, color: "#64748B" }}>{item.label}</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: item.kleur }}>{item.waarde}</span>
        </motion.div>
      ))}
    </div>
  );
}

function AnimatieCijferdoelen() {
  const [doelen, setDoelen] = useState([
    { vak: "Economie", se: 7.2, doel: null as number | null },
    { vak: "Wiskunde A", se: 6.8, doel: null as number | null },
  ]);

  useEffect(() => {
    const t1 = setTimeout(() => setDoelen(d => d.map((v, i) => i === 0 ? { ...v, doel: 8 } : v)), 800);
    const t2 = setTimeout(() => setDoelen(d => d.map((v, i) => i === 1 ? { ...v, doel: 7 } : v)), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div style={{ margin: "8px 0", border: "1px solid #E8ECF0", borderRadius: 10, overflow: "hidden" }}>
      {doelen.map((r, i) => {
        const ceNodig = r.doel ? ((r.doel * 2 - r.se * 1) / 1).toFixed(1) : null;
        return (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "9px 12px",
            borderBottom: i === 0 ? "1px solid #F1F5F9" : "none",
          }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#0F172A", flex: 1 }}>{r.vak}</span>
            <span style={{ fontSize: 10, color: "#64748B" }}>SE {r.se}</span>
            <motion.span
              animate={{ opacity: r.doel ? 1 : 0.3 }}
              style={{ fontSize: 10, color: "#2563EB", fontWeight: 600 }}
            >
              Doel {r.doel ?? "–"}
            </motion.span>
            <motion.span
              animate={{ opacity: ceNodig ? 1 : 0 }}
              style={{ fontSize: 10, color: "#16a34a", fontWeight: 600 }}
            >
              CE ≥ {ceNodig ?? "–"}
            </motion.span>
          </div>
        );
      })}
    </div>
  );
}

function AnimatieKlaar() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "8px 0" }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        style={{
          width: 56, height: 56, borderRadius: "50%",
          background: "#F0FDF4", border: "2px solid #16A34A",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 8,
        }}
      >
        <motion.svg
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          width="28" height="28" viewBox="0 0 28 28" fill="none"
        >
          <motion.path
            d="M6 14l6 6 10-10"
            stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ display: "flex", gap: 8 }}
      >
        {["Succes", "met", "je", "examens!"].map((w, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}
          >
            {w}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Stappen ──────────────────────────────────────────────────────────────────

const STAPPEN = [
  { target: null, titel: "Welkom bij ExamFlow", tekst: "Gemaakt door leerlingen, voor leerlingen. Dit is je persoonlijke examenvoorbereiding. We laten je snel zien hoe het werkt." },
  { target: "vakken-grid", titel: "Jouw vakken", tekst: "Elke kaart is één vak. De kleur laat zien hoe zeker je je voelt: rood = extra aandacht nodig, groen = klaar. Klik op een vak om de syllabus te openen." },
  { target: "global-progress", titel: "Syllabus afvinken", tekst: "Vink leerdoelen af als je ze beheerst. Je voortgang wordt bijgehouden over alle vakken heen." },
  { target: "agenda-link", titel: "Leeragenda", tekst: "Plan studiesessies in. Sleep vakken naar een dag en laat de app je schema automatisch aanpassen als je uitloopt." },
  { target: "focus-knop", titel: "Focus Mode", tekst: "Start een timer voor deep work. Brown noise en lo-fi muziek helpen je concentreren. De timer loopt door als je van tabblad wisselt." },
  { target: "herhalen-link", titel: "Slimme herhaling", tekst: "Afgevinkte leerdoelen komen terug op het juiste moment: na 1 dag, 3 dagen en 7 dagen. Zo onthoud je de stof écht voor het examen." },
  { target: null, titel: "Formules & Begrippen", tekst: "Op elke vakpagina vind je alle formules en begrippen. Klik op een begrip om direct naar de uitleg te gaan." },
  { target: "biosync-link", titel: "Bio-Sync", tekst: "Slaapadvies op basis van je examenrooster. ExamFlow berekent wanneer je naar bed moet voor optimale herstelcycli." },
  { target: "cijferdoelen-sectie", titel: "Cijferdoelen", tekst: "Stel per vak je doelcijfer in via Instellingen. ExamFlow berekent wat je op het CE nodig hebt op basis van je SE-cijfers." },
  { target: null, titel: "Klaar om te beginnen!", tekst: "ExamFlow helpt je gestructureerd en slim studeren. Succes met je examens — je kunt dit." },
];

const ILLUSTRATIES: Record<number, React.ComponentType> = {
  0: AnimatieWelkom,
  1: AnimatieVakken,
  2: AnimatieSyllabus,
  3: AnimatieAgenda,
  4: AnimatieTimer,
  5: AnimatieHerhaling,
  6: AnimatieFormules,
  7: AnimatieBioSync,
  8: AnimatieCijferdoelen,
  9: AnimatieKlaar,
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function IntroTour({ uid, onVoltooid }: IntroTourProps) {
  const [stap, setStap] = useState(0);
  const [spotlight, setSpotlight] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const [tooltipBreedte, setTooltipBreedte] = useState(340);
  const [tooltipCentered, setTooltipCentered] = useState(true);
  const [tooltipTop, setTooltipTop] = useState(0);
  const [tooltipLeft, setTooltipLeft] = useState(0);

  const huidigStap = STAPPEN[stap];
  const isLaatste = stap === STAPPEN.length - 1;
  const IllustratieComponent = ILLUSTRATIES[stap];

  const herbereken = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const breedte = Math.min(340, vw - 24);
    const hoogte = 420;
    setTooltipBreedte(breedte);

    if (!huidigStap.target) {
      setSpotlight(null);
      setTooltipCentered(true);
      return;
    }

    const el = document.querySelector(`[data-tour="${huidigStap.target}"]`);
    if (!el) {
      setSpotlight(null);
      setTooltipCentered(true);
      return;
    }

    const r = el.getBoundingClientRect();
    const PAD = 8;

    setSpotlight({
      top: r.top - PAD,
      left: r.left - PAD,
      width: r.width + PAD * 2,
      height: r.height + PAD * 2,
    });

    let top: number;
    if (r.top < vh / 2) {
      top = r.bottom + 12;
      if (top + hoogte > vh - 16) top = Math.max(16, r.top - hoogte - 12);
    } else {
      top = r.top - hoogte - 12;
      if (top < 16) top = Math.min(vh - hoogte - 16, r.bottom + 12);
    }

    let left = r.left + r.width / 2 - breedte / 2;
    left = Math.max(16, Math.min(left, vw - breedte - 16));
    top = Math.max(16, Math.min(top, vh - hoogte - 16));

    setTooltipCentered(false);
    setTooltipTop(top);
    setTooltipLeft(left);
  }, [huidigStap.target]);

  useEffect(() => {
    herbereken();
    window.addEventListener("resize", herbereken);
    return () => window.removeEventListener("resize", herbereken);
  }, [herbereken]);

  async function voltooien() {
    if (db) {
      await setDoc(doc(db, "users", uid, "instellingen", "algemeen"), { hasSeenTour: true }, { merge: true });
    }
    onVoltooid();
  }

  return (
    <Portal>
      {/* Overlay */}
      <div style={{ position: "fixed", inset: 0, zIndex: 9980, pointerEvents: "none" }}>
        {spotlight ? (
          <>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: spotlight.top, background: "rgba(0,0,0,0.65)" }} />
            <div style={{ position: "absolute", top: spotlight.top, left: 0, width: spotlight.left, height: spotlight.height, background: "rgba(0,0,0,0.65)" }} />
            <div style={{ position: "absolute", top: spotlight.top, left: spotlight.left + spotlight.width, right: 0, height: spotlight.height, background: "rgba(0,0,0,0.65)" }} />
            <div style={{ position: "absolute", top: spotlight.top + spotlight.height, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.65)" }} />
            <div style={{ position: "absolute", top: spotlight.top, left: spotlight.left, width: spotlight.width, height: spotlight.height, borderRadius: 10, boxShadow: "0 0 0 3px rgba(37,99,235,0.85)" }} />
          </>
        ) : (
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        )}
      </div>

      {/* Sla over */}
      <button
        onClick={voltooien}
        style={{
          position: "fixed", top: typeof window !== "undefined" && window.innerWidth < 480 ? 12 : 16, right: typeof window !== "undefined" && window.innerWidth < 480 ? 12 : 16, zIndex: 9991,
          fontSize: 12, padding: "6px 14px", borderRadius: 20,
          background: "rgba(255,255,255,0.15)", color: "white",
          border: "1px solid rgba(255,255,255,0.3)", cursor: "pointer",
        }}
      >
        Sla over
      </button>

      {/* Tooltip */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stap}
          initial={{ opacity: 0, scale: 0.96, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -6 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            zIndex: 9990,
            background: "#FFFFFF",
            boxShadow: "0 -4px 32px rgba(0,0,0,0.15)",
            overflowY: "auto" as const,
            ...(typeof window !== "undefined" && window.innerWidth < 640
              ? {
                  bottom: 0,
                  left: 0,
                  right: 0,
                  borderRadius: "20px 20px 0 0",
                  padding: "20px 20px 32px",
                  maxHeight: "70vh",
                  width: "100%",
                }
              : {
                  borderRadius: 16,
                  padding: "20px 22px",
                  width: tooltipBreedte,
                  maxHeight: "85vh",
                  ...(tooltipCentered
                    ? { top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
                    : { top: tooltipTop, left: tooltipLeft, transform: "none" }
                  ),
                }
            ),
          }}
        >
          {/* Illustratie */}
          {IllustratieComponent && (
            <div style={{ marginBottom: 8, maxHeight: typeof window !== "undefined" && window.innerWidth < 480 ? 120 : 160, overflow: "hidden" }}>
              <IllustratieComponent key={stap} />
            </div>
          )}

          <p style={{ fontSize: typeof window !== "undefined" && window.innerWidth < 480 ? 14 : 15, fontWeight: 700, color: "#0F172A", margin: "0 0 6px" }}>
            {huidigStap.titel}
          </p>
          <p style={{ fontSize: typeof window !== "undefined" && window.innerWidth < 480 ? 12 : 13, color: "#64748B", lineHeight: 1.6, margin: "0 0 16px" }}>
            {huidigStap.tekst}
          </p>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 14 }}>
            {STAPPEN.map((_, i) => (
              <div key={i} style={{
                width: i === stap ? 20 : 7, height: 7, borderRadius: 4,
                background: i === stap ? "#2563EB" : "#E2E8F0",
                transition: "width 0.2s, background 0.2s",
              }} />
            ))}
          </div>

          {/* Navigatie */}
          <div style={{ display: "flex", gap: 8 }}>
            {stap > 0 && (
              <button
                onClick={() => setStap(s => s - 1)}
                style={{
                  flex: 1, fontSize: 13, padding: typeof window !== "undefined" && window.innerWidth < 480 ? "8px 0" : "10px 0", borderRadius: 8,
                  border: "1px solid #E8ECF0", background: "white",
                  color: "#374151", cursor: "pointer",
                }}
              >
                Vorige
              </button>
            )}
            <button
              onClick={() => isLaatste ? voltooien() : setStap(s => s + 1)}
              style={{
                flex: 2, fontSize: 13, padding: typeof window !== "undefined" && window.innerWidth < 480 ? "8px 0" : "10px 0", borderRadius: 8,
                border: "none", background: "#2563EB",
                color: "white", cursor: "pointer", fontWeight: 500,
              }}
            >
              {isLaatste ? "Aan de slag!" : "Volgende →"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </Portal>
  );
}

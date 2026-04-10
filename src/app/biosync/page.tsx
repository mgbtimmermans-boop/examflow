"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useInstellingen } from "@/hooks/useVakData";
import { ALLE_VAKKEN } from "@/data/vakken";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import AdemhalingOefening from "@/components/AdemhalingOefening";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Vak } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

// ─── Slaap berekening ─────────────────────────────────────────────────────────

const CYCLUS = 90;
const INSLAPEN = 15;

interface BedtijdAdvies {
  cycli: number;
  bedtijd: string;
  slaapDuur: string;
  tag?: "aanbevolen" | "minimum";
  kleur: string;
}

function tijdNaarMinuten(tijd: string): number {
  const [u, m] = tijd.split(":").map(Number);
  return u * 60 + (m ?? 0);
}

function minutenNaarTijd(min: number): string {
  const tot = ((min % (24 * 60)) + 24 * 60) % (24 * 60);
  return `${String(Math.floor(tot / 60)).padStart(2, "0")}:${String(tot % 60).padStart(2, "0")}`;
}

function berekenBedtijden(wektijd: string): BedtijdAdvies[] {
  const wekMin = tijdNaarMinuten(wektijd);
  return [5, 4, 3].map(cycli => {
    const slaapMin = cycli * CYCLUS;
    const u = Math.floor(slaapMin / 60);
    const m = slaapMin % 60;
    return {
      cycli,
      bedtijd: minutenNaarTijd(wekMin - slaapMin - INSLAPEN),
      slaapDuur: m === 0 ? `${u}u` : `${u}u ${m}m`,
      tag: cycli === 5 ? "aanbevolen" : cycli === 3 ? "minimum" : undefined,
      kleur: cycli === 5 ? "#16A34A" : cycli === 3 ? "#D97706" : "#2563EB",
    };
  });
}

// ─── Hulpfuncties ─────────────────────────────────────────────────────────────

function todayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function daysUntil(examDatum: string): number {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const exam = new Date(examDatum + "T00:00:00");
  return Math.round((exam.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

function heeftExamenVolgendeDag(vak: Vak, alleVakken: Vak[]): Vak | null {
  if (!vak.examDatum) return null;
  const next = new Date(vak.examDatum + "T00:00:00");
  next.setDate(next.getDate() + 1);
  const nextStr = `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}-${String(next.getDate()).padStart(2, "0")}`;
  return alleVakken.find(v => v.examDatum === nextStr && v.id !== vak.id) ?? null;
}

function kaartStijl(daysLeft: number): { bg: string; border: string } {
  if (daysLeft <= 1) return { bg: "#FEF2F2", border: "#FECACA" };
  if (daysLeft <= 3) return { bg: "#FFFBEB", border: "#FDE68A" };
  return { bg: "#F0FDF4", border: "#BBF7D0" };
}

// ─── Energie checklist ────────────────────────────────────────────────────────

const ENERGIE_CHECKLIST: Record<"ochtend" | "middag", { items: string[] }> = {
  ochtend: {
    items: [
      "Geen nieuwe stof meer leren — het zit er al in",
      "Licht bewegen: 20 minuten wandelen of fietsen",
      "Ontbijt om 07:00–07:30: havermout, volkoren brood of eieren",
      "Geen koffie op een lege maag",
      "Spullen klaarleggen voor 08:00",
      "10 minuten rustige ademhaling voor vertrek",
    ],
  },
  middag: {
    items: [
      "Geen nieuwe stof meer leren — het zit er al in",
      "Licht bewegen in de ochtend: wandelen of fietsen",
      "Normaal ontbijt op jouw vaste tijd",
      "Lunch om 11:30 (niet vlak voor het examen — dit geeft een dip)",
      "Geen zware warme maaltijd voor het examen",
      "Spullen klaarleggen voor 12:00",
      "10 minuten rustige ademhaling voor vertrek",
    ],
  },
};

function getChecklistType(examTijd: string): "ochtend" | "middag" {
  return parseInt(examTijd.split(":")[0]) < 12 ? "ochtend" : "middag";
}

// ─── Stress tips ──────────────────────────────────────────────────────────────

const STRESS_TIPS: Record<number, { titel: string; tip: string }> = {
  1: {
    titel: "Dat klinkt pittig.",
    tip: "Focus de komende dagen alleen op de meest voorkomende onderwerpen. Kijk op AlleExamens.nl welke onderwerpen elk jaar terugkomen en begin daar.",
  },
  2: {
    titel: "Nog wat ruimte om bij te sturen.",
    tip: "Maak vandaag één oude examenopgave per domein. Zo weet je precies waar de gaten zitten en kun je gericht studeren.",
  },
  3: {
    titel: "Goed uitgangspunt.",
    tip: "Herhaal de begrippen en formules die je nog niet vlekkeloos kent. Schrijf ze op en leg ze de avond voor het examen één keer door.",
  },
  4: {
    titel: "Je staat er goed voor.",
    tip: "Doe één oefentoets op tijd om het ritme te voelen. Zorg dat je spullen klaar liggen en slaap op tijd.",
  },
  5: {
    titel: "Uitstekend.",
    tip: "Je bent klaar. Vertrouw op je voorbereiding. Doe vanavond iets ontspannends en slaap op tijd.",
  },
};

const STRESS_EMOJIS: { score: 1 | 2 | 3 | 4 | 5; emoji: string }[] = [
  { score: 1, emoji: "😰" },
  { score: 2, emoji: "😟" },
  { score: 3, emoji: "😐" },
  { score: 4, emoji: "🙂" },
  { score: 5, emoji: "😊" },
];

function stressKleur(score: number): { bg: string; border: string } {
  if (score <= 2) return { bg: "#FEF2F2", border: "#FECACA" };
  if (score === 3) return { bg: "#FFFBEB", border: "#FDE68A" };
  return { bg: "#F0FDF4", border: "#BBF7D0" };
}

// ─── Pagina ───────────────────────────────────────────────────────────────────

export default function BioSyncPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { instellingen, loading: instLoading, saveInstellingen } = useInstellingen();

  const [ademOpen, setAdemOpen] = useState(false);
  const [wektijdInput, setWektijdInput] = useState("07:30");
  const [savedIndicator, setSavedIndicator] = useState(false);
  const [openVakken, setOpenVakken] = useState<Set<string>>(new Set());
  const [checklistState, setChecklistState] = useState<Record<string, boolean[]>>({});
  const [stressScores, setStressScores] = useState<Record<string, number | null>>({});

  useEffect(() => {
    if (!loading && !user) router.replace("/");
  }, [user, loading, router]);

  useEffect(() => {
    if (instellingen?.wektijd) setWektijdInput(instellingen.wektijd);
  }, [instellingen]);

  // Stresscheck scores laden
  useEffect(() => {
    if (!user || !db) return;
    const datum = todayString();
    const vakken = ALLE_VAKKEN.filter(v => !v.isSchoolexamen && v.examDatum);
    Promise.all(
      vakken.map(vak =>
        getDoc(doc(db!, "users", user.uid, "stresscheck", `${vak.id}_${datum}`))
          .then(snap => ({ id: vak.id, score: snap.exists() ? (snap.data().score as number) : null }))
          .catch(() => ({ id: vak.id, score: null }))
      )
    ).then(results => {
      const scores: Record<string, number | null> = {};
      results.forEach(r => { scores[r.id] = r.score; });
      setStressScores(scores);
    });
  }, [user]);

  if (loading || instLoading || !user) return null;

  const gekozenIds = instellingen?.gekozenVakken ?? [];

  const aankomend = ALLE_VAKKEN
    .filter(v => !v.isSchoolexamen && v.examDatum && gekozenIds.includes(v.id))
    .filter(v => daysUntil(v.examDatum!) >= 0)
    .sort((a, b) => a.examDatum!.localeCompare(b.examDatum!));

  const eerstvolgende = aankomend[0] && daysUntil(aankomend[0].examDatum!) <= 7
    ? aankomend[0] : null;

  const adviezen = berekenBedtijden(wektijdInput);
  const aanbevolenAdvies = adviezen.find(a => a.tag === "aanbevolen")!;

  async function slaWektijdOp(wt: string) {
    if (!instellingen) return;
    await saveInstellingen({ ...instellingen, wektijd: wt });
    setSavedIndicator(true);
    setTimeout(() => setSavedIndicator(false), 2000);
  }

  function toggleVak(vakId: string) {
    setOpenVakken(prev => {
      const next = new Set(prev);
      next.has(vakId) ? next.delete(vakId) : next.add(vakId);
      return next;
    });
  }

  function toggleChecklist(vakId: string, idx: number, len: number) {
    setChecklistState(prev => {
      const cur = prev[vakId] ?? Array(len).fill(false);
      const next = [...cur];
      next[idx] = !next[idx];
      return { ...prev, [vakId]: next };
    });
  }

  async function submitStress(vakId: string, score: number) {
    if (!user || !db) return;
    const datum = todayString();
    await setDoc(doc(db, "users", user.uid, "stresscheck", `${vakId}_${datum}`), { score, datum });
    setStressScores(prev => ({ ...prev, [vakId]: score }));
  }

  return (
    <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
      <Navbar>
        <div className="flex items-center gap-3">
          <button onClick={() => setAdemOpen(true)}
            className="hidden md:flex btn-secondary text-xs items-center gap-1.5">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4m0 4h.01" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Ademhaling
          </button>
          <Link href="/dashboard" className="md:hidden btn-secondary text-xs flex items-center gap-1.5">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Dashboard
          </Link>
        </div>
      </Navbar>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="mb-8">
          <h1 className="text-2xl font-semibold mb-1" style={{ color: "#0F172A" }}>Bio-Sync</h1>
          <p className="text-sm" style={{ color: "#64748B" }}>Slaap slim, presteren goed.</p>
        </motion.div>

        {/* ── Deel 1: Wektijd ── */}
        <div className="card mb-6">
          <p className="label mb-3">Hoe laat wil je wakker worden?</p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <input
              type="time"
              value={wektijdInput}
              step="900"
              onChange={e => setWektijdInput(e.target.value)}
              onBlur={e => slaWektijdOp(e.target.value)}
              style={{
                fontSize: 24, fontWeight: 700, color: "#7C3AED",
                border: "1px solid #E9D5FF", borderRadius: 10,
                padding: "8px 14px", background: "#F8F0FF", outline: "none",
              }}
            />
            <AnimatePresence>
              {savedIndicator && (
                <motion.span
                  initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                  style={{ fontSize: 12, color: "#16A34A" }}
                >
                  Opgeslagen ✓
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <p style={{ fontSize: 12, color: "#94A3B8", marginTop: 8 }}>
            Tip: Zet je wekker ook op je telefoon én een reservewekker.
          </p>
        </div>

        {/* ── Deel 2: Eerstvolgende examen kaart ── */}
        {eerstvolgende && (() => {
          const daysLeft = daysUntil(eerstvolgende.examDatum!);
          const { bg, border } = kaartStijl(daysLeft);
          return (
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="card mb-6"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#64748B", marginBottom: 10 }}>
                Eerstvolgende examen
              </p>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#0F172A", marginBottom: 6 }}>
                Vanavond slapen voor:
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: eerstvolgende.kleur, display: "inline-block", flexShrink: 0 }} />
                <span style={{ fontSize: 15, fontWeight: 600, color: "#374151" }}>
                  {eerstvolgende.naam} · {eerstvolgende.datum ?? eerstvolgende.examDatum}{eerstvolgende.tijd ? ` · ${eerstvolgende.tijd}` : ""}
                </span>
              </div>
              <p style={{ fontSize: 13, color: "#64748B", marginBottom: 20 }}>
                {daysLeft === 0 ? "Vandaag!" : daysLeft === 1 ? "Morgen" : `Over ${daysLeft} dagen`}
              </p>

              <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 16, marginBottom: 8 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 12 }}>
                  Jouw optimale bedtijden (wakker om {wektijdInput}):
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {adviezen.map(a => (
                    <div key={a.cycli} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{
                        width: 10, height: 10, borderRadius: "50%", flexShrink: 0,
                        background: a.tag === "aanbevolen" ? a.kleur : "transparent",
                        border: `2px solid ${a.kleur}`,
                      }} />
                      <span style={{ fontSize: 22, fontWeight: 700, color: a.kleur, minWidth: 52 }}>{a.bedtijd}</span>
                      <span style={{ fontSize: 13, color: "#64748B" }}>
                        {a.cycli} cycli · {a.slaapDuur}
                      </span>
                      {a.tag === "aanbevolen" && (
                        <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 20, background: "#DCFCE7", color: "#16A34A" }}>
                          ★ Aanbevolen
                        </span>
                      )}
                      {a.tag === "minimum" && (
                        <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 20, background: "#FEF9C3", color: "#B45309" }}>
                          ⚠ Minimum
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: 11, color: "#94A3B8", marginTop: 12 }}>
                Gebaseerd op 90-min slaapcycli (Walker, 2017)
              </p>
            </motion.div>
          );
        })()}

        {/* ── Deel 3: Tijdlijn komende examens ── */}
        {aankomend.length > 0 && (
          <>
            <p className="label mb-4">Komende examens</p>
            <div className="space-y-3 mb-8">
              {aankomend.map((vak, i) => {
                const daysLeft = daysUntil(vak.examDatum!);
                const isOpen = openVakken.has(vak.id);
                const { bg, border } = kaartStijl(daysLeft);
                const volgendeExamen = heeftExamenVolgendeDag(vak, aankomend);
                const clType = vak.tijd ? getChecklistType(vak.tijd) : "middag";
                const clItems = ENERGIE_CHECKLIST[clType].items;
                const checks = checklistState[vak.id] ?? Array(clItems.length).fill(false);
                const stressScore = stressScores[vak.id] ?? null;
                const stressTip = stressScore !== null ? STRESS_TIPS[stressScore] : null;

                return (
                  <motion.div key={vak.id}
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    {/* Header rij */}
                    <button
                      onClick={() => toggleVak(vak.id)}
                      className="w-full text-left"
                      style={{
                        display: "block", padding: "14px 16px",
                        background: isOpen ? bg : "#FFFFFF",
                        border: `1px solid ${isOpen ? border : "#E8ECF0"}`,
                        borderRadius: isOpen ? "12px 12px 0 0" : 12,
                        transition: "all 0.15s", cursor: "pointer",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontSize: 10, color: "#94A3B8", flexShrink: 0, userSelect: "none" }}>
                            {isOpen ? "▾" : "●"}
                          </span>
                          <span style={{ width: 8, height: 8, borderRadius: "50%", background: vak.kleur, display: "inline-block", flexShrink: 0 }} />
                          <span style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>{vak.naam}</span>
                        </div>
                        <span style={{ fontSize: 12, color: daysLeft <= 3 ? "#D97706" : "#94A3B8" }}>
                          {vak.datum ?? vak.examDatum} · {daysLeft === 0 ? "vandaag" : daysLeft === 1 ? "morgen" : `over ${daysLeft} dagen`}
                        </span>
                      </div>
                    </button>

                    {/* Uitgeklapt */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ overflow: "hidden" }}
                        >
                          <div style={{
                            background: bg, border: `1px solid ${border}`, borderTop: "none",
                            borderRadius: "0 0 12px 12px", padding: "16px 16px 20px",
                          }}>

                            {/* Herstelwaarschuwing */}
                            {volgendeExamen && (
                              <div style={{ background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 10, padding: "10px 14px", marginBottom: 16 }}>
                                <p style={{ fontSize: 13, color: "#92400E", lineHeight: 1.55 }}>
                                  <span style={{ fontWeight: 600 }}>⚠️ Let op:</span> je hebt morgen ook een examen ({volgendeExamen.naam}).
                                  Gebruik de avond na dit examen om te ontspannen — geen intensief studeren meer, alleen een rustige herhaling van je notities.
                                </p>
                              </div>
                            )}

                            {/* Slaapadvies */}
                            <div style={{ marginBottom: 16 }}>
                              <p style={{ fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                                🌙 Slaapadvies (wakker om {wektijdInput})
                              </p>
                              <p style={{ fontSize: 13, color: "#64748B" }}>
                                Ga slapen om{" "}
                                <span style={{ fontWeight: 700, color: aanbevolenAdvies.kleur }}>
                                  {aanbevolenAdvies.bedtijd}
                                </span>{" "}
                                voor {aanbevolenAdvies.cycli} cycli ({aanbevolenAdvies.slaapDuur})
                              </p>
                            </div>

                            <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: 16, marginBottom: 16 }} />

                            {/* Energiechecklist */}
                            <div style={{ marginBottom: 16 }}>
                              <p style={{ fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8 }}>
                                ⚡ Energiechecklist · Dag van het examen
                              </p>
                              <p style={{ fontSize: 11, fontWeight: 600, color: "#64748B", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                                {clType === "ochtend" ? "Ochtend" : "Middag"} (voor {vak.tijd ?? ""} examen):
                              </p>
                              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                {clItems.map((item, idx) => (
                                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}
                                    onClick={() => toggleChecklist(vak.id, idx, clItems.length)}>
                                    <div style={{
                                      width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 1,
                                      border: checks[idx] ? "none" : "2px solid #CBD5E1",
                                      background: checks[idx] ? "#16A34A" : "#FFFFFF",
                                      display: "flex", alignItems: "center", justifyContent: "center",
                                    }}>
                                      {checks[idx] && (
                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                          <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                      )}
                                    </div>
                                    <span style={{
                                      fontSize: 13, lineHeight: 1.45,
                                      color: checks[idx] ? "#94A3B8" : "#374151",
                                      textDecoration: checks[idx] ? "line-through" : "none",
                                    }}>
                                      {item}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Stresscheck — alleen <= 3 dagen */}
                            {daysLeft <= 3 && (
                              <>
                                <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: 16, marginBottom: 16 }} />
                                <div>
                                  <p style={{ fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 4 }}>
                                    💭 Stresscheck
                                  </p>
                                  <p style={{ fontSize: 13, color: "#64748B", marginBottom: 12 }}>
                                    Hoe zeker voel je je over {vak.naam}?
                                  </p>
                                  <div style={{ display: "flex", gap: 8, marginBottom: stressScore !== null ? 12 : 0 }}>
                                    {STRESS_EMOJIS.map(({ score, emoji }) => {
                                      const isSelected = stressScore === score;
                                      const { bg: sBg, border: sBorder } = stressKleur(score);
                                      return (
                                        <button key={score} onClick={() => submitStress(vak.id, score)}
                                          style={{
                                            width: 48, height: 48, borderRadius: "50%", fontSize: 22,
                                            border: `2px solid ${isSelected ? sBorder : "transparent"}`,
                                            background: isSelected ? sBg : "#F8F9FC",
                                            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                                            transition: "border-color 0.15s, background 0.15s",
                                          }}
                                          title={`Score ${score}`}
                                        >
                                          {emoji}
                                        </button>
                                      );
                                    })}
                                  </div>
                                  {stressTip && stressScore !== null && (
                                    <motion.div
                                      initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                                      style={{
                                        borderRadius: 10, padding: "12px 14px",
                                        ...stressKleur(stressScore),
                                        border: `1px solid ${stressKleur(stressScore).border}`,
                                      }}
                                    >
                                      <p style={{ fontSize: 13, fontWeight: 600, color: "#0F172A", marginBottom: 4 }}>
                                        {stressTip.titel}
                                      </p>
                                      <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>
                                        {stressTip.tip}
                                      </p>
                                    </motion.div>
                                  )}
                                </div>
                              </>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}

        {/* ── Deel 4: Ademhaling card ── */}
        <div className="card" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: "#1E40AF", marginBottom: 4 }}>
            Voelt het gespannen?
          </p>
          <p style={{ fontSize: 13, color: "#3B82F6", marginBottom: 16, lineHeight: 1.5 }}>
            Een korte ademhalingsoefening helpt om te kalmeren voor het examen.
          </p>
          <button onClick={() => setAdemOpen(true)} className="btn-primary text-sm flex items-center gap-2">
            Start ademhalingsoefening
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {ademOpen && <AdemhalingOefening onClose={() => setAdemOpen(false)} />}
    </div>
  );
}

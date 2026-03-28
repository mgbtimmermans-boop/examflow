"use client";
import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ALLE_VAKKEN } from "@/data/vakken";
import { useVakData, useInstellingen } from "@/hooks/useVakData";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import HulpmiddelBadge from "@/components/HulpmiddelBadge";
import GradePredictor from "@/components/GradePredictor";
import ExamenSimulator from "@/components/ExamenSimulator";
import AICoach from "@/components/AICoach";
import GearUpChecklist from "@/components/GearUpChecklist";
import Logo from "@/components/Logo";
import Link from "next/link";
import { daysLabel } from "@/lib/helpers";
import { useDaysLeft } from "@/hooks/useDaysLeft";
import { Onderwijsniveau, Profiel } from "@/types";
import { useHerhaling } from "@/hooks/useHerhaling";
import { SlaapAdviesKaart, VoedingsTipKaart } from "@/components/BioSync";
import ScoreWizard from "@/components/ScoreWizard";
import { EXAMEN_VRAGEN } from "@/data/scoreWizard";
import { ExamenVraag } from "@/types/scoreWizard";

export default function VakDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { user, loading } = useAuth();
  const { instellingen } = useInstellingen();
  const vak = ALLE_VAKKEN.find(v => v.id === id);
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [savedNote, setSavedNote] = useState(false);
  const [coachOnderwerp, setCoachOnderwerp] = useState<string | null>(null);
  const [gearUpOpen, setGearUpOpen] = useState(false);
  const [activeWizardVraag, setActiveWizardVraag] = useState<ExamenVraag | null>(null);

  function getVraagVoorItem(vakId: string, syllabusItem: string): ExamenVraag | null {
    return EXAMEN_VRAGEN.find(v => v.vakId === vakId && v.syllabusItem === syllabusItem) ?? null;
  }

  useEffect(() => { if (!loading && !user) router.replace("/"); }, [user, loading, router]);

  const { data, updateChecks, updateNotes, updateConfidence, updateSeGrade } = useVakData(id);
  const { addToHerhaling } = useHerhaling(user?.uid);
  const daysLeft = useDaysLeft(vak?.examDatum);

  if (!vak) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: "#F8F9FC" }}>
      <p style={{ color: "#64748B" }}>Vak niet gevonden</p>
      <Link href="/dashboard" className="btn-primary">Terug naar dashboard</Link>
    </div>
  );
  if (loading || !user) return null;

  const checks = data?.checks ?? {};
  const toggleCheck = (idx: number) => updateChecks({ ...checks, [idx]: !checks[idx] });
  const done = Object.values(checks).filter(Boolean).length;
  const total = vak.syllabus.length;
  const niveau = (instellingen?.niveau ?? "VWO") as Onderwijsniveau;
  const confidenceScore = data?.confidenceScore ?? 5;

  const confStyle = () => {
    if (confidenceScore <= 4) return { bg: "#FEF2F2", text: "#DC2626", border: "#FECACA", label: "Prioriteit hoog" };
    if (confidenceScore <= 7) return { bg: "#FFFBEB", text: "#D97706", border: "#FDE68A", label: "Gemiddeld" };
    return { bg: "#F0FDF4", text: "#16A34A", border: "#BBF7D0", label: "Klaar voor examen" };
  };
  const cs = confStyle();

  const dl = vak.examDatum ? daysLabel(daysLeft) : null;

  const handleNotesChange = (v: string) => {
    updateNotes(v); setSavedNote(false);
    setTimeout(() => setSavedNote(true), 1100);
  };

  return (
    <>
      <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
        <nav className="sticky top-0 z-40" style={{ background: "#FFFFFF", borderBottom: "1px solid #E8ECF0" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-[60px] flex items-center justify-between">
            <Logo size="sm" />
            <Link href="/dashboard" className="btn-secondary text-xs flex items-center gap-1.5">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Dashboard
            </Link>
          </div>
        </nav>

        {daysLeft === 0 && !vak.isSchoolexamen && vak.tijd && (() => {
          const [h, m] = vak.tijd.split(":").map(Number);
          const totalMin = h * 60 + m - 120;
          const eetUur = String(Math.floor(totalMin / 60)).padStart(2, "0");
          const eetMin = String(totalMin % 60).padStart(2, "0");
          return (
            <div style={{ background: "#FFFBEB", borderBottom: "1px solid #FDE68A", padding: "12px 24px" }}>
              <p style={{ fontSize: 14, fontWeight: 500, color: "#D97706", textAlign: "center" }}>
                🎓 Examensdag! Eet je ontbijt/lunch om {eetUur}:{eetMin}.
              </p>
            </div>
          );
        })()}

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-semibold" style={{ color: "#0F172A" }}>{vak.naam}</h1>
                <span className="text-xs px-2 py-0.5 rounded-md font-medium" style={{ background: "#F1F5F9", color: "#64748B" }}>{niveau}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {vak.isSchoolexamen ? (
                  <span className="text-sm" style={{ color: "#64748B" }}>Schoolexamen</span>
                ) : (
                  <>
                    <span className="text-sm" style={{ color: "#64748B" }}>{vak.datum} · {vak.tijd}</span>
                    {dl && <span className="text-sm font-medium" style={{ color: dl.color }}>· {dl.text}</span>}
                  </>
                )}
                {vak.hulpmiddelen.map(h => <HulpmiddelBadge key={h} hulpmiddel={h} />)}
              </div>
            </div>
            {!vak.isSchoolexamen && (
              <div className="flex flex-col sm:flex-row gap-2 sm:flex-shrink-0">
                <button onClick={() => setSimulatorOpen(true)} className="btn-secondary flex items-center justify-center gap-2 text-sm" style={{ minHeight: 44 }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Start examen simulator
                </button>
                <button onClick={() => setGearUpOpen(true)} className="btn-secondary flex items-center justify-center gap-2 text-sm" style={{ minHeight: 44 }}>
                  🎒 Examentas
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left: checklist */}
            <div className="lg:col-span-3">
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <p className="label">Syllabus checklist</p>
                  <span className="text-xs" style={{ color: "#94A3B8" }}>{done} van {total} afgerond</span>
                </div>
                <ul className="space-y-1">
                  {vak.syllabus.map((item, idx) => {
                    const checked = !!checks[idx];
                    return (
                      <motion.li key={idx} animate={checked ? { backgroundColor: ["#F0FDF4","#FFFFFF"] } : {}} transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors group min-h-[44px]"
                        style={{ background: checked ? "#F8FFF8" : "transparent" }}>
                        <motion.span onClick={() => toggleCheck(idx)} animate={checked ? { scale: [1,1.2,1] } : { scale: 1 }} transition={{ duration: 0.2 }}
                          className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-colors"
                          style={checked ? { background: "#16A34A", border: "1px solid #16A34A" } : { background: "white", border: "1px solid #CBD5E1" }}>
                          {checked && <svg width="10" height="10" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        </motion.span>
                        <span onClick={() => toggleCheck(idx)} className="text-sm flex-1" style={{ color: checked ? "#94A3B8" : "#374151", textDecoration: checked ? "line-through" : "none" }}>{item}</span>
                        <div className="flex gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                          <button onClick={e => { e.stopPropagation(); setCoachOnderwerp(item); }}
                            className="text-xs px-2 py-1 rounded-lg transition-colors"
                            style={{ background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE" }}
                            title="AI Coach">
                            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </button>
                          <button onClick={e => { e.stopPropagation(); addToHerhaling({ vakId: vak.id, itemIndex: idx, onderwerp: item, vakNaam: vak.naam }); }}
                            className="text-xs px-2 py-1 rounded-lg transition-colors"
                            style={{ background: "#F0FDF4", color: "#16A34A", border: "1px solid #BBF7D0" }}
                            title="Voeg toe aan herhaling">
                            +
                          </button>
                          {(() => {
                            const wizardVraag = getVraagVoorItem(vak.id, item);
                            return (
                              <button
                                onClick={e => { e.stopPropagation(); if (wizardVraag) setActiveWizardVraag(wizardVraag); }}
                                disabled={!wizardVraag}
                                title={wizardVraag ? "Score Wizard" : "Nog geen oefenvraag beschikbaar"}
                                style={{
                                  fontSize: 12, padding: "3px 10px", borderRadius: 20,
                                  border: "1px solid #E8ECF0", background: "#FFFFFF",
                                  color: "#2563EB", cursor: wizardVraag ? "pointer" : "default",
                                  fontWeight: 500, opacity: wizardVraag ? 1 : 0.3,
                                }}
                              >
                                Oefen
                              </button>
                            );
                          })()}
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Right: sticky sidebar */}
            <div className="lg:col-span-2 space-y-4 lg:sticky lg:top-24 lg:self-start">
              {/* Confidence */}
              <div className="card">
                <p className="label mb-3">{vak.isSchoolexamen ? "Hoe goed ben je hierin?" : "Zelfvertrouwen"}</p>
                <div className="flex items-center gap-4 mb-2">
                  <input type="range" min="1" max="10" value={confidenceScore}
                    onChange={e => updateConfidence(Number(e.target.value))}
                    className="flex-1" style={{ accentColor: cs.text }} />
                  <span className="font-bold text-xl w-8 text-center font-mono" style={{ color: cs.text }}>{confidenceScore}</span>
                </div>
                <span className="text-xs font-medium px-2 py-0.5 rounded-md" style={{ background: cs.bg, color: cs.text, border: `1px solid ${cs.border}` }}>{cs.label}</span>
              </div>

              {/* Grade predictor — hide for schoolexamen */}
              {!vak.isSchoolexamen && (
                <GradePredictor seGrade={data?.seGrade ?? ""} onSeGradeChange={updateSeGrade} niveau={niveau} />
              )}

              {/* Notes */}
              <div className="card">
                <div className="flex items-center justify-between mb-3">
                  <p className="label">Notities & tips</p>
                  <AnimatePresence>
                    {savedNote && (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-xs" style={{ color: "#94A3B8" }}>Opgeslagen</motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <textarea value={data?.notes ?? ""} onChange={e => handleNotesChange(e.target.value)}
                  placeholder="Schrijf hier je samenvatting of last-minute tips..."
                  rows={5} className="w-full text-sm resize-none focus:outline-none leading-relaxed"
                  style={{ color: "#374151", background: "transparent" }} />
              </div>

              {/* Slaapadvies + Voeding — alleen de laatste 3 dagen */}
              <SlaapAdviesKaart vak={vak} daysLeft={daysLeft} />
              <VoedingsTipKaart vak={vak} daysLeft={daysLeft} />

              {/* Links */}
              <div className="card">
                <p className="label mb-3">Quick Links</p>
                <div className="space-y-2">
                  {[
                    { href: `https://www.alleexamens.nl/vwo/${vak.alleExamensSlug}`, label: "Oefen op AlleExamens.nl" },
                    { href: "https://www.examenblad.nl", label: "Officiële syllabus (Examenblad)" },
                  ].map(link => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg transition-colors"
                      style={{ border: "1px solid #E8ECF0" }}>
                      <span className="text-sm" style={{ color: "#374151" }}>{link.label}</span>
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#94A3B8" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round"/><polyline points="15 3 21 3 21 9" strokeLinecap="round"/><line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round"/></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {simulatorOpen && <ExamenSimulator vaknaam={vak.naam} datum={vak.datum ?? ""} startTijd={vak.tijd} examDuur={vak.examDuur} onClose={() => setSimulatorOpen(false)} />}

      <AnimatePresence>
        {coachOnderwerp && (
          <AICoach
            vak={vak}
            onderwerp={coachOnderwerp}
            niveau={niveau}
            profiel={(instellingen?.profiel ?? "CM") as Profiel}
            voortgang={{ vakNaam: vak.naam, pctAfgevinkt: total > 0 ? Math.round((done / total) * 100) : 0, confidenceScore }}
            onClose={() => setCoachOnderwerp(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {gearUpOpen && (
          <GearUpChecklist vak={vak} niveau={niveau} onClose={() => setGearUpOpen(false)} />
        )}
      </AnimatePresence>

      {activeWizardVraag && user && (
        <ScoreWizard
          vraag={activeWizardVraag}
          uid={user.uid}
          onClose={() => setActiveWizardVraag(null)}
        />
      )}
    </>
  );
}

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ALLE_VAKKEN } from "@/data/vakken";
import { Onderwijsniveau, Profiel, GebruikerInstellingen, Vak } from "@/types";
import { profielLabel } from "@/lib/helpers";
import { Portal } from "@/components/Portal";

interface Props {
  onComplete: (inst: GebruikerInstellingen) => Promise<void>;
  isAanpassen?: boolean;
  onClose?: () => void;
}

const NIVEAU_INFO = {
  VWO: { sub: "Voorbereidend Wetenschappelijk Onderwijs · 6 jaar" },
  HAVO: { sub: "Hoger Algemeen Voortgezet Onderwijs · 5 jaar" },
  MAVO: { sub: "Middelbaar Algemeen Voortgezet Onderwijs (VMBO-TL) · 4 jaar" },
};

const PROFIEL_INFO: Record<string, { naam: string; desc: string }> = {
  CM: { naam: "C&M — Cultuur & Maatschappij", desc: "Talen, geschiedenis, filosofie en maatschappij" },
  EM: { naam: "E&M — Economie & Maatschappij", desc: "Economie, bedrijfskunde en maatschappijvakken" },
  NG: { naam: "N&G — Natuur & Gezondheid", desc: "Biologie, scheikunde en gezondheidswetenschappen" },
  NT: { naam: "N&T — Natuur & Techniek", desc: "Wiskunde, natuurkunde, scheikunde en informatica" },
  CM_HAVO: { naam: "C&M — Cultuur & Maatschappij", desc: "Talen, geschiedenis en maatschappijvakken" },
  EM_HAVO: { naam: "E&M — Economie & Maatschappij", desc: "Economie, bedrijfskunde en maatschappijvakken" },
  NG_HAVO: { naam: "N&G — Natuur & Gezondheid", desc: "Biologie, scheikunde en gezondheidswetenschappen" },
  NT_HAVO: { naam: "N&T — Natuur & Techniek", desc: "Wiskunde, natuurkunde en informatica" },
};

function getProfielenVoorNiveau(niveau: Onderwijsniveau): Profiel[] {
  if (niveau === "VWO") return ["CM","EM","NG","NT"];
  if (niveau === "HAVO") return ["CM_HAVO","EM_HAVO","NG_HAVO","NT_HAVO"];
  return [];
}

function getVakkenVoorSelectie(niveau: Onderwijsniveau, profiel: Profiel): { verplicht: Vak[]; profiel: Vak[]; extra: Vak[]; school: Vak[] } {
  const alle = ALLE_VAKKEN.filter(v => v.niveaus.includes(niveau));
  const verplicht = alle.filter(v => v.verplicht && !v.isSchoolexamen);
  const school = alle.filter(v => v.isSchoolexamen);
  const profielVakken = alle.filter(v => !v.verplicht && !v.isSchoolexamen && v.profielen.includes(profiel));
  const extraVakken = alle.filter(v => !v.verplicht && !v.isSchoolexamen && !v.profielen.includes(profiel) && v.niveaus.includes(niveau));
  return { verplicht, profiel: profielVakken, extra: extraVakken, school };
}

// Suppress unused import warning
void profielLabel;

export default function OnboardingModal({ onComplete, isAanpassen, onClose }: Props) {
  const [step, setStep] = useState(1);
  const [niveau, setNiveau] = useState<Onderwijsniveau | null>(null);
  const [profiel, setProfiel] = useState<Profiel | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [saving, setSaving] = useState(false);

  const handleNiveauNext = (n: Onderwijsniveau) => {
    setNiveau(n);
    if (n === "MAVO") {
      const mavo = "MAVO" as Profiel;
      setProfiel(mavo);
      const vakken = getVakkenVoorSelectie(n, mavo);
      const defaultSelected = new Set([
        ...vakken.verplicht.map(v => v.id),
        ...vakken.profiel.map(v => v.id),
        ...vakken.school.map(v => v.id),
      ]);
      setSelected(defaultSelected);
      setStep(3);
    } else {
      setStep(2);
    }
  };

  const handleProfielNext = (p: Profiel) => {
    setProfiel(p);
    const n = niveau!;
    const vakken = getVakkenVoorSelectie(n, p);
    const defaultSelected = new Set([
      ...vakken.verplicht.map(v => v.id),
      ...vakken.profiel.map(v => v.id),
      ...vakken.school.map(v => v.id),
    ]);
    setSelected(defaultSelected);
    setStep(3);
  };

  const toggleVak = (id: string, isVerplicht: boolean) => {
    if (isVerplicht) return;
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const handleFinish = async () => {
    if (!niveau || !profiel) return;
    setSaving(true);
    await onComplete({
      niveau,
      profiel,
      gekozenVakken: Array.from(selected),
      hasCompletedOnboarding: true,
    });
  };

  const vakken = niveau && profiel ? getVakkenVoorSelectie(niveau, profiel) : null;

  return (
    <Portal>
      {/* Container — bottom sheet on mobile, centered on desktop */}
      <div
        className="fixed inset-0 flex items-end sm:items-center sm:justify-center sm:px-4"
        style={{ background: "rgba(15,23,42,0.5)", zIndex: 9999 }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full sm:max-w-lg overflow-y-auto rounded-t-2xl sm:rounded-2xl"
          style={{ background: "#FFFFFF", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", maxHeight: "95vh" }}
        >
          {/* Header */}
          <div className="px-6 pt-6 pb-4 border-b" style={{ borderColor: "#E8ECF0", position: "relative" }}>
            {isAanpassen && onClose && (
              <button
                onClick={onClose}
                style={{
                  position: "absolute",
                  top: 16, right: 16,
                  width: 44, height: 44,
                  borderRadius: "50%",
                  border: "1px solid #E8ECF0",
                  background: "#FFFFFF",
                  color: "#64748B",
                  fontSize: 18,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                }}
                aria-label="Sluiten"
              >
                ×
              </button>
            )}
            <div className="flex items-center gap-2 mb-1">
              {[1,2,3].map(i => (
                <div key={i} className="h-1.5 flex-1 rounded-full transition-colors"
                  style={{ background: i <= step ? "#2563EB" : "#E8ECF0" }} />
              ))}
            </div>
            <p className="text-xs mt-2" style={{ color: "#94A3B8" }}>Stap {step} van {niveau === "MAVO" ? 2 : 3}</p>
          </div>

          <div className="p-6">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold mb-1" style={{ color: "#0F172A" }}>Welkom bij ExamFlow!</h2>
                <p className="text-sm mb-6" style={{ color: "#64748B" }}>Kies je onderwijsniveau om te beginnen.</p>
                <div className="space-y-3">
                  {(["VWO","HAVO","MAVO"] as Onderwijsniveau[]).map(n => (
                    <button key={n} onClick={() => handleNiveauNext(n)}
                      className="w-full text-left p-4 rounded-xl border-2 transition-all"
                      style={{ borderColor: "#E8ECF0", background: "#FAFAFA", minHeight: 64 }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2563EB"; (e.currentTarget as HTMLElement).style.background = "#EFF6FF"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8ECF0"; (e.currentTarget as HTMLElement).style.background = "#FAFAFA"; }}
                    >
                      <p className="font-semibold" style={{ color: "#0F172A" }}>{n}{n === "MAVO" ? " (VMBO-TL)" : ""}</p>
                      <p className="text-sm" style={{ color: "#64748B" }}>{NIVEAU_INFO[n].sub}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && niveau && (
              <div>
                <button onClick={() => setStep(1)} className="flex items-center gap-1 text-sm mb-4" style={{ color: "#64748B", minHeight: 44 }}>
                  ← Terug
                </button>
                <h2 className="text-xl font-semibold mb-1" style={{ color: "#0F172A" }}>Kies je profiel</h2>
                <p className="text-sm mb-6" style={{ color: "#64748B" }}>{niveau} · Welk profiel volg je?</p>
                <div className="space-y-3">
                  {getProfielenVoorNiveau(niveau).map(p => {
                    const info = PROFIEL_INFO[p];
                    return (
                      <button key={p} onClick={() => handleProfielNext(p)}
                        className="w-full text-left p-4 rounded-xl border-2 transition-all"
                        style={{ borderColor: "#E8ECF0", background: "#FAFAFA", minHeight: 64 }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2563EB"; (e.currentTarget as HTMLElement).style.background = "#EFF6FF"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8ECF0"; (e.currentTarget as HTMLElement).style.background = "#FAFAFA"; }}
                      >
                        <p className="font-semibold" style={{ color: "#0F172A" }}>{info?.naam}</p>
                        <p className="text-sm" style={{ color: "#64748B" }}>{info?.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 3 && vakken && (
              <div>
                <button onClick={() => setStep(niveau === "MAVO" ? 1 : 2)} className="flex items-center gap-1 text-sm mb-4" style={{ color: "#64748B", minHeight: 44 }}>
                  ← Terug
                </button>
                <h2 className="text-xl font-semibold mb-1" style={{ color: "#0F172A" }}>Bevestig je vakken</h2>
                <p className="text-sm mb-5" style={{ color: "#64748B" }}>Vink extra vakken aan of verwijder profielvakken.</p>

                {[
                  { label: "Verplichte vakken", items: vakken.verplicht, force: true },
                  { label: "Profielvakken", items: vakken.profiel, force: false },
                  { label: "Extra keuzevakken", items: vakken.extra, force: false },
                  { label: "Schoolexamenvakken", items: vakken.school, force: true },
                ].filter(g => g.items.length > 0).map(group => (
                  <div key={group.label} className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#94A3B8" }}>{group.label}</p>
                    <div className="space-y-1.5">
                      {group.items.map(vak => {
                        const isSelected = selected.has(vak.id);
                        return (
                          <div key={vak.id}
                            onClick={() => toggleVak(vak.id, !!vak.verplicht)}
                            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors"
                            style={{ background: isSelected ? "#F0FDF4" : "#F8F9FC", opacity: vak.verplicht ? 0.7 : 1, minHeight: 44 }}
                          >
                            <span className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0"
                              style={{ background: isSelected ? "#16A34A" : "#E2E8F0", border: isSelected ? "none" : "1px solid #CBD5E1" }}>
                              {isSelected && <svg width="10" height="10" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                            </span>
                            <div className="flex-1 min-w-0">
                              <span className="text-sm font-medium" style={{ color: "#0F172A" }}>{vak.naam}</span>
                              {vak.examDatum && <span className="text-xs ml-2" style={{ color: "#94A3B8" }}>{vak.datum}</span>}
                            </div>
                            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: vak.kleur }} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Sticky finish button */}
                <div className="sticky bottom-0 -mx-6 px-6 pt-4 pb-4" style={{ background: "#FFFFFF", borderTop: "1px solid #E8ECF0", marginTop: 16 }}>
                  <button onClick={handleFinish} disabled={saving}
                    className="w-full py-3 rounded-xl font-semibold text-sm transition-colors disabled:opacity-60"
                    style={{ background: "#2563EB", color: "white", minHeight: 48 }}>
                    {saving ? "Opslaan..." : "Mijn dashboard instellen →"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </Portal>
  );
}

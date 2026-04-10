"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ALLE_VAKKEN } from "@/data/vakken";
import { Onderwijsniveau, Profiel } from "@/types";
import { Portal } from "@/components/Portal";

interface Props {
  niveau: Onderwijsniveau;
  profiel: Profiel;
  huidigGekozen: string[];
  seCijfers?: Record<string, number>;
  onSave: (nieuweVakken: string[], heeftNieuweZonderSe: boolean) => Promise<void>;
  onClose: () => void;
}

function getVakkenVoorSelectie(niveau: Onderwijsniveau, profiel: Profiel) {
  const alle = ALLE_VAKKEN.filter(v => v.niveaus.includes(niveau));
  const verplicht = alle.filter(v => v.verplicht && !v.isSchoolexamen);
  const school = alle.filter(v => v.isSchoolexamen);
  const profielVakken = alle.filter(v => !v.verplicht && !v.isSchoolexamen && v.profielen.includes(profiel));
  const extraVakken = alle.filter(v => !v.verplicht && !v.isSchoolexamen && !v.profielen.includes(profiel) && v.niveaus.includes(niveau));
  return { verplicht, profiel: profielVakken, extra: extraVakken, school };
}

export default function VakkenModal({ niveau, profiel, huidigGekozen, seCijfers, onSave, onClose }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set(huidigGekozen));
  const [saving, setSaving] = useState(false);

  const vakken = getVakkenVoorSelectie(niveau, profiel);

  const toggleVak = (id: string, isVerplicht: boolean) => {
    if (isVerplicht) return;
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    const nieuweIds = Array.from(selected);
    const hadSeCijfers = new Set(Object.keys(seCijfers ?? {}));
    const heeftNieuweZonderSe = nieuweIds.some(
      id => !hadSeCijfers.has(id) && !ALLE_VAKKEN.find(v => v.id === id)?.isSchoolexamen
    );
    await onSave(nieuweIds, heeftNieuweZonderSe);
  };

  return (
    <Portal>
      <div
        className="fixed inset-0 flex items-end sm:items-center sm:justify-center sm:px-4"
        style={{ background: "rgba(15,23,42,0.5)", zIndex: 9999 }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full sm:max-w-lg overflow-y-auto rounded-t-2xl sm:rounded-2xl"
          style={{ background: "#FFFFFF", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", maxHeight: "90vh" }}
        >
          {/* Header */}
          <div className="px-6 pt-6 pb-4 border-b" style={{ borderColor: "#E8ECF0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h2 style={{ fontSize: 17, fontWeight: 600, color: "#0F172A", margin: 0 }}>Vakken aanpassen</h2>
              <button
                onClick={onClose}
                aria-label="Sluiten"
                style={{
                  width: 32, height: 32, borderRadius: "50%",
                  border: "1px solid #E8ECF0", background: "#FFFFFF",
                  color: "#94A3B8", fontSize: 18, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                ×
              </button>
            </div>
            <p style={{ fontSize: 13, color: "#64748B", margin: "8px 0 0" }}>
              Vink extra vakken aan of verwijder profielvakken.
            </p>
          </div>

          <div className="p-6">
            {[
              { label: "Verplichte vakken", items: vakken.verplicht, force: true },
              { label: "Profielvakken", items: vakken.profiel, force: false },
              { label: "Extra keuzevakken", items: vakken.extra, force: false },
              { label: "Schoolexamenvakken", items: vakken.school, force: true },
            ].filter(g => g.items.length > 0).map(group => (
              <div key={group.label} className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#94A3B8" }}>
                  {group.label}
                </p>
                <div className="space-y-1.5">
                  {group.items.map(vak => {
                    const isSelected = selected.has(vak.id);
                    return (
                      <div
                        key={vak.id}
                        onClick={() => toggleVak(vak.id, !!vak.verplicht)}
                        className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors"
                        style={{ background: isSelected ? "#F0FDF4" : "#F8F9FC", opacity: vak.verplicht ? 0.7 : 1, minHeight: 44 }}
                      >
                        <span
                          className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0"
                          style={{ background: isSelected ? "#16A34A" : "#E2E8F0", border: isSelected ? "none" : "1px solid #CBD5E1" }}
                        >
                          {isSelected && (
                            <svg width="10" height="10" fill="none" viewBox="0 0 12 12">
                              <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
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
          </div>

          <div className="sticky bottom-0 px-6 pt-4 pb-6" style={{ background: "#FFFFFF", borderTop: "1px solid #E8ECF0" }}>
            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full rounded-xl font-semibold text-sm"
              style={{
                padding: "14px 0", background: "#2563EB", color: "white",
                border: "none", cursor: saving ? "default" : "pointer",
                opacity: saving ? 0.6 : 1, minHeight: 48,
              }}
            >
              {saving ? "Opslaan..." : "Vakken opslaan"}
            </button>
          </div>
        </motion.div>
      </div>
    </Portal>
  );
}

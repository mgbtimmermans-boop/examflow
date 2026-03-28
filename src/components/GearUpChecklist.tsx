"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Vak, Onderwijsniveau } from "@/types";
import { Portal } from "@/components/Portal";

interface ChecklistItem {
  id: string;
  label: string;
  kategorie: "hulpmiddel" | "logistiek" | "persoonlijk";
  verplicht: boolean;
}

function buildChecklist(vak: Vak, niveau: Onderwijsniveau): ChecklistItem[] {
  const items: ChecklistItem[] = [
    { id: "id", label: "Geldig legitimatiebewijs (paspoort/ID)", kategorie: "logistiek", verplicht: true },
    { id: "horloge", label: "Analoog horloge", kategorie: "logistiek", verplicht: true },
    { id: "pennen", label: "Meerdere blauwe/zwarte pennen", kategorie: "logistiek", verplicht: true },
    { id: "water", label: "Water (doorzichtige fles)", kategorie: "persoonlijk", verplicht: false },
    { id: "eten", label: "Lichte snack voor daarna", kategorie: "persoonlijk", verplicht: false },
  ];
  if (vak.hulpmiddelen.includes("GR")) {
    const grLabel = niveau === "MAVO"
      ? "Rekenmachine (standaard, geen GR)"
      : "Grafische rekenmachine (opgeladen + resetklaar)";
    items.push({ id: "gr", label: grLabel, kategorie: "hulpmiddel", verplicht: true });
  }
  if (vak.hulpmiddelen.includes("WBK-NL"))
    items.push({ id: "wbk-nl", label: "Nederlands woordenboek", kategorie: "hulpmiddel", verplicht: true });
  if (vak.hulpmiddelen.includes("WBK-EN-NL"))
    items.push({ id: "wbk-en", label: "Engels-Nederlands woordenboek (EN→NL én NL→EN)", kategorie: "hulpmiddel", verplicht: true });
  if (vak.hulpmiddelen.includes("WBK-DU-NL"))
    items.push({ id: "wbk-du", label: "Duits-Nederlands woordenboek (DU→NL én NL→DU)", kategorie: "hulpmiddel", verplicht: true });
  if (vak.hulpmiddelen.includes("WBK-FR-NL"))
    items.push({ id: "wbk-fr", label: "Frans-Nederlands woordenboek (FR→NL én NL→FR)", kategorie: "hulpmiddel", verplicht: true });
  if (vak.hulpmiddelen.includes("Binas"))
    items.push({ id: "binas", label: "Binas (goedgekeurd exemplaar)", kategorie: "hulpmiddel", verplicht: true });
  if (vak.hulpmiddelen.includes("Atlas"))
    items.push({ id: "atlas", label: "Bosatlas of goedgekeurde atlas", kategorie: "hulpmiddel", verplicht: true });
  return items;
}

const KATEGORIEN: { key: ChecklistItem["kategorie"]; label: string }[] = [
  { key: "hulpmiddel", label: "Hulpmiddelen" },
  { key: "logistiek", label: "Logistiek" },
  { key: "persoonlijk", label: "Persoonlijk" },
];

interface Props {
  vak: Vak;
  niveau: Onderwijsniveau;
  onClose: () => void;
}

export default function GearUpChecklist({ vak, niveau, onClose }: Props) {
  const items = buildChecklist(vak, niveau);
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <Portal>
      <AnimatePresence>
        {/* Backdrop + container — bottom sheet on mobile, centered on desktop */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-end sm:items-center sm:justify-center sm:p-4"
          style={{ background: "rgba(15,23,42,0.4)", zIndex: 9999 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:max-w-md overflow-y-auto rounded-t-[20px] sm:rounded-2xl"
            style={{ background: "#FFFFFF", border: "1px solid #E8ECF0", boxShadow: "0 20px 60px rgba(0,0,0,0.12)", maxHeight: "80vh" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-5" style={{ borderBottom: "1px solid #E8ECF0" }}>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">🎒</span>
                  <p className="font-semibold" style={{ color: "#0F172A" }}>Examentas checklist</p>
                </div>
                <p className="text-sm" style={{ color: "#64748B" }}>
                  {vak.naam} · {vak.datum}{vak.tijd ? ` · ${vak.tijd}` : ""}
                </p>
              </div>
              <button onClick={onClose}
                className="rounded-lg hover:bg-gray-100 transition-colors"
                style={{ padding: 8, minWidth: 44, minHeight: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#64748B" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/></svg>
              </button>
            </div>

            {/* Checklist */}
            <div className="p-5 space-y-5">
              {KATEGORIEN.map(kat => {
                const katItems = items.filter(i => i.kategorie === kat.key);
                if (katItems.length === 0) return null;
                return (
                  <div key={kat.key}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#94A3B8" }}>{kat.label}</p>
                    <div className="space-y-1">
                      {katItems.map(item => (
                        <label key={item.id} className="flex items-center gap-3 cursor-pointer group py-2" style={{ minHeight: 44 }}>
                          <span onClick={() => toggle(item.id)}
                            className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-colors"
                            style={checked.has(item.id)
                              ? { background: "#2563EB", border: "1px solid #2563EB" }
                              : { background: "white", border: "1px solid #CBD5E1" }}>
                            {checked.has(item.id) && (
                              <svg width="10" height="10" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            )}
                          </span>
                          <span className="text-sm" style={{ color: checked.has(item.id) ? "#94A3B8" : "#374151", textDecoration: checked.has(item.id) ? "line-through" : "none" }}>
                            {item.label}
                            {item.verplicht && <span className="ml-1 text-xs" style={{ color: "#DC2626" }}>*</span>}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-5" style={{ borderTop: "1px solid #E8ECF0" }}>
              <button onClick={onClose} className="btn-primary w-full" style={{ minHeight: 44 }}>
                Alles ingepakt, succes! ✓
              </button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Portal>
  );
}

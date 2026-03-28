"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HerhalingItem, useHerhaling } from "@/hooks/useHerhaling";

interface Props {
  uid: string;
}

const niveauStyle = {
  moeilijk: { bg: "#FEF2F2", color: "#DC2626", border: "#FECACA" },
  oké:      { bg: "#FFFBEB", color: "#D97706", border: "#FDE68A" },
  makkelijk:{ bg: "#F0FDF4", color: "#16A34A", border: "#BBF7D0" },
};

export default function DailyReview({ uid }: Props) {
  const { items, loading, saveHerhaling } = useHerhaling(uid);
  const [done, setDone] = useState<string[]>([]);
  const [allDone, setAllDone] = useState(false);

  if (loading || (items.length === 0 && !allDone)) return null;

  const visible = items.filter(i => !done.includes(`${i.vakId}_${i.itemIndex}`));

  const handleScore = async (item: HerhalingItem, niveau: "makkelijk" | "oké" | "moeilijk") => {
    const key = `${item.vakId}_${item.itemIndex}`;
    setDone(prev => [...prev, key]);
    await saveHerhaling(item, niveau, item.intervalDagen);
    if (visible.length === 1) setAllDone(true);
  };

  return (
    <div className="card mb-6" style={{ border: "1px solid #E8ECF0" }}>
      <div className="flex items-center justify-between mb-4">
        <p className="label">Herhalen vandaag</p>
        {!allDone && (
          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE" }}>
            {visible.length} {visible.length === 1 ? "item" : "items"}
          </span>
        )}
      </div>

      <AnimatePresence mode="popLayout">
        {allDone ? (
          <motion.p key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-center py-2" style={{ color: "#16A34A" }}>
            Alles gedaan voor vandaag! 🎉
          </motion.p>
        ) : (
          visible.map(item => (
            <motion.div key={`${item.vakId}_${item.itemIndex}`}
              initial={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
              className="overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3" style={{ borderTop: "1px solid #F1F5F9" }}>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#0F172A" }}>{item.onderwerp}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>{item.vakNaam}</p>
                </div>
                <div className="flex flex-wrap gap-2 flex-shrink-0">
                  {(["moeilijk", "oké", "makkelijk"] as const).map(n => (
                    <button key={n} onClick={() => handleScore(item, n)}
                      className="text-xs rounded-lg font-medium transition-colors capitalize"
                      style={{ background: niveauStyle[n].bg, color: niveauStyle[n].color, border: `1px solid ${niveauStyle[n].border}`, padding: "4px 8px", minHeight: 32 }}>
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
}

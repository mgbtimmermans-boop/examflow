"use client";
import { motion } from "framer-motion";
import { Vak } from "@/types";
import { StudieSessie } from "@/types/agenda";
import { SYLLABI } from "@/data/syllabi/index";

interface VakViewProps {
  vakken: Vak[];
  sessies: StudieSessie[];
  onNieuweSessie: (vakId?: string) => void;
  onPlanIn: (vakId: string, syllabusItem: string) => void;
}

function daysLeft(examDatum?: string): number {
  if (!examDatum) return 999;
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const exam = new Date(examDatum);
  return Math.max(0, Math.ceil((exam.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
}

const MAAND_KORT = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];

function formatDatumNL(iso: string): string {
  const d = new Date(iso);
  return `${d.getDate()} ${MAAND_KORT[d.getMonth()]}`;
}

export default function VakView({ vakken, sessies, onNieuweSessie, onPlanIn }: VakViewProps) {
  const ceVakken = vakken.filter(v => !v.isSchoolexamen && v.examDatum);

  if (ceVakken.length === 0) {
    return (
      <div className="card text-center py-12">
        <p style={{ color: "#64748B" }}>Geen vakken met examendatum gevonden.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {ceVakken.map((vak, i) => {
        const vakSessies = sessies.filter(s => s.vakId === vak.id);
        const totalMinuten = vakSessies.reduce((sum, s) => sum + s.duurMinuten, 0);
        const ingeplandItems = vakSessies
          .filter(s => s.syllabusItem)
          .map(s => s.syllabusItem as string);
        const uniqIngepland = [...new Set(ingeplandItems)];
        const vakSyllabus = SYLLABI[vak.id];
        const alleItems = vakSyllabus
          ? vakSyllabus.domeinen.flatMap(d => d.subdomeinen).flatMap(s => s.leerdoelen).map(l => l.omschrijving)
          : vak.syllabus;
        const nogNietIngepland = alleItems.filter(item => !uniqIngepland.includes(item));

        const days = daysLeft(vak.examDatum);

        let borderStyle = "1px solid #E8ECF0";
        let waarschuwing: string | null = null;
        if (days <= 7 && nogNietIngepland.length > 0) {
          borderStyle = "1px solid #FECACA";
          waarschuwing = `Urgent: examen over ${days} dag${days === 1 ? "" : "en"}`;
        } else if (days <= 14 && nogNietIngepland.length > alleItems.length / 2) {
          borderStyle = "1px solid #FDE68A";
          waarschuwing = "Let op: nog veel stof niet ingepland";
        }

        return (
          <motion.div
            key={vak.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
            style={{
              background: "#FFFFFF",
              border: borderStyle,
              borderRadius: 12,
              padding: "20px 24px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: vak.kleur }} />
                <span className="font-semibold" style={{ color: "#0F172A" }}>{vak.naam}</span>
              </div>
              {vak.examDatum && (
                <span className="text-sm flex-shrink-0" style={{ color: "#64748B" }}>
                  {vak.datum ?? formatDatumNL(vak.examDatum)}{vak.tijd ? ` · ${vak.tijd}` : ""}
                </span>
              )}
            </div>

            {waarschuwing && (
              <div className="mb-3 px-3 py-2 rounded-lg" style={{
                background: days <= 7 ? "#FEF2F2" : "#FFFBEB",
                border: days <= 7 ? "1px solid #FECACA" : "1px solid #FDE68A",
              }}>
                <p className="text-xs font-medium" style={{ color: days <= 7 ? "#DC2626" : "#D97706" }}>
                  {waarschuwing}
                </p>
              </div>
            )}

            <p className="text-sm mb-4" style={{ color: "#64748B" }}>
              {vakSessies.length} sessie{vakSessies.length !== 1 ? "s" : ""} ingepland · {totalMinuten} min totaal
            </p>

            {/* Ingepland */}
            {vakSessies.length > 0 && (
              <div className="mb-4">
                <p className="label mb-2">Ingepland:</p>
                <div className="space-y-1.5">
                  {vakSessies
                    .sort((a, b) => a.datum.localeCompare(b.datum))
                    .map(s => {
                      const onderwerp = s.syllabusItem ?? s.eigenTitel ?? "Eigen onderwerp";
                      return (
                        <div key={s.id} className="flex items-center gap-2">
                          <span style={{ color: s.voltooid ? "#16A34A" : "#94A3B8", fontSize: 14 }}>
                            {s.voltooid ? "✓" : "○"}
                          </span>
                          <span className="text-sm flex-1" style={{
                            color: s.voltooid ? "#94A3B8" : "#374151",
                            textDecoration: s.voltooid ? "line-through" : "none",
                          }}>
                            {onderwerp}
                          </span>
                          <span className="text-xs" style={{ color: "#94A3B8" }}>
                            {formatDatumNL(s.datum)} · {s.duurMinuten} min
                          </span>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Nog niet ingepland */}
            {nogNietIngepland.length > 0 && (
              <div className="mb-4">
                <p className="label mb-2">Nog niet ingepland ({nogNietIngepland.length}):</p>
                <div className="space-y-1.5">
                  {nogNietIngepland.map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <span style={{ color: "#E8ECF0" }}>·</span>
                      <span className="text-sm flex-1" style={{ color: "#64748B" }}>{item}</span>
                      <button
                        onClick={() => onPlanIn(vak.id, item)}
                        className="text-xs px-2 py-1 rounded-lg flex-shrink-0"
                        style={{
                          background: "#EFF6FF", color: "#2563EB",
                          border: "1px solid #BFDBFE", cursor: "pointer",
                        }}
                      >
                        + Plan in
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid #E8ECF0" }}>
              <span className="text-sm" style={{ color: "#64748B" }}>
                Dagen resterend: <span className="font-semibold" style={{ color: "#374151" }}>{days}</span>
              </span>
              <button
                onClick={() => onNieuweSessie(vak.id)}
                className="btn-secondary text-xs flex items-center gap-1"
              >
                + Sessie toevoegen
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

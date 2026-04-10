"use client";
import { motion } from "framer-motion";
import { Vak } from "@/types";
import { StudieSessie } from "@/types/agenda";
import { telLeerdoelen } from "@/lib/helpers";

interface CountdownViewProps {
  vakken: Vak[];
  sessies: StudieSessie[];
  onNieuweSessie: (vakId?: string) => void;
}

function daysLeft(examDatum?: string): number {
  if (!examDatum) return 999;
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const exam = new Date(examDatum);
  return Math.max(0, Math.ceil((exam.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
}

function berekenAanbeveling(daysLeft: number, totaalItems: number, ingeplandItems: number): string | null {
  const openItems = totaalItems - ingeplandItems;
  if (openItems === 0) return null;

  const wekenOver = Math.ceil(daysLeft / 7);
  const sessiesPerWeek = wekenOver > 0 ? Math.ceil(openItems / wekenOver) : openItems;

  if (daysLeft <= 3) return `Nog ${openItems} item${openItems > 1 ? "s" : ""} — plan ze vandaag nog in.`;
  if (sessiesPerWeek <= 1) return `Plan 1 sessie per week in voor de resterende stof.`;
  return `Plan ${sessiesPerWeek} sessies per week in voor de ${openItems} resterende onderwerpen.`;
}

const MAAND_KORT = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];

function formatDatumNL(iso: string): string {
  const d = new Date(iso);
  return `${d.getDate()} ${MAAND_KORT[d.getMonth()]}`;
}

export default function CountdownView({ vakken, sessies, onNieuweSessie }: CountdownViewProps) {
  const ceVakken = vakken
    .filter(v => !v.isSchoolexamen && v.examDatum)
    .sort((a, b) => (a.examDatum ?? "9999").localeCompare(b.examDatum ?? "9999"));

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
        const ingeplandItems = [...new Set(
          vakSessies.filter(s => s.syllabusItem).map(s => s.syllabusItem as string)
        )];
        const totaalItems = telLeerdoelen(vak);
        const days = daysLeft(vak.examDatum);
        const progress = totaalItems > 0 ? (ingeplandItems.length / totaalItems) : 0;
        const aanbeveling = berekenAanbeveling(days, totaalItems, ingeplandItems.length);

        let urgencyColor = vak.kleur;
        if (days <= 7) urgencyColor = "#DC2626";
        else if (days <= 14) urgencyColor = "#D97706";

        return (
          <motion.div
            key={vak.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: i * 0.06 }}
            className="card"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-1">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: vak.kleur }} />
                <span className="font-semibold" style={{ color: "#0F172A" }}>{vak.naam}</span>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm" style={{ color: "#64748B" }}>
                  {vak.examDatum ? formatDatumNL(vak.examDatum) : ""}
                </p>
                <p className="text-xs font-semibold" style={{ color: urgencyColor }}>
                  {days === 0 ? "Vandaag!" : days === 1 ? "morgen" : `over ${days} dagen`}
                </p>
              </div>
            </div>

            <div style={{ borderBottom: "1px solid #E8ECF0", marginBottom: 12, marginTop: 12 }} />

            {/* Stats */}
            <p className="text-sm mb-3" style={{ color: "#64748B" }}>
              Ingepland: {vakSessies.length} sessie{vakSessies.length !== 1 ? "s" : ""} · {totalMinuten} min
            </p>

            {/* Progress bar */}
            <div className="mb-1.5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs" style={{ color: "#64748B" }}>
                  {ingeplandItems.length} van {totaalItems} items ingepland
                </span>
                <span className="text-xs font-medium" style={{ color: urgencyColor }}>
                  {Math.round(progress * 100)}%
                </span>
              </div>
              <div className="w-full rounded-full overflow-hidden" style={{ height: 8, background: "#E8ECF0" }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${Math.round(progress * 100)}%`,
                    background: progress === 1 ? "#16A34A" : urgencyColor,
                    minWidth: progress > 0 ? 6 : 0,
                  }}
                />
              </div>
            </div>

            {/* Aanbeveling */}
            {aanbeveling && (
              <div className="mt-3 px-3 py-2 rounded-lg" style={{ background: "#F8F9FC", border: "1px solid #E8ECF0" }}>
                <p className="text-xs" style={{ color: "#64748B" }}>
                  💡 {aanbeveling}
                </p>
              </div>
            )}

            {ingeplandItems.length === totaalItems && totaalItems > 0 && (
              <div className="mt-3 px-3 py-2 rounded-lg" style={{ background: "#F0FDF4", border: "1px solid #BBF7D0" }}>
                <p className="text-xs font-medium" style={{ color: "#16A34A" }}>
                  ✓ Alle stof ingepland voor dit vak!
                </p>
              </div>
            )}

            <button
              onClick={() => onNieuweSessie(vak.id)}
              className="btn-secondary text-xs mt-3 w-full"
            >
              + Sessie toevoegen
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}

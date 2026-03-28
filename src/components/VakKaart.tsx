"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Vak, VakData } from "@/types";
import HulpmiddelBadge from "./HulpmiddelBadge";
import { daysLabel } from "@/lib/helpers";
import { useDaysLeft } from "@/hooks/useDaysLeft";

interface Props {
  vak: Vak;
  userData?: VakData;
  index: number;
}

function confidenceStyle(s: number) {
  if (s <= 4) return { bg: "#FEF2F2", color: "#DC2626", border: "#FECACA" };
  if (s <= 7) return { bg: "#FFFBEB", color: "#D97706", border: "#FDE68A" };
  return { bg: "#F0FDF4", color: "#16A34A", border: "#BBF7D0" };
}

export default function VakKaart({ vak, userData, index }: Props) {
  const router = useRouter();
  const confidence = userData?.confidenceScore ?? 5;
  const cs = confidenceStyle(confidence);
  const total = vak.syllabus.length;
  const done = userData?.checks ? Object.values(userData.checks ?? {}).filter(Boolean).length : 0;
  const pct = total > 0 ? (done / total) * 100 : 0;
  const daysLeft = useDaysLeft(vak.examDatum ?? "");
  const dl = vak.examDatum ? daysLabel(daysLeft) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.25 }}
      onClick={() => router.push(`/vak/${vak.id}`)}
      className="card card-hover cursor-pointer"
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: vak.kleur }} />
          <span className="font-semibold text-sm truncate" style={{ color: "#0F172A" }}>{vak.naam}</span>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full ml-2 flex-shrink-0"
          style={{ background: cs.bg, color: cs.color, border: `1px solid ${cs.border}` }}>
          {confidence}/10
        </span>
      </div>
      <p className="text-xs mb-3 ml-4" style={{ color: "#64748B" }}>
        {vak.isSchoolexamen ? "Schoolexamen" : (vak.datum ?? "") + (vak.tijd ? ` · ${vak.tijd}` : "")}
      </p>
      {vak.hulpmiddelen.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {vak.hulpmiddelen.map(h => <HulpmiddelBadge key={h} hulpmiddel={h} />)}
        </div>
      )}
      <div className="w-full rounded-full overflow-hidden mb-2" style={{ height: 4, background: "#E8ECF0" }}>
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: vak.kleur }} />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs" style={{ color: "#94A3B8" }}>{done} / {total} onderwerpen</span>
        {dl ? (
          <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: dl.bg, color: dl.color }}>
            {dl.text}
          </span>
        ) : (
          <span className="text-xs" style={{ color: "#94A3B8" }}>Schoolexamen</span>
        )}
      </div>
    </motion.div>
  );
}

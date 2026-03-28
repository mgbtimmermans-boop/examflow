"use client";
import { Vak, VakData } from "@/types";

interface Props {
  vakken: Vak[];
  allData: Record<string, VakData>;
}

export default function GlobalProgress({ vakken, allData }: Props) {
  let total = 0;
  let checked = 0;
  vakken.filter(v => !v.isSchoolexamen).forEach(vak => {
    total += vak.syllabus.length;
    const d = allData[vak.id];
    if (d?.checks) checked += Object.values(d.checks ?? {}).filter(Boolean).length;
  });
  const pct = total > 0 ? Math.round((checked / total) * 100) : 0;

  return (
    <div className="flex-1">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium" style={{ color: "#374151" }}>Totale voortgang</span>
        <span className="text-sm font-semibold" style={{ color: "#0F172A" }}>{checked} / {total} · {pct}%</span>
      </div>
      <div className="w-full rounded-full overflow-hidden" style={{ height: 8, background: "#E8ECF0" }}>
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: "#2563EB" }} />
      </div>
    </div>
  );
}

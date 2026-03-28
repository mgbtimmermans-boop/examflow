"use client";
import { Onderwijsniveau } from "@/types";
import { calcCE, wegingLabel, doelcijfers } from "@/lib/helpers";

interface Props {
  seGrade: string;
  onSeGradeChange: (v: string) => void;
  niveau: Onderwijsniveau;
}

function ResultRow({ label, ce }: { label: string; ce: number }) {
  let msg = `${ce.toFixed(1)}`;
  let color = "#0F172A";
  let note = "";
  if (ce < 1) { msg = "—"; note = "Je haalt het al!"; color = "#16A34A"; }
  else if (ce > 10) { msg = "—"; note = "Niet haalbaar"; color = "#DC2626"; }
  return (
    <div className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid #F1F5F9" }}>
      <span className="text-sm" style={{ color: "#64748B" }}>{label}</span>
      {note ? <span className="text-sm font-semibold" style={{ color }}>{note}</span>
             : <span className="text-sm font-semibold" style={{ color }}>CE nodig: {msg}</span>}
    </div>
  );
}

export default function GradePredictor({ seGrade, onSeGradeChange, niveau }: Props) {
  const se = parseFloat(seGrade);
  const valid = !isNaN(se) && se >= 1 && se <= 10;
  const doelen = doelcijfers(niveau);

  return (
    <div className="card">
      <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#64748B" }}>Cijferberekening</p>
      <p className="text-xs mb-3" style={{ color: "#94A3B8" }}>{wegingLabel(niveau)}</p>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Mijn SE-cijfer</label>
        <input type="number" min="1" max="10" step="0.1" value={seGrade}
          onChange={e => onSeGradeChange(e.target.value)}
          className="w-28 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none"
          style={{ border: "1px solid #E8ECF0", background: "#F8F9FC", color: "#0F172A" }}
          placeholder="6.5" />
      </div>
      {valid && doelen.map(d => (
        <ResultRow key={d} label={`Voor een ${d.toFixed(1)}`} ce={calcCE(se, d, niveau)} />
      ))}
      {!valid && seGrade && <p className="text-xs" style={{ color: "#DC2626" }}>Voer een geldig cijfer in (1–10)</p>}
    </div>
  );
}

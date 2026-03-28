"use client";
import { useDaysLeft } from "@/hooks/useDaysLeft";

interface Props {
  firstExamDate?: string;
}

export default function Countdown({ firstExamDate }: Props) {
  const days = useDaysLeft(firstExamDate ?? "");

  if (!firstExamDate) return null;

  return (
    <div className="card text-center w-full sm:w-auto sm:flex-shrink-0" style={{ minWidth: 120 }}>
      <p className="text-4xl sm:text-5xl font-bold" style={{ color: "#2563EB" }}>{Math.max(0, days)}</p>
      <p className="text-xs mt-1" style={{ color: "#64748B" }}>dagen tot eerste examen</p>
    </div>
  );
}

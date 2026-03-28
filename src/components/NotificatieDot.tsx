"use client";
import { VAKKEN } from "@/data/vakken";
import { VakUserData } from "@/types";

interface Props {
  allData: Record<string, VakUserData>;
}

export default function NotificatieDot({ allData }: Props) {
  const laagVertrouwen = VAKKEN.filter((v) => {
    const d = allData[v.id];
    return d && d.confidenceScore <= 3;
  });

  if (laagVertrouwen.length === 0) return null;

  return (
    <span
      title={`${laagVertrouwen.length} vak${laagVertrouwen.length > 1 ? "ken" : ""} vereist aandacht`}
      className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
      style={{ background: "#DC2626" }}
    />
  );
}

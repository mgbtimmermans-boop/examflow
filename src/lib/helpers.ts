import { Onderwijsniveau, Vak } from "@/types";
import { SYLLABI } from "@/data/syllabi/index";

export function daysUntil(examDatum: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const exam = new Date(examDatum);
  return Math.ceil((exam.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

export function daysLabel(days: number): { text: string; bg: string; color: string } {
  if (days < 0) return { text: "Geweest", bg: "#F1F5F9", color: "#94A3B8" };
  if (days === 0) return { text: "Vandaag!", bg: "#EFF6FF", color: "#2563EB" };
  if (days <= 7) return { text: `over ${days} d`, bg: "#FEF2F2", color: "#DC2626" };
  if (days <= 21) return { text: `over ${days} d`, bg: "#FFFBEB", color: "#D97706" };
  return { text: `over ${days} d`, bg: "#F0FDF4", color: "#16A34A" };
}

export function profielLabel(profiel: string): string {
  const map: Record<string, string> = {
    CM: "C&M", EM: "E&M", NG: "N&G", NT: "N&T",
    CM_HAVO: "C&M", EM_HAVO: "E&M", NG_HAVO: "N&G", NT_HAVO: "N&T",
    MAVO: "MAVO",
  };
  return map[profiel] ?? profiel;
}

export function greeting(name: string): string {
  const h = new Date().getHours();
  const prefix = h < 12 ? "Goedemorgen" : h < 18 ? "Goedemiddag" : "Goedenavond";
  return `${prefix}, ${name}.`;
}

export function calcCE(se: number, doel: number, _niveau: Onderwijsniveau): number {
  return doel * 2 - se; // 50/50 SE/CE for all levels
}

export function wegingLabel(_niveau: Onderwijsniveau): string {
  return "SE telt 50%, CE telt 50%";
}

export function doelcijfers(niveau: Onderwijsniveau): number[] {
  if (niveau === "MAVO") return [5.5, 7.5];
  return [5.5, 8.0];
}

/** Counts all leerdoelen in the hierarchical syllabus, falls back to flat syllabus length */
export function telLeerdoelen(vak: Vak): number {
  const vakSyllabus = SYLLABI[vak.id];
  if (vakSyllabus) {
    return vakSyllabus.domeinen.flatMap(d => d.subdomeinen).flatMap(s => s.leerdoelen).length;
  }
  return vak.syllabus.length;
}

/** Counts checked items; works for both old numeric-key checks and new leerdoel-id checks */
export function telAfgevinkt(_vak: Vak, checks: Record<string, boolean>): number {
  return Object.values(checks).filter(Boolean).length;
}

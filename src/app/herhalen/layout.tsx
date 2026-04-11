import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herhalen — ExamFlow",
  description: "Herhaal leerdoelen op het juiste moment met spaced repetition.",
};

export default function HerhalenLayout({ children }: { children: React.ReactNode }) {
  return children;
}

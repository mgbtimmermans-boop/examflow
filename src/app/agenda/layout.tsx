import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leeragenda — ExamFlow",
  description: "Plan en beheer je studiesessies voor het eindexamen.",
};

export default function AgendaLayout({ children }: { children: React.ReactNode }) {
  return children;
}

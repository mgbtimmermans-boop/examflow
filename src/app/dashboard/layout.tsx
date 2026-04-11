import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — ExamFlow",
  description: "Jouw persoonlijke studiedashboard voor het eindexamen.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}

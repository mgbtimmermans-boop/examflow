import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inloggen — ExamFlow",
  description: "Log in op ExamFlow en begin vandaag met slim studeren voor je eindexamen.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}

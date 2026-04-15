import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ExamFlow — Studeer slimmer voor je eindexamen",
  description: "ExamFlow is dé gratis studietool voor VWO en HAVO eindexamenkandidaten 2026. Syllabus afvinken, slimme herhaling en leeragenda op basis van de officiële CvTE syllabus.",
  keywords: "eindexamen 2026, VWO studeren, HAVO studeren, syllabus afvinken, spaced repetition, examens, studietool, leeragenda",
  authors: [{ name: "ExamFlow" }],
  creator: "ExamFlow",
  metadataBase: new URL("https://examflow.nl"),
  openGraph: {
    title: "ExamFlow — Studeer slimmer voor je eindexamen",
    description: "Gratis studietool voor VWO en HAVO eindexamenkandidaten 2026. Gebaseerd op de officiële CvTE syllabus.",
    url: "https://examflow.nl",
    siteName: "ExamFlow",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExamFlow — Studeer slimmer voor je eindexamen",
    description: "Gratis studietool voor VWO en HAVO eindexamenkandidaten 2026.",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.variable}>
      <body><AuthProvider>{children}</AuthProvider></body>
    </html>
  );
}

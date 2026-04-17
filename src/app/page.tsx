"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/Logo";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// ─── Animation helpers ───────────────────────────────────────────────────────

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ─── Counter hook ────────────────────────────────────────────────────────────

function useCountUp(end: number, inView: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, end, duration]);
  return value;
}

function StatCard({ value, label, index, compact }: { value: string; label: string; index: number; compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const numMatch = value.match(/^([\d.]+)/);
  const num = numMatch ? parseFloat(numMatch[1].replace(".", "")) : 0;
  const suffix = numMatch ? value.slice(numMatch[1].length) : value;
  const prefix = numMatch ? "" : "";
  const count = useCountUp(num, inView);
  const isNumeric = !!numMatch;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      style={{
        background: "white", borderRadius: 16, padding: "24px 16px",
        textAlign: "center", border: "1px solid #E8ECF0",
      }}
    >
      <div style={{ fontSize: compact ? 22 : 28, fontWeight: 800, color: "#2563EB", marginBottom: 4 }}>
        {isNumeric ? `${num >= 5000 ? count.toLocaleString("nl-NL") : count}${suffix}` : value}
      </div>
      <div style={{ fontSize: compact ? 12 : 13, color: "#64748B", fontWeight: 500 }}>{label}</div>
    </motion.div>
  );
}

// ─── Forgetting curve SVG ────────────────────────────────────────────────────

function ForgettingCurve() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  // Without repetition (exponential decay)
  const withoutPath = "M 40 40 C 80 42, 120 100, 160 140 C 200 170, 280 195, 440 200";
  // With spaced repetition (stays high with dips and recoveries)
  const withPath = "M 40 40 C 55 42, 70 60, 90 70 L 90 45 C 110 48, 130 65, 160 72 L 160 42 C 200 46, 240 58, 300 65 L 300 40 C 340 44, 380 55, 440 60";

  // Dot positions on the "with" curve at day 1, 3, 7
  const dots = [
    { cx: 90, cy: 45 },
    { cx: 160, cy: 42 },
    { cx: 300, cy: 40 },
  ];

  return (
    <div ref={ref} style={{ width: "100%", maxWidth: 460, margin: "0 auto 24px" }}>
      <svg viewBox="0 0 480 240" fill="none" style={{ width: "100%", height: "auto" }}>
        {/* Grid lines */}
        <line x1="40" y1="40" x2="40" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="40" y1="210" x2="460" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

        {/* Without repetition - dashed red */}
        <motion.path
          d={withoutPath}
          stroke="#F87171"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        />

        {/* With spaced repetition - solid blue */}
        <motion.path
          d={withPath}
          stroke="#60A5FA"
          strokeWidth="2.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        />

        {/* Dots at repetition points */}
        {dots.map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r="5"
            fill="#60A5FA"
            stroke="white"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
          />
        ))}

        {/* Y-axis label */}
        <text x="16" y="42" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">100%</text>
        <text x="16" y="210" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">0%</text>

        {/* X-axis labels */}
        <text x="40" y="228" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">Nu</text>
        <text x="90" y="228" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">Dag 1</text>
        <text x="160" y="228" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">Dag 3</text>
        <text x="300" y="228" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">Dag 7</text>
        <text x="440" y="228" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">Dag 14</text>
      </svg>

      {/* Legend */}
      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="24" height="2"><line x1="0" y1="1" x2="24" y2="1" stroke="#F87171" strokeWidth="2" strokeDasharray="4 3" /></svg>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Zonder herhaling</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="24" height="2"><line x1="0" y1="1" x2="24" y2="1" stroke="#60A5FA" strokeWidth="2" /></svg>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Met ExamFlow</span>
        </div>
      </div>
    </div>
  );
}

// ─── App mockup component ────────────────────────────────────────────────────

function AppMockup() {
  const subjects = [
    { name: "Economie", color: "#F59E0B", progress: 62, date: "21 mei" },
    { name: "Biologie", color: "#10B981", progress: 38, date: "19 mei" },
    { name: "Wiskunde A", color: "#2563EB", progress: 81, date: "13 mei" },
  ];

  return (
    <div style={{
      background: "white",
      borderRadius: 16,
      border: "1px solid #E8ECF0",
      boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
      padding: "20px 20px 16px",
      width: "100%",
      maxWidth: 340,
    }}>
      {/* Header */}
      <div style={{ fontSize: 13, fontWeight: 700, color: "#0F172A", marginBottom: 14 }}>
        Jouw vakken
      </div>

      {/* Subject cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {subjects.map((s, i) => (
          <div key={i} style={{
            background: "#F8F9FC",
            borderRadius: 10,
            padding: "12px 14px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>{s.name}</span>
              </div>
              <span style={{ fontSize: 11, color: "#94A3B8" }}>{s.date}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ flex: 1, height: 6, background: "#E2E8F0", borderRadius: 3, overflow: "hidden" }}>
                <motion.div
                  style={{ height: "100%", borderRadius: 3, background: s.color }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${s.progress}%` }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                />
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#64748B", minWidth: 32, textAlign: "right" }}>{s.progress}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom banner */}
      <div style={{
        marginTop: 12,
        background: "#EFF6FF",
        borderRadius: 8,
        padding: "8px 12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span style={{ fontSize: 11, color: "#2563EB", fontWeight: 500 }}>3 leerdoelen te herhalen vandaag</span>
        <span style={{ fontSize: 11, color: "#2563EB" }}>→</span>
      </div>
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "30+", label: "Vakken" },
  { value: "5000+", label: "Oefenvragen" },
  { value: "100%", label: "Syllabus dekking" },
  { value: "Gratis", label: "Geen kosten" },
  { value: "Tracker", label: "Analyseer zwakke punten" },
];

const steps = [
  {
    num: "01",
    title: "Kies je vakken",
    desc: "Selecteer je examenvakken en we laden automatisch de volledige syllabus met alle leerdoelen.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" strokeLinecap="round"/>
        <rect x="9" y="3" width="6" height="4" rx="1" strokeLinecap="round"/>
        <path d="M9 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Plan je agenda",
    desc: "Onze slimme planner maakt automatisch een studierooster op basis van je examendatums en voortgang.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round"/>
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round"/>
        <circle cx="12" cy="16" r="1" fill="#2563EB"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Oefen & herhaal",
    desc: "Beantwoord vragen per leerdoel en ons spaced repetition systeem plant automatisch herhalingen in.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const features = [
  {
    title: "Volledige syllabus",
    desc: "Alle leerdoelen van elk examenvak, direct uit de officiële syllabus van het College voor Toetsen en Examens.",
    color: "#2563EB",
    bg: "#EFF6FF",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Spaced repetition",
    desc: "Wetenschappelijk bewezen herhaalschema (1→3→7 dagen) zorgt ervoor dat je alles onthoudt tot het examen.",
    color: "#7C3AED",
    bg: "#F5F3FF",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Slimme agenda",
    desc: "Automatische herplanning als je uitloopt. Vakken met een naderende examendatum krijgen voorrang.",
    color: "#059669",
    bg: "#ECFDF5",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Voortgang per vak",
    desc: "Zie precies hoeveel procent van elk vak je al beheerst met een helder dashboard en confidence scores.",
    color: "#D97706",
    bg: "#FFFBEB",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "5.000+ oefenvragen",
    desc: "Drie moeilijkheidsniveaus per leerdoel — van basisbegrip tot complexe analysevragen.",
    color: "#DC2626",
    bg: "#FEF2F2",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
  },
  {
    title: "Formulekaarten",
    desc: "Alle belangrijke formules per vak overzichtelijk bij de hand, precies wanneer je ze nodig hebt.",
    color: "#0891B2",
    bg: "#ECFEFF",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.255 3C20.38 5.78 21 8.817 21 12s-.62 6.22-1.745 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Examentracker",
    desc: "Houd bij wat je scoort op oefenexamens. ExamFlow analyseert je zwakke punten en koppelt ze direct aan de leerdoelen die je nog moet oefenen.",
    color: "#9333EA",
    bg: "#FAF5FF",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const testimonials = [
  { name: "Emma", role: "VWO 6", text: "Ik had altijd het gevoel dat ik niet wist waar ik moest beginnen. ExamFlow geeft me elke dag precies wat ik moet doen." },
  { name: "Joris", role: "HAVO 5", text: "De herhalingsfunctie werkt echt. Ik merk dat ik dingen onthoud die ik normaal zou vergeten." },
  { name: "Fleur", role: "VWO 6", text: "Voor het eerst heb ik het gevoel dat ik de stof echt begrijp in plaats van alleen maar te herhalen." },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  useEffect(() => { if (!loading && user) router.replace("/dashboard"); }, [user, loading, router]);
  if (loading) return null;
  if (user) return null;

  return (
    <div className="min-h-screen" style={{ background: "#F8F9FC" }}>

      {/* ── Structured data ───────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "ExamFlow",
            "url": "https://examflow.nl",
            "description": "Gratis studietool voor VWO en HAVO eindexamenkandidaten 2026. Syllabus afvinken, slimme herhaling en leeragenda op basis van de officiële CvTE syllabus.",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
            "audience": { "@type": "EducationalAudience", "educationalRole": "student" },
            "inLanguage": "nl-NL",
            "educationalLevel": "VWO, HAVO",
            "countryOfOrigin": "NL",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Wat is ExamFlow?", "acceptedAnswer": { "@type": "Answer", "text": "ExamFlow is een gratis studietool voor VWO en HAVO eindexamenkandidaten. De app combineert de officiële CvTE syllabus met spaced repetition en een slimme leeragenda." } },
              { "@type": "Question", "name": "Is ExamFlow gratis?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, ExamFlow is volledig gratis voor alle leerlingen. Er zijn geen verborgen kosten of premium functies." } },
              { "@type": "Question", "name": "Voor welke vakken werkt ExamFlow?", "acceptedAnswer": { "@type": "Answer", "text": "ExamFlow ondersteunt meer dan 28 vakken voor VWO en HAVO, waaronder Economie, Wiskunde, Biologie, Scheikunde, Geschiedenis, Aardrijkskunde en alle talen." } },
              { "@type": "Question", "name": "Hoe werkt de herhalingsfunctie?", "acceptedAnswer": { "@type": "Answer", "text": "Na het afvinken van een leerdoel plant ExamFlow automatisch herhalingen in op basis van spaced repetition: na 1 dag, 3 dagen en 7 dagen. Elke herhaling bevat een oefenvraag op oplopend niveau." } },
              { "@type": "Question", "name": "Is ExamFlow gebaseerd op de officiële syllabus?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, ExamFlow is volledig gebaseerd op de officiële syllabus van het College voor Toetsen en Examens (CvTE) voor het schooljaar 2025-2026." } },
            ],
          }),
        }}
      />

      {/* ── A. Navbar ─────────────────────────────────────────────────────── */}
      <nav style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E8ECF0", position: "sticky", top: 0, zIndex: 50 }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between" style={{ height: 64 }}>
          <Logo size="md" />
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium" style={{ color: "#64748B" }}>Inloggen</Link>
            <Link href="/login" className="btn-primary text-sm px-4 py-2">Gratis starten</Link>
          </div>
        </div>
      </nav>

      {/* ── B. Hero ───────────────────────────────────────────────────────── */}
      <section style={{ padding: isMobile ? "48px 20px 40px" : "80px 0 60px", background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-12" style={{ flexWrap: "wrap" }}>
            {/* Left: text */}
            <div style={{ flex: "1 1 420px", minWidth: 0 }}>
              <motion.div initial="hidden" animate="visible" variants={stagger}>
                <motion.div variants={fadeUp} transition={{ duration: 0.5 }} style={{ marginBottom: 16 }}>
                  <span style={{
                    display: "inline-block", background: "#EFF6FF", color: "#2563EB",
                    fontSize: 13, fontWeight: 600, padding: "6px 14px", borderRadius: 20,
                    border: "1px solid #BFDBFE",
                  }}>
                    Examen 2026 — VWO & HAVO
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{ fontSize: isMobile ? 32 : "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.15, marginBottom: 20 }}
                >
                  Haal je hoogste cijfer<br />
                  <span style={{ color: "#2563EB" }}>met een slim studieplan</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ fontSize: isMobile ? 15 : 18, color: "#64748B", lineHeight: 1.7, maxWidth: isMobile ? "100%" : 560, marginBottom: 32 }}
                >
                  ExamFlow combineert de officiële syllabus, spaced repetition en slimme planning in één app — zodat jij precies weet wat je moet leren en wanneer.
                </motion.p>
                <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="flex gap-3 flex-wrap" style={{ flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "stretch" : "center" }}>
                  <Link href="/login" className="btn-primary text-base px-8 py-3" style={{ fontSize: 16, borderRadius: 12, textAlign: "center" }}>
                    Gratis beginnen
                  </Link>
                  <a href="#hoe-het-werkt" className="text-sm font-medium flex items-center gap-1.5" style={{ color: "#64748B", justifyContent: isMobile ? "center" : "flex-start" }}>
                    Hoe werkt het?
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Right: app mockup (hidden on mobile) */}
            <motion.div
              className="hidden md:flex"
              style={{ flex: "0 0 auto", justifyContent: "center" }}
              initial={{ opacity: 0, x: 32, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <AppMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── C. Stats ──────────────────────────────────────────────────────── */}
      <AnimatedSection>
        <div className="max-w-4xl mx-auto px-4 sm:px-6" style={{ paddingTop: isMobile ? 24 : 32, paddingBottom: isMobile ? 24 : 32, paddingLeft: isMobile ? 20 : undefined, paddingRight: isMobile ? 20 : undefined, background: "#F8F9FC" }}>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {stats.map((s, i) => (
              <StatCard key={i} value={s.value} label={s.label} index={i} compact={isMobile} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── C2. Ons verhaal ───────────────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: isMobile ? "48px 20px" : "64px 0" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex gap-10 items-start" style={{ flexWrap: "wrap", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "center" : "flex-start" }}>
            {/* Left: avatar */}
            <motion.div
              style={{ flex: "0 0 auto", textAlign: isMobile ? "center" : "left" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeLeft}
              transition={{ duration: 0.5 }}
            >
              <div style={{
                width: 80, height: 80, borderRadius: "50%", background: "#2563EB",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em",
                marginBottom: 12, marginLeft: isMobile ? "auto" : undefined, marginRight: isMobile ? "auto" : undefined,
              }}>
                EF
              </div>
              <div style={{ fontWeight: 700, color: "#0F172A", fontSize: 16 }}>ExamFlow</div>
              <div style={{ color: "#94A3B8", fontSize: 13 }}>door een Nederlandse<br />examenleerling</div>
            </motion.div>

            {/* Right: story */}
            <motion.div
              style={{ flex: "1 1 340px", minWidth: 0 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeRight}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Ons verhaal</p>
              <p style={{ fontSize: isMobile ? 14 : 15, color: "#374151", lineHeight: 1.75, marginBottom: 16 }}>
                Tijdens zijn examens zocht een VWO-leerling naar een tool die echt aansloot op de Nederlandse syllabus. Die bestond niet. Dus bouwde hij hem zelf — eerst voor zichzelf, later voor iedereen.
              </p>
              <p style={{ fontSize: isMobile ? 14 : 15, color: "#374151", lineHeight: 1.75, marginBottom: 24 }}>
                ExamFlow is gebouwd vanuit de praktijk: gebaseerd op de officiële syllabus van het CvTE, wetenschappelijke leertheorieën en de dagelijkse realiteit van een examenleerling die wil weten wat hij moet leren, en wanneer.
              </p>
              <div className="flex flex-wrap gap-2">
                <span style={{
                  display: "inline-block", background: "#EFF6FF", color: "#2563EB",
                  fontSize: 12, fontWeight: 500, padding: "6px 14px", borderRadius: 20,
                }}>
                  Gebaseerd op officiële CvTE syllabus 2026
                </span>
                <span style={{
                  display: "inline-block", background: "#EFF6FF", color: "#2563EB",
                  fontSize: 12, fontWeight: 500, padding: "6px 14px", borderRadius: 20,
                }}>
                  Wetenschappelijk onderbouwd
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── D. Hoe het werkt ──────────────────────────────────────────────── */}
      <AnimatedSection className="py-20">
        <div id="hoe-het-werkt" className="max-w-5xl mx-auto px-4 sm:px-6" style={isMobile ? { padding: "0 20px" } : undefined}>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Hoe het werkt</p>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A" }}>In drie stappen klaar voor je examen</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  background: "white", borderRadius: 16, padding: isMobile ? 16 : 28,
                  border: "1px solid #E8ECF0", position: "relative",
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12, background: "#EFF6FF",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
                }}>
                  {step.icon}
                </div>
                <motion.div
                  style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", marginBottom: 6, letterSpacing: "0.05em" }}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  STAP {step.num}
                </motion.div>
                <h3 style={{ fontSize: isMobile ? 15 : 17, fontWeight: 700, color: "#0F172A", marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── E. Features grid ──────────────────────────────────────────────── */}
      <AnimatedSection className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6" style={isMobile ? { padding: "0 20px" } : undefined}>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Functionaliteiten</p>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A" }}>Alles wat je nodig hebt</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ background: "#F8F9FC", transition: { duration: 0.2 } }}
                style={{
                  background: "white", borderRadius: 12, padding: isMobile ? 16 : 24,
                  border: "1px solid #E8ECF0",
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: f.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 14, color: f.color,
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", marginBottom: 6 }}>{f.title}</h3>
                <p style={{ fontSize: isMobile ? 13 : 14, color: "#64748B", lineHeight: 1.6 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── F. Wetenschap ─────────────────────────────────────────────────── */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6" style={isMobile ? { padding: "0 20px" } : undefined}>
          <div style={{
            background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
            borderRadius: isMobile ? 16 : 24, padding: isMobile ? "32px 20px" : "48px 40px", color: "white",
            position: "relative", overflow: "hidden",
          }}>
            {/* Decorative circles */}
            <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
            <div style={{ position: "absolute", bottom: -60, left: -30, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ textAlign: "center", marginBottom: 32 }}>
                <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12, color: "rgba(255,255,255,0.7)" }}>Wetenschappelijk bewezen</p>
                <h2 style={{ fontSize: isMobile ? 20 : 26, fontWeight: 700, lineHeight: 1.3, marginBottom: 16 }}>Spaced repetition: vergeet nooit meer wat je leert</h2>
              </div>

              <ForgettingCurve />

              <p style={{ fontSize: isMobile ? 13 : 15, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
                Onderzoek toont aan dat herhalen op stijgende intervallen (1→3→7 dagen) de meest effectieve leermethode is. ExamFlow past dit automatisch toe — je hoeft alleen maar te oefenen.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── G. Social proof ───────────────────────────────────────────────── */}
      <AnimatedSection className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6" style={isMobile ? { padding: "0 20px" } : undefined}>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Early access gebruikers</p>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A" }}>Wat leerlingen zeggen</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  background: "white", borderRadius: 16, padding: isMobile ? 16 : 24,
                  border: "1px solid #E8ECF0",
                }}
              >
                <div style={{ fontSize: 40, lineHeight: 1, color: "#2563EB", fontFamily: "Georgia, serif", marginBottom: 8 }}>&ldquo;</div>
                <p style={{ fontSize: isMobile ? 13 : 14, color: "#374151", lineHeight: 1.65, marginBottom: 16 }}>{t.text}</p>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#0F172A" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#94A3B8" }}>{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── H. FAQ ──────────────────────────────────────────────────────── */}
      <Section className="py-20">
        <div style={{ maxWidth: 680, margin: "0 auto", padding: isMobile ? "0 20px" : "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>FAQ</p>
            <h2 style={{ fontSize: isMobile ? 24 : 28, fontWeight: 700, color: "#0F172A" }}>Veelgestelde vragen</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { q: "Is ExamFlow gratis?", a: "Ja, volledig gratis voor alle leerlingen. Geen verborgen kosten, geen premium versie." },
              { q: "Voor welke vakken werkt ExamFlow?", a: "Meer dan 28 vakken voor VWO en HAVO — van Economie en Wiskunde tot Biologie, Geschiedenis en alle talen." },
              { q: "Is de syllabus up-to-date?", a: "Ja. ExamFlow is gebaseerd op de officiële syllabus van het CvTE voor het examenjaar 2025-2026." },
              { q: "Hoe werkt de herhalingsfunctie?", a: "Na het afvinken van een leerdoel plant ExamFlow automatisch herhalingen in: na 1 dag, 3 dagen en 7 dagen. Elke herhaling bevat een oefenvraag op oplopend niveau — van basis tot moeilijk." },
              { q: "Kan mijn docent ExamFlow ook gebruiken?", a: "ExamFlow is primair gebouwd voor leerlingen. Docenten kunnen de app gratis bekijken en doorsturen naar leerlingen." },
            ].map((item, i) => (
              <div key={i} style={{ border: "1px solid #E8ECF0", borderRadius: 12, overflow: "hidden", background: "white" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", padding: "16px 20px", display: "flex", justifyContent: "space-between",
                    alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#0F172A" }}>{item.q}</span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ fontSize: 20, color: "#94A3B8", flexShrink: 0, marginLeft: 12 }}
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "0 20px 16px", fontSize: 14, color: "#64748B", lineHeight: 1.6 }}>
                    {item.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── I. CTA ────────────────────────────────────────────────────────── */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 style={{ fontSize: isMobile ? 26 : 32, fontWeight: 800, color: "#0F172A", marginBottom: 12 }}>
            Studeer zoals het bedoeld is.
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            Gratis voor alle VWO en HAVO leerlingen. Geen account nodig om te beginnen.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{ display: "inline-block" }}
          >
            <Link
              href="/login"
              className="btn-primary text-base px-10 py-3.5"
              style={{ fontSize: 16, borderRadius: 12, display: "inline-block" }}
            >
              Gratis beginnen
            </Link>
          </motion.div>
          <div className="flex items-center justify-center gap-5 flex-wrap" style={{ marginTop: 20 }}>
            {["Officiële syllabus 2026", "Gratis", "Direct beschikbaar"].map((item, i) => (
              <span key={i} style={{ fontSize: 13, color: "#64748B", display: "flex", alignItems: "center", gap: 4 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8.5L6.5 11.5L12.5 5.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* ── I. Footer ─────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid #E8ECF0", padding: "32px 0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between flex-wrap gap-4">
          <Logo size="sm" />
          <p style={{ fontSize: 12, color: "#94A3B8" }}>
            Gemaakt door een Nederlandse examenleerling · 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

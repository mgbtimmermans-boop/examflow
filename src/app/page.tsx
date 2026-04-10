"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/Logo";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// ─── Animation helpers ───────────────────────────────────────────────────────

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
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

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "30+", label: "Vakken" },
  { value: "5.000+", label: "Oefenvragen" },
  { value: "100%", label: "Syllabus dekking" },
  { value: "Gratis", label: "Geen kosten" },
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
];

const testimonials = [
  { name: "Sophie V.", role: "VWO 6 — N&T", text: "Eindelijk een app die precies aansluit bij de Nederlandse syllabus. De herhalingsfunctie is een gamechanger." },
  { name: "Daan M.", role: "VWO 6 — E&M", text: "Ik wist nooit waar ik moest beginnen. ExamFlow plant alles automatisch in — ik hoef alleen nog maar te studeren." },
  { name: "Lotte K.", role: "HAVO 5 — C&M", text: "De oefenvragen sluiten perfect aan bij wat er op het examen komt. Mijn resultaten zijn enorm vooruitgegaan." },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => { if (!loading && user) router.replace("/dashboard"); }, [user, loading, router]);
  if (loading) return null;
  if (user) return null;

  return (
    <div className="min-h-screen" style={{ background: "#F8F9FC" }}>

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
      <section style={{ padding: "80px 0 60px", textAlign: "center" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
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
              style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.15, marginBottom: 20 }}
            >
              Haal je hoogste cijfer<br />
              <span style={{ color: "#2563EB" }}>met een slim studieplan</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: 18, color: "#64748B", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 32px" }}
            >
              ExamFlow combineert de officiële syllabus, spaced repetition en slimme planning in één app — zodat jij precies weet wat je moet leren en wanneer.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="flex items-center justify-center gap-3 flex-wrap">
              <Link href="/login" className="btn-primary text-base px-8 py-3" style={{ fontSize: 16, borderRadius: 12 }}>
                Gratis beginnen
              </Link>
              <a href="#hoe-het-werkt" className="text-sm font-medium flex items-center gap-1.5" style={{ color: "#64748B" }}>
                Hoe werkt het?
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── C. Stats ──────────────────────────────────────────────────────── */}
      <Section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: "white", borderRadius: 16, padding: "24px 16px",
                  textAlign: "center", border: "1px solid #E8ECF0",
                }}
              >
                <div style={{ fontSize: 28, fontWeight: 800, color: "#2563EB", marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#64748B", fontWeight: 500 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── D. Hoe het werkt ──────────────────────────────────────────────── */}
      <Section className="py-20" delay={0.1}>
        <div id="hoe-het-werkt" className="max-w-5xl mx-auto px-4 sm:px-6">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Hoe het werkt</p>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A" }}>In drie stappen klaar voor je examen</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ delay: i * 0.12 }}
                style={{
                  background: "white", borderRadius: 16, padding: 28,
                  border: "1px solid #E8ECF0", position: "relative",
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12, background: "#EFF6FF",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
                }}>
                  {step.icon}
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", marginBottom: 6, letterSpacing: "0.05em" }}>STAP {step.num}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0F172A", marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── E. Features grid ──────────────────────────────────────────────── */}
      <Section className="py-20" delay={0.1}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Functionaliteiten</p>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A" }}>Alles wat je nodig hebt</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: "white", borderRadius: 16, padding: 24,
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
                <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.65 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── F. Wetenschap ─────────────────────────────────────────────────── */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div style={{
            background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
            borderRadius: 24, padding: "48px 40px", color: "white",
            position: "relative", overflow: "hidden",
          }}>
            {/* Decorative circles */}
            <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
            <div style={{ position: "absolute", bottom: -60, left: -30, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

            <div style={{ position: "relative", zIndex: 1, maxWidth: 520 }}>
              <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12, color: "rgba(255,255,255,0.7)" }}>Wetenschappelijk bewezen</p>
              <h2 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.3, marginBottom: 16 }}>Spaced repetition: vergeet nooit meer wat je leert</h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", marginBottom: 24 }}>
                Onderzoek toont aan dat herhalen op stijgende intervallen (1→3→7 dagen) de meest effectieve leermethode is. ExamFlow past dit automatisch toe — je hoeft alleen maar te oefenen.
              </p>
              <div className="flex gap-6 flex-wrap">
                {[
                  { val: "1 dag", label: "Eerste herhaling" },
                  { val: "3 dagen", label: "Tweede herhaling" },
                  { val: "7 dagen", label: "Derde herhaling" },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 22, fontWeight: 800 }}>{item.val}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── G. Social proof ───────────────────────────────────────────────── */}
      <Section className="py-20" delay={0.1}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Ervaringen</p>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A" }}>Wat leerlingen zeggen</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: "white", borderRadius: 16, padding: 24,
                  border: "1px solid #E8ECF0",
                }}
              >
                <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
                  {Array(5).fill(0).map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 20 20" fill="#FBBF24">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.65, marginBottom: 16 }}>"{t.text}"</p>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#0F172A" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#94A3B8" }}>{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── H. CTA ────────────────────────────────────────────────────────── */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0F172A", marginBottom: 12 }}>
            Klaar om te beginnen?
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            Maak gratis een account aan en start vandaag nog met je examvoorbereiding. Geen creditcard nodig.
          </p>
          <Link href="/login" className="btn-primary text-base px-10 py-3.5" style={{ fontSize: 16, borderRadius: 12 }}>
            Gratis account aanmaken
          </Link>
        </div>
      </Section>

      {/* ── I. Footer ─────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid #E8ECF0", padding: "32px 0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between flex-wrap gap-4">
          <Logo size="sm" />
          <p style={{ fontSize: 12, color: "#94A3B8" }}>
            © 2026 ExamFlow — Gemaakt voor examenkandidaten
          </p>
        </div>
      </footer>
    </div>
  );
}

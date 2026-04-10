"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Portal } from "@/components/Portal";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface TourStap {
  id: number;
  target: string | null;
  titel: string;
  tekst: string;
}

const TOUR_STAPPEN: TourStap[] = [
  {
    id: 1, target: null,
    titel: "Welkom bij ExamFlow",
    tekst: "Gemaakt door leerlingen, voor leerlingen. Laat ons je even rondleiden door je examenplanner.",
  },
  {
    id: 2, target: "vakken-grid",
    titel: "Jouw vakken",
    tekst: "Klik op een vak om de syllabus te zien en te oefenen.",
  },
  {
    id: 3, target: "global-progress",
    titel: "Globale voortgang",
    tekst: "Houd bij hoeveel je al hebt afgevinkt over alle vakken.",
  },
  {
    id: 4, target: "agenda-link",
    titel: "Leeragenda",
    tekst: "Plan studiesessies in. Sleep blokken om te herplannen.",
  },
  {
    id: 5, target: "focus-knop",
    titel: "Focus Mode",
    tekst: "Pomodoro-timer met rustgevende geluiden.",
  },
  {
    id: 6, target: null,
    titel: "Je bent er klaar voor!",
    tekst: "Succes met je examens.",
  },
];

const TOOLTIP_BREEDTE = 280;
const TOOLTIP_HOOGTE = 180;
const MARGIN = 16;

interface SpotlightRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

function berekenTooltipPositie(
  rect: SpotlightRect,
  tooltipHoogte: number,
  tooltipBreedte: number,
) {
  const ww = typeof window !== "undefined" ? window.innerWidth : 1200;
  const wh = typeof window !== "undefined" ? window.innerHeight : 800;

  // Try right
  if (rect.left + rect.width + MARGIN + tooltipBreedte + MARGIN <= ww) {
    const top = Math.min(
      Math.max(MARGIN, rect.top + rect.height / 2 - tooltipHoogte / 2),
      wh - tooltipHoogte - MARGIN,
    );
    return { left: rect.left + rect.width + MARGIN, top, direction: "right" as const };
  }
  // Try left
  if (rect.left - MARGIN - tooltipBreedte >= MARGIN) {
    const top = Math.min(
      Math.max(MARGIN, rect.top + rect.height / 2 - tooltipHoogte / 2),
      wh - tooltipHoogte - MARGIN,
    );
    return { left: rect.left - MARGIN - tooltipBreedte, top, direction: "left" as const };
  }
  // Try below
  if (rect.top + rect.height + MARGIN + tooltipHoogte + MARGIN <= wh) {
    return {
      left: Math.min(Math.max(MARGIN, (ww - tooltipBreedte) / 2), ww - tooltipBreedte - MARGIN),
      top: rect.top + rect.height + MARGIN,
      direction: "bottom" as const,
    };
  }
  // Try above
  return {
    left: Math.min(Math.max(MARGIN, (ww - tooltipBreedte) / 2), ww - tooltipBreedte - MARGIN),
    top: Math.max(MARGIN, rect.top - tooltipHoogte - MARGIN),
    direction: "top" as const,
  };
}

interface GuidedTourProps {
  uid: string;
  onVoltooiing: () => void;
}

export default function GuidedTour({ uid, onVoltooiing }: GuidedTourProps) {
  const [stap, setStap] = useState(0);
  const [spotlightRect, setSpotlightRect] = useState<SpotlightRect | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const huidigStap = TOUR_STAPPEN[stap];

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateSpotlight = useCallback(() => {
    if (isMobile || !huidigStap.target) {
      setSpotlightRect(null);
      return;
    }
    const el = document.querySelector(`[data-tour="${huidigStap.target}"]`);
    if (!el) { setSpotlightRect(null); return; }
    const rect = el.getBoundingClientRect();
    setSpotlightRect({
      top: rect.top - 8,
      left: rect.left - 8,
      width: rect.width + 16,
      height: rect.height + 16,
    });
  }, [huidigStap.target, isMobile]);

  useEffect(() => {
    updateSpotlight();
    window.addEventListener("resize", updateSpotlight);
    return () => window.removeEventListener("resize", updateSpotlight);
  }, [updateSpotlight]);

  async function slaOp() {
    if (!db) return;
    await setDoc(
      doc(db, "users", uid, "instellingen", "algemeen"),
      { hasSeenTour: true },
      { merge: true },
    );
    onVoltooiing();
  }

  function volgende() {
    if (stap >= TOUR_STAPPEN.length - 1) slaOp();
    else setStap(s => s + 1);
  }

  function vorige() {
    if (stap > 0) setStap(s => s - 1);
  }

  const isCentered = !huidigStap.target;
  const isLaatste = stap === TOUR_STAPPEN.length - 1;

  const tooltipPos = !isMobile && spotlightRect
    ? berekenTooltipPositie(spotlightRect, TOOLTIP_HOOGTE, TOOLTIP_BREEDTE)
    : null;

  const TooltipCard = () => (
    <motion.div
      key={stap}
      initial={{ opacity: 0, y: 6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.97 }}
      transition={{ duration: 0.2 }}
      onClick={e => e.stopPropagation()}
      style={{
        background: "white",
        borderRadius: isMobile ? "20px 20px 0 0" : 14,
        padding: "20px 22px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
        ...(isMobile ? {
          position: "fixed" as const,
          bottom: 0, left: 0, right: 0,
          zIndex: 9986,
        } : isCentered ? {
          position: "fixed" as const,
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 340,
          zIndex: 9986,
        } : tooltipPos ? {
          position: "fixed" as const,
          top: Math.max(MARGIN, tooltipPos.top),
          left: Math.max(MARGIN, tooltipPos.left),
          width: TOOLTIP_BREEDTE,
          zIndex: 9986,
        } : {
          position: "fixed" as const,
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 340,
          zIndex: 9986,
        }),
      }}
    >
      {isMobile && (
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "#E2E8F0", margin: "0 auto 16px" }}/>
      )}
      <p style={{ fontSize: 16, fontWeight: 700, color: "#0F172A", marginBottom: 8 }}>
        {huidigStap.titel}
      </p>
      <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.55, marginBottom: 18 }}>
        {huidigStap.tekst}
      </p>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 14 }}>
        {TOUR_STAPPEN.map((_, i) => (
          <div key={i} style={{
            width: i === stap ? 18 : 7, height: 7, borderRadius: 4,
            background: i === stap ? "#2563EB" : "#E2E8F0",
            transition: "width 0.2s, background 0.2s",
          }}/>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        {stap > 0 && (
          <button onClick={vorige} className="btn-secondary" style={{ flex: 1, textAlign: "center", fontSize: 13 }}>
            Vorige
          </button>
        )}
        <button onClick={volgende} className="btn-primary" style={{ flex: 2, textAlign: "center", fontSize: 13 }}>
          {isLaatste ? "Klaar!" : "Volgende"}
        </button>
      </div>
    </motion.div>
  );

  return (
    <Portal>
      {/* Donkere overlay */}
      <div style={{ position: "fixed", inset: 0, zIndex: 9980, pointerEvents: "none" }}>
        {!isMobile && spotlightRect ? (
          <>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: spotlightRect.top, background: "rgba(0,0,0,0.6)" }}/>
            <div style={{ position: "absolute", top: spotlightRect.top, left: 0, width: spotlightRect.left, height: spotlightRect.height, background: "rgba(0,0,0,0.6)" }}/>
            <div style={{ position: "absolute", top: spotlightRect.top, left: spotlightRect.left + spotlightRect.width, right: 0, height: spotlightRect.height, background: "rgba(0,0,0,0.6)" }}/>
            <div style={{ position: "absolute", top: spotlightRect.top + spotlightRect.height, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.6)" }}/>
            <div style={{
              position: "absolute",
              top: spotlightRect.top, left: spotlightRect.left,
              width: spotlightRect.width, height: spotlightRect.height,
              borderRadius: 10,
              boxShadow: "0 0 0 3px rgba(37,99,235,0.7)",
            }}/>
          </>
        ) : (
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }}/>
        )}
      </div>

      {/* Sla tour over */}
      <button
        onClick={slaOp}
        style={{
          position: "fixed", top: 16, right: 16, zIndex: 9985,
          fontSize: 12, padding: "6px 14px", borderRadius: 20,
          background: "rgba(255,255,255,0.15)", color: "white",
          border: "1px solid rgba(255,255,255,0.3)", cursor: "pointer",
          backdropFilter: "blur(4px)",
          minHeight: 36,
        }}
      >
        Sla tour over
      </button>

      <AnimatePresence mode="wait">
        <TooltipCard key={stap} />
      </AnimatePresence>
    </Portal>
  );
}

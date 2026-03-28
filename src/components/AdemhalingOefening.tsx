"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Portal } from "@/components/Portal";

interface Props {
  onClose: () => void;
}

const PHASES = [
  { id: "in",   duration: 4,  label: "Adem in...",            color: "#86EFAC", targetSize: 160 },
  { id: "hold", duration: 7,  label: "Houd vast...",           color: "#6EE7B7", targetSize: 160 },
  { id: "out",  duration: 8,  label: "Adem langzaam uit...",   color: "#34D399", targetSize: 80  },
] as const;

const TOTAL_CYCLES = 3;

export default function AdemhalingOefening({ onClose }: Props) {
  const [cycle, setCycle] = useState(1);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number>(PHASES[0].duration);
  const [circleSize, setCircleSize] = useState(80);
  const [done, setDone] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  const phase = PHASES[phaseIdx];

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Web Audio setup
  useEffect(() => {
    try {
      const ctx = new AudioContext();
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.connect(ctx.destination);
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.connect(gain);
      osc.start();
      audioCtxRef.current = ctx;
      oscRef.current = osc;
    } catch {}
    return () => {
      try { oscRef.current?.stop(); } catch {}
      try { audioCtxRef.current?.close(); } catch {}
    };
  }, []);

  // Phase timer + audio ramp + circle animation
  useEffect(() => {
    if (done) return;

    const ctx = audioCtxRef.current;
    const osc = oscRef.current;

    if (ctx && osc) {
      const now = ctx.currentTime;
      osc.frequency.cancelScheduledValues(now);
      if (phase.id === "in") {
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.linearRampToValueAtTime(300, now + phase.duration);
        setCircleSize(160);
      } else if (phase.id === "hold") {
        osc.frequency.setValueAtTime(300, now);
        setCircleSize(160);
      } else {
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.linearRampToValueAtTime(200, now + phase.duration);
        setCircleSize(80);
      }
    } else {
      setCircleSize(phase.id === "out" ? 80 : 160);
    }

    setTimeLeft(phase.duration);

    const interval = setInterval(() => {
      setTimeLeft(t => (t > 1 ? t - 1 : 0));
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      const nextIdx = (phaseIdx + 1) % PHASES.length;
      if (nextIdx === 0) {
        if (cycle >= TOTAL_CYCLES) {
          setDone(true);
          try { oscRef.current?.stop(); } catch {}
        } else {
          setCycle(c => c + 1);
          setPhaseIdx(0);
        }
      } else {
        setPhaseIdx(nextIdx);
      }
    }, phase.duration * 1000);

    return () => { clearInterval(interval); clearTimeout(timeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phaseIdx, cycle, done]);

  return (
    <Portal>
      <div style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "#F0FDF4",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 20, right: 20,
            width: 44, height: 44, borderRadius: "50%",
            border: "1px solid #BBF7D0", background: "#DCFCE7",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "#16A34A",
          }}
          aria-label="Sluiten"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
          </svg>
        </button>

        {done ? (
          <div style={{ textAlign: "center", padding: "0 24px" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h2 style={{ fontSize: 22, fontWeight: 600, color: "#166534", marginBottom: 8 }}>
              Goed gedaan.
            </h2>
            <p style={{ fontSize: 15, color: "#15803D", marginBottom: 32 }}>
              Je bent klaar om te studeren.
            </p>
            <button
              onClick={onClose}
              style={{
                padding: "12px 28px", borderRadius: 10,
                background: "#16A34A", color: "white",
                border: "none", fontSize: 14, fontWeight: 600,
                cursor: "pointer", minHeight: 44,
              }}
            >
              Terug naar dashboard
            </button>
          </div>
        ) : (
          <>
            <h2 style={{ fontSize: 18, fontWeight: 500, color: "#166534", marginBottom: 48, textAlign: "center", padding: "0 24px" }}>
              Even tot rust komen
            </h2>

            {/* Circle */}
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 40, width: 200, height: 200 }}>
              {phase.id === "hold" && (
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    width: 170, height: 170,
                    borderRadius: "50%",
                    border: `3px solid ${phase.color}`,
                    opacity: 0.5,
                  }}
                />
              )}
              <motion.div
                animate={{ width: circleSize, height: circleSize }}
                transition={{
                  duration: phase.id === "in" ? 4 : phase.id === "out" ? 8 : 0.4,
                  ease: "easeInOut",
                }}
                style={{
                  borderRadius: "50%",
                  background: phase.color,
                  boxShadow: `0 0 48px ${phase.color}99`,
                }}
              />
            </div>

            {/* Phase label */}
            <p style={{ fontSize: 20, fontWeight: 500, color: "#166534", marginBottom: 8, textAlign: "center" }}>
              {phase.label}
            </p>

            {/* Timer */}
            <p style={{ fontSize: 52, fontWeight: 700, color: "#16A34A", marginBottom: 28, fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>
              {timeLeft}
            </p>

            {/* Cycle */}
            <p style={{ fontSize: 13, color: "#6EE7B7", marginBottom: 40 }}>
              Cyclus {cycle} van {TOTAL_CYCLES}
            </p>

            {/* Skip */}
            <button
              onClick={onClose}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 13, color: "#6EE7B7", textDecoration: "underline",
                padding: "8px 16px", minHeight: 44,
              }}
            >
              Sla over — ik voel me al beter
            </button>
          </>
        )}
      </div>
    </Portal>
  );
}

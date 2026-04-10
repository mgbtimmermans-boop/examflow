"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRESETS = [
  { label: "25 / 5", focus: 25 * 60, brk: 5 * 60 },
  { label: "50 / 10", focus: 50 * 60, brk: 10 * 60 },
];
const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function PomodoroTimer({ visible, onClose }: Props) {
  const [preset, setPreset] = useState(0);
  const [phase, setPhase] = useState<"focus" | "break">("focus");
  const [timeLeft, setTimeLeft] = useState(PRESETS[0].focus);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(0);

  // Date.now()-based: loopt door bij tabblad-wissels
  const startRef          = useRef<number | null>(null);
  const elapsedAtPauseRef = useRef<number>(0);
  const phaseRef          = useRef<"focus" | "break">("focus");
  const phaseDurRef       = useRef<number>(PRESETS[0].focus);
  const presetRef         = useRef<number>(0);

  const total = phase === "focus" ? PRESETS[preset].focus : PRESETS[preset].brk;
  const progress = (timeLeft / total) * CIRCUMFERENCE;
  const strokeColor = phase === "focus" ? "#2563EB" : "#16A34A";

  function switchPhase() {
    const next = phaseRef.current === "focus" ? "break" : "focus";
    const dur = next === "focus" ? PRESETS[presetRef.current].focus : PRESETS[presetRef.current].brk;
    if (phaseRef.current === "focus") setSessions(s => s + 1);
    phaseRef.current = next;
    phaseDurRef.current = dur;
    startRef.current = Date.now();
    elapsedAtPauseRef.current = 0;
    setPhase(next);
    setTimeLeft(dur);
    setRunning(false); // wacht op user om nieuwe fase te starten
  }

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    presetRef.current = preset;
    phaseDurRef.current = phase === "focus" ? PRESETS[preset].focus : PRESETS[preset].brk;
  }, [preset, phase]);

  useEffect(() => {
    if (!running) {
      if (startRef.current !== null) {
        elapsedAtPauseRef.current = Math.min(
          Math.floor((Date.now() - startRef.current) / 1000),
          phaseDurRef.current,
        );
      }
      return;
    }

    startRef.current = Date.now() - elapsedAtPauseRef.current * 1000;

    const id = setInterval(() => {
      if (startRef.current === null) return;
      const elapsed = Math.floor((Date.now() - startRef.current) / 1000);
      const remaining = phaseDurRef.current - elapsed;
      if (remaining <= 0) {
        switchPhase();
      } else {
        setTimeLeft(remaining);
      }
    }, 500);

    return () => clearInterval(id);
  }, [running]); // eslint-disable-line react-hooks/exhaustive-deps

  // Herstel weergave zodra tabblad weer actief is
  useEffect(() => {
    function handle() {
      if (document.visibilityState !== "visible" || !running || startRef.current === null) return;
      const elapsed = Math.floor((Date.now() - startRef.current) / 1000);
      const remaining = phaseDurRef.current - elapsed;
      if (remaining <= 0) {
        switchPhase();
      } else {
        setTimeLeft(remaining);
      }
    }
    document.addEventListener("visibilitychange", handle);
    return () => document.removeEventListener("visibilitychange", handle);
  }, [running]); // eslint-disable-line react-hooks/exhaustive-deps

  const reset = () => {
    setRunning(false);
    elapsedAtPauseRef.current = 0;
    startRef.current = null;
    setTimeLeft(phase === "focus" ? PRESETS[preset].focus : PRESETS[preset].brk);
  };
  const changePreset = (i: number) => {
    setPreset(i);
    setRunning(false);
    setPhase("focus");
    phaseRef.current = "focus";
    presetRef.current = i;
    phaseDurRef.current = PRESETS[i].focus;
    elapsedAtPauseRef.current = 0;
    startRef.current = null;
    setTimeLeft(PRESETS[i].focus);
  };
  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40" style={{ background: "rgba(15,23,42,0.3)" }} onClick={onClose} />
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-80 flex flex-col"
            style={{ background: "#FFFFFF", borderLeft: "1px solid #E8ECF0", boxShadow: "-4px 0 24px rgba(0,0,0,0.08)" }}>
            <div className="flex items-center justify-between p-5" style={{ borderBottom: "1px solid #E8ECF0" }}>
              <div>
                <p className="font-semibold text-sm" style={{ color: "#0F172A" }}>Focus timer</p>
                <p className="text-xs" style={{ color: "#64748B" }}>Sessie {sessions + 1} van vandaag</p>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#64748B" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" /></svg>
              </button>
            </div>
            <div className="flex gap-2 p-4" style={{ borderBottom: "1px solid #F1F5F9" }}>
              {PRESETS.map((p, i) => (
                <button key={i} onClick={() => changePreset(i)} className="flex-1 py-1.5 rounded-lg text-xs font-medium transition-colors"
                  style={preset === i ? { background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE" } : { background: "#F8F9FC", color: "#64748B", border: "1px solid #E8ECF0" }}>
                  {p.label}
                </button>
              ))}
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <span className="text-xs font-semibold uppercase tracking-widest mb-6 px-3 py-1 rounded-full"
                style={phase === "focus" ? { background: "#EFF6FF", color: "#2563EB" } : { background: "#F0FDF4", color: "#16A34A" }}>
                {phase === "focus" ? "Focus tijd" : "Pauze"}
              </span>
              <div className="relative mb-6">
                <svg width="136" height="136" className="-rotate-90">
                  <circle cx="68" cy="68" r={RADIUS} fill="none" stroke="#F1F5F9" strokeWidth="8"/>
                  <circle cx="68" cy="68" r={RADIUS} fill="none" stroke={strokeColor} strokeWidth="8"
                    strokeDasharray={CIRCUMFERENCE} strokeDashoffset={CIRCUMFERENCE - progress} strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 1s linear" }}/>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-mono text-4xl font-semibold" style={{ color: "#0F172A" }}>
                  {mm}:{ss}
                </span>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setRunning(r => !r)} className="btn-primary px-6">{running ? "Pauzeer" : "Start"}</button>
                <button onClick={reset} className="btn-secondary px-3">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 3v5h5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

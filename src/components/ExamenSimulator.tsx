"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Portal } from "@/components/Portal";

interface Props {
  vaknaam: string;
  datum: string;       // display string e.g. "19 mei"
  startTijd?: string;  // e.g. "13:30"
  examDuur: number;    // minutes
  onClose: () => void;
}

function berekenEindTijd(startTijd: string, duurMinuten: number): string {
  const [uur, min] = startTijd.split(":").map(Number);
  const totaalMin = uur * 60 + min + duurMinuten;
  const eindUur = Math.floor(totaalMin / 60);
  const eindMin = totaalMin % 60;
  return `${eindUur}:${String(eindMin).padStart(2, "0")}`;
}

export default function ExamenSimulator({ vaknaam, datum, startTijd, examDuur, onClose }: Props) {
  const totalSeconds = examDuur * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [running, setRunning] = useState(false);
  const [confirmClose, setConfirmClose] = useState(false);

  // Date.now()-based: timer loopt door bij tabblad-wissels
  const startRef         = useRef<number | null>(null); // ms timestamp (adjusted)
  const elapsedAtPauseRef = useRef<number>(0);          // seconds elapsed when paused
  const totalRef          = useRef(totalSeconds);

  useEffect(() => {
    if (!running) {
      if (startRef.current !== null) {
        elapsedAtPauseRef.current = Math.min(
          Math.floor((Date.now() - startRef.current) / 1000),
          totalRef.current,
        );
      }
      return;
    }

    startRef.current = Date.now() - elapsedAtPauseRef.current * 1000;

    const id = setInterval(() => {
      if (startRef.current === null) return;
      const elapsed = Math.floor((Date.now() - startRef.current) / 1000);
      const remaining = totalRef.current - elapsed;
      if (remaining <= 0) {
        setTimeLeft(0);
        setRunning(false);
      } else {
        setTimeLeft(remaining);
      }
    }, 500);

    return () => clearInterval(id);
  }, [running]);

  // Herstel weergave zodra tabblad weer actief is
  useEffect(() => {
    function handle() {
      if (document.visibilityState !== "visible" || !running || startRef.current === null) return;
      const elapsed = Math.floor((Date.now() - startRef.current) / 1000);
      const remaining = totalRef.current - elapsed;
      if (remaining <= 0) {
        setTimeLeft(0);
        setRunning(false);
      } else {
        setTimeLeft(remaining);
      }
    }
    document.addEventListener("visibilitychange", handle);
    return () => document.removeEventListener("visibilitychange", handle);
  }, [running]);

  const hh = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const mm = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");

  const eindTijd = startTijd ? berekenEindTijd(startTijd, examDuur) : null;
  const tijdLabel = startTijd && eindTijd
    ? `${datum} · ${startTijd} – ${eindTijd}`
    : datum;

  return (
    <Portal>
      <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex flex-col items-center justify-center"
        style={{ background: "#FFFFFF", zIndex: 9999 }}
      >
        {/* Close button */}
        <button
          onClick={() => setConfirmClose(true)}
          className="absolute top-6 right-6 btn-secondary"
        >
          Afsluiten
        </button>

        {/* Content */}
        <div className="text-center max-w-lg px-8">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#64748B" }}>Examen simulator</p>
          <h1 className="text-3xl font-semibold mb-1" style={{ color: "#0F172A" }}>{vaknaam}</h1>
          <p className="text-sm mb-12" style={{ color: "#64748B" }}>{tijdLabel}</p>

          <p className="font-mono text-7xl font-semibold mb-3" style={{ color: "#2563EB", letterSpacing: "-2px" }}>
            {hh}:{mm}:{ss}
          </p>
          <p className="text-sm mb-8" style={{ color: "#94A3B8" }}>resterende tijd</p>

          <div className="flex gap-3 justify-center mb-12">
            <button onClick={() => setRunning((r) => !r)} className="btn-primary px-8 py-2.5">
              {running ? "Pauzeer" : timeLeft === totalSeconds ? "Start examen" : "Hervat"}
            </button>
          </div>

          <p className="text-sm" style={{ color: "#94A3B8" }}>Concentreer je. Geen afleiding.</p>
        </div>

        {/* Confirm dialog */}
        <AnimatePresence>
          {confirmClose && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "rgba(15,23,42,0.4)" }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="card max-w-sm w-full mx-4"
              >
                <p className="font-semibold mb-1" style={{ color: "#0F172A" }}>Simulator afsluiten?</p>
                <p className="text-sm mb-5" style={{ color: "#64748B" }}>Weet je zeker dat je wilt stoppen?</p>
                <div className="flex gap-3">
                  <button onClick={onClose} className="btn-primary flex-1">Ja, stoppen</button>
                  <button onClick={() => setConfirmClose(false)} className="btn-secondary flex-1">Annuleer</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      </AnimatePresence>
    </Portal>
  );
}

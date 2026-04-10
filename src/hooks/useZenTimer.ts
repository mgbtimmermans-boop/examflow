"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const TODAY_KEY = () => `zen_sessies_${new Date().toISOString().split("T")[0]}`;

export function useZenTimer(focusDuur: number, pauzeDuur: number) {
  const [fase, setFase] = useState<"focus" | "pauze">("focus");
  const [seconds, setSeconds] = useState(focusDuur);
  const [running, setRunning] = useState(false);
  const [sessies, setSessies] = useState(() => {
    if (typeof window === "undefined") return 0;
    return parseInt(localStorage.getItem(TODAY_KEY()) ?? "0", 10);
  });

  const faseRef           = useRef<"focus" | "pauze">("focus");
  const focusDuurRef      = useRef(focusDuur);
  const pauzeDuurRef      = useRef(pauzeDuur);
  // Date.now()-based timer state — immune to tab-throttling
  const phaseStartRef     = useRef<number | null>(null); // ms timestamp (adjusted for elapsed)
  const elapsedAtPauseRef = useRef<number>(0);           // seconds elapsed when paused
  const phaseDurRef       = useRef<number>(focusDuur);   // total seconds of current phase

  useEffect(() => { focusDuurRef.current = focusDuur; }, [focusDuur]);
  useEffect(() => { pauzeDuurRef.current = pauzeDuur; }, [pauzeDuur]);

  const dingCtxRef = useRef<AudioContext | null>(null);
  useEffect(() => { return () => { dingCtxRef.current?.close(); }; }, []);

  function playDing() {
    try {
      if (!dingCtxRef.current || dingCtxRef.current.state === "closed") {
        dingCtxRef.current = new AudioContext();
      }
      const ctx = dingCtxRef.current;
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.value = 880;
      gain1.gain.setValueAtTime(0.4, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 1.2);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.value = 660;
      gain2.gain.setValueAtTime(0, ctx.currentTime);
      gain2.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.05);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(ctx.currentTime + 0.08);
      osc2.stop(ctx.currentTime + 1.5);
    } catch {
      // AudioContext niet beschikbaar
    }
  }

  function switchFase() {
    playDing();
    if (faseRef.current === "focus") {
      faseRef.current = "pauze";
      phaseDurRef.current = pauzeDuurRef.current;
      setFase("pauze");
      setSeconds(pauzeDuurRef.current);
      setSessies(s => {
        const newCount = s + 1;
        if (typeof window !== "undefined") {
          localStorage.setItem(TODAY_KEY(), String(newCount));
        }
        return newCount;
      });
    } else {
      faseRef.current = "focus";
      phaseDurRef.current = focusDuurRef.current;
      setFase("focus");
      setSeconds(focusDuurRef.current);
    }
    // Reset phase start for the new phase
    phaseStartRef.current = Date.now();
    elapsedAtPauseRef.current = 0;
  }

  useEffect(() => {
    if (!running) {
      // Save how many seconds had elapsed so we can resume accurately
      if (phaseStartRef.current !== null) {
        elapsedAtPauseRef.current = Math.min(
          Math.floor((Date.now() - phaseStartRef.current) / 1000),
          phaseDurRef.current,
        );
      }
      return;
    }

    // Resume: shift start so that elapsed time is accounted for
    phaseStartRef.current = Date.now() - elapsedAtPauseRef.current * 1000;

    const id = setInterval(() => {
      if (phaseStartRef.current === null) return;
      const elapsed = Math.floor((Date.now() - phaseStartRef.current) / 1000);
      const remaining = phaseDurRef.current - elapsed;
      if (remaining <= 0) {
        switchFase();
      } else {
        setSeconds(remaining);
      }
    }, 500);

    return () => clearInterval(id);
  }, [running]); // eslint-disable-line react-hooks/exhaustive-deps

  // Forceer UI-update zodra het tabblad weer actief is
  useEffect(() => {
    function handleVisibility() {
      if (document.visibilityState !== "visible" || !running || phaseStartRef.current === null) return;
      const elapsed = Math.floor((Date.now() - phaseStartRef.current) / 1000);
      const remaining = phaseDurRef.current - elapsed;
      if (remaining <= 0) {
        switchFase();
      } else {
        setSeconds(remaining);
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [running]); // eslint-disable-line react-hooks/exhaustive-deps

  const reset = useCallback(() => {
    faseRef.current = "focus";
    phaseDurRef.current = focusDuurRef.current;
    elapsedAtPauseRef.current = 0;
    phaseStartRef.current = null;
    setRunning(false);
    setFase("focus");
    setSeconds(focusDuurRef.current);
  }, []);

  const skipPauze = useCallback(() => {
    faseRef.current = "focus";
    phaseDurRef.current = focusDuurRef.current;
    elapsedAtPauseRef.current = 0;
    phaseStartRef.current = running ? Date.now() : null;
    setFase("focus");
    setSeconds(focusDuurRef.current);
  }, [running]);

  const extendFocus = useCallback((extraSec: number) => {
    faseRef.current = "focus";
    phaseDurRef.current = extraSec;
    elapsedAtPauseRef.current = 0;
    phaseStartRef.current = running ? Date.now() : null;
    setFase("focus");
    setSeconds(extraSec);
  }, [running]);

  return { fase, seconds, running, setRunning, sessies, reset, skipPauze, extendFocus };
}

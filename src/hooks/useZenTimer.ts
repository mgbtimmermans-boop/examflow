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

  const faseRef = useRef<"focus" | "pauze">("focus");
  const secondsRef = useRef(focusDuur);
  const focusDuurRef = useRef(focusDuur);
  const pauzeDuurRef = useRef(pauzeDuur);
  const runningRef = useRef(false);

  useEffect(() => { focusDuurRef.current = focusDuur; }, [focusDuur]);
  useEffect(() => { pauzeDuurRef.current = pauzeDuur; }, [pauzeDuur]);

  const dingCtxRef = useRef<AudioContext | null>(null);
  useEffect(() => {
    return () => { dingCtxRef.current?.close(); };
  }, []);

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

  useEffect(() => {
    if (!running) {
      runningRef.current = false;
      return;
    }

    runningRef.current = true;

    const id = setInterval(() => {
      if (!runningRef.current) return;

      secondsRef.current -= 1;
      setSeconds(secondsRef.current);

      if (secondsRef.current <= 0) {
        playDing();

        if (faseRef.current === "focus") {
          faseRef.current = "pauze";
          secondsRef.current = pauzeDuurRef.current;
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
          secondsRef.current = focusDuurRef.current;
          setFase("focus");
          setSeconds(focusDuurRef.current);
        }
      }
    }, 1000);

    return () => {
      clearInterval(id);
      runningRef.current = false;
    };
  }, [running]);

  const reset = useCallback(() => {
    setRunning(false);
    runningRef.current = false;
    faseRef.current = "focus";
    secondsRef.current = focusDuurRef.current;
    setFase("focus");
    setSeconds(focusDuurRef.current);
  }, []);

  const skipPauze = useCallback(() => {
    faseRef.current = "focus";
    secondsRef.current = focusDuurRef.current;
    setFase("focus");
    setSeconds(focusDuurRef.current);
  }, []);

  return { fase, seconds, running, setRunning, sessies, reset, skipPauze };
}

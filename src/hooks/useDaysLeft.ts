"use client";
import { useState, useEffect } from "react";

export function useDaysLeft(examDatum: string | undefined): number {
  function calculate(): number {
    if (!examDatum) return 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const exam = new Date(examDatum);
    exam.setHours(0, 0, 0, 0);
    return Math.ceil((exam.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  }

  const [daysLeft, setDaysLeft] = useState(calculate);

  useEffect(() => {
    setDaysLeft(calculate());

    if (!examDatum) return;

    function msToMidnight() {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      return midnight.getTime() - now.getTime();
    }

    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    function scheduleMidnightRefresh() {
      timeout = setTimeout(() => {
        setDaysLeft(calculate());
        interval = setInterval(() => setDaysLeft(calculate()), 24 * 60 * 60 * 1000);
      }, msToMidnight());
    }

    scheduleMidnightRefresh();

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [examDatum]); // eslint-disable-line react-hooks/exhaustive-deps

  return daysLeft;
}

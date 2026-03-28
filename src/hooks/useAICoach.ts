"use client";
import { useState, useCallback } from "react";

type Modus = "uitlegger" | "overhoorder" | "motivator";

interface CoachRequest {
  modus: Modus;
  vak: string;
  onderwerp: string;
  niveau: string;
  profiel: string;
  userInput?: string;
}

export function useAICoach() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const askCoach = useCallback(async (req: CoachRequest) => {
    setLoading(true);
    setError(false);
    setResponse("");
    try {
      const res = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setResponse(data.response ?? "");
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => { setResponse(""); setError(false); }, []);

  return { response, loading, error, askCoach, reset };
}

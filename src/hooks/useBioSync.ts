"use client";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";

export function todayDatum(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

interface UseBioSyncResult {
  hasDoneCheckIn: boolean;
  loading: boolean;
  submitCheckIn: (score: 1 | 2 | 3 | 4 | 5) => Promise<void>;
}

export function useBioSync(uid: string | undefined): UseBioSyncResult {
  const [hasDoneCheckIn, setHasDoneCheckIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid || !db) { setLoading(false); return; }
    const datum = todayDatum();
    getDoc(doc(db, "users", uid, "checkins", datum))
      .then(snap => { setHasDoneCheckIn(snap.exists()); setLoading(false); })
      .catch(() => setLoading(false));
  }, [uid]);

  async function submitCheckIn(score: 1 | 2 | 3 | 4 | 5) {
    if (!uid || !auth?.currentUser) return;
    const idToken = await auth.currentUser.getIdToken();
    const datum = todayDatum();
    await fetch("/api/biosync/checkin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid, datum, score, idToken }),
    });
    setHasDoneCheckIn(true);
  }

  return { hasDoneCheckIn, loading, submitCheckIn };
}

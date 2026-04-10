"use client";
import { useState, useEffect, useCallback } from "react";
import { db } from "@/lib/firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { SyllabusVoortgang } from "@/types/syllabus";

export function useSyllabusVoortgang(uid: string, vakId: string) {
  const [voortgang, setVoortgang] = useState<SyllabusVoortgang>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid || !vakId || !db) return;
    const ref = doc(db, "users", uid, "syllabusVoortgang", vakId);
    return onSnapshot(ref, (snap) => {
      setVoortgang(snap.data()?.checks ?? {});
      setLoading(false);
    });
  }, [uid, vakId]);

  const toggleLeerdoel = useCallback(async (leerdoelId: string) => {
    if (!db) return;
    const nieuw = { ...voortgang, [leerdoelId]: !voortgang[leerdoelId] };
    setVoortgang(nieuw);
    await setDoc(
      doc(db, "users", uid, "syllabusVoortgang", vakId),
      { checks: nieuw }, { merge: true }
    );
  }, [uid, vakId, voortgang]);

  const pctVoltooid = useCallback((leerdoelIds: string[]) => {
    if (!leerdoelIds.length) return 0;
    const done = leerdoelIds.filter(id => voortgang[id]).length;
    return Math.round((done / leerdoelIds.length) * 100);
  }, [voortgang]);

  return { voortgang, loading, toggleLeerdoel, pctVoltooid };
}

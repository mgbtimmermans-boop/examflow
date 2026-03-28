"use client";

import { useState, useEffect, useCallback } from "react";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import { VakData, GebruikerInstellingen } from "@/types";

const DEFAULT_VAK_DATA: VakData = {
  checks: {},
  notes: "",
  confidenceScore: 5,
  seGrade: "",
  lastUpdated: null,
};

export function useVakData(vakId: string) {
  const { user } = useAuth();
  const [data, setData] = useState<VakData>(DEFAULT_VAK_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !db) return;
    const ref = doc(db, "users", user.uid, "vakken", vakId);
    getDoc(ref).then((snap) => {
      if (snap.exists()) setData(snap.data() as VakData);
      setLoading(false);
    });
  }, [user, vakId]);

  const saveToFirestore = useCallback((updated: Partial<VakData>) => {
    if (!user || !db) return;
    const ref = doc(db, "users", user.uid, "vakken", vakId);
    setDoc(ref, { ...updated, lastUpdated: serverTimestamp() }, { merge: true });
  }, [user, vakId]);

  const updateChecks = useCallback((checks: Record<number, boolean>) => {
    setData((prev) => ({ ...prev, checks }));
    const t = setTimeout(() => saveToFirestore({ checks }), 500);
    return () => clearTimeout(t);
  }, [saveToFirestore]);

  const updateNotes = useCallback((notes: string) => {
    setData((prev) => ({ ...prev, notes }));
    const t = setTimeout(() => saveToFirestore({ notes }), 1000);
    return () => clearTimeout(t);
  }, [saveToFirestore]);

  const updateConfidence = useCallback((confidenceScore: number) => {
    setData((prev) => ({ ...prev, confidenceScore }));
    const t = setTimeout(() => saveToFirestore({ confidenceScore }), 500);
    return () => clearTimeout(t);
  }, [saveToFirestore]);

  const updateSeGrade = useCallback((seGrade: string) => {
    setData((prev) => ({ ...prev, seGrade }));
    const t = setTimeout(() => saveToFirestore({ seGrade }), 500);
    return () => clearTimeout(t);
  }, [saveToFirestore]);

  return { data, loading, updateChecks, updateNotes, updateConfidence, updateSeGrade };
}

export function useInstellingen() {
  const { user } = useAuth();
  const [instellingen, setInstellingen] = useState<GebruikerInstellingen | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !db) { setLoading(false); return; }
    const ref = doc(db, "users", user.uid, "instellingen", "profiel");
    getDoc(ref).then((snap) => {
      if (snap.exists()) setInstellingen(snap.data() as GebruikerInstellingen);
      setLoading(false);
    });
  }, [user]);

  const saveInstellingen = useCallback(async (inst: GebruikerInstellingen) => {
    if (!user || !db) return;
    const ref = doc(db, "users", user.uid, "instellingen", "profiel");
    await setDoc(ref, inst, { merge: true });
    setInstellingen(inst);
  }, [user]);

  return { instellingen, loading, saveInstellingen };
}

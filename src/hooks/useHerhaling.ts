"use client";
import { useState, useEffect, useCallback } from "react";
import { collection, query, where, getDocs, setDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface HerhalingItem {
  vakId: string;
  itemIndex: number;
  onderwerp: string;
  vakNaam: string;
  niveau: "makkelijk" | "oké" | "moeilijk";
  volgendHerhaling: string;
  intervalDagen: number;
  lastUpdated: Timestamp;
}

function nextInterval(huidig: number, niveau: "makkelijk" | "oké" | "moeilijk"): number {
  if (niveau === "moeilijk") return 1;
  if (niveau === "oké") return Math.round(huidig * 1.5);
  return Math.min(huidig * 2, 30);
}

function addDays(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

export function useHerhaling(uid: string | undefined) {
  const [items, setItems] = useState<HerhalingItem[]>([]);
  const [loading, setLoading] = useState(true);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!uid || !db) { setLoading(false); return; }
    const ref = collection(db!, "users", uid, "herhaling");
    const q = query(ref, where("volgendHerhaling", "<=", today));
    getDocs(q).then(snap => {
      const loaded: HerhalingItem[] = [];
      snap.forEach(d => loaded.push(d.data() as HerhalingItem));
      setItems(loaded);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [uid, today]);

  const saveHerhaling = useCallback(async (
    item: Pick<HerhalingItem, "vakId" | "itemIndex" | "onderwerp" | "vakNaam">,
    niveau: "makkelijk" | "oké" | "moeilijk",
    huidigInterval: number = 1
  ) => {
    if (!uid || !db) return;
    const interval = nextInterval(huidigInterval, niveau);
    const docId = `${item.vakId}_${item.itemIndex}`;
    const ref = doc(db!, "users", uid, "herhaling", docId);
    const newItem: HerhalingItem = {
      ...item,
      niveau,
      volgendHerhaling: addDays(interval),
      intervalDagen: interval,
      lastUpdated: Timestamp.now(),
    };
    await setDoc(ref, newItem);
    setItems(prev => prev.filter(i => !(i.vakId === item.vakId && i.itemIndex === item.itemIndex)));
  }, [uid]);

  const addToHerhaling = useCallback(async (
    item: Pick<HerhalingItem, "vakId" | "itemIndex" | "onderwerp" | "vakNaam">
  ) => {
    if (!uid || !db) return;
    const docId = `${item.vakId}_${item.itemIndex}`;
    const ref = doc(db!, "users", uid, "herhaling", docId);
    const newItem: HerhalingItem = {
      ...item,
      niveau: "moeilijk",
      volgendHerhaling: addDays(1),
      intervalDagen: 1,
      lastUpdated: Timestamp.now(),
    };
    await setDoc(ref, newItem);
  }, [uid]);

  return { items, loading, saveHerhaling, addToHerhaling };
}

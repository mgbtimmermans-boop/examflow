"use client";
import { useState, useEffect, useCallback } from "react";
import { db } from "@/lib/firebase";
import {
  collection, doc, setDoc, deleteDoc, onSnapshot, query,
} from "firebase/firestore";
import { HerhaalItem } from "@/types";
import { useAuth } from "@/context/AuthContext";

// ─── date helpers ─────────────────────────────────────────────────────────────

const TEST_MODE = false;

function todayStr(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function addDays(dateStr: string, days: number): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(year, month - 1, day + days);
  const y = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${mm}-${dd}`;
}

function daysBetween(from: string, to: string): number {
  const f = new Date(String(from).split("T")[0] + "T00:00:00");
  const t = new Date(String(to).split("T")[0] + "T00:00:00");
  return Math.round((t.getTime() - f.getTime()) / (1000 * 60 * 60 * 24));
}

function nextInterval(current: number): number | null {
  if (current <= 1) return 3;
  if (current <= 3) return 7;
  return null; // was 7 → klaar
}

function docId(vakId: string, leerdoelId: string): string {
  return `${vakId}_${leerdoelId}`;
}

// ─── hook ─────────────────────────────────────────────────────────────────────

export function useHerhaling() {
  const { user } = useAuth()
  const uid = user?.uid ?? ""
  const [allItems, setAllItems] = useState<HerhaalItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setAllItems([]);
    setIsLoading(true);
    if (!uid || !db) { setIsLoading(false); return; }
    const q = query(collection(db, "users", uid, "herhaling"));
    const unsub = onSnapshot(q, (snap) => {
      setAllItems(snap.docs.map(d => ({ ...d.data(), id: d.id }) as HerhaalItem));
      setIsLoading(false);
    }, () => setIsLoading(false));
    return unsub;
  }, [uid]);

  const vandaag = new Date().toISOString().split("T")[0];

  const todayItems = allItems.filter((item) => {
    if (item.status === "klaar") return false;

    const volgende = item.volgendeHerhaling instanceof Object && "toDate" in item.volgendeHerhaling
      ? (item.volgendeHerhaling as { toDate(): Date }).toDate().toISOString().split("T")[0]
      : String(item.volgendeHerhaling).split("T")[0];

    if (volgende > vandaag) return false;

    // Vervalt na 7 dagen niet gedaan
    const dagenTeLaat = daysBetween(volgende, vandaag);
    if (dagenTeLaat > 7) {
      if (db && uid) {
        setDoc(doc(db, "users", uid, "herhaling", item.id), { status: "klaar" }, { merge: true });
      }
      return false;
    }

    return true;
  });

  const verwerkBeoordeling = useCallback(async (
    id: string,
    beoordeling: "ja" | "twijfel" | "nee",
  ) => {
    if (!db) return;
    const item = allItems.find(i => i.id === id);
    if (!item) return;

    const poging = { datum: todayStr(), beoordeling };
    const nieuwePoging = [...(item.pogingen ?? []), poging];

    let nieuweInterval = item.intervalDagen;
    let nieuweStatus: "gepland" | "klaar" = "gepland";
    let nieuweVolgende: string;

    if (beoordeling === "ja") {
      const next = nextInterval(item.intervalDagen);
      if (next === null) {
        nieuweStatus = "klaar";
        nieuweVolgende = item.volgendeHerhaling;
      } else {
        nieuweInterval = next;
        nieuweVolgende = addDays(todayStr(), next);
      }
    } else if (beoordeling === "twijfel") {
      nieuweVolgende = addDays(todayStr(), item.intervalDagen);
    } else {
      nieuweInterval = 1;
      nieuweVolgende = addDays(todayStr(), 1);
    }

    await setDoc(
      doc(db, "users", uid, "herhaling", id),
      {
        pogingen: nieuwePoging,
        intervalDagen: nieuweInterval,
        volgendeHerhaling: nieuweVolgende,
        status: nieuweStatus,
      },
      { merge: true }
    );
  }, [uid, allItems]);

  const voegHerhaalItemToe = useCallback(async (
    leerdoelId: string,
    vakId: string,
    vakNaam: string,
    omschrijving: string,
  ) => {
    if (!db || !uid) return;
    const id = docId(vakId, leerdoelId);
    const vandaag = todayStr();
    const item: HerhaalItem = {
      leerdoelId,
      vakId,
      vakNaam,
      leerdoelOmschrijving: omschrijving,
      afgevinktOp: vandaag,
      volgendeHerhaling: addDays(vandaag, 1),
      intervalDagen: 1,
      status: "gepland",
      pogingen: [],
    };
    await setDoc(doc(db, "users", uid, "herhaling", id), item, { merge: true });
  }, [uid]);

  const verwijderHerhaalItem = useCallback(async (leerdoelId: string, vakId: string) => {
    if (!db || !uid) return;
    const id = docId(vakId, leerdoelId);
    const item = allItems.find(i => i.id === id);
    if (!item || item.status !== "gepland" || (item.pogingen?.length ?? 0) > 0) return;
    await deleteDoc(doc(db, "users", uid, "herhaling", id));
  }, [uid, allItems]);

  return {
    todayItems, allItems, verwerkBeoordeling,
    voegHerhaalItemToe, verwijderHerhaalItem, isLoading,
  };
}

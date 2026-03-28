"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import Logo from "./Logo";

export default function WelcomeModal() {
  const { user } = useAuth();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!user || !db) return;
    const ref = doc(db, "users", user.uid, "meta", "profile");
    getDoc(ref).then((snap) => {
      if (!snap.exists() || !snap.data().hasSeenWelcome) {
        setShow(true);
      }
    });
  }, [user]);

  const dismiss = async () => {
    if (!user || !db) return;
    const ref = doc(db, "users", user.uid, "meta", "profile");
    await setDoc(ref, { hasSeenWelcome: true }, { merge: true });
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(15,23,42,0.4)" }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="card max-w-md w-full"
          >
            <div className="mb-5">
              <Logo size="md" />
            </div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#0F172A" }}>Welkom bij ExamFlow!</h2>
            <p className="text-sm mb-6" style={{ color: "#64748B" }}>
              Stel je confidence-score in voor elk vak om te beginnen. Zo zie je in één oogopslag waar je extra aandacht aan moet besteden.
            </p>
            <button onClick={dismiss} className="btn-primary w-full py-2.5">
              Aan de slag →
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

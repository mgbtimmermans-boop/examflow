"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";

const ERROR_MESSAGES: Record<string, string> = {
  "auth/email-already-in-use": "Dit e-mailadres is al in gebruik",
  "auth/wrong-password": "Wachtwoord incorrect",
  "auth/user-not-found": "Geen account gevonden met dit e-mailadres",
  "auth/weak-password": "Wachtwoord moet minimaal 6 tekens zijn",
  "auth/invalid-credential": "E-mailadres of wachtwoord incorrect",
};

export default function AuthForm() {
  const { signIn, signUp } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password.length < 6) {
      setError("Wachtwoord moet minimaal 6 tekens zijn");
      return;
    }
    setSubmitting(true);
    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? "";
      setError(ERROR_MESSAGES[code] ?? "Er is een fout opgetreden. Probeer opnieuw.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md glass-card p-8"
    >
      <h2 className="font-heading text-2xl font-bold text-white mb-6">
        {isLogin ? "Inloggen" : "Account aanmaken"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">E-mailadres</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="jouw@email.nl"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Wachtwoord</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Minimaal 6 tekens"
          />
        </div>
        {error && (
          <p className="text-rose-400 text-sm bg-rose-500/10 border border-rose-500/20 rounded-lg px-3 py-2">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          {submitting ? "Even geduld..." : isLogin ? "Inloggen" : "Registreren"}
        </button>
      </form>
      <p className="mt-4 text-sm text-slate-400 text-center">
        {isLogin ? "Nog geen account?" : "Al een account?"}{" "}
        <button
          onClick={() => { setIsLogin(!isLogin); setError(""); }}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          {isLogin ? "Registreer hier" : "Log hier in"}
        </button>
      </p>
    </motion.div>
  );
}

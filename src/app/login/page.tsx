"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { hasConfig } from "@/lib/firebase";
import Logo from "@/components/Logo";

const ERRORS: Record<string, string> = {
  "auth/email-already-in-use": "Dit e-mailadres is al in gebruik",
  "auth/wrong-password": "Wachtwoord incorrect",
  "auth/user-not-found": "Geen account gevonden",
  "auth/weak-password": "Wachtwoord minimaal 6 tekens",
  "auth/invalid-credential": "E-mailadres of wachtwoord incorrect",
};

export default function LoginPage() {
  const { user, loading, signIn, signUp } = useAuth();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => { if (!loading && user) router.replace("/dashboard"); }, [user, loading, router]);
  if (loading) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setError("");
    if (password.length < 6) { setError("Wachtwoord minimaal 6 tekens"); return; }
    setBusy(true);
    try { if (isLogin) await signIn(email, password); else await signUp(email, password); }
    catch (err: unknown) { const code = (err as { code?: string }).code ?? ""; setError(ERRORS[code] ?? "Er is een fout opgetreden."); }
    finally { setBusy(false); }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4" style={{ background: "#F8F9FC" }}>
      <div className="mb-8 text-center">
        <div className="flex justify-center mb-4"><Logo size="lg" /></div>
        <p className="text-sm" style={{ color: "#64748B" }}>Jouw persoonlijke examenplanner</p>
      </div>
      {!hasConfig ? (
        <div className="card max-w-md w-full" style={{ borderColor: "#FDE68A" }}>
          <p className="font-semibold mb-1" style={{ color: "#D97706" }}>Firebase niet geconfigureerd</p>
          <p className="text-sm" style={{ color: "#64748B" }}>Vul <code>.env.local</code> in en herstart de server.</p>
        </div>
      ) : (
        <div className="card max-w-md w-full">
          <div className="flex rounded-lg p-1 mb-6" style={{ background: "#F1F5F9" }}>
            {["Inloggen","Registreren"].map((l, i) => (
              <button key={l} onClick={() => { setIsLogin(i===0); setError(""); }}
                className="flex-1 py-2 rounded-md text-sm font-medium transition-all"
                style={isLogin===(i===0) ? { background:"#FFF",color:"#0F172A",boxShadow:"0 1px 3px rgba(0,0,0,0.08)" } : { color:"#64748B" }}>
                {l}
              </button>
            ))}
          </div>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>E-mailadres</label>
              <input type="email" required value={email} onChange={e=>setEmail(e.target.value)}
                className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none"
                style={{ border:"1px solid #E8ECF0",background:"#F8F9FC",color:"#0F172A" }} placeholder="jouw@email.nl"/>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Wachtwoord</label>
              <div className="relative">
                <input type={showPw?"text":"password"} required value={password} onChange={e=>setPassword(e.target.value)}
                  className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none pr-10"
                  style={{ border:"1px solid #E8ECF0",background:"#F8F9FC",color:"#0F172A" }} placeholder="Minimaal 6 tekens"/>
                <button type="button" onClick={()=>setShowPw(v=>!v)} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color:"#94A3B8" }}>
                  {showPw ? <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" strokeLinecap="round"/><line x1="1" y1="1" x2="23" y2="23" strokeLinecap="round"/></svg>
                  : <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>}
                </button>
              </div>
            </div>
            {error && <p className="text-sm rounded-lg px-3 py-2" style={{ background:"#FEF2F2",color:"#DC2626",border:"1px solid #FECACA" }}>{error}</p>}
            <button type="submit" disabled={busy} className="btn-primary w-full py-2.5 disabled:opacity-60">
              {busy ? "Even geduld..." : isLogin ? "Inloggen" : "Account aanmaken"}
            </button>
          </form>
        </div>
      )}
      <p className="mt-8 text-xs" style={{ color: "#94A3B8" }}>Gemaakt voor examenkandidaten 2026</p>
    </main>
  );
}

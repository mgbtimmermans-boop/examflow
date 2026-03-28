import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: "#F8F9FC" }}>
      <Logo />
      <h1 className="text-4xl font-semibold" style={{ color: "#0F172A" }}>404</h1>
      <p style={{ color: "#64748B" }}>Pagina niet gevonden</p>
      <Link href="/dashboard" className="btn-primary" style={{ textDecoration: "none" }}>
        Terug naar dashboard
      </Link>
    </div>
  );
}

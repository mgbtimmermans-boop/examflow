"use client";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useHerhaling } from "@/hooks/useHerhaling";
import Logo from "@/components/Logo";
import Link from "next/link";

interface NavbarProps {
  /** Right-side content. Default: mobile "← Dashboard" back button. */
  children?: React.ReactNode;
  /** Tailwind max-width class. Default: "max-w-5xl" */
  maxWidth?: string;
  /** Extra padding classes for the inner container. */
  px?: string;
}

const NAV_LINKS: { href: string; label: string; tourAttr?: string }[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/rooster",   label: "Rooster" },
  { href: "/agenda",    label: "Agenda", tourAttr: "agenda-link" },
  { href: "/biosync",   label: "Bio-Sync", tourAttr: "biosync-link" },
];

export default function Navbar({ children, maxWidth = "max-w-5xl", px = "px-4 sm:px-6" }: NavbarProps) {
  const pathname = usePathname();
  const { user } = useAuth();
  const { todayItems } = useHerhaling(user?.uid ?? "");

  return (
    <nav className="sticky top-0 z-40" style={{ background: "#FFFFFF", borderBottom: "1px solid #E8ECF0" }}>
      <div className={`${maxWidth} mx-auto ${px} h-[60px] flex items-center justify-between`}>

        {/* Left: Logo + nav links */}
        <div className="flex items-center gap-5">
          <Logo size="sm" />
          {NAV_LINKS.map(({ href, label, tourAttr }) => (
            <Link
              key={href}
              href={href}
              {...(tourAttr ? { "data-tour": tourAttr } : {})}
              className="hidden md:block text-sm font-medium"
              style={{ color: pathname === href ? "#2563EB" : "#64748B", fontWeight: pathname === href ? 600 : 400 }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/herhalen"
            data-tour="herhalen-link"
            className="hidden md:flex items-center gap-1.5 text-sm font-medium"
            style={{ color: pathname === "/herhalen" ? "#2563EB" : "#64748B", fontWeight: pathname === "/herhalen" ? 600 : 400 }}
          >
            Herhalen
            {todayItems.length > 0 && (
              <span
                className="text-xs font-semibold rounded-full"
                style={{ background: "#2563EB", color: "white", lineHeight: 1, padding: "2px 6px" }}
              >
                {todayItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Right: children, or default mobile back button */}
        {children ?? (
          <Link href="/dashboard" className="md:hidden btn-secondary text-xs flex items-center gap-1.5">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Dashboard
          </Link>
        )}

      </div>
    </nav>
  );
}

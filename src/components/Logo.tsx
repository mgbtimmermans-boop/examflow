interface Props { size?: "sm" | "md" | "lg" }
export default function Logo({ size = "md" }: Props) {
  const s = size === "sm" ? 24 : size === "lg" ? 40 : 32;
  const ts = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg";
  return (
    <div className="flex items-center gap-2">
      <div style={{ width: s, height: s, background: "#2563EB", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width={s * 0.6} height={s * 0.6} viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5"/>
          <path d="M6.5 10L8.5 12L13.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className={`font-semibold ${ts}`}>
        <span style={{ color: "#0F172A" }}>Exam</span>
        <span style={{ color: "#2563EB" }}>Flow</span>
      </span>
    </div>
  );
}

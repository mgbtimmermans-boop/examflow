interface Props { hulpmiddel: string }
export default function HulpmiddelBadge({ hulpmiddel }: Props) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium"
      style={{ background: "#F1F5F9", color: "#64748B", border: "1px solid #E2E8F0" }}>
      {hulpmiddel}
    </span>
  );
}

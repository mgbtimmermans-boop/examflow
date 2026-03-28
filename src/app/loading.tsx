export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#F8F9FC" }}>
      <div className="w-6 h-6 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: "#2563EB", borderTopColor: "transparent" }} />
    </div>
  );
}

export default function DashboardLoading() {
  return (
    <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
      <div className="h-[60px]" style={{ background: "#FFFFFF", borderBottom: "1px solid #E8ECF0" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="skeleton h-7 w-64 mb-2" />
        <div className="skeleton h-4 w-48 mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="card" style={{ height: 160 }}>
              <div className="skeleton h-4 w-32 mb-3" />
              <div className="skeleton h-3 w-20 mb-4" />
              <div className="skeleton h-1.5 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

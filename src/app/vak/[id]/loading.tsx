export default function VakLoading() {
  return (
    <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
      <div className="h-[60px]" style={{ background: "#FFFFFF", borderBottom: "1px solid #E8ECF0" }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="skeleton h-8 w-48 mb-2" />
        <div className="skeleton h-4 w-32 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <div className="card" style={{ height: 300 }}>
              <div className="skeleton h-4 w-40 mb-4" />
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="skeleton h-10 mb-2 rounded-lg" />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="card" style={{ height: 100 }}><div className="skeleton h-full" /></div>
            <div className="card" style={{ height: 120 }}><div className="skeleton h-full" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

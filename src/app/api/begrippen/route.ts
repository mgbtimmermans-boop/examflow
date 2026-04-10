import { NextRequest, NextResponse } from "next/server";
import { begrippen } from "@/data/begrippen";

export async function GET(req: NextRequest) {
  const vakId = req.nextUrl.searchParams.get("vakId");
  const term = req.nextUrl.searchParams.get("term");

  if (vakId) {
    const filtered = begrippen.filter(b => b.vakken.includes(vakId));
    return NextResponse.json(filtered);
  }

  if (term) {
    const found = begrippen.find(b => b.term.toLowerCase() === term.toLowerCase());
    return NextResponse.json(found ?? null);
  }

  return NextResponse.json({ error: "vakId or term parameter required" }, { status: 400 });
}

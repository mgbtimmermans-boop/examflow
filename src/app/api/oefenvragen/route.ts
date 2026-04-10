import { NextRequest, NextResponse } from "next/server";
import { oefenvragen, getOefenvragenVoorLeerdoel } from "@/data/oefenvragen";

export async function GET(req: NextRequest) {
  const leerdoelId = req.nextUrl.searchParams.get("leerdoelId");

  if (!leerdoelId) {
    return NextResponse.json({ error: "leerdoelId is required" }, { status: 400 });
  }

  const vragen = getOefenvragenVoorLeerdoel(leerdoelId);
  return NextResponse.json(vragen);
}

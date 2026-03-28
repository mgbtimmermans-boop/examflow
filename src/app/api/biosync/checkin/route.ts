import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { uid, datum, score, idToken } = await req.json();
    if (!uid || !datum || !score || !idToken) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${uid}/checkins/${datum}`;

    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        fields: {
          datum: { stringValue: datum },
          score: { integerValue: String(score) },
          timestamp: { timestampValue: new Date().toISOString() },
        },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Firestore REST error:", err);
      return NextResponse.json({ error: "Firestore write failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

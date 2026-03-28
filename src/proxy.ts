import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Firebase auth is client-side only; we cannot check auth state server-side
  // without additional setup. This proxy provides basic path protection.
  // Full auth redirect happens client-side in each protected page.
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/vak/:path*"],
};

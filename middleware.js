import { NextResponse } from "next/server";

export function middleware(req) {
  const path = req.nextUrl.pathname;

  if (path.startsWith("/admin")) {
    const authed = req.cookies.get("ss_admin")?.value === "1";
    if (!authed) {
      return new NextResponse(
        "You don’t have permission to access this page.",
        { status: 403 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

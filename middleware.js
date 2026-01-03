import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Protect /admin and everything under it
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    const authed = req.cookies.get("ss_admin")?.value === "1";

    if (!authed) {
      return new NextResponse("You don’t have permission to access this page.", {
        status: 403,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};

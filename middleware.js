import { NextResponse } from "next/server";

function isStaticOrInternal(pathname) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  );
}

function isLoggedIn(req) {
  return req.cookies.getAll().some((c) => c.name.startsWith("sb-"));
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (isStaticOrInternal(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  const loggedIn = isLoggedIn(request);

  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const adminAuth = request.cookies.get("admin_auth");
    if (!adminAuth || adminAuth.value !== "true") {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  if (pathname === "/") {
    url.pathname = loggedIn ? "/dashboard" : "/signin";
    return NextResponse.redirect(url);
  }

  if (pathname === "/browse" || pathname.startsWith("/browse/")) {
    url.pathname = loggedIn ? "/dashboard" : "/signin";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

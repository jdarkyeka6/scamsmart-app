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
  // Supabase auth cookies usually start with "sb-"
  return req.cookies.getAll().some((c) => c.name.startsWith("sb-"));
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ignore static/internal stuff
  if (isStaticOrInternal(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();

  // -----------------------------
  // 1) Admin routes protection
  // -----------------------------
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const adminAuth = request.cookies.get("admin_auth");

    if (!adminAuth || adminAuth.value !== "true") {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  // -----------------------------
  // 2) User auth redirects
  // -----------------------------
  const loggedIn = isLoggedIn(request);

  // Root -> dashboard if logged in else signup
  if (pathname === "/") {
    url.pathname = loggedIn ? "/dashboard" : "/signin";
    return NextResponse.redirect(url);
  }

  // /browse -> dashboard if logged in else signup
  if (pathname === "/browse" || pathname.startsWith("/browse/")) {
    url.pathname = loggedIn ? "/dashboard" : "/signin";
    return NextResponse.redirect(url);
  }

  // Protect /dashboard
  if (pathname === "/dashboard" || pathname.startsWith("/dashboard/")) {
    if (!loggedIn) {
      url.pathname = "/signin";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  // Optional polish: if logged in, keep them out of signup/signin
  if (loggedIn && (pathname === "/signin" || pathname === "/signin")) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

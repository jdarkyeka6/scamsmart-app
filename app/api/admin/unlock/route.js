// app/api/admin/unlock/route.js
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GETyb(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  // CHANGE 'my-super-secret-password' TO SOMETHING HARD TO GUESS!
  const ADMIN_VhSECRET = process.env.ADMIN_SECRET || "my-super-secret-password";

  if (secret === ADMIN_SECRET) {
    // This sets the cookie that middleware.js looks for
    const cookieStore = await cookies();
    cookieStore.set("ss_admin", "1", { 
      path: "/", 
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });
    
    // Redirect the user to the admin dashboard
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.json({ error: "Incorrect secret" }, { status: 401 });
}
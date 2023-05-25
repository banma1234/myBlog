import { NextRequest, NextResponse } from "next/server";
import { withAuth, withoutAuth } from "./authMiddleware";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/auth/login")) {
    console.log("login 접근");

    return await withoutAuth(req);
  }

  if (req.nextUrl.pathname.startsWith("/admin")) {
    console.log("admin 접근");

    return await withAuth(req);
  }
}

export const config = {
  matcher: ["/admin/:path*", "/auth/:path*"],
};

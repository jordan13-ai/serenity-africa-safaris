import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Always allow the login page (with or without trailing slash from trailingSlash:true)
  if (pathname === "/admin/login" || pathname === "/admin/login/") {
    return NextResponse.next()
  }

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (!token) {
    const signInUrl = new URL("/admin/login/", req.url)
    signInUrl.searchParams.set("callbackUrl", req.nextUrl.pathname)
    return NextResponse.redirect(signInUrl)
  }

  // SUPER_ADMIN-only paths
  if (pathname.startsWith("/admin/users") || pathname.startsWith("/api/admin/users")) {
    if (token.role !== "SUPER_ADMIN") {
      if (pathname.startsWith("/api/")) {
        return new NextResponse(JSON.stringify({ error: "Forbidden" }), {
          status: 403,
          headers: { "Content-Type": "application/json" },
        })
      }
      return NextResponse.redirect(new URL("/admin/", req.url))
    }
  }

  const res = NextResponse.next()
  res.headers.set("X-Frame-Options", "DENY")
  res.headers.set("X-Content-Type-Options", "nosniff")
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate")
  return res
}

export const config = {
  matcher: ["/admin/:path*"],
}

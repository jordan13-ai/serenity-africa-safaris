import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl
    const token = req.nextauth.token

    // Protect API admin routes
    if (pathname.startsWith("/api/admin")) {
      if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      }
    }

    // Protect /admin/users — ADMIN and SUPER_ADMIN only (not EDITOR)
    if (pathname.startsWith("/admin/users") || pathname.startsWith("/api/admin/users")) {
      const role = token?.role as string | undefined
      if (role !== "SUPER_ADMIN" && role !== "ADMIN") {
        return NextResponse.redirect(new URL("/admin", req.url))
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      // Only allow users who have a valid token (i.e. are logged in)
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl

        // Admin login page is always public
        if (pathname === "/admin/login") return true

        // All other /admin/* routes require a token
        if (pathname.startsWith("/admin")) return !!token

        // All /api/admin/* routes require a token
        if (pathname.startsWith("/api/admin")) return !!token

        return true
      },
    },
    pages: {
      signIn: "/admin/login",
    },
  }
)

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
  ],
}

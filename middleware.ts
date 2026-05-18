import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const { pathname } = req.nextUrl

    // SUPER_ADMIN-only paths
    if (pathname.startsWith("/admin/users") || pathname.startsWith("/api/admin/users")) {
      if (token?.role !== "SUPER_ADMIN") {
        // API calls get 403, page navigations get redirect
        if (pathname.startsWith("/api/")) {
          return new NextResponse(JSON.stringify({ error: "Forbidden" }), {
            status: 403,
            headers: { "Content-Type": "application/json" },
          })
        }
        return NextResponse.redirect(new URL("/admin", req.url))
      }
    }

    const res = NextResponse.next()

    // Security headers on all admin responses
    res.headers.set("X-Frame-Options", "DENY")
    res.headers.set("X-Content-Type-Options", "nosniff")
    res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
    // Prevent caching of admin pages
    res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate")

    return res
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/admin/login",
    },
  }
)

export const config = {
  matcher: ["/admin/((?!login).*)"],
}

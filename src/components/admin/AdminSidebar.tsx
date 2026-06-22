"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import {
  LayoutDashboard, Map, Compass, Sparkles, BookOpen, Building2,
  Tent, LogOut, ChevronRight, Settings, Star, Info, ImageIcon,
  SearchCheck, Users, ShieldCheck, Shield, PenLine, ExternalLink,
  Home, Phone,
} from "lucide-react"

type Role = "SUPER_ADMIN" | "ADMIN" | "EDITOR"

const ROLE_META: Record<Role, { label: string; icon: React.ElementType; color: string; bg: string }> = {
  SUPER_ADMIN: { label: "Super Admin", icon: ShieldCheck, color: "text-[#C5A059]",  bg: "bg-[#C5A059]/20" },
  ADMIN:       { label: "Admin",       icon: Shield,      color: "text-[#A0A0A0]",  bg: "bg-white/10"   },
  EDITOR:      { label: "Editor",      icon: PenLine,     color: "text-blue-400",   bg: "bg-blue-500/20" },
}

const nav = [
  { href: "/admin",              label: "Dashboard",     icon: LayoutDashboard, exact: true },
  { href: "/admin/tours",        label: "Tours",         icon: Map },
  { href: "/admin/destinations", label: "Destinations",  icon: Compass },
  { href: "/admin/experiences",  label: "Experiences",   icon: Sparkles },
  { href: "/admin/blog",         label: "Blog",          icon: BookOpen },
  { href: "/admin/lodges",       label: "Lodges",        icon: Building2 },
  { href: "/admin/camps",        label: "Camps",         icon: Tent },
  { href: "/admin/reviews",      label: "Reviews",       icon: Star },
  { href: "/admin/media",        label: "Media Library", icon: ImageIcon },
  { href: "/admin/seo",          label: "SEO",           icon: SearchCheck },
  { href: "/admin/about",        label: "About Us",      icon: Info },
  { href: "/admin/home",         label: "Home Page",     icon: Home },
  { href: "/admin/contact",      label: "Contact Page",  icon: Phone },
  { href: "/admin/settings",     label: "Settings",      icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  const role     = (session?.user?.role ?? "EDITOR") as Role
  const meta     = ROLE_META[role] ?? ROLE_META.EDITOR
  const initials = ((session?.user?.name ?? session?.user?.email ?? "A").charAt(0)).toUpperCase()
  const fullName = session?.user?.name ?? session?.user?.email ?? "Admin"

  // Both SUPER_ADMIN and ADMIN can access User Management
  const canManageUsers = role === "SUPER_ADMIN" || role === "ADMIN"

  function isActive(href: string, exact?: boolean) {
    return exact ? pathname === href : pathname.startsWith(href)
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 flex flex-col bg-[#1A1A1A] border-r border-[#2D2422]">

      {/* ── Logo ──────────────────────────────────────────── */}
      <div className="px-5 py-4 border-b border-[#2D2422]">
        <Link href="/admin" className="block">
          <div className="relative w-40 h-11">
            <Image
              src="/images/serenity-logo.webp"
              alt="Serenity Africa Safaris"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
        <p className="text-[9px] text-[#C5A059]/70 tracking-[0.3em] uppercase font-semibold mt-2 pl-0.5">
          CMS Dashboard
        </p>
      </div>

      {/* ── Admin identity card ───────────────────────────── */}
      <Link
        href="/admin/settings"
        className="group flex items-center gap-3 px-4 py-3.5 border-b border-[#2D2422] hover:bg-[#252525] transition-colors"
      >
        <div className={`relative w-9 h-9 rounded-full ${meta.bg} flex items-center justify-center shrink-0 ring-2 ring-[#2D2422] group-hover:ring-[#C5A059]/40 transition-all`}>
          <span className={`text-sm font-bold ${meta.color}`}>{initials}</span>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#1A1A1A]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[#F5F2ED] text-sm font-medium truncate leading-tight group-hover:text-white transition-colors">
            {fullName}
          </p>
          <p className={`flex items-center gap-1 text-[10px] font-semibold mt-0.5 ${meta.color}`}>
            <meta.icon className="w-3 h-3 shrink-0" />
            {meta.label}
          </p>
        </div>
        <Settings className="w-3.5 h-3.5 text-[#F5F2ED]/20 group-hover:text-[#C5A059]/60 transition-colors shrink-0" />
      </Link>

      {/* ── Navigation ────────────────────────────────────── */}
      <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">
        {nav.map(({ href, label, icon: Icon, exact }) => {
          const active = isActive(href, exact)
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group ${
                active
                  ? "bg-[#C5A059] text-[#1A1A1A] font-semibold shadow-sm"
                  : "text-[#F5F2ED]/60 hover:bg-[#252525] hover:text-[#F5F2ED]"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="flex-1">{label}</span>
              {active && <ChevronRight className="w-3 h-3 shrink-0" />}
            </Link>
          )
        })}

        {/* User Management — ADMIN + SUPER_ADMIN */}
        {canManageUsers && (
          <>
            <div className="pt-3 pb-1 px-3">
              <p className="text-[9px] font-bold text-[#C5A059]/50 tracking-[0.3em] uppercase">
                {role === "SUPER_ADMIN" ? "Super Admin" : "Admin"} Tools
              </p>
            </div>
            <Link
              href="/admin/users"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group ${
                isActive("/admin/users")
                  ? "bg-[#C5A059] text-[#1A1A1A] font-semibold shadow-sm"
                  : "text-[#C5A059]/70 hover:bg-[#C5A059]/10 hover:text-[#C5A059]"
              }`}
            >
              <Users className="w-4 h-4 shrink-0" />
              <span className="flex-1">User Management</span>
              {isActive("/admin/users") && <ChevronRight className="w-3 h-3 shrink-0" />}
            </Link>
          </>
        )}

        {/* View site */}
        <div className="pt-2">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#F5F2ED]/40 hover:bg-[#252525] hover:text-[#F5F2ED]/80 transition-all"
          >
            <ExternalLink className="w-4 h-4 shrink-0" />
            <span className="flex-1">View Public Site</span>
          </Link>
        </div>
      </nav>

      {/* ── Sign Out ──────────────────────────────────────── */}
      <div className="px-3 py-3 border-t border-[#2D2422]">
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm text-[#F5F2ED]/40 hover:bg-red-900/20 hover:text-red-400 transition-all"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}

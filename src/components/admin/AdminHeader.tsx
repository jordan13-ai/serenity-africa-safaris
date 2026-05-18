"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShieldCheck, Shield, PenLine, ChevronRight } from "lucide-react"

type Role = "SUPER_ADMIN" | "ADMIN" | "EDITOR"

const ROLE_META: Record<Role, { label: string; icon: React.ElementType; color: string }> = {
  SUPER_ADMIN: { label: "Super Admin", icon: ShieldCheck, color: "text-[#C5A059]" },
  ADMIN: { label: "Admin", icon: Shield, color: "text-[#737373]" },
  EDITOR: { label: "Editor", icon: PenLine, color: "text-blue-500" },
}

function breadcrumb(pathname: string): string {
  const segments = pathname.replace("/admin", "").split("/").filter(Boolean)
  if (segments.length === 0) return "Dashboard"
  return segments
    .map((s) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))
    .join(" / ")
}

export function AdminHeader() {
  const { data: session } = useSession()
  const pathname = usePathname()

  const user = session?.user
  const role = (user?.role ?? "ADMIN") as Role
  const { label: roleLabel, icon: RoleIcon, color: roleColor } = ROLE_META[role] ?? ROLE_META.ADMIN
  const initials = ((user?.name ?? user?.email ?? "A").charAt(0)).toUpperCase()
  const displayName = user?.name ?? user?.email ?? "Admin"

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E2E0DB] px-6 py-3 flex items-center justify-between">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#737373]">
        <Link href="/admin" className="hover:text-[#C5A059] transition-colors font-medium">
          Dashboard
        </Link>
        {pathname !== "/admin" && (
          <>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1A1A1A] font-medium capitalize">
              {breadcrumb(pathname)}
            </span>
          </>
        )}
      </div>

      {/* Admin profile pill */}
      <Link
        href="/admin/settings"
        className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#F5F2ED] transition-colors group"
      >
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center shrink-0">
          <span className="text-[#B8933F] text-xs font-bold">{initials}</span>
        </div>

        {/* Name + Role */}
        <div className="hidden sm:block text-right">
          <p className="text-xs font-semibold text-[#1A1A1A] leading-tight group-hover:text-[#C5A059] transition-colors">
            {displayName}
          </p>
          <p className={`flex items-center justify-end gap-1 text-[10px] font-medium ${roleColor}`}>
            <RoleIcon className="w-3 h-3" />
            {roleLabel}
          </p>
        </div>
      </Link>
    </header>
  )
}

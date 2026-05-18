"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import {
  KeyRound, Check, AlertCircle, Loader2,
  User, ShieldCheck, Shield, PenLine, Mail, CalendarDays,
} from "lucide-react"

type Role = "SUPER_ADMIN" | "ADMIN" | "EDITOR"

const ROLE_META: Record<Role, { label: string; icon: React.ElementType; badge: string }> = {
  SUPER_ADMIN: {
    label: "Super Admin",
    icon: ShieldCheck,
    badge: "bg-[#C5A059]/15 text-[#B8933F] border border-[#C5A059]/30",
  },
  ADMIN: {
    label: "Admin",
    icon: Shield,
    badge: "bg-[#1A1A1A]/10 text-[#1A1A1A] border border-[#1A1A1A]/20",
  },
  EDITOR: {
    label: "Editor",
    icon: PenLine,
    badge: "bg-blue-50 text-blue-700 border border-blue-200",
  },
}

const field  = "w-full px-3 py-2.5 border border-[#E2E0DB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059] bg-white transition-colors"
const lbl    = "block text-[11px] font-bold text-[#737373] uppercase tracking-wider mb-1.5"

export default function SettingsPage() {
  const { data: session } = useSession()
  const user = session?.user

  const role = (user?.role ?? "ADMIN") as Role
  const { label: roleLabel, icon: RoleIcon, badge: roleBadge } = ROLE_META[role] ?? ROLE_META.ADMIN
  const initials = ((user?.name ?? user?.email ?? "A").charAt(0)).toUpperCase()

  // Password form state
  const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" })
  const [saving, setSaving]   = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError]     = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(""); setSuccess(false)

    if (form.newPassword !== form.confirmPassword) {
      setError("New passwords do not match"); return
    }
    if (form.newPassword.length < 8) {
      setError("New password must be at least 8 characters"); return
    }

    setSaving(true)
    const res  = await fetch("/api/admin/settings/password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentPassword: form.currentPassword, newPassword: form.newPassword }),
    })
    const json = await res.json()
    setSaving(false)

    if (!res.ok) { setError(json.error ?? "Something went wrong"); return }
    setSuccess(true)
    setForm({ currentPassword: "", newPassword: "", confirmPassword: "" })
  }

  return (
    <div className="p-8 max-w-2xl">
      {/* Page heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">Account Settings</h2>
        <p className="text-sm text-[#737373] mt-0.5">Manage your profile and security</p>
      </div>

      {/* ── Account Info Card ──────────────────────────────── */}
      <div className="bg-white rounded-xl border border-[#E2E0DB] p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#F9F7F4] rounded-lg">
            <User className="w-4 h-4 text-[#C5A059]" />
          </div>
          <h3 className="text-sm font-semibold text-[#1A1A1A]">Account Information</h3>
        </div>

        <div className="flex items-center gap-5 mb-6 pb-6 border-b border-[#F5F2ED]">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-[#C5A059]/15 flex items-center justify-center shrink-0 ring-4 ring-[#F5F2ED]">
            <span className="text-2xl font-bold text-[#B8933F]">{initials}</span>
          </div>

          <div>
            <p className="text-lg font-semibold text-[#1A1A1A] leading-tight">
              {user?.name ?? <span className="text-[#737373] italic font-normal text-sm">No name set</span>}
            </p>
            <p className="text-sm text-[#737373] mt-0.5">{user?.email}</p>

            {/* Role badge */}
            <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mt-2 ${roleBadge}`}>
              <RoleIcon className="w-3 h-3" />
              {roleLabel}
            </span>
          </div>
        </div>

        {/* Info rows */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#F9F7F4] flex items-center justify-center shrink-0">
              <Mail className="w-3.5 h-3.5 text-[#737373]" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#737373] uppercase tracking-wider">Email Address</p>
              <p className="text-sm text-[#1A1A1A] mt-0.5">{user?.email ?? "—"}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#F9F7F4] flex items-center justify-center shrink-0">
              <RoleIcon className="w-3.5 h-3.5 text-[#737373]" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#737373] uppercase tracking-wider">Access Role</p>
              <p className="text-sm text-[#1A1A1A] mt-0.5">{roleLabel}</p>
              <p className="text-xs text-[#737373] mt-0.5">
                {role === "SUPER_ADMIN"
                  ? "Full access including user management"
                  : role === "ADMIN"
                  ? "Full content access across all modules"
                  : "Create and edit content — no user management"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#F9F7F4] flex items-center justify-center shrink-0">
              <CalendarDays className="w-3.5 h-3.5 text-[#737373]" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#737373] uppercase tracking-wider">Session</p>
              <p className="text-sm text-[#1A1A1A] mt-0.5">Active — logged in now</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Change Password Card ───────────────────────────── */}
      <div className="bg-white rounded-xl border border-[#E2E0DB] p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#F9F7F4] rounded-lg">
            <KeyRound className="w-4 h-4 text-[#C5A059]" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1A1A1A]">Change Password</h3>
            <p className="text-xs text-[#737373] mt-0.5">Use a strong password of at least 8 characters</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={lbl}>Current Password</label>
            <input
              type="password"
              value={form.currentPassword}
              onChange={(e) => setForm((p) => ({ ...p, currentPassword: e.target.value }))}
              className={field}
              required
              autoComplete="current-password"
              placeholder="Enter current password"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={lbl}>New Password</label>
              <input
                type="password"
                value={form.newPassword}
                onChange={(e) => setForm((p) => ({ ...p, newPassword: e.target.value }))}
                className={field}
                required
                minLength={8}
                autoComplete="new-password"
                placeholder="Minimum 8 characters"
              />
            </div>
            <div>
              <label className={lbl}>Confirm New Password</label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={(e) => setForm((p) => ({ ...p, confirmPassword: e.target.value }))}
                className={field}
                required
                autoComplete="new-password"
                placeholder="Repeat new password"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
              <AlertCircle className="w-4 h-4 shrink-0" />{error}
            </div>
          )}
          {success && (
            <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-100 rounded-lg px-4 py-3">
              <Check className="w-4 h-4 shrink-0" />Password updated successfully
            </div>
          )}

          <button
            type="submit"
            disabled={saving}
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#C5A059] text-[#1A1A1A] font-bold text-sm rounded-lg hover:bg-[#D4B06A] disabled:opacity-60 transition-colors"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <KeyRound className="w-4 h-4" />}
            Update Password
          </button>
        </form>
      </div>
    </div>
  )
}

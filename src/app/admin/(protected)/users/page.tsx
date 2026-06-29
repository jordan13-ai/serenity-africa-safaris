"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import {
  Users, Plus, Trash2, Pencil, Check, X, Loader2, ShieldCheck, Shield, PenLine, AlertCircle,
} from "lucide-react"

type Role = "SUPER_ADMIN" | "ADMIN" | "EDITOR"

interface AdminUser {
  id: string
  email: string
  name: string | null
  role: Role
  createdAt: string
  updatedAt: string
}

const ROLE_META: Record<Role, { label: string; badge: string; icon: React.ElementType }> = {
  SUPER_ADMIN: { label: "Super Admin", badge: "bg-[#C5A059]/15 text-[#B8933F] border border-[#C5A059]/30", icon: ShieldCheck },
  ADMIN: { label: "Admin", badge: "bg-[#1A1A1A]/10 text-[#1A1A1A] border border-[#1A1A1A]/20", icon: Shield },
  EDITOR: { label: "Editor", badge: "bg-blue-50 text-blue-700 border border-blue-200", icon: PenLine },
}

function RoleBadge({ role }: { role: Role }) {
  const { label, badge, icon: Icon } = ROLE_META[role] ?? ROLE_META.ADMIN
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${badge}`}>
      <Icon className="w-3 h-3" />
      {label}
    </span>
  )
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days === 0) return "Today"
  if (days === 1) return "Yesterday"
  if (days < 30) return `${days}d ago`
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

export default function UsersPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const callerRole = (session?.user?.role ?? "EDITOR") as Role
  const isSuperAdmin = callerRole === "SUPER_ADMIN"
  const isAdmin      = callerRole === "ADMIN"
  const canManage    = isSuperAdmin || isAdmin

  // Roles this caller is allowed to assign
  const assignableRoles: Role[] = isSuperAdmin
    ? ["SUPER_ADMIN", "ADMIN", "EDITOR"]
    : ["EDITOR"]

  const [users, setUsers] = useState<AdminUser[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // Create form state
  const [showCreate, setShowCreate] = useState(false)
  const [creating, setCreating] = useState(false)
  const [createError, setCreateError] = useState("")
  const [form, setForm] = useState({ email: "", name: "", password: "", role: "EDITOR" as Role })

  // Edit state
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState({ name: "", role: "EDITOR" as Role })
  const [saving, setSaving] = useState(false)

  // Delete state
  const [deletingId, setDeletingId] = useState<string | null>(null)

  useEffect(() => {
    if (status === "loading") return
    if (!canManage) {
      router.replace("/admin")
      return
    }
    loadUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, session])

  async function loadUsers() {
    try {
      setLoading(true)
      const res = await fetch("/api/admin/users")
      if (!res.ok) throw new Error()
      setUsers(await res.json())
    } catch {
      setError("Failed to load users")
    } finally {
      setLoading(false)
    }
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault()
    setCreateError("")
    setCreating(true)
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const json = await res.json()
      if (!res.ok) { setCreateError(json.error ?? "Failed to create user"); return }
      setUsers((prev) => [...prev, json])
      setForm({ email: "", name: "", password: "", role: "ADMIN" })
      setShowCreate(false)
    } catch {
      setCreateError("Network error")
    } finally {
      setCreating(false)
    }
  }

  async function handleSaveEdit(id: string) {
    setSaving(true)
    try {
      const res = await fetch(`/api/admin/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      })
      if (!res.ok) return
      const updated = await res.json()
      setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...updated } : u)))
      setEditingId(null)
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this user? This action cannot be undone.")) return
    setDeletingId(id)
    try {
      const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" })
      if (res.ok) setUsers((prev) => prev.filter((u) => u.id !== id))
    } finally {
      setDeletingId(null)
    }
  }

  function startEdit(user: AdminUser) {
    setEditingId(user.id)
    setEditForm({ name: user.name ?? "", role: user.role })
  }

  const inputCls = "w-full px-3 py-2.5 border border-[#E2E0DB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059] bg-white"
  const labelCls = "block text-xs font-medium text-[#737373] uppercase tracking-wider mb-1.5"

  if (status === "loading" || loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-6 h-6 animate-spin text-[#C5A059]" />
      </div>
    )
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 bg-[#C5A059]/10 rounded-lg">
              <Users className="w-5 h-5 text-[#C5A059]" />
            </div>
            <h2 className="text-2xl font-serif text-[#1A1A1A] font-light">User Management</h2>
          </div>
          <p className="text-sm text-[#737373] ml-12">Create admins and assign access roles</p>
        </div>
        <button
          onClick={() => { setShowCreate(true); setCreateError("") }}
          className="inline-flex items-center gap-2 bg-[#C5A059] text-[#1A1A1A] px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-[#D4B06A] transition-colors"
        >
          <Plus className="w-4 h-4" />
          New User
        </button>
      </div>

      {/* Role legend */}
      <div className="flex flex-wrap gap-3 mb-6 p-4 bg-white rounded-xl border border-[#E2E0DB]">
        <p className="text-xs font-bold text-[#737373] uppercase tracking-wider self-center mr-2">Roles:</p>
        {(Object.keys(ROLE_META) as Role[]).map((role) => {
          const { label, badge, icon: Icon } = ROLE_META[role]
          return (
            <span key={role} className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${badge}`}>
              <Icon className="w-3 h-3" /> {label}
            </span>
          )
        })}
        <span className="text-xs text-[#737373] self-center ml-2">
          Super Admin: full access + user management · Admin: all content · Editor: create &amp; edit only
        </span>
      </div>

      {/* Create user form */}
      {showCreate && (
        <div className="bg-white rounded-xl border border-[#C5A059]/30 shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#C5A059]" /> Create New User
              </h3>
              {isAdmin && (
                <p className="text-xs text-[#737373] mt-0.5 ml-6">
                  As Admin, you can create <strong>Editor</strong> accounts only.
                </p>
              )}
            </div>
            <button onClick={() => setShowCreate(false)} className="text-[#737373] hover:text-[#1A1A1A]">
              <X className="w-4 h-4" />
            </button>
          </div>
          <form onSubmit={handleCreate} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <div>
              <label className={labelCls}>Email *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className={inputCls}
                placeholder="user@serenityafricasafaris.com"
                autoComplete="off"
              />
            </div>
            <div>
              <label className={labelCls}>Full Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                className={inputCls}
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className={labelCls}>Password * (min 8 chars)</label>
              <input
                type="password"
                required
                minLength={8}
                value={form.password}
                onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                className={inputCls}
                autoComplete="new-password"
              />
            </div>
            <div>
              <label className={labelCls}>Role</label>
              <select
                value={form.role}
                onChange={(e) => setForm((p) => ({ ...p, role: e.target.value as Role }))}
                className={inputCls}
                disabled={assignableRoles.length === 1}
              >
                {assignableRoles.map((r) => (
                  <option key={r} value={r}>{ROLE_META[r].label}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2 xl:col-span-4 flex items-center gap-3">
              {createError && (
                <span className="flex items-center gap-1.5 text-sm text-red-600">
                  <AlertCircle className="w-4 h-4" />{createError}
                </span>
              )}
              <div className="flex gap-3 ml-auto">
                <button
                  type="button"
                  onClick={() => setShowCreate(false)}
                  className="px-4 py-2 text-sm text-[#737373] border border-[#E2E0DB] rounded-lg hover:bg-[#F5F2ED] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="flex items-center gap-2 px-5 py-2 bg-[#C5A059] text-[#1A1A1A] text-sm font-bold rounded-lg hover:bg-[#D4B06A] disabled:opacity-60 transition-colors"
                >
                  {creating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                  Create User
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl p-4 mb-6">
          <AlertCircle className="w-4 h-4 shrink-0" />{error}
        </div>
      )}

      {/* Users table */}
      <div className="bg-white rounded-xl border border-[#E2E0DB] overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#F9F7F4] border-b border-[#E2E0DB]">
            <tr>
              <th className="text-left px-5 py-3.5 text-[10px] font-bold text-[#737373] uppercase tracking-wider">User</th>
              <th className="text-left px-5 py-3.5 text-[10px] font-bold text-[#737373] uppercase tracking-wider">Role</th>
              <th className="text-left px-5 py-3.5 text-[10px] font-bold text-[#737373] uppercase tracking-wider hidden md:table-cell">Created</th>
              <th className="px-5 py-3.5 text-right text-[10px] font-bold text-[#737373] uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F5F2ED]">
            {users.length === 0 && (
              <tr>
                <td colSpan={4} className="px-5 py-8 text-center text-[#737373] text-sm">
                  No users found
                </td>
              </tr>
            )}
            {users.map((user) => {
              const isSelf = session?.user?.id === user.id
              const isEditing = editingId === user.id
              return (
                <tr key={user.id} className={`hover:bg-[#FDFBF7] transition-colors ${isSelf ? "bg-[#C5A059]/5" : ""}`}>
                  <td className="px-5 py-4">
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm((p) => ({ ...p, name: e.target.value }))}
                        className="w-full px-2 py-1.5 border border-[#C5A059] rounded text-sm focus:outline-none"
                        placeholder="Full name"
                      />
                    ) : (
                      <div>
                        <p className="font-medium text-[#1A1A1A] flex items-center gap-2">
                          {/* Avatar initials */}
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#C5A059]/15 text-[#B8933F] text-[10px] font-bold uppercase shrink-0">
                            {(user.name ?? user.email).charAt(0).toUpperCase()}
                          </span>
                          {user.name ?? <span className="text-[#737373] italic">No name</span>}
                          {isSelf && (
                            <span className="text-[9px] font-bold bg-[#C5A059]/20 text-[#B8933F] px-1.5 py-0.5 rounded">YOU</span>
                          )}
                        </p>
                        <p className="text-xs text-[#737373] mt-0.5 ml-9">{user.email}</p>
                      </div>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    {isEditing ? (
                      <select
                        value={editForm.role}
                        onChange={(e) => setEditForm((p) => ({ ...p, role: e.target.value as Role }))}
                        className="px-2 py-1.5 border border-[#C5A059] rounded text-sm focus:outline-none"
                      >
                        {assignableRoles.map((r) => (
                          <option key={r} value={r}>{ROLE_META[r].label}</option>
                        ))}
                      </select>
                    ) : (
                      <RoleBadge role={user.role} />
                    )}
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-xs text-[#737373]">{timeAgo(user.createdAt)}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      {isEditing ? (
                        <>
                          <button
                            onClick={() => handleSaveEdit(user.id)}
                            disabled={saving}
                            className="flex items-center gap-1 px-3 py-1.5 bg-[#C5A059] text-[#1A1A1A] text-xs font-bold rounded-lg hover:bg-[#D4B06A] disabled:opacity-60 transition-colors"
                          >
                            {saving ? <Loader2 className="w-3 h-3 animate-spin" /> : <Check className="w-3 h-3" />}
                            Save
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="p-1.5 text-[#737373] hover:text-[#1A1A1A] rounded-lg hover:bg-[#F5F2ED] transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <>
                          {(isSuperAdmin || user.role === "EDITOR") ? (
                            <button
                              onClick={() => startEdit(user)}
                              className="p-1.5 text-[#737373] hover:text-[#C5A059] rounded-lg hover:bg-[#F5F2ED] transition-colors"
                              title="Edit user"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                          ) : null}
                          {!isSelf && (isSuperAdmin || user.role === "EDITOR") && (
                            <button
                              onClick={() => handleDelete(user.id)}
                              disabled={deletingId === user.id}
                              className="p-1.5 text-[#737373] hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-40"
                              title="Delete user"
                            >
                              {deletingId === user.id
                                ? <Loader2 className="w-4 h-4 animate-spin" />
                                : <Trash2 className="w-4 h-4" />
                              }
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="px-5 py-3 border-t border-[#F5F2ED] bg-[#FDFBF7]">
          <p className="text-xs text-[#737373]">{users.length} {users.length === 1 ? "user" : "users"} total</p>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })
    setLoading(false)
    if (res?.ok) {
      router.push("/admin/")
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="text-[10px] text-[#C5A059] tracking-[0.4em] uppercase mb-3">CMS Admin</p>
          <h1 className="text-white font-serif text-3xl font-light">Serenity Africa Safaris</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#242424] rounded-xl p-8 space-y-5 border border-[#2D2422]">
          <div>
            <label className="block text-xs text-[#F5F2ED]/60 uppercase tracking-wider mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2D2422] rounded-lg text-white text-sm placeholder:text-[#737373] focus:outline-none focus:border-[#C5A059] transition-colors"
              placeholder="admin@serenityafricasafaris.com"
            />
          </div>

          <div>
            <label className="block text-xs text-[#F5F2ED]/60 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2D2422] rounded-lg text-white text-sm placeholder:text-[#737373] focus:outline-none focus:border-[#C5A059] transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#C5A059] text-[#1A1A1A] font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#D4B06A] disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

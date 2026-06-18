"use client"

import { useState } from "react"

type Step = "form" | "loading" | "done" | "error" | "already_installed"

export default function SetupPage() {
  const [step, setStep] = useState<Step>("form")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [log, setLog] = useState<string[]>([])
  const [errorMsg, setErrorMsg] = useState("")

  async function handleInstall(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || !password) return
    if (password.length < 8) { setErrorMsg("Password must be at least 8 characters."); return }
    setErrorMsg("")
    setStep("loading")
    setLog(["Starting installation..."])

    try {
      const res = await fetch("/api/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await res.json()

      if (res.status === 409) { setStep("already_installed"); return }
      if (!res.ok) { setErrorMsg(data.error || "Installation failed."); setStep("error"); return }

      setLog(data.log || [])
      setStep("done")
    } catch {
      setErrorMsg("Could not connect to the server. Check your environment variables.")
      setStep("error")
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo area */}
        <div className="text-center mb-10">
          <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase mb-3">Serenity Africa Safaris</p>
          <h1 className="text-white text-3xl font-serif font-light">Site Installation</h1>
        </div>

        {/* FORM */}
        {step === "form" && (
          <form onSubmit={handleInstall} className="bg-white/5 border border-white/10 p-8 space-y-5">
            <p className="text-white/60 text-sm text-center">Create your admin account to get started.</p>

            {errorMsg && (
              <p className="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 px-4 py-2">{errorMsg}</p>
            )}

            <div>
              <label className="block text-white/50 text-[11px] tracking-widest uppercase mb-2">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Jordan"
                className="w-full bg-white/5 border border-white/15 text-white px-4 py-3 text-sm outline-none focus:border-white/40 placeholder:text-white/20"
              />
            </div>

            <div>
              <label className="block text-white/50 text-[11px] tracking-widest uppercase mb-2">Admin Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="e.g. admin@serenityafricasafaris.com"
                className="w-full bg-white/5 border border-white/15 text-white px-4 py-3 text-sm outline-none focus:border-white/40 placeholder:text-white/20"
              />
            </div>

            <div>
              <label className="block text-white/50 text-[11px] tracking-widest uppercase mb-2">Password</label>
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Minimum 8 characters"
                className="w-full bg-white/5 border border-white/15 text-white px-4 py-3 text-sm outline-none focus:border-white/40 placeholder:text-white/20"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-700 hover:bg-amber-600 text-white py-4 text-[12px] tracking-widest uppercase font-bold transition-colors"
            >
              Install Serenity Africa Safaris
            </button>
          </form>
        )}

        {/* LOADING */}
        {step === "loading" && (
          <div className="bg-white/5 border border-white/10 p-8 text-center space-y-6">
            <div className="w-10 h-10 border-2 border-white/20 border-t-amber-600 rounded-full animate-spin mx-auto" />
            <p className="text-white text-sm">Installing, please wait...</p>
            <p className="text-white/40 text-xs">This may take 1–2 minutes. Do not close this page.</p>
            <div className="text-left space-y-1 mt-4">
              {log.map((l, i) => (
                <p key={i} className="text-white/40 text-xs font-mono">{l}</p>
              ))}
            </div>
          </div>
        )}

        {/* SUCCESS */}
        {step === "done" && (
          <div className="bg-white/5 border border-white/10 p-8 text-center space-y-6">
            <div className="text-5xl">✓</div>
            <h2 className="text-white text-xl font-serif">Installation Complete</h2>
            <p className="text-white/50 text-sm">Your website and admin panel are ready.</p>
            <div className="space-y-3">
              <a
                href="/admin/login"
                className="block w-full bg-amber-700 hover:bg-amber-600 text-white py-4 text-[12px] tracking-widest uppercase font-bold transition-colors"
              >
                Go to Admin Panel
              </a>
              <a
                href="/"
                className="block w-full bg-white/10 hover:bg-white/15 text-white py-4 text-[12px] tracking-widest uppercase font-bold transition-colors"
              >
                View Website
              </a>
            </div>
            <div className="text-left bg-black/30 p-4 space-y-1">
              {log.map((l, i) => (
                <p key={i} className="text-green-400/70 text-xs font-mono">{l}</p>
              ))}
            </div>
          </div>
        )}

        {/* ALREADY INSTALLED */}
        {step === "already_installed" && (
          <div className="bg-white/5 border border-white/10 p-8 text-center space-y-4">
            <p className="text-white/50 text-sm">The site is already installed.</p>
            <a href="/admin/login" className="block w-full bg-amber-700 text-white py-4 text-[12px] tracking-widest uppercase font-bold">
              Go to Admin Login
            </a>
          </div>
        )}

        {/* ERROR */}
        {step === "error" && (
          <div className="bg-white/5 border border-white/10 p-8 text-center space-y-4">
            <p className="text-red-400 text-sm">{errorMsg}</p>
            <p className="text-white/40 text-xs">Check your environment variables in cPanel, then try again.</p>
            <button
              onClick={() => { setStep("form"); setLog([]) }}
              className="block w-full bg-white/10 text-white py-4 text-[12px] tracking-widest uppercase font-bold"
            >
              Try Again
            </button>
          </div>
        )}

        <p className="text-white/20 text-[10px] text-center mt-6">
          This page disappears after installation is complete.
        </p>
      </div>
    </div>
  )
}

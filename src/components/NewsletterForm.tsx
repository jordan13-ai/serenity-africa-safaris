"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"

export function NewsletterForm() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
    const [error, setError] = useState("")

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!email) return
        setStatus("loading")
        setError("")
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.error || "Failed to subscribe")
            setStatus("done")
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong")
            setStatus("error")
        }
    }

    if (status === "done") {
        return (
            <div className="flex items-center gap-3 min-w-[340px] py-4">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <p className="text-white/70 text-sm font-light">You're subscribed! Check your inbox.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-0 min-w-[340px]">
            <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={status === "error" ? (error || "Try again") : "Your email address"}
                className={`flex-1 bg-white/5 border text-white placeholder-white/30 text-sm px-5 py-4 rounded-l-full outline-none focus:border-primary/50 transition-colors ${status === "error" ? "border-red-400/50 placeholder-red-400/70" : "border-white/10"}`}
            />
            <button
                type="submit"
                disabled={status === "loading"}
                className="bg-primary hover:bg-primary/80 disabled:opacity-60 text-white text-[10px] font-bold tracking-widest uppercase px-7 py-4 rounded-r-full transition-colors whitespace-nowrap flex items-center gap-2"
            >
                {status === "loading" ? "..." : <><span>Subscribe</span><ArrowRight className="w-3.5 h-3.5" /></>}
            </button>
        </form>
    )
}

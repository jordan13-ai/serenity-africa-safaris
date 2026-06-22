import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { transporter, FROM, RECEIVER } from "@/lib/mailer"

// In-memory rate limiter: 5 submissions per IP per 10 minutes
const rateLimitStore = new Map<string, { count: number; reset: number }>()

function checkRateLimit(ip: string): boolean {
    const now = Date.now()
    const window = 10 * 60 * 1000
    const limit = 5
    const entry = rateLimitStore.get(ip)
    if (!entry || now > entry.reset) {
        rateLimitStore.set(ip, { count: 1, reset: now + window })
        return true
    }
    if (entry.count >= limit) return false
    entry.count++
    return true
}

function esc(value: unknown): string {
    if (value === null || value === undefined) return ""
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
}

function requireString(value: unknown, maxLen = 500): string | null {
    if (typeof value !== "string") return null
    const trimmed = value.trim()
    if (trimmed.length === 0 || trimmed.length > maxLen) return null
    return trimmed
}

function isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254
}

export async function POST(request: Request) {
    const headersList = await headers()
    const ip =
        headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        headersList.get("x-real-ip") ??
        "unknown"

    if (!checkRateLimit(ip)) {
        return NextResponse.json(
            { error: "Too many requests. Please wait a few minutes before trying again." },
            { status: 429, headers: { "Retry-After": "600" } }
        )
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        return NextResponse.json({ error: "Email service not configured" }, { status: 503 })
    }

    let body: Record<string, unknown>
    try {
        body = await request.json()
    } catch {
        return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    const firstName = requireString(body.firstName, 100)
    const lastName = requireString(body.lastName, 100)
    const email = requireString(body.email, 254)
    const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 30) : ""
    const country = requireString(body.country, 100)
    const message = typeof body.message === "string" ? body.message.trim().slice(0, 2000) : ""
    const interest = typeof body.interest === "string" ? body.interest.trim().slice(0, 200) : ""
    const tripType = typeof body.tripType === "string" ? body.tripType.trim().slice(0, 200) : ""
    const destinations = typeof body.destinations === "string" ? body.destinations.trim().slice(0, 500) : ""
    const travelDates = typeof body.travelDates === "string" ? body.travelDates.trim().slice(0, 200) : ""
    const duration = typeof body.duration === "string" ? body.duration.trim().slice(0, 100) : ""
    const travelers = typeof body.travelers === "string" ? body.travelers.trim().slice(0, 20) : ""
    const budget = typeof body.budget === "string" ? body.budget.trim().slice(0, 100) : ""
    const accommodation = typeof body.accommodation === "string" ? body.accommodation.trim().slice(0, 200) : ""
    const specialRequests = typeof body.specialRequests === "string" ? body.specialRequests.trim().slice(0, 2000) : ""

    if (!firstName || !lastName || !email || !country) {
        return NextResponse.json({ error: "Required fields missing: firstName, lastName, email, country" }, { status: 400 })
    }

    if (!isValidEmail(email)) {
        return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const isQuote = Boolean(tripType || destinations)
    const subject = isQuote
        ? `New Safari Quote Request — ${esc(firstName)} ${esc(lastName)}`
        : `New Contact Message — ${esc(firstName)} ${esc(lastName)}`

    const innerHtml = isQuote ? `
        <h2 style="color:#c2410c;margin-top:0">New Custom Quote Request</h2>
        <p><strong>Name:</strong> ${esc(firstName)} ${esc(lastName)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Phone:</strong> ${esc(phone) || "Not provided"}</p>
        <p><strong>Country:</strong> ${esc(country)}</p>
        <h3 style="color:#9a3412">Trip Details</h3>
        <ul>
            <li><strong>Trip Type:</strong> ${esc(tripType)}</li>
            <li><strong>Destinations:</strong> ${esc(destinations) || "N/A"}</li>
            <li><strong>Dates:</strong> ${esc(travelDates) || "N/A"}</li>
            <li><strong>Duration:</strong> ${esc(duration) || "N/A"}</li>
            <li><strong>Travelers:</strong> ${esc(travelers) || "N/A"}</li>
            <li><strong>Budget:</strong> ${esc(budget) || "N/A"}</li>
            <li><strong>Accommodation:</strong> ${esc(accommodation) || "N/A"}</li>
        </ul>
        <h3 style="color:#9a3412">Special Requests</h3>
        <p style="white-space:pre-wrap">${esc(specialRequests) || "None"}</p>
    ` : `
        <h2 style="color:#c2410c;margin-top:0">New Contact Message</h2>
        <p><strong>Name:</strong> ${esc(firstName)} ${esc(lastName)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Phone:</strong> ${esc(phone) || "Not provided"}</p>
        <p><strong>Country:</strong> ${esc(country)}</p>
        ${interest ? `<p><strong>Interest:</strong> ${esc(interest)}</p>` : ""}
        <h3 style="color:#9a3412">Message</h3>
        <p style="white-space:pre-wrap">${esc(message)}</p>
    `

    const wrapper = (inner: string) => `
        <div style="font-family:sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;border:1px solid #eee;padding:24px;border-radius:10px">
            ${inner}
            <div style="margin-top:30px;padding-top:16px;border-top:1px solid #eee;font-size:12px;color:#888">
                <p>Sent from serenityafricasafaris.com</p>
            </div>
        </div>
    `

    try {
        await transporter.sendMail({
            from: FROM,
            to: RECEIVER,
            replyTo: email,
            subject,
            html: wrapper(innerHtml),
        })

        await transporter.sendMail({
            from: FROM,
            to: email,
            subject: "We received your inquiry — Serenity Africa Safaris",
            html: wrapper(`
                <h2 style="color:#c2410c;margin-top:0">Jambo, ${esc(firstName)}!</h2>
                <p>Thank you for reaching out to <strong>Serenity Africa Safaris</strong>. We have received your inquiry and our team of safari experts is reviewing it now.</p>
                <p>One of our consultants will be in touch within <strong>24 hours</strong> with a detailed response or a custom itinerary.</p>
                <div style="background:#fff7ed;padding:16px;border-radius:8px;margin:20px 0">
                    <h3 style="font-size:15px;margin-top:0;color:#9a3412">What happens next?</h3>
                    <ul style="margin-bottom:0">
                        <li>A dedicated safari expert will review your preferences.</li>
                        <li>We will craft a tailored proposal based on your interests.</li>
                        <li>You will receive your custom itinerary by email.</li>
                    </ul>
                </div>
                <p>Best regards,<br><strong>The Serenity Africa Safaris Team</strong></p>
                <p style="font-size:12px;color:#888">&copy; ${new Date().getFullYear()} Serenity Africa Safaris</p>
            `),
        })

        return NextResponse.json({ success: true })
    } catch {
        return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
    }
}

import nodemailer from "nodemailer"
import { readFileSync } from "fs"

// Read .env.local manually
const env = readFileSync(".env.local", "utf8")
const get = (key) => {
  const match = env.match(new RegExp(`^${key}="?([^"\n]+)"?`, "m"))
  return match ? match[1].trim() : ""
}

const SMTP_HOST = get("SMTP_HOST")
const SMTP_PORT = parseInt(get("SMTP_PORT") || "465")
const SMTP_USER = get("SMTP_USER")
const SMTP_PASS = get("SMTP_PASS")
const RECEIVER  = get("CONTACT_FORM_RECEIVER")

console.log("🔧 Testing SMTP connection...")
console.log(`   Host:     ${SMTP_HOST}`)
console.log(`   Port:     ${SMTP_PORT}`)
console.log(`   User:     ${SMTP_USER}`)
console.log(`   Receiver: ${RECEIVER}`)
console.log("")

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
})

try {
  await transporter.verify()
  console.log("✅ SMTP connection verified!")

  const info = await transporter.sendMail({
    from: `Serenity Africa Safaris <${SMTP_USER}>`,
    to: RECEIVER,
    subject: "✅ Test Email — Serenity Africa Safaris Forms Working",
    html: `
      <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:24px;border:1px solid #eee;border-radius:8px">
        <h2 style="color:#c2410c">🎉 Email is Working!</h2>
        <p>This is a test email confirming that the contact form email system is correctly configured for <strong>Serenity Africa Safaris</strong>.</p>
        <ul>
          <li>✅ SMTP connection: OK</li>
          <li>✅ Authentication: OK</li>
          <li>✅ Email delivery: OK</li>
        </ul>
        <p>All contact forms, quote requests, and newsletter signups will send emails to this inbox.</p>
        <p style="color:#888;font-size:12px">Sent at ${new Date().toISOString()}</p>
      </div>
    `,
  })

  console.log("✅ Test email sent successfully!")
  console.log(`   Message ID: ${info.messageId}`)
  console.log(`   Check your inbox at: ${RECEIVER}`)
} catch (err) {
  console.error("❌ Email test FAILED:")
  console.error(err.message)
}

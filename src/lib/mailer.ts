import nodemailer from "nodemailer"

const port = Number(process.env.SMTP_PORT ?? 465)

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure: port === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 15000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
})

export const FROM = `Serenity Africa Safaris <${process.env.SMTP_USER ?? "info@serenityafricasafaris.com"}>`
export const RECEIVER = process.env.CONTACT_FORM_RECEIVER ?? "info@serenityafricasafaris.com"

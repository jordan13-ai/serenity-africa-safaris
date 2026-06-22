import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: Number(process.env.SMTP_PORT ?? 465) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export const FROM = `Serenity Africa Safaris <${process.env.SMTP_USER ?? "info@serenityafricasafaris.com"}>`
export const RECEIVER = process.env.CONTACT_FORM_RECEIVER ?? "info@serenityafricasafaris.com"

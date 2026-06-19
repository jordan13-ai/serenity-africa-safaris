import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { headers } from 'next/headers';

const rateLimitStore = new Map<string, { count: number; reset: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const window = 10 * 60 * 1000;
  const limit = 3;
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.reset) {
    rateLimitStore.set(ip, { count: 1, reset: now + window });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service unavailable.' }, { status: 503 });
  }

  const headersList = await headers();
  const ip =
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headersList.get('x-real-ip') ??
    'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  let body: { email?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const email = typeof body.email === 'string' ? body.email.trim() : '';
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM_EMAIL ?? 'Serenity Africa Safaris <onboarding@resend.dev>';
  const receiver =
    process.env.CONTACT_FORM_RECEIVER ?? 'info@serenityafricasafaris.com';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://serenityafricasafaris.com';

  try {
    await Promise.all([
      resend.emails.send({
        from,
        to: receiver,
        subject: `New Newsletter Subscriber — ${email}`,
        html: `<p>A new subscriber joined the Serenity Africa Safaris newsletter.</p><p><strong>Email:</strong> ${email}</p>`,
      }),
      resend.emails.send({
        from,
        to: email,
        subject: 'Welcome to Serenity Africa Safaris',
        html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Welcome</title></head>
<body style="margin:0;padding:0;background:#FDFBF7;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FDFBF7;">
    <tr>
      <td align="center" style="padding:48px 16px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background:#1A1A1A;padding:36px 40px;">
              <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;color:#C9A84C;">Serenity Africa Safaris</p>
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:300;">Welcome to the family.</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 20px;font-size:16px;line-height:1.7;color:#333;">
                Thank you for joining us. You'll receive exclusive safari insights, migration calendars, and hidden gems straight from our guides in the field.
              </p>
              <p style="margin:0 0 32px;font-size:15px;line-height:1.7;color:#555;">
                Africa moves at its own pace — and so do we. Expect beautifully curated stories, not noise.
              </p>
              <a href="${siteUrl}" style="display:inline-block;background:#1A1A1A;color:#ffffff;text-decoration:none;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;padding:16px 32px;border-radius:999px;">
                Explore Our Safaris
              </a>
              <p style="margin:40px 0 0;font-size:13px;color:#aaa;font-family:Arial,sans-serif;">
                You're receiving this because you subscribed at <a href="${siteUrl}" style="color:#C9A84C;">${siteUrl.replace(/^https?:\/\//, '')}</a>. Reply to unsubscribe.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}

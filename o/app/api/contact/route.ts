// app/api/contact/route.ts
import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const BodySchema = z.object({
  name: z.string().min(1, 'Nom requis').max(120),
  email: z.string().email('Courriel invalide'),
  message: z.string().max(4000).optional().default(''),
  hp: z.string().optional().default(''), // honeypot
});

function jsonError(message: string, status = 500, debug?: unknown) {
  // Log full details to server logs (Vercel → Logs → Functions)
  console.error('[contact]', message, debug ?? '');
  return NextResponse.json({ error: message }, { status });
}

export async function POST(req: NextRequest) {
  // 1) Parse & validate
  const json = await req.json().catch(() => null);
  if (!json) return jsonError('Invalid JSON', 400);

  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation', details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, message, hp } = parsed.data;

  // 2) Honeypot: silently succeed
  if (hp && hp.trim() !== '') return NextResponse.json({ ok: true });

  // 3) Read env
  const TO = process.env.CONTACT_TO_EMAIL;        // recipient (your inbox)
  const USER = process.env.GMAIL_USER;            // your gmail address
  const PASS = process.env.GMAIL_APP_PASSWORD;    // 16-char app password (2FA required)
  if (!TO || !USER || !PASS) {
    return jsonError(
      'Server not configured (missing CONTACT_TO_EMAIL / GMAIL_USER / GMAIL_APP_PASSWORD)'
    );
  }

  // 4) Compose message
  const meta = {
    ip: req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown',
    ua: req.headers.get('user-agent') ?? '',
    ts: new Date().toISOString(),
  };
  const subject = 'New contact form submission';
  const text = [
    'New contact submission:',
    `Name: ${name}`,
    `Email: ${email}`,
    `Message: ${message || '(no message)'}`,
    '',
    `IP: ${meta.ip}`,
    `UA: ${meta.ua}`,
    `At: ${meta.ts}`,
  ].join('\n');

  // 5) Use explicit Gmail SMTP. Try 465 first, fallback to 587.
  const smtp465 = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: USER, pass: PASS },
  } as const;

  const smtp587 = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { user: USER, pass: PASS },
  } as const;

  try {
    let transporter = nodemailer.createTransport(smtp465);

    // verify first to fail early with clearer errors
    try {
      await transporter.verify();
    } catch (e1) {
      console.warn('[contact] 465 verify failed, retrying on 587…', e1);
      transporter = nodemailer.createTransport(smtp587);
      await transporter.verify(); // throw if bad creds/network
    }

    await transporter.sendMail({
      from: `"Ö HOME" <${USER}>`, // must match authenticated Gmail
      to: TO,                     // info@owater.ca (CONTACT_TO_EMAIL)
      bcc: USER,                  // blind copy to datavvinci@gmail.com
      replyTo: TO,                // replies go to info@owater.ca
      subject,
      text,
    });


    return NextResponse.json({ ok: true });
  } catch (err: any) {
    // Bubble a concise reason to the client, full details in server logs.
    // Common messages: 'Invalid login', 'Application-specific password required', 'getaddrinfo ENOTFOUND'
    const msg =
      typeof err?.message === 'string'
        ? `Email send failed: ${err.message}`
        : 'Email send failed';
    return jsonError(msg, 502, err);
  }
}

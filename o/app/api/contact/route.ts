// app/api/contact/route.ts
import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const BodySchema = z.object({
  name: z.string().min(1, 'Nom requis').max(120),
  email: z.string().email('Courriel invalide'),
  message: z.string().max(4000).optional().default(''),
  hp: z.string().optional().default(''), // honeypot
});

export async function POST(req: NextRequest) {
  // Parse & validate body
  const json = await req.json().catch(() => null);
  if (!json) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });

  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation', details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, message, hp } = parsed.data;

  // Honeypot: silently succeed
  if (hp && hp.trim() !== '') return NextResponse.json({ ok: true });

  // Read Gmail envs
  const TO = process.env.CONTACT_TO_EMAIL;        // where you receive the lead
  const USER = process.env.GMAIL_USER;            // e.g. owater@gmail.com
  const PASS = process.env.GMAIL_APP_PASSWORD;    // 16-char app password

  if (!TO || !USER || !PASS) {
    console.error('Missing Gmail envs', { hasTO: !!TO, hasUSER: !!USER, hasPASS: !!PASS });
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
  }

  // Build email
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

  try {
    // dynamic import so the build doesn’t fail if not installed locally
    const nodemailer = await import('nodemailer');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: USER, pass: PASS },
    });

    await transporter.sendMail({
      from: `"Ö HOME" <${USER}>`,
      to: TO,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Gmail send failed:', err);
    return NextResponse.json({ error: 'Email send failed' }, { status: 502 });
  }
}

// app/api/contact/route.ts
import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { env } from '@/lib/env';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const BodySchema = z.object({
  name: z.string().min(1, 'Nom requis').max(120),
  email: z.string().email('Courriel invalide'),
  message: z.string().max(4000).optional().default(''),
  hp: z.string().optional().default(''), // honeypot
});

export async function POST(req: NextRequest) {
  // 1) Parse & validate
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation', details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, message, hp } = parsed.data;

  // 2) Honeypot: silently succeed to avoid tipping off bots
  if (hp && hp.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  // 3) Basic meta for visibility (useful in the email and logs)
  const meta = {
    ip: req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown',
    ua: req.headers.get('user-agent') ?? '',
    ts: new Date().toISOString(),
    path: req.nextUrl.pathname,
  };

  // 4) Send email via Resend (env is validated in lib/env.ts)
  const resend = new Resend(env.RESEND_API_KEY);

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
    await resend.emails.send({
      from: env.CONTACT_FROM_EMAIL,            // e.g. contact@owater.ca (verified domain)
      to: env.CONTACT_TO_EMAIL,                // single inbox (e.g. owater@gmail.com)
      replyTo: email,                          // lets you "Reply" directly to the sender
      subject,
      text,
    });
  } catch (err) {
    console.error('Resend send failed:', err);
    return NextResponse.json({ error: 'Email send failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

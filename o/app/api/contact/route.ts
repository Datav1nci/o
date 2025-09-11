import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { getEnv } from '@/lib/env';

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

  // Load env at runtime (won’t crash build if missing)
  const env = getEnv();
  if (!env.ok) {
    console.error('Missing email env vars:', env.issues);
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
  }

  const resend = new Resend(env.RESEND_API_KEY);

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
    await resend.emails.send({
      from: env.CONTACT_FROM_EMAIL,  // e.g., contact@owater.ca (domain verified in Resend)
      to: env.CONTACT_TO_EMAIL,      // e.g., owater@gmail.com
      replyTo: email,
      subject,
      text,
    });
  } catch (err) {
    console.error('Resend send failed:', err);
    return NextResponse.json({ error: 'Email send failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

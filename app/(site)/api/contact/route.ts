import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rateLimit';


export const runtime = 'edge';


export async function POST(req: NextRequest) {
const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
const limited = rateLimit(`contact:${ip}`);
if (!limited.ok) {
return new NextResponse('Too many requests', { status: 429 });
}
const form = await req.formData();
const name = String(form.get('name') || '');
const email = String(form.get('email') || '');
const message = String(form.get('message') || '');


if (!name || !email) {
return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
}


// Normally, send an email or store in DB here. For MVP, just acknowledge.
return NextResponse.json({ ok: true });
}
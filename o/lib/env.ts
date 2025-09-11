// lib/env.ts
import 'server-only';
import { z } from 'zod';

// Validate at *runtime* (when the route runs), not at import time.
const Schema = z.object({
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY is required'),
  CONTACT_FROM_EMAIL: z.string().email('CONTACT_FROM_EMAIL must be a valid email'),
  CONTACT_TO_EMAIL: z.string().email('CONTACT_TO_EMAIL must be a valid email'),
});

// Use inside server code (API route/server action) to avoid build-time crashes
export function getEnv() {
  const parsed = Schema.safeParse(process.env);
  if (!parsed.success) {
    return { ok: false as const, issues: parsed.error.issues };
  }
  return { ok: true as const, ...parsed.data };
}

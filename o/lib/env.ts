// lib/env.ts
import 'server-only';
import { z } from 'zod';

const schema = z.object({
  RESEND_API_KEY: z.string().min(1),
  CONTACT_FROM_EMAIL: z.string().email(),
  CONTACT_TO_EMAIL: z.string().email(),
  NODE_ENV: z.enum(['development','test','production']).default('development'),
});

export const env = schema.parse(process.env);

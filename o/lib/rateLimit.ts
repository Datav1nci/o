// Super-simple in-memory token bucket (best-effort; resets on cold start)
const buckets = new Map<string, { tokens: number; last: number }>();


export function rateLimit(key: string, opts = { capacity: 5, refillPerMinute: 5 }) {
const now = Date.now();
const state = buckets.get(key) || { tokens: opts.capacity, last: now };
const elapsed = (now - state.last) / 60000; // minutes
const refill = Math.floor(elapsed * opts.refillPerMinute);
const tokens = Math.min(opts.capacity, state.tokens + (refill > 0 ? refill : 0));
const next = { tokens, last: refill > 0 ? now : state.last };
if (next.tokens <= 0) {
buckets.set(key, next);
return { ok: false, remaining: 0 } as const;
}
next.tokens -= 1;
buckets.set(key, next);
return { ok: true, remaining: next.tokens } as const;
}
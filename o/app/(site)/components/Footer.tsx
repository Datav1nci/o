'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Status = 'idle' | 'loading' | 'ok' | 'error';

export default function Footer() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string }>({});

  function validate(form: HTMLFormElement) {
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const errs: typeof fieldErrors = {};

    if (!name) errs.name = 'Votre nom est requis';
    // very light email check (server will still validate strictly)
    if (!email) errs.email = 'Votre courriel est requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Courriel invalide';

    setFieldErrors(errs);
    return { ok: Object.keys(errs).length === 0, name, email };
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const form = e.currentTarget;

    // client-side validation (since noValidate is set)
    const v = validate(form);
    if (!v.ok) {
      setStatus('error');
      setError('Veuillez corriger les champs en rouge.');
      return;
    }

    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
    const hp = (form.elements.namedItem('hp') as HTMLInputElement)?.value ?? '';

    // Abort after 15s to avoid stuck "loading"
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name: v.name, email: v.email, message, hp }),
        signal: controller.signal,
      });

      // try to read API error details; don’t throw away useful messages
      const json = await res.json().catch(() => ({} as any));
      if (!res.ok) {
        throw new Error(json?.error || `HTTP ${res.status}`);
      }

      setStatus('ok');
      form.reset();
      setFieldErrors({});
    } catch (err: any) {
      const msg =
        err?.name === 'AbortError'
          ? "Délai dépassé. Réessayez."
          : err?.message || "Oups, une erreur s'est produite. Réessayez.";
      setStatus('error');
      setError(msg);
    } finally {
      clearTimeout(t);
    }
  }

  const disabled = status === 'loading';

  return (
    <footer
      id="contact"
      className="border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="container mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
        <div>
          <h2 className="mb-2 text-xl font-semibold">Parlons de votre eau</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Dites-nous un mot sur votre besoin et nous vous recontactons rapidement.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="grid gap-3"
          autoComplete="on"
          aria-busy={disabled}
          aria-describedby="form-status"
          noValidate
        >
          {/* Honeypot (hidden but submittable) */}
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="hp">Ne pas remplir</label>
            <input id="hp" name="hp" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <fieldset disabled={disabled} className="grid gap-3">
            {/* Name */}
            <label htmlFor="name" className="sr-only">
              Nom
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Votre nom"
              aria-invalid={!!fieldErrors.name}
              aria-describedby={fieldErrors.name ? 'err-name' : undefined}
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
            />
            {fieldErrors.name && (
              <p id="err-name" className="text-xs text-red-600 -mt-2">
                {fieldErrors.name}
              </p>
            )}

            {/* Email */}
            <label htmlFor="email" className="sr-only">
              Courriel
            </label>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoCapitalize="off"
              autoComplete="email"
              placeholder="Courriel"
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? 'err-email' : undefined}
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
            />
            {fieldErrors.email && (
              <p id="err-email" className="text-xs text-red-600 -mt-2">
                {fieldErrors.email}
              </p>
            )}

            {/* Message */}
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Message"
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
            />
          </fieldset>

          <div className="flex items-center gap-3">
            <Button type="submit" disabled={disabled}>
              {status === 'loading' ? 'Envoi…' : 'Envoyer'}
            </Button>
          </div>

          {/* Live region for status updates (screen readers + visible text) */}
          <p
            id="form-status"
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className={
              status === 'ok'
                ? 'text-sm text-green-600 mt-2'
                : status === 'error'
                ? 'text-sm text-red-600 mt-2'
                : 'text-sm text-gray-500 mt-2'
            }
          >
            {status === 'ok' && 'Merci ! On vous écrit vite.'}
            {status === 'error' && (error || 'Oups, réessayez.')}
            {status === 'loading' && 'Envoi en cours…'}
          </p>
        </form>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ö HOME
      </div>
    </footer>
  );
}

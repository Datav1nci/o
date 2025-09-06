'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
    const hp = (form.elements.namedItem('hp') as HTMLInputElement)?.value ?? '';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, email, message, hp }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('error');
      setError("Oups, une erreur s'est produite. Réessayez.");
    }
  }

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

        <form onSubmit={onSubmit} className="grid gap-3" autoComplete="off">
          {/* Honeypot (hidden but submittable) */}
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="hp">Ne pas remplir</label>
            <input id="hp" name="hp" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <input
            name="name"
            required
            placeholder="Votre nom"
            className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Courriel"
            className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
          />

          <div className="flex items-center gap-3">
            <Button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Envoi…' : 'Envoyer'}
            </Button>

            {status === 'ok' && (
              <span className="text-sm text-green-600">Merci ! On vous écrit vite.</span>
            )}
            {status === 'error' && (
              <span className="text-sm text-red-600">{error || 'Oups, réessayez.'}</span>
            )}
          </div>
        </form>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ö HOME
      </div>
    </footer>
  );
}

export { Button, buttonVariants };

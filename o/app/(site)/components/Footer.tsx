'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icon } from './Icon';
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MessageCircle,
} from 'lucide-react';

type Status = 'idle' | 'loading' | 'ok' | 'error';

export default function Footer() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{
    lastName?: string;
    firstName?: string;
    email?: string;
  }>({});

  function validate(form: HTMLFormElement) {
    const lastName = (form.elements.namedItem('lastName') as HTMLInputElement).value.trim();
    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();

    const errs: typeof fieldErrors = {};
    if (!lastName) errs.lastName = 'Votre nom est requis';
    if (!firstName) errs.firstName = 'Votre prénom est requis';
    if (!email) errs.email = 'Votre courriel est requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Courriel invalide';

    setFieldErrors(errs);
    return {
      ok: Object.keys(errs).length === 0,
      name: [firstName, lastName].filter(Boolean).join(' '),
      email,
    };
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const form = e.currentTarget;
    const v = validate(form);
    if (!v.ok) {
      setStatus('error');
      setError('Veuillez corriger les champs en rouge.');
      return;
    }

    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
    const hp = (form.elements.namedItem('hp') as HTMLInputElement)?.value ?? '';

    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name: v.name, email: v.email, message, hp }),
        signal: controller.signal,
      });

      const json = await res.json().catch(() => ({} as any));
      if (!res.ok) throw new Error(json?.error || `HTTP ${res.status}`);

      setStatus('ok');
      form.reset();
      setFieldErrors({});
    } catch (err: any) {
      const msg =
        err?.name === 'AbortError'
          ? 'Délai dépassé. Réessayez.'
          : err?.message || "Oups, une erreur s'est produite. Réessayez.";
      setStatus('error');
      setError(msg);
    } finally {
      clearTimeout(t);
    }
  }

  const disabled = status === 'loading';

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      {/* Top area: form + right column */}
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2">
        {/* LEFT: title + form */}
        <div>
          <h2 className="mb-3 text-2xl font-semibold">Contactez-nous</h2>

          <form
            onSubmit={onSubmit}
            className="grid gap-4"
            autoComplete="on"
            aria-busy={disabled}
            aria-describedby="form-status"
            noValidate
          >
            {/* Honeypot */}
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="hp">Ne pas remplir</label>
              <input id="hp" name="hp" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <fieldset disabled={disabled} className="grid gap-4">
              {/* Top row: Nom + Prénom */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="lastName" className="sr-only">
                    Nom
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    placeholder="Nom"
                    autoComplete="family-name"
                    aria-invalid={!!fieldErrors.lastName}
                    aria-describedby={fieldErrors.lastName ? 'err-lastName' : undefined}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                  />
                  {fieldErrors.lastName && (
                    <p id="err-lastName" className="mt-1 text-xs text-red-600">
                      {fieldErrors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="firstName" className="sr-only">
                    Prénom
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    placeholder="Prenom"
                    autoComplete="given-name"
                    aria-invalid={!!fieldErrors.firstName}
                    aria-describedby={fieldErrors.firstName ? 'err-firstName' : undefined}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                  />
                  {fieldErrors.firstName && (
                    <p id="err-firstName" className="mt-1 text-xs text-red-600">
                      {fieldErrors.firstName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoCapitalize="off"
                  autoComplete="email"
                  placeholder="Email"
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? 'err-email' : undefined}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                />
                {fieldErrors.email && (
                  <p id="err-email" className="mt-1 text-xs text-red-600">
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
            </fieldset>

            <div className="pt-2">
              <Button type="submit" disabled={disabled}>
                {status === 'loading' ? 'Envoi…' : 'Envoyer'}
              </Button>
            </div>

            <p
              id="form-status"
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className={
                status === 'ok'
                  ? 'mt-1 text-sm text-green-600'
                  : status === 'error'
                  ? 'mt-1 text-sm text-red-600'
                  : 'mt-1 text-sm text-gray-500'
              }
            >
              {status === 'ok' && 'Merci ! On vous écrit vite.'}
              {status === 'error' && (error || 'Oups, réessayez.')}
              {status === 'loading' && 'Envoi en cours…'}
            </p>
          </form>
        </div>

        {/* RIGHT: logo, nav links, socials */}
        <div className="grid content-start gap-6 md:pl-6">
          <div className="flex items-center gap-3">
            <Icon className="h-10 w-10" />
            <div className="text-xl font-semibold leading-tight">
              Ö <span className="align-middle">HOME</span>
              <div className="text-xs font-normal text-gray-500">FILTRATION D’EAU</div>
            </div>
          </div>

          <nav className="grid gap-3 text-sm">
            <Link href="#top" className="text-gray-700 hover:underline dark:text-gray-300">
              Accueil
            </Link>
            <Link href="#whole-house" className="text-gray-700 hover:underline dark:text-gray-300">
              Filtre pour toute la maison
            </Link>
            <Link href="#drinking" className="text-gray-700 hover:underline dark:text-gray-300">
              Filtre pour eau potable
            </Link>
            <Link href="#techniques" className="text-gray-700 hover:underline dark:text-gray-300">
              Techniques
            </Link>
            <Link href="#schema" className="text-gray-700 hover:underline dark:text-gray-300">
              Schéma de placement
            </Link>
          </nav>

          <div className="mt-2 flex items-center gap-4">
            <Link aria-label="Instagram" href="#" className="rounded-full p-2 ring-1 ring-gray-300 hover:ring-gray-400">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link aria-label="Facebook" href="#" className="rounded-full p-2 ring-1 ring-gray-300 hover:ring-gray-400">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link aria-label="WhatsApp" href="#" className="rounded-full p-2 ring-1 ring-gray-300 hover:ring-gray-400">
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link aria-label="TikTok" href="#" className="rounded-full p-2 ring-1 ring-gray-300 hover:ring-gray-400">
              {/* TikTok not in lucide; using Twitter icon as a placeholder if you like, or swap to a custom SVG */}
              <Twitter className="h-5 w-5" />
            </Link>
            <Link aria-label="X" href="#" className="rounded-full p-2 ring-1 ring-gray-300 hover:ring-gray-400">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link aria-label="YouTube" href="#" className="rounded-full p-2 ring-1 ring-gray-300 hover:ring-gray-400">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-gray-50 py-4 text-center text-xs text-gray-500 dark:border-gray-800 dark:bg-gray-950">
        Copyright ©{new Date().getFullYear()} Ö Home. All rights reserved.
      </div>
    </footer>
  );
}

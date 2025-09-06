'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter, Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const f = e.currentTarget;
    const first = (f.elements.namedItem('firstName') as HTMLInputElement).value.trim();
    const last = (f.elements.namedItem('lastName') as HTMLInputElement).value.trim();
    const email = (f.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (f.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
    const hp = (f.elements.namedItem('hp') as HTMLInputElement)?.value ?? '';

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: [first, last].filter(Boolean).join(' '), email, message, hp }),
    });

    if (res.ok) {
      setStatus('ok');
      f.reset();
    } else {
      const j = await res.json().catch(() => ({}));
      setError(j?.error ?? 'Erreur de soumission');
      setStatus('error');
    }
  }

  return (
    <footer className="bg-gray-50">
      {/* top block */}
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2">
        {/* LEFT: form */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-800">Contactez-nous</h3>

          <form onSubmit={onSubmit} className="mt-6 space-y-4" autoComplete="off">
            {/* honeypot (hidden but submittable) */}
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="hp">Ne pas remplir</label>
              <input id="hp" name="hp" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="firstName"
                placeholder="Nom"
                className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none ring-0 focus:border-blue-500"
                required
              />
              <input
                name="lastName"
                placeholder="Prenom"
                className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none ring-0 focus:border-blue-500"
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none ring-0 focus:border-blue-500"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none ring-0 focus:border-blue-500"
              required
            />

            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-full bg-blue-700 px-6 py-2.5 font-semibold text-white shadow hover:bg-blue-600 disabled:opacity-60"
            >
              {status === 'loading' ? 'Envoi…' : 'Envoyer'}
            </button>

            {status === 'ok' && <p className="text-sm text-green-700">Merci — nous vous contacterons.</p>}
            {status === 'error' && <p className="text-sm text-red-700">Erreur: {error}</p>}
          </form>
        </div>

        {/* RIGHT: brand + links + socials */}
        <div className="flex flex-col items-start gap-8 md:items-end">
          <div className="flex items-center gap-3">
            <Image src="/images/logo2.png" alt="Ö HOME" width={44} height={44} />
            <div className="leading-none">
              <div className="text-2xl font-semibold tracking-tight">HOME</div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-gray-500">Filtration d&apos;eau</div>
            </div>
          </div>

          <ul className="grid gap-3 text-gray-700 md:text-right">
            <li><a href="/" className="hover:text-blue-700">Accueil</a></li>
            <li><a href="#whole-house" className="hover:text-blue-700">Filtre pour toute la maison</a></li>
            <li><a href="#drinking" className="hover:text-blue-700">Filtre pour eau potable</a></li>
            <li><a href="#techniques" className="hover:text-blue-700">Techniques</a></li>
            <li><a href="#distribution" className="hover:text-blue-700">Schéma de placement</a></li>
          </ul>

          <div className="flex items-center gap-4">
            <Social href="#" label="Instagram"><Instagram className="h-5 w-5" /></Social>
            <Social href="#" label="Facebook"><Facebook className="h-5 w-5" /></Social>
            <Social href="#" label="WhatsApp"><MessageCircle className="h-5 w-5" /></Social>
            <Social href="#" label="Twitter / X"><Twitter className="h-5 w-5" /></Social>
            <Social href="#" label="YouTube"><Youtube className="h-5 w-5" /></Social>
            <Social href="tel:+1" label="Téléphone"><Phone className="h-5 w-5" /></Social>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t bg-gray-100 py-4 text-center text-xs text-gray-500">
        Copyright © {new Date().getFullYear()} Ö Home. All rights reserved.
      </div>
    </footer>
  );
}

/** pill icon link */
function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      aria-label={label}
      href={href}
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'icon' }),
        'h-10 w-10 rounded-full border border-gray-300 bg-white hover:border-blue-500 hover:bg-blue-50'
      )}
    >
      {children}
    </Link>
  );
}

// app/(site)/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          aria-label="Accueil Ö Home"
          className="flex items-center gap-2 shrink-0"
          onClick={close}
        >
          <Image
            src="/images/logo2.png"
            alt="Ö Home"
            width={40}
            height={40}
            priority
            className="shrink-0"
          />
          <span className="sr-only">Ö Home</span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-6 text-sm text-gray-700"
        >
          <Link href="/" className="hover:text-blue-700" onClick={close}>
            Accueil
          </Link>

          <Link
            href="/filtre_pour_toute_la_maison"
            prefetch
            className="hover:text-blue-700"
            onClick={close}
          >
            Filtre pour toute la maison
          </Link>

          <Link
            href="/filtre_pour_eau_potable"
            prefetch
            className="hover:text-blue-700"
            onClick={close}
          >
            Filtre pour eau potable
          </Link>

          <Link href="/techniques" className="hover:text-blue-700" onClick={close}>
            Techniques
          </Link>

          {/* point to homepage anchor so it works from any page */}
          <Link href="/#distribution" className="hover:text-blue-700" onClick={close}>
            Schéma
          </Link>

          <Link
            href="#contact"
            className={cn(buttonVariants({ variant: 'default' }), 'rounded-full')}
            onClick={close}
          >
            Contactez-nous
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(v => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={cn(
          'md:hidden fixed left-0 right-0 top-16 border-b border-gray-200 bg-white/95 shadow-sm transition-[max-height] duration-300 overflow-hidden',
          open ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-3 text-gray-800">
            <li>
              <Link href="/" onClick={close} className="block hover:text-blue-700">
                Accueil
              </Link>
            </li>

            <li>
              <Link
                href="/filtre_pour_toute_la_maison"
                prefetch
                onClick={close}
                className="block hover:text-blue-700"
              >
                Filtre pour toute la maison
              </Link>
            </li>

            <li>
              <Link
                href="/filtre_pour_eau_potable"
                prefetch
                onClick={close}
                className="block hover:text-blue-700"
              >
                Filtre pour eau potable
              </Link>
            </li>

            <li>
              <Link href="/techniques" onClick={close} className="block hover:text-blue-700">
                Techniques
              </Link>
            </li>

            {/* homepage anchor for the diagram section */}
            <li>
              <Link href="/#distribution" onClick={close} className="block hover:text-blue-700">
                Schéma
              </Link>
            </li>
          </ul>

          <div className="mt-4">
            <Link
              href="#contact"
              onClick={close}
              className={cn(buttonVariants({ variant: 'default' }), 'w-full rounded-full')}
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

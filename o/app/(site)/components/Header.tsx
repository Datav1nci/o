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
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={close}>
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
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="/" className="hover:text-blue-700">Accueil</a>
          <a href="#whole-house" className="hover:text-blue-700">Toute la maison</a>
          <a href="#drinking" className="hover:text-blue-700">Eau potable</a>
          <a href="#techniques" className="hover:text-blue-700">Techniques</a>
          <a href="#distribution" className="hover:text-blue-700">Schéma</a>
          <a
            href="#contact"
            className={cn(buttonVariants({ variant: 'default' }), 'rounded-full')}
          >
            Contactez-nous
          </a>
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

      {/* Mobile panel sits directly under the fixed header */}
      <div
        id="mobile-nav"
        className={cn(
          'md:hidden fixed left-0 right-0 top-16 border-b border-gray-200 bg-white/95 shadow-sm transition-[max-height] duration-300 overflow-hidden',
          open ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-3 text-gray-800">
            <li><a href="/" onClick={close} className="block hover:text-blue-700">Accueil</a></li>
            <li><a href="#whole-house" onClick={close} className="block hover:text-blue-700">Toute la maison</a></li>
            <li><a href="#drinking" onClick={close} className="block hover:text-blue-700">Eau potable</a></li>
            <li><a href="#techniques" onClick={close} className="block hover:text-blue-700">Techniques</a></li>
            <li><a href="#distribution" onClick={close} className="block hover:text-blue-700">Schéma</a></li>
          </ul>
          <div className="mt-4">
            <a
              href="#contact"
              onClick={close}
              className={cn(buttonVariants({ variant: 'default' }), 'w-full rounded-full')}
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

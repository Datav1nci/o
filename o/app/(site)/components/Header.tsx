// app/(site)/components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo — never shrink */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="./images/Logo.png"
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
            className="rounded-full bg-blue-800 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            Contactez-nous
          </a>
        </nav>

        {/* Mobile CTA (optional) */}
        <a
          href="#contact"
          className="md:hidden rounded-full bg-blue-800 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

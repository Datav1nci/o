// app/(site)/components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Logo.png"
            alt="Ö Home Filtration"
            width={40}
            height={40}
            priority
          />
          <span className="sr-only">Ö Home</span>
        </Link>

        {/* Right: Nav */}
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-700">
            Accueil
          </Link>
          <Link href="#whole-house" className="hover:text-blue-700">
            Toute la maison
          </Link>
          <Link href="#drinking" className="hover:text-blue-700">
            Eau potable
          </Link>
          <Link href="#techniques" className="hover:text-blue-700">
            Techniques
          </Link>
          <Link href="#distribution" className="hover:text-blue-700">
            Schéma
          </Link>
          <Link
            href="#contact"
            className="rounded-full bg-blue-800 px-4 py-2 text-white hover:bg-blue-700"
          >
            Contactez-nous
          </Link>
        </nav>
      </div>
    </header>
  );
}

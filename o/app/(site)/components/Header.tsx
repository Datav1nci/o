import Link from 'next/link';
import Badge from './Badge';
import { Button } from './Button';


export default function Header() {
return (
<header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
<div className="container mx-auto flex h-16 items-center justify-between px-4">
<Link href="#" className="flex items-baseline gap-2 text-lg font-bold tracking-tight">
<span>Ö HOME</span>
<Badge>FILTRATION D’EAU</Badge>
</Link>
<nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex dark:text-gray-300">
<a href="#whole-house" className="hover:text-gray-900 dark:hover:text-white">Toute la maison</a>
<a href="#drinking" className="hover:text-gray-900 dark:hover:text-white">Eau potable</a>
<a href="#techniques" className="hover:text-gray-900 dark:hover:text-white">Techniques</a>
<a href="#distribution" className="hover:text-gray-900 dark:hover:text-white">Schéma</a>
<a href="#problems" className="hover:text-gray-900 dark:hover:text-white">Problèmes</a>
</nav>
<Button as-child className="rounded-full">
<a href="#contact">Contactez-nous</a>
</Button>
</div>
</header>
);
}
import type { Metadata } from 'next';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Filtre pour toute la maison | Ö HOME',
  description:
    "Tout sur notre filtre pour toute la maison : bénéfices, installation et options.",
};

export default function MyNewPage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">
        Filtre pour toute la maison
      </h1>

      <p className="mt-4 text-slate-600 dark:text-slate-300">
        Contenu de la page… (présentation du produit, specs, FAQ, etc.)
      </p>

      <div className="mt-8 flex gap-3">
        <Link
          href="#contact"
          className={cn(buttonVariants({ variant: 'default' }), 'rounded-full')}
        >
          Nous contacter
        </Link>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: 'outline' }), 'rounded-full')}
        >
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}

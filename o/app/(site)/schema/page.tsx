import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Schéma de placement | Ö HOME',
  description:
    "Vue d'ensemble des emplacements recommandés : central, protection, sous-évier et eau potable.",
};

/** Small helper for numbered list items */
function Num({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-600 text-xs font-semibold text-white">
        {n}
      </span>
      <span className="text-slate-800 dark:text-slate-100">{children}</span>
    </li>
  );
}

export default function SchemaPage() {
  return (
    <main id="schema" className="container mx-auto max-w-7xl px-4 pb-16">
      {/* HERO (parallax-like) */}
      <section className="mb-10">
        <div className="relative h-[42vh] min-h-[300px] overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            /* drop your banner here: /public/images/schema_hero.webp */
            style={{ backgroundImage: "url('/images/schema_hero.webp')" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <p className="text-sm opacity-90">Eau de luxe</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
              Une Sensation Unique
            </h1>
          </div>
        </div>
      </section>

      {/* SINGLE SECTION (diagram + lists) */}
      <section aria-labelledby="schema-title" className="grid gap-10 lg:grid-cols-2">
        <h2 id="schema-title" className="sr-only">
          Schéma de placement – emplacements recommandés
        </h2>

        {/* Left: the diagram */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          {/* Reuses an existing asset in the repo; swap when you have the final artwork */}
          <Image
            src="/images/distribution.png"
            alt="Schéma d’installation dans la maison"
            width={1600}
            height={1200}
            className="h-auto w-full"
            priority
          />
        </div>

        {/* Right: numbered lists */}
        <div className="grid content-start gap-8">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-wide text-slate-500">
              CENTRAL
            </p>
            <ol className="space-y-3">
              <Num n={1}>Central</Num>
              <Num n={2}>Xtra Protection</Num>
              <Num n={3}>Le Grand</Num>
              <Num n={4}>Protecteur</Num>
              <Num n={5}>Micro</Num>
              <Num n={6}>Adoucisseur</Num>
              <Num n={7}>Nü-Blend</Num>
              <Num n={8}>Ö Solaire</Num>
            </ol>
          </div>

          <div>
            <p className="mb-2 mt-2 text-sm font-semibold tracking-wide text-slate-500">
              SOUS ÉVIER
            </p>
            <ol className="space-y-3">
              <Num n={1}>P1 sous évier</Num>
              <Num n={2}>Trio sous évier</Num>
              <Num n={3}>P2 sous évier</Num>
              <Num n={4}>Le Simple</Num>
              <Num n={5}>Micro</Num>
              <Num n={6}>Osmosseur</Num>
            </ol>
          </div>

          <div className="pt-2">
            <Link
              href="/#contact"
              className={cn(buttonVariants({ variant: 'default' }), 'rounded-full')}
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

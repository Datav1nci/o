import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Filtre pour eau potable | Ö HOME',
  description:
    "Systèmes de filtration pour l'eau potable : solutions pour boire & protection antibactérienne (UV).",
};

/** Reusable product card (image + title + chevron) */
function CardLink({
  href,
  title,
  img,
  alt,
}: {
  href: string;
  title: string;
  img: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
        <Image
          src={img}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(min-width:1024px) 360px, 90vw"
        />
      </div>
      <div className="flex items-center gap-2 px-5 py-4 text-lg font-semibold text-slate-800 dark:text-slate-100">
        {title}
        <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

export default function Page() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-8">
      {/* Parallax HERO (CSS bg-fixed) */}
      <section className="mb-10">
        <div
          className="relative h-[44vh] min-h-[320px] overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800"
        >
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/images/filter_devices_hero.webp')" }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Système de filtration pour l’eau potable
            </h1>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href="#boire"
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'rounded-full')}
          >
            Boire
          </a>
          <a
            href="#bacteries"
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'rounded-full')}
          >
            Bactéries
          </a>
          <Link
            href="/#contact"
            className={cn(buttonVariants({ variant: 'default', size: 'sm' }), 'rounded-full')}
          >
            Contactez-nous
          </Link>
        </div>
      </section>

      {/* BOIRE */}
      <section id="boire" aria-labelledby="boire-title" className="py-10">
        <h2 id="boire-title" className="text-3xl font-bold tracking-tight text-slate-800">
          Boire
        </h2>
        <p className="mt-3 max-w-4xl text-slate-700 dark:text-slate-300">
          Pour une eau pure et saine au quotidien, Ö Home propose des systèmes de
          filtration pour l’eau potable. Nos solutions éliminent les impuretés pour
          vous offrir une eau idéale à boire et à cuisiner.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardLink
            href="/filtre_pour_eau_potable/o-p1"
            title="Ö P1"
            img="/images/distribution.png"
            alt="Système Ö P1"
          />
          <CardLink
            href="/#contact"
            title="Trio"
            img="/images/drinking.png"
            alt="Système Trio"
          />
          <CardLink
            href="/#contact"
            title="Ö P2"
            img="/images/distribution.png"
            alt="Système Ö P2"
          />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardLink
            href="/#contact"
            title="Osmosseur"
            img="/images/drinking.png"
            alt="Osmose inverse compact"
          />
          <CardLink
            href="/#contact"
            title="Le Simple"
            img="/images/distribution.png"
            alt="Filtration simple & efficace"
          />
          <CardLink
            href="/#contact"
            title="Le Grand"
            img="/images/drinking.png"
            alt="Station anti-goûts & odeurs"
          />
        </div>
      </section>

      {/* BACTÉRIES */}
      <section id="bacteries" aria-labelledby="bacteries-title" className="py-12">
        <h2 id="bacteries-title" className="text-3xl font-bold tracking-tight text-slate-800">
          Bactéries
        </h2>
        <p className="mt-3 max-w-4xl text-slate-700 dark:text-slate-300">
          Ne laissez pas les bactéries compromettre la qualité de votre eau. Invisibles à
          l’œil nu, elles peuvent pourtant provoquer des problèmes de santé, altérer le
          goût et l’odeur de l’eau et contaminer vos boissons et repas. Grâce à la
          technologie UV LED avancée, l’eau est stérilisée instantanément, éliminant
          jusqu’à 99,9&nbsp;% des bactéries, virus et autres micro-organismes. Sans
          produits chimiques, cette solution est écologique, économique et conserve à votre
          eau toute sa pureté naturelle.
        </p>

        <div className="mt-6 font-semibold">
          <a href="/#techniques" className="inline-flex items-center gap-1 underline-offset-2 hover:underline">
            Voir technologies utilisées <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 grid gap-6 sm:max-w-sm sm:grid-cols-1">
          <CardLink
            href="/components/filtre_pour_toute_la_maison/o-uv-led"
            title="Ö UV LED Lamp"
            img="/images/distribution.png"
            alt="Désinfection UV"
          />
        </div>
      </section>

      {/* Bottom CTAs */}
      <section className="mt-14 flex flex-wrap gap-3">
        <Link
          href="/#contact"
          className={cn(buttonVariants({ variant: 'default' }), 'rounded-full')}
        >
          Parler à un spécialiste
        </Link>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: 'outline' }), 'rounded-full')}
        >
          Retour à l’accueil
        </Link>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Filtre pour toute la maison | Ö HOME',
  description:
    "Solutions par type de problème : dureté (calcaire), sédiments, chlore et bactéries. Bénéfices, technologies utilisées et options d'installation.",
};

/** Small internal card-link used in sections */
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
          priority={false}
        />
      </div>
      <div className="flex items-center gap-2 px-5 py-4 text-lg font-semibold text-slate-800 dark:text-slate-100">
        {title}
        <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

export default function MyNewPage() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-8">
      {/* HERO */}
      <section className="mb-10">
        <div className="relative aspect-[16/5] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="De l’eau filtrée pour toute la maison"
            fill
            priority
            className="object-cover"
            sizes="(min-width:1280px) 1200px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              De l’eau filtrée pour toute la maison
            </h1>
            <p className="mt-3 text-base opacity-95 sm:text-lg">
              Solutions par type de problème
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href="#durete"
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'rounded-full')}
          >
            Dureté
          </a>
          <a
            href="#sediments"
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'rounded-full')}
          >
            Sédiments
          </a>
          <a
            href="#chlore"
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'rounded-full')}
          >
            Chlore
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

      {/* DURETÉ */}
      <section id="durete" aria-labelledby="durete-title" className="py-10">
        <h2 id="durete-title" className="text-3xl font-bold tracking-tight text-slate-800">
          Dureté
        </h2>
        <p className="mt-3 max-w-4xl text-slate-700 dark:text-slate-300">
          L’eau dure peut affecter votre maison et votre santé. Avec le temps, le calcaire
          dégrade la robinetterie, les appareils (chauffe-eau, lave-linge) et laisse des
          traces, tout en asséchant la peau et les cheveux. Nous proposons des
          configurations adaptées à la taille de votre habitation.
        </p>

        <div className="mt-6 font-semibold">
          <a href="/#techniques" className="inline-flex items-center gap-1 underline-offset-2 hover:underline">
            Voir technologies utilisées <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardLink
            href="/#contact"
            title="Ö Energie"
            img="/images/distribution.png"
            alt="Solution dureté Ö Énergie"
          />
          <CardLink
            href="/#contact"
            title="Nü Blend"
            img="/images/drinking.png"
            alt="Solution dureté Nü Blend"
          />
          <CardLink
            href="/#contact"
            title="Ö Solaire"
            img="/images/distribution.png"
            alt="Solution dureté Ö Solaire"
          />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <CardLink
            href="/#contact"
            title="Ö SilkySoft"
            img="/images/drinking.png"
            alt="Douche anti-calcaire"
          />
          <CardLink
            href="/#contact"
            title="Ö Adoucisseur"
            img="/images/distribution.png"
            alt="Adoucisseur d’eau"
          />
        </div>
      </section>

      {/* SÉDIMENTS */}
      <section id="sediments" aria-labelledby="sediments-title" className="py-12">
        <h2 id="sediments-title" className="text-3xl font-bold tracking-tight text-slate-800">
          Sédiments
        </h2>
        <p className="mt-3 max-w-4xl text-slate-700 dark:text-slate-300">
          Ne laissez pas les particules en suspension (sable, rouille, boues) nuire à vos
          installations. Une filtration sédimentaire protège la plomberie et améliore la
          clarté de l’eau.
        </p>

        <div className="mt-6 font-semibold">
          <a href="/#techniques" className="inline-flex items-center gap-1 underline-offset-2 hover:underline">
            Voir technologies utilisées <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardLink
            href="/#contact"
            title="Ö Micro"
            img="/images/distribution.png"
            alt="Filtration sédimentaire point d’usage"
          />
          <CardLink
            href="/#contact"
            title="Ö Central"
            img="/images/distribution.png"
            alt="Filtration sédimentaire centrale"
          />
          <CardLink
            href="/#contact"
            title="Ö Xtra Protection"
            img="/images/distribution.png"
            alt="Cartouche sédimentaire haute capacité"
          />
        </div>
      </section>

      {/* CHLORE */}
      <section id="chlore" aria-labelledby="chlore-title" className="py-12">
        <h2 id="chlore-title" className="text-3xl font-bold tracking-tight text-slate-800">
          Chlore
        </h2>
        <p className="mt-3 max-w-4xl text-slate-700 dark:text-slate-300">
          La réduction du chlore améliore le goût et l’odeur de l’eau, et protège les peaux
          sensibles. Nos filtres au charbon actif se placent en point d’entrée ou d’usage.
        </p>

        <div className="mt-6 font-semibold">
          <a href="/#techniques" className="inline-flex items-center gap-1 underline-offset-2 hover:underline">
            Voir technologies utilisées <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 grid gap-6 sm:max-w-sm sm:grid-cols-1">
          <CardLink
            href="/#contact"
            title="Le Grand"
            img="/images/drinking.png"
            alt="Station anti-goûts et odeurs"
          />
        </div>
      </section>

      {/* BACTÉRIES */}
      <section id="bacteries" aria-labelledby="bacteries-title" className="py-12">
        <h2 id="bacteries-title" className="text-3xl font-bold tracking-tight text-slate-800">
          Bactéries
        </h2>
        <p className="mt-3 max-w-4xl text-slate-700 dark:text-slate-300">
          Pour une eau sûre, des solutions UV ou membranes dédiées constituent une barrière
          efficace contre les micro-organismes — sans produits chimiques.
        </p>

        <div className="mt-6 font-semibold">
          <a href="/#techniques" className="inline-flex items-center gap-1 underline-offset-2 hover:underline">
            Voir technologies utilisées <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 grid gap-6 sm:max-w-sm sm:grid-cols-1">
          <CardLink
            href="/#contact"
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

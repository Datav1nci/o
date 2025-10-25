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

export default function Page() {
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

      {/* DURETÉ — (white background) */}
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
          {/* Ö Energie already implemented */}
          <CardLink
            href="/filtre_pour_toute_la_maison/energie"
            title="Ö Energie"
            img="/images/distribution.png"
            alt="Solution dureté Ö Énergie"
          />
          {/* UPDATED: link now points to the new page */}
          <CardLink
            href="/filtre_pour_toute_la_maison/nu-blend"
            title="Nü Blend"
            img="/images/filter_devices_hero.webp"
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

      {/* SÉDIMENTS — (light gray background) */}
      <section id="sediments" aria-labelledby="sediments-title" className="py-12">
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
          <h2 id="sediments-title" className="text-3xl font-bold tracking-tight text-slate-800">
            Sédiments
          </h2>
          <p className="mt-3 max-w-4xl text-slate-700 dark:text-slate-300">
            Ne laissez pas l’eau sale vous affecter. Vous buvez de l’eau même lorsque vous vous brossez les dents
            et que vous prenez un bain. Pouvez-vous imaginer que l’eau est sale, boueuse? Regardez de plus près,
            l’eau dans laquelle vous vous baignez a beaucoup d’impuretés, de la terre et de la saleté à la rouille
            sur les tuyaux, des algues stockées, et l’eau est remplie de particules en suspension.
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
        </div>
      </section>

      {/* CHLORE — (white) */}
      <section id="chlore" aria-labelledby="chlore-title" className="py-12">
        <h2 id="chlore-title" className="text-3xl font-bold tracking-tight text-slate-800">
          Chlore
        </h2>
        <p className="mt-3 max-w-4xl text-slate-700 dark:text-slate-300">
          Pas de soucis avec l’effet du chlore. Votre eau possède une odeur désagréable? Si l’odeur de l’eau est
          similaire à celle de l’eau de Javel, c’est parce que l’eau contient du chlore. L’eau municipale est
          généralement traitée au chlore, qui peut servir de désinfectant pour prévenir les maladies d’origine
          hydrique. Cependant, une chloration excessive peut donner à l’eau un goût et une odeur désagréables.
          Il provoque également une décoloration de la peau et une irritation des yeux.
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

      {/* BACTÉRIES — (light gray) */}
      <section id="bacteries" aria-labelledby="bacteries-title" className="py-12">
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
          <h2 id="bacteries-title" className="text-3xl font-bold tracking-tight text-slate-800">
            Bactéries
          </h2>
          <p className="mt-3 max-w-4xl text-slate-700 dark:text-slate-300">
            Ne laissez pas les bactéries compromettre la qualité de votre eau. Invisibles à l’œil nu, elles peuvent
            pourtant provoquer des problèmes de santé, altérer le goût et l’odeur de l’eau et contaminer vos
            boissons et repas. Grâce à la technologie UV LED avancée, l’eau est stérilisée instantanément,
            éliminant jusqu’à 99,9 % des bactéries, virus et autres micro-organismes. Sans produits chimiques,
            cette solution est écologique, économique et conserve à votre eau toute sa pureté naturelle.
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

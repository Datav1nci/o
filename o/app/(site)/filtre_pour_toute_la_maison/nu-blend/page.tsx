import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nü Blend – Dureté | Ö HOME",
  description:
    "Nü Blend empêche le calcaire, empêche la rouille et protège tout appareil utilisant l’eau. Mode d’emploi et avantages de la filtration anti calcaire.",
};

export default function Page() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumbs */}
      <nav aria-label="Fil d’Ariane" className="mb-6 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-1">
          <li className="flex items-center gap-1">
            <Home className="h-4 w-4" aria-hidden />
            <Link href="/" className="hover:underline">
              Accueil
            </Link>
          </li>
          <li className="mx-1 opacity-60">/</li>
          <li>
            <Link
              href="/filtre_pour_toute_la_maison"
              className="hover:underline"
            >
              Filtre pour toute la maison
            </Link>
          </li>
          <li className="mx-1 opacity-60">/</li>
          <li>
            <span className="opacity-80">Dureté</span>
          </li>
          <li className="mx-1 opacity-60">/</li>
          <li aria-current="page" className="font-medium text-slate-800">
            Nü Blend
          </li>
        </ol>
      </nav>

      {/* Top block */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Big visual (placeholder for now) */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Visuel du produit Nü Blend (espace réservé)"
            priority
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>

        {/* Copy */}
        <div className="px-1">
          <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-slate-500">
            D U R E T É
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Nü Blend
          </h1>
          <p className="mt-3 max-w-prose text-slate-700 dark:text-slate-300">
            Empêche le calcaire, empêche la rouille et protège tout appareil
            utilisant l’eau.
          </p>

          <h2 className="mt-6 text-base font-semibold text-slate-900 dark:text-slate-100">
            Mode d’emploi
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
            <li>Protège tout appareil utilisant l’eau</li>
            <li>
              Répond à vos préoccupations concernant l’accumulation de calcaire
            </li>
            <li>Prolonge la durée de vie des appareils</li>
          </ul>

          {/* Small thumbs — placeholders for now */}
          <div className="mt-4 grid grid-cols-3 gap-3 sm:max-w-md">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <Image
                  src="/images/filter_devices_hero.webp"
                  alt={`Illustration Nü Blend ${i} (espace réservé)`}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantage block */}
      <section className="mt-12 grid items-center gap-8 md:grid-cols-2">
        {/* Product cutaway (placeholder) */}
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Nü Blend — coupe du produit (espace réservé)"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 480px, 80vw"
          />
          <span className="pointer-events-none absolute bottom-3 left-3 rounded-lg bg-blue-700 px-3 py-1 text-sm font-semibold text-white">
            Nü Blend
          </span>
        </div>

        {/* Bullets */}
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Avantage de la filtration anti calcaire
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
            <li>Empêche la formation du calcaire</li>
            <li>Catégorie alimentaire efficace contre le calcaire</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-full"
              )}
            >
              Contactez-nous
            </Link>
            <Link
              href="/filtre_pour_toute_la_maison"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full"
              )}
            >
              <span className="inline-flex items-center">
                Retour
                <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

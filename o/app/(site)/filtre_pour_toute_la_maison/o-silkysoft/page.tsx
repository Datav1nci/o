import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ö SilkySoft – Dureté | Ö HOME",
  description:
    "Ö SilkySoft élimine 99% des contaminants et retient les minéraux essentiels. Système de filtration de douche anti-calcaire, doux pour la peau et les cheveux.",
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
            Ö SilkySoft
          </li>
        </ol>
      </nav>

      {/* Top block */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Big visual (placeholder) */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Visuel Ö SilkySoft (espace réservé)"
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
            Ö SilkySoft
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            élimine 99% des contaminants, Retient les minéraux essentiels.
          </p>

          <h2 className="mt-6 text-base font-semibold text-slate-900 dark:text-slate-100">
            Mode d’emploi
          </h2>

          {/* Small thumbs — placeholders */}
          <div className="mt-3 grid grid-cols-3 gap-3 sm:max-w-md">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <Image
                  src="/images/filter_devices_hero.webp"
                  alt={`Illustration Ö SilkySoft ${i} (espace réservé)`}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-full"
              )}
            >
              Contactez-nous
            </a>
            <Link
              href="/filtre_pour_toute_la_maison"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full"
              )}
            >
              Retour
            </Link>
          </div>
        </div>
      </section>

      {/* Professional system block */}
      <section className="mt-12">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          Système professionnel de filtration anti calcaire
        </h2>

        <div className="mt-4 grid items-start gap-8 md:grid-cols-[360px_1fr]">
          {/* Product cutaway (placeholder) */}
          <div className="relative mx-auto aspect-[3/5] w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
            <Image
              src="/images/filter_devices_hero.webp"
              alt="Coupe du produit Ö SilkySoft (espace réservé)"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 360px, 80vw"
            />
          </div>

          {/* Feature list */}
          <ul className="grid gap-2 text-slate-700 dark:text-slate-300">
            <li>Élimine 99% le Chlore</li>
            <li>Élimine plus que 80 Contaminants.</li>
            <li>Réduit l’effet du calcaire</li>
            <li>Assouplisse et protège les cheveux</li>
            <li>Hydrate la peau sèche</li>
            <li>Protège les cheveux colorés</li>
          </ul>
        </div>
      </section>

      {/* Bottom CTA (scroll on this page) */}
      <section className="mt-12">
        <a
          href="#contact"
          className={cn(buttonVariants({ variant: "default" }), "rounded-full")}
        >
          Parler à un spécialiste
        </a>
      </section>
    </main>
  );
}

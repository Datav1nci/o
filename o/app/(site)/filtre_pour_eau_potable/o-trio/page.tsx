import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Trio – Boire | Ö HOME",
  description:
    "Trio : système sous évier à 6 niveaux de filtration. Élimine jusqu’à 99,9 % (bactéries & virus) + plus de 80 contaminants. Installation facile en 5 minutes.",
};

export default function TrioPage() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-8">
      {/* HERO */}
      <section className="mb-8">
        <div className="relative aspect-[16/5] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Système de filtration pour l’eau potable"
            fill
            priority
            className="object-cover"
            sizes="(min-width:1280px) 1200px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/25" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Système de filtration pour l’eau potable
            </h1>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav aria-label="Fil d’Ariane" className="mb-6 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/filtre_pour_toute_la_maison" className="hover:underline">
              Filtre pour toute la maison
            </Link>
          </li>
          <li className="opacity-60">›</li>
          <li>Boire</li>
          <li className="opacity-60">›</li>
          <li aria-current="page" className="font-medium text-slate-800">Trio</li>
        </ol>
      </nav>

      {/* Header block: poster + intro */}
      <section className="grid gap-8 md:grid-cols-2">
        {/* Poster (placeholder) */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Affiche produit Trio (espace réservé)"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 520px, 90vw"
          />
        </div>

        {/* Copy */}
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
            B O I R E
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Trio
          </h2>

          <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
            6 niveaux de filtration
          </h3>
          <p className="mt-2 max-w-prose text-slate-700 dark:text-slate-300">
            Élimine jusqu’à <span className="font-semibold">99,9%</span>, y compris les bactéries et les virus,
            et réduit plus de 80 contaminants pour une eau au goût agréable.
          </p>

          {/* Feature stack (as in the image: 3 groupes) */}
          <div className="mt-6 space-y-5 text-slate-700 dark:text-slate-300">
            <div>
              <p className="font-semibold">Sédiment</p>
              <ul className="mt-1 list-disc pl-5">
                <li>Particules jusqu’à 5 μm</li>
                <li>Le sable, la rouille, la poussière</li>
                <li>Substances naturelles</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Charbon catalytique (coques de noix de coco)</p>
              <ul className="mt-1 list-disc pl-5">
                <li>Chlore et goûts/odeurs</li>
                <li>Plomb, PFAS/PFOS* (réduction)</li>
                <li>Composés organiques volatils (COV)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Ultra-Filtration (0,01 μm)</p>
              <ul className="mt-1 list-disc pl-5">
                <li>Bactéries et virus</li>
                <li>Micro-impuretés</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#contact" className={cn(buttonVariants({ variant: "default" }), "rounded-full")}>
              Contactez-nous
            </Link>
            <Link href="/filtre_pour_eau_potable" className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}>
              Retour
            </Link>
          </div>
        </div>
      </section>

      {/* Installation section (visual left + headline right) */}
      <section className="mt-12 grid items-center gap-8 md:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Installation Trio (espace réservé)"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 640px, 100vw"
          />
        </div>

        <div>
          <h3 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100">
            Installation facile<br />en 5 minutes
          </h3>
          <p className="mt-4 text-slate-700 dark:text-slate-300">
            Pas d’électricité<br />pas de perte d’eau
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-12 flex flex-wrap gap-3">
        <Link href="/#contact" className={cn(buttonVariants({ variant: "default" }), "rounded-full")}>
          Parler à un spécialiste
        </Link>
        <Link href="/filtre_pour_eau_potable" className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}>
          Retour
        </Link>
      </section>
    </main>
  );
}

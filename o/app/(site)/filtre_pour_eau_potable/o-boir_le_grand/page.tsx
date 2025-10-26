import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Le Grand – Boire | Ö HOME",
  description:
    "Le Grand (Boire) : station anti-goûts & odeurs sous évier. Cartouche double-fonctions (manchon 25 µm + fibre de charbon à haute technologie). Installation simple, sans électricité et sans perte d’eau.",
};

export default function Page() {
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
          <li aria-current="page" className="font-medium text-slate-800">Le Grand</li>
        </ol>
      </nav>

      {/* Header: poster + intro */}
      <section className="grid gap-8 md:grid-cols-2">
        {/* Poster (placeholder) */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Affiche produit Le Grand (espace réservé)"
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
            Le Grand
          </h2>

          <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
            Pour une eau plus agréable et plus claire, dans toute la maison&nbsp;!
          </h3>

          <p className="mt-3 max-w-prose text-slate-700 dark:text-slate-300">
            Ce pot-simple équipé d’une cartouche double-fonctions (manchon filtrant 25&nbsp;µm
            + conteneur de fibre de charbon à haute technologie) permet l’élimination des particules
            solides, ainsi que la réduction des substances altérant la qualité de l’eau : mauvais
            goûts et odeurs, chlore, COV (composants organiques volatils).
          </p>

          <p className="mt-2 max-w-prose text-slate-700 dark:text-slate-300">
            Installé à l’arrivée d’eau générale ou sur un point d’usage, ce filtre vous offre une eau
            plus agréable au quotidien, dans toute la maison : la solution pratique et compacte.
          </p>

          <p className="mt-3 font-semibold text-red-600 dark:text-red-400">
            Sans électricité et sans perte d’eau&nbsp;!
          </p>

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

      {/* Specs + Benefits */}
      <section className="mt-10 grid gap-10 md:grid-cols-2">
        {/* Caractéristiques techniques */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Caractéristiques techniques
          </h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
            <table className="min-w-full text-left text-sm">
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {[
                  ["Diamètre de raccordement", "DN 25 – 1\""],
                  ["Débit nominal à ΔP = 0,5 bars", "1000 L/h"],
                  ["Pression de service max", "8 bars"],
                  ["Capacité de la cartouche", "De 12 à 18 mois (fonction de la qualité d’eau)"],
                  ["Dimension (L×H) mm", "120 × 540"],
                  ["Compatibilité", "Filtre pot 20 × 2,5\" compatible avec toutes les cartouches universelles"],
                ].map(([k, v]) => (
                  <tr key={k} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-950">
                    <th className="w-1/2 px-4 py-3 font-semibold text-slate-800 dark:text-slate-100">{k}</th>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-600 dark:text-slate-400">
            Consommable associé : <span className="font-medium">Cartouche Fibre-C</span>
          </p>
        </div>

        {/* Les + produit */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Les + produit</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
            <li>Encombrement réduit avec 1 pot unique plutôt qu’une station duplex</li>
            <li>Entretien simplifié : 1 seule cartouche à remplacer</li>
            <li>
              Filtration complète : retient les impuretés jusqu’à 25&nbsp;µm (sable, limon, rouille),
              les COV (composants organiques volatils) et les substances responsables des mauvais goûts et odeurs
              tel que le chlore
            </li>
            <li>Réduction des quantités de consommables à jeter</li>
          </ul>
        </div>

        {/* Inclus + Cartouche */}
        <div className="md:col-span-2">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Inclus</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
                <li>Filtre pot simple universel</li>
                <li>
                  Cartouche <span className="font-semibold">FIBRE DE CHARBON À HAUTE TECHNOLOGIE</span> avec un
                  manchon filtrant 25&nbsp;µm
                </li>
                <li>Clé de serrage / desserrage</li>
                <li>Équerre de fixation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                La cartouche Fibre-C
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
                <li>Conteneur composé de fibre de charbon à haute technologie</li>
                <li><strong>MANCHON FILTRANT 25&nbsp;µm</strong></li>
                <li>Cartouche universelle</li>
                <li>Fréquence de remplacement : Tous les 12 à 18 mois</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation illustrations */}
      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Schéma d’installation (espace réservé)"
            fill
            className="object-contain"
            sizes="(min-width:1024px) 640px, 100vw"
          />
        </div>
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Exemple d’installation (espace réservé)"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 640px, 100vw"
          />
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

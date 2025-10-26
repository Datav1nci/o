import type { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Le Grand – Chlore | Ö HOME",
  description:
    "Le Grand : station anti-goûts & odeurs. Cartouche double-fonctions (manchon 25µm + fibre de charbon à haute technologie) pour réduire chlore, COV et particules.",
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
            <span className="opacity-80">Chlore</span>
          </li>
          <li className="mx-1 opacity-60">/</li>
          <li aria-current="page" className="font-medium text-slate-800">
            Le Grand
          </li>
        </ol>
      </nav>

      {/* Intro / hero */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Parallax visual (CSS-only) */}
        <div
          role="img"
          aria-label="Visuel Le Grand (illustration)"
          className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800"
        >
          <div className="aspect-[4/5] w-full bg-[url('/images/filter_devices_hero.webp')] bg-cover bg-center bg-no-repeat bg-fixed" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/10" />
        </div>

        <div className="px-1">
          <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-slate-500">
            C H L O R E
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Le Grand
          </h1>

          <h2 className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
            Pour une eau plus agréable et plus claire, dans toute la
            maison&nbsp;!
          </h2>

          <p className="mt-3 max-w-prose text-slate-700 dark:text-slate-300">
            Ce pot-simple équipé d’une cartouche double-fonctions (manchon
            filtrant 25&nbsp;µm + conteneur de fibre de charbon à haute
            technologie) permet l’élimination des particules solides, ainsi que
            la réduction des substances altérant la qualité de l’eau : mauvais
            goûts et odeurs, chlore, COV (composants organiques volatils).
          </p>

          <p className="mt-2 max-w-prose text-slate-700 dark:text-slate-300">
            Installé à l’arrivée d’eau générale ou sur un point d’usage, ce
            filtre vous offre une eau plus agréable au quotidien, dans toute la
            maison&nbsp;: la solution pratique et compacte.
          </p>

          <p className="mt-2 font-semibold text-red-600 dark:text-red-400">
            Sans électricité et sans perte d’eau&nbsp;!
          </p>

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

      {/* Specs + Benefits */}
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Caractéristiques techniques */}
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Caractéristiques techniques
          </h2>

          <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
            <table className="min-w-full text-left text-sm">
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {[
                  ["Diamètre de raccordement", 'DN 25 – 1"'],
                  ["Débit nominal à ΔP = 0,5 bars", "1000 L/h"],
                  ["Pression de service max", "8 bars"],
                  [
                    "Capacité de la cartouche",
                    "De 12 à 18 mois (fonction de la qualité d’eau)",
                  ],
                  ["Dimension (L×H) mm", "120 × 540"],
                  [
                    "Compatibilité",
                    'Filtre pot 20 × 2,5" compatible avec toutes les cartouches universelles',
                  ],
                ].map(([k, v]) => (
                  <tr
                    key={k}
                    className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-950"
                  >
                    <th className="w-1/2 px-4 py-3 font-semibold text-slate-800 dark:text-slate-100">
                      {k}
                    </th>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                      {v}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Consommable associé :{" "}
            <span className="font-medium">Cartouche Fibre-C</span>
          </p>
        </div>

        {/* Les + produit */}
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Les + produit
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
            <li>
              Encombrement réduit avec 1 pot unique plutôt qu’une station duplex
            </li>
            <li>Entretien simplifié : 1 seule cartouche à remplacer</li>
            <li>
              Filtration complète : retient les impuretés jusqu’à 25&nbsp;µm
              (sable, limon, rouille), les COV et les substances responsables
              des mauvais goûts et odeurs tel que le chlore
            </li>
            <li>Réduction des quantités de consommables à jeter</li>
          </ul>
        </div>

        {/* Inclus + Cartouche */}
        <div className="md:col-span-2">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Inclus
          </h2>
          <div className="mt-3 grid gap-6 md:grid-cols-2">
            <ul className="list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
              <li>Filtre pot simple universel</li>
              <li>
                Cartouche{" "}
                <span className="font-semibold">
                  FIBRE DE CHARBON À HAUTE TECHNOLOGIE
                </span>{" "}
                avec un manchon filtrant 25&nbsp;µm
              </li>
              <li>Clé de serrage / desserrage</li>
              <li>Équerre de fixation</li>
            </ul>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                La cartouche Fibre-C
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                <li>
                  Conteneur composé de fibre de charbon à haute technologie
                </li>
                <li>
                  <strong>MANCHON FILTRANT 25&nbsp;µm</strong>
                </li>
                <li>Cartouche universelle</li>
                <li>Fréquence de remplacement : Tous les 12 à 18 mois</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation visuals with parallax */}
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div
          role="img"
          aria-label="Schéma d’installation (illustration)"
          className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800"
        >
          <div className="aspect-video w-full bg-[url('/images/filter_devices_hero.webp')] bg-cover bg-center bg-no-repeat bg-fixed" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/10" />
        </div>

        <div
          role="img"
          aria-label="Exemple d’installation (photo)"
          className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800"
        >
          <div className="aspect-video w-full bg-[url('/images/filter_devices_hero.webp')] bg-cover bg-center bg-no-repeat bg-fixed" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/10" />
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

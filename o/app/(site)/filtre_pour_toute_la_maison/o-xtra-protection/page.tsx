import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ö Xtra Protection – Sédiments | Ö HOME",
  description:
    "Ö Xtra Protection : station anti-goûts & odeurs. Cartouche haute technologie 5 µm, remplacement simple, format standard 2,5\", idéal pour 1 à 6 personnes.",
};

export default function Page() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumbs */}
      <nav aria-label="Fil d’Ariane" className="mb-6 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-1">
          <li className="flex items-center gap-1">
            <Home className="h-4 w-4" aria-hidden />
            <Link href="/" className="hover:underline">Accueil</Link>
          </li>
          <li className="mx-1 opacity-60">/</li>
          <li>
            <Link href="/filtre_pour_toute_la_maison" className="hover:underline">
              Filtre pour toute la maison
            </Link>
          </li>
          <li className="mx-1 opacity-60">/</li>
          <li><span className="opacity-80">Sédiments</span></li>
          <li className="mx-1 opacity-60">/</li>
          <li aria-current="page" className="font-medium text-slate-800">Ö Xtra Protection</li>
        </ol>
      </nav>

      {/* Intro / hero */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Visuel Ö Xtra Protection (espace réservé)"
            priority
            width={1200}
            height={900}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>

        <div className="px-1">
          <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-slate-500">
            S É D I M E N T S
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Ö Xtra Protection
          </h1>

          <h2 className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
            Pour une eau plus agréable et plus claire, dans toute la maison&nbsp;!
          </h2>

          <div className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
            <p>
              <span className="font-semibold">Filtre à utiliser avec&nbsp;:</span>{" "}
              Filtre à sédiments Whole House (AO-WH-PREV ou AO-WH-PRE).
            </p>
            <p>
              Utilisez uniquement les filtres certifiés et authentiques A. O. Smith pour garantir la
              performance du système et l’élimination continue des contaminants.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <span className="font-semibold">Durée de vie prolongée des appareils&nbsp;:</span>{" "}
                réduit les sédiments à chaque robinet.
              </li>
              <li>
                <span className="font-semibold">Filtration 5 microns&nbsp;:</span>{" "}
                capture les particules invisibles à l’œil nu.
              </li>
              <li>
                <span className="font-semibold">Remplacement facile&nbsp;:</span>{" "}
                sans plombier, tous les 6 mois.
              </li>
              <li>
                <span className="font-semibold">Format standard (2,5”)&nbsp;:</span>{" "}
                idéal pour 1 à 6 personnes.
              </li>
            </ul>
            <p>
              Installé à l’arrivée d’eau générale ou sur un point d’usage, ce filtre vous offre une eau
              plus agréable au quotidien, dans toute la maison&nbsp;: la solution pratique et compacte.
            </p>
            <p className="font-semibold text-red-600 dark:text-red-400">
              Sans électricité et sans perte d’eau&nbsp;!
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className={cn(buttonVariants({ variant: "default" }), "rounded-full")}
            >
              Contactez-nous
            </a>
            <Link
              href="/filtre_pour_toute_la_maison"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
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
                  ["Diamètre de raccordement", "DN 25 – 1\""],
                  ["Débit nominal à ΔP = 0,5 bars", "1000 L/h"],
                  ["Pression de service max", "8 bars"],
                  ["Capacité de la cartouche", "De 12 à 18 mois (fonction de la qualité d’eau)"],
                  ["Dimension (L×H) mm", "120 × 540"],
                  [
                    "Compatibilité",
                    "Filtre pot 20 × 2,5\" compatible avec toutes les cartouches universelles",
                  ],
                ].map(([k, v]) => (
                  <tr
                    key={k}
                    className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-950"
                  >
                    <th className="w-1/2 px-4 py-3 font-semibold text-slate-800 dark:text-slate-100">
                      {k}
                    </th>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Consommable associé : <span className="font-medium">Cartouche Fibre-C</span>
          </p>
        </div>

        {/* Les + produit */}
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Les + produit
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
            <li>Encombrement réduit avec 1 pot unique plutôt qu’une station duplex</li>
            <li>Entretien simplifié : 1 seule cartouche à remplacer</li>
            <li>Filtration complète : retient les impuretés jusqu’à 5&nbsp;µm (sable, limon, rouille)</li>
            <li>Réduction des quantités de consommables à jeter</li>
          </ul>
        </div>

        {/* Inclus + Cartouche */}
        <div className="md:col-span-2">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Inclus</h2>
          <div className="mt-3 grid gap-6 md:grid-cols-2">
            <ul className="list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
              <li>Filtre pot simple universel</li>
              <li>
                Cartouche <span className="font-semibold">FIBRE DE CHARBON À HAUTE TECHNOLOGIE</span>{" "}
                avec un manchon filtrant 25&nbsp;µm
              </li>
              <li>Clé de serrage / desserrage</li>
              <li>Équerre de fixation</li>
            </ul>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                La cartouche Sédiments-S
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                <li>Conteneur composé de Filtre de Sédiments à haute technologie</li>
                <li><strong>MANCHON FILTRANT 5&nbsp;µm</strong></li>
                <li>Cartouche universelle</li>
                <li>Fréquence de remplacement : Tous les 12 à 18 mois</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation visuals */}
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Illustration de l’installation (espace réservé)"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Exemple d’installation (espace réservé)"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
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

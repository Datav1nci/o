import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ö Solaire – Dureté | Ö HOME",
  description:
    "Ö Solaire : pot simple équipé d’une cartouche double-fonctions (manchon filtrant 10µm + Nü-Blend en grains) pour une protection optimale contre le calcaire et la corrosion.",
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
            <Link href="/filtre_pour_toute_la_maison" className="hover:underline">
              Filtre pour toute la maison
            </Link>
          </li>
          <li className="mx-1 opacity-60">/</li>
          <li>
            <span className="opacity-80">Dureté</span>
          </li>
          <li className="mx-1 opacity-60">/</li>
          <li aria-current="page" className="font-medium text-slate-800">
            Ö Solaire
          </li>
        </ol>
      </nav>

      {/* Intro / hero */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Visuel Ö Solaire (espace réservé)"
            priority
            width={1200}
            height={900}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>

        <div className="px-1">
          <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-slate-500">
            D U R E T É
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Ö Solaire
          </h1>

          <h2 className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
            Pour une eau plus agréable et plus claire, dans toute la maison&nbsp;!
          </h2>

          <p className="mt-3 max-w-prose text-slate-700 dark:text-slate-300">
            Ce pot simple équipé d’une cartouche double-fonctions (manchon filtrant&nbsp;10µm
            + conteneur de Nü-Blend en grains) permet une protection optimale contre le calcaire
            et une protection efficace contre la corrosion pour votre installation d’eau potable
            et des éléments dissous. Installé à l’arrivée d’eau générale ou à un point d’usage,
            ce filtre vous offre une eau plus agréable au quotidien, dans toute la maison : une
            solution pratique et compacte.
          </p>

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
                  ["Diamètre de raccordement", "DN 15 – 1/2\""],
                  ["Débit nominal à ΔP = 0,5 bars", "10 L/h"],
                  ["Pression de service max", "8 bars"],
                  ["Capacité de la cartouche", "De 6 à 12 mois (fonction de la qualité d’eau)"],
                  ["Dimension (L×H×P) mm", "115 × 310 × 115"],
                  ["Compatibilité", "Filtre pot 10\" compatible avec toutes les cartouches universelles"],
                ].map(([k, v]) => (
                  <tr key={k} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-950">
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
            Consommable associé : <span className="font-medium">Cartouche 2.5×10 anti-calcaire</span>
          </p>
        </div>

        {/* Les + produit */}
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Les + produit
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
            <li>Encombrement réduit : 1 pot unique plutôt qu’une station duplex</li>
            <li>
              Entretien simplifié : 1 seule cartouche à remplacer
              <span className="text-slate-500"> (ou ajout de grains de Nü-Blend à chaque saison)</span>
            </li>
            <li>Filtration complète : retient les impuretés jusqu’à 10 µm (sable, limon, rouille)</li>
            <li>Protège contre le calcaire</li>
            <li>Réduction des quantités de consommables à jeter</li>
          </ul>
        </div>

        {/* Inclus */}
        <div className="md:col-span-2">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Inclus</h2>
          <div className="mt-3 grid gap-6 md:grid-cols-2">
            <ul className="list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
              <li>Filtre pot simple universel</li>
              <li>Cartouche Nü-Blend (manchon filtrant 10µm + conteneur avec Nü-Blend en grains)</li>
              <li>Clé de serrage / desserrage</li>
              <li>Équerre de fixation</li>
            </ul>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                La cartouche Nü-Blend
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                <li>Conteneur composé de Nü-Blend en grain</li>
                <li>Manchon filtrant 10µm</li>
                <li>Cartouche universelle</li>
                <li>Fréquence de remplacement : tous les 12 mois</li>
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

        <div className="grid gap-6">
          <div className="relative h-72 overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
            <Image
              src="/images/filter_devices_hero.webp"
              alt="Exemple d’installation (espace réservé)"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          </div>

          <div className="relative h-32 overflow-hidden rounded-xl border border-gray-200 shadow-sm dark:border-gray-800">
            <Image
              src="/images/filter_devices_hero.webp"
              alt="Tuyaux avant/après (espace réservé)"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          </div>
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

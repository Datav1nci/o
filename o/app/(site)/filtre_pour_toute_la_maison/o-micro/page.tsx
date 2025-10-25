import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ö Micro – Sédiments | Ö HOME",
  description:
    "Ö Micro : pot simple avec manchon filtrant 40µm pour l’élimination des particules solides et la réduction des substances altérant la qualité de l’eau.",
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
          <li aria-current="page" className="font-medium text-slate-800">Ö Micro</li>
        </ol>
      </nav>

      {/* Top block */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Visuel Ö Micro (espace réservé)"
            priority
            width={1200}
            height={900}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>

        <div className="px-1">
          <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-slate-500">S É D I M E N T S</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Ö Micro</h1>

          <h2 className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
            Pour une eau plus agréable et plus claire qui protège tes appareils
          </h2>

          <p className="mt-3 max-w-prose text-slate-700 dark:text-slate-300">
            Ce pot-simple équipé d’une cartouche (manchon filtrant 40µm) permet l’élimination des particules solides,
            ainsi que la réduction des substances altérant la qualité de l’eau : mauvais goûts et odeurs. Installé à
            l’entrée des appareils ménagers ainsi que les chauffe-eau et les ballons d’eau chaude, filtre d’eau, robinets, etc.
            — ce filtre vous protège des particules qui peuvent boucher les appareils — la solution pratique et compacte.
          </p>

          {/* Applications */}
          <div className="mt-5">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Applications</h3>
            <div className="mt-2 grid grid-cols-4 gap-3 sm:max-w-xl">
              {["Chauffe-eau","Machines à laver","Pommes de douche","Chaudières murales"].map((label, i) => (
                <figure key={i} className="text-center">
                  <div className="relative mx-auto aspect-square w-20 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                    <Image
                      src="/images/filter_devices_hero.webp"
                      alt={label}
                      fill
                      className="object-cover"
                      sizes="84px"
                    />
                  </div>
                  <figcaption className="mt-1 text-xs text-slate-600 dark:text-slate-300">{label}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className={cn(buttonVariants({ variant: "default" }), "rounded-full")}>
              Contactez-nous
            </a>
            <Link href="/filtre_pour_toute_la_maison" className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}>
              Retour
            </Link>
          </div>
        </div>
      </section>

      {/* Specs + Benefits */}
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Caractéristiques techniques */}
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Caractéristiques techniques</h2>
          <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
            <table className="min-w-full text-left text-sm">
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {[
                  ["Diamètre de raccordement", "DN 15 – 1/2\""],
                  ["Débit nominal à ΔP = 0,5 bars", "20 L/h"],
                  ["Pression de service max", "8 bars"],
                  ["Capacité de la cartouche", "De 3 à 5 ans (fonction de la qualité d’eau)"],
                  ["Dimension (L×H) mm", "67 × 130"],
                ].map(([k, v]) => (
                  <tr key={k} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-950">
                    <th className="w-1/2 px-4 py-3 font-semibold text-slate-800 dark:text-slate-100">{k}</th>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Consommable associé : <span className="font-medium">Cartouche Micro 304</span>
          </p>
        </div>

        {/* Les + produit */}
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Les + produit</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
            <li>Encombrement réduit avec 1 pot unique plutôt qu’une station duplex</li>
            <li>Entretien simplifié : 1 seule cartouche à laver</li>
            <li>
              Filtration complète : retient les impuretés jusqu’à 40µm (sable, gros particules, rouille),
              et les substances responsables de boucher les appareils et les mauvais goûts et odeurs
            </li>
            <li>Réduction des quantités de consommables à jeter</li>
          </ul>
        </div>

        {/* Inclus */}
        <div className="md:col-span-2">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Inclus</h2>
          <div className="mt-3 grid gap-6 md:grid-cols-2">
            <ul className="list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
              <li>Filtre pot simple</li>
              <li>Manchon filtrant 40µm</li>
              <li>Conteneur fait en stainless steel 304</li>
            </ul>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">La cartouche Stainless steel 304</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                <li>Conteneur composé d’une mèche en stainless steel 304 lavable</li>
                <li><strong>MANCHON FILTRANT 40µm</strong></li>
                <li>Cartouche universelle</li>
                <li>Fréquence de remplacement : tous les 3 à 5 ans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation visual */}
      <section className="mt-12">
        <h2 className="sr-only">Illustration de l’installation</h2>
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Illustration de l’installation (espace réservé)"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 1200px, 100vw"
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-12">
        <a href="#contact" className={cn(buttonVariants({ variant: "default" }), "rounded-full")}>
          Parler à un spécialiste
        </a>
      </section>
    </main>
  );
}

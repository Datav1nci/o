import { Component } from "lucide-react"

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ö P1 – Boire | Ö HOME",
  description:
    "Ö P1 : filtration de l’ensemble de l’eau froide de la cuisine. Grande capacité (60 000 L / 3 ans), installation sous évier, sans électricité ni rejet d’eau.",
};

export default function OP1Page() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-8">
      {/* HERO (banner) */}
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
            <p className="mt-3 text-base opacity-95 sm:text-lg">
              Solutions sous évier – eau froide de la cuisine
            </p>
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
          <li><span>Boire</span></li>
          <li className="opacity-60">›</li>
          <li aria-current="page" className="font-medium text-slate-800">
            Ö P1
          </li>
        </ol>
      </nav>

      {/* Header block: poster + intro */}
      <section className="grid gap-8 md:grid-cols-2">
        {/* Product poster (placeholder) */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Affiche produit Ö P1 (espace réservé)"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 520px, 90vw"
          />
          {/* Slogan line like in the mock */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-sm font-semibold text-rose-600">
            Sans électricité et sans perte d’eau!
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
            B O I R E
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Ö P1
          </h2>

          <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
            Filtration de l’ensemble de l’eau froide de la cuisine
          </h3>

          <p className="mt-3 max-w-prose text-slate-700 dark:text-slate-300">
            Votre eau du robinet présente un goût ou une odeur désagréable&nbsp;?
            Le filtre P1 élimine les particules responsables de ces inconvénients. Doté
            d’une grande capacité de traitement, il s’installe sous l’évier via le
            raccordement existant. L’eau filtrée est disponible instantanément et à
            volonté au robinet habituel.
          </p>

          <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
            L’eau est la mission Ö WATER
          </h4>
          <p className="mt-2 max-w-prose text-slate-700 dark:text-slate-300">
            À travers notre gamme <strong>SANS BOUTEILLES</strong>, adoptez une solution de
            filtration sous évier et réduisez l’usage de plastique à usage unique.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className={cn(buttonVariants({ variant: "default" }), "rounded-full")}
            >
              Contactez-nous
            </Link>
            <Link
              href="/filtre_pour_eau_potable"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
            >
              Retour
            </Link>
          </div>
        </div>
      </section>

      {/* Specs + Benefits */}
      <section className="mt-10 grid gap-10 md:grid-cols-2">
        {/* Specs table */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Caractéristiques techniques
          </h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
            <table className="min-w-full text-left text-sm">
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {[
                  ["Capacité de traitement", "60 000L / 3 ans"],
                  ["Débit nominal (L/min)", "3.8 L/min"],
                  ["Raccordement (inch)", "1/2\""],
                  ["Pression de service min/max (bars)", "2/8"],
                  ["Dimension (L×H) mm", "90 × 345"],
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
            <span className="font-medium">Fréquence de remplacement des cartouches&nbsp;:</span>
            &nbsp;Tous les 60 000L / 3 ans
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            <span className="font-medium">Consommable associé&nbsp;:</span>&nbsp;Cartouche de rechange | Ö WATER CART-P1
          </p>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Les + produit
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
            <li>Kit prêt à être installé</li>
            <li>Entretien simple et rapide : tête orientable, cartouche dévissable</li>
            <li>Encombrement réduit : s’installe sous l’évier, directement au niveau de l’eau froide</li>
            <li>Cartouche longue durée : 60 000L / 3 ans</li>
            <li>Conçu pour filtrer toute l’eau froide de la cuisine</li>
          </ul>
        </div>

        {/* Inclus */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Inclus</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
            <li>Tête de filtre avec son support de fixation</li>
            <li>
              Cartouche filtrante à la fibre de charbon à haute technologie, avec couvercle de protection
            </li>
            <li>Raccordements nécessaires pour l’installation</li>
          </ul>
        </div>
      </section>

      {/* Installation illustrations */}
      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Schéma d’installation sous évier (espace réservé)"
            fill
            className="object-contain"
            sizes="(min-width:1024px) 640px, 100vw"
          />
        </div>
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Photo d’installation sous évier (espace réservé)"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 640px, 100vw"
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-12 flex flex-wrap gap-3">
        <Link
          href="/#contact"
          className={cn(buttonVariants({ variant: "default" }), "rounded-full")}
        >
          Parler à un spécialiste
        </Link>
        <Link
          href="/filtre_pour_eau_potable"
          className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
        >
          Retour
        </Link>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ö P1 – Boire | Ö HOME",
  description:
    "Ö P1 – Filtration de l’ensemble de l’eau froide de la cuisine. Grande capacité (60 000 L / 3 ans), sous évier, sans électricité ni perte d’eau.",
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
          <li><span className="opacity-80">Boire</span></li>
          <li className="mx-1 opacity-60">/</li>
          <li aria-current="page" className="font-medium text-slate-800">Ö P1</li>
        </ol>
      </nav>

      {/* Intro / hero */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Visual placeholder */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Visuel Ö P1 (espace réservé)"
            priority
            width={1200}
            height={900}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>

        {/* Copy */}
        <div className="px-1">
          <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-slate-500">
            B O I R E
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Ö P1
          </h1>

          <h2 className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
            Filtration de l’ensemble de l’eau froide de la cuisine
          </h2>

          <p className="mt-3 max-w-prose text-slate-700 dark:text-slate-300">
            Votre eau du robinet présente un goût ou une odeur désagréable&nbsp;? Le filtre P1 élimine
            les particules responsables de ces inconvénients. Doté d’une grande capacité de traitement,
            il s’installe sous l’évier, par un raccordement simple sur l’installation existante. L’eau filtrée
            est disponible instantanément et à volonté au robinet habituel.
          </p>

          <p className="mt-2 max-w-prose text-slate-700 dark:text-slate-300">
            À travers sa gamme <strong>SANS BOUTEILLES</strong>, Ö water souhaite agir pour la préservation de
            notre planète. Adoptez une solution de filtration sous évier, rejoignez le mouvement «&nbsp;SANS BOUTEILLES&nbsp;»
            pour réduire la consommation de plastique à usage unique.
          </p>

          <p className="mt-3 font-semibold text-red-600 dark:text-red-400">
            Sans électricité et sans perte d’eau&nbsp;!
          </p>

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
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Caractéristiques techniques
          </h2>
          <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
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
          <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
            <span className="font-medium">Fréquence de remplacement des cartouches&nbsp;:</span> Tous les 60 000L / 3 ans
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            <span className="font-medium">Consommable associé&nbsp;:</span> Cartouche de rechange | Ö WATER CART-P1
          </p>
        </div>

        {/* Les + produit */}
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Les + produit</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
            <li>Kit prêt à être installé</li>
            <li>Simple et rapide d’entretien&nbsp;: tête orientable, cartouche de traitement dévissable.</li>
            <li>Encombrement réduit&nbsp;: s’installe sous l’évier, directement au niveau de l’eau froide.</li>
            <li>Cartouche longue durée&nbsp;: un an de filtration ou 60 000L / 3 ans.</li>
            <li>Conçu pour filtrer toute l’eau froide de la cuisine.</li>
          </ul>
        </div>

        {/* Inclus */}
        <div className="md:col-span-2">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Inclus</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
            <li>Tête de filtre avec son support de fixation.</li>
            <li>Cartouche filtrante au fibre de charbon à haute technologie actif, avec couvercle de protection.</li>
            <li>Raccordements nécessaires pour l’installation.</li>
          </ul>
        </div>
      </section>

      {/* Installation visuals */}
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Schéma d’installation sous évier (espace réservé)"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Exemple d’installation réelle (espace réservé)"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
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

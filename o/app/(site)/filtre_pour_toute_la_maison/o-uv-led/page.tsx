import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ö UV LED Lamp – Bactéries | Ö HOME",
  description:
    "Stérilisation UV LED avancée : élimine instantanément 99,9 % des bactéries et virus. Écologique, faible consommation, longue durée de vie.",
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
            <span className="opacity-80">Bactéries</span>
          </li>
          <li className="mx-1 opacity-60">/</li>
          <li aria-current="page" className="font-medium text-slate-800">
            Ö UV LED Lamp
          </li>
        </ol>
      </nav>

      {/* Intro / hero */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Visual */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Visuel Ö UV LED Lamp (espace réservé)"
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
            B A C T É R I E S
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Ö UV LED Lamp
          </h1>

          <h2 className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
            Technologie UV LED avancé
          </h2>

          <div className="mt-3 space-y-4 text-slate-700 dark:text-slate-300">
            <div>
              <p className="text-2xl font-bold leading-none">1</p>
              <p className="mt-1">
                Le stérilisateur UV est doté d’une puce LED de premier ordre qui
                nécessite une faible puissance et démarre rapidement.
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold leading-none">10x</p>
              <p className="mt-1">
                Durée de vie : ce stérilisateur UV a une taille plus petite et
                une durée de vie plus longue, ce qui le rend plus efficace contre
                l’élimination des bactéries et des virus qu’un stérilisateur à mercure
                traditionnel.
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold leading-none">99%</p>
              <p className="mt-1">
                Plus écologique et économique : n’émet pas de polluants nocifs et
                consomme beaucoup moins d’énergie.
              </p>
            </div>
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

      {/* Deep UV explanation */}
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Élimine instantanément les bactéries
          </h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            <span className="font-semibold">LED Deep Ultraviolet</span> – élimination de la bactérie
            avec la lumière du soleil artificielle.
          </p>
          <p className="mt-3 max-w-prose text-slate-700 dark:text-slate-300">
            Lorsque les matières organiques absorbent la lumière ultraviolette
            profonde dans des longueurs d’onde de{" "}
            <span className="underline underline-offset-2">260&nbsp;nm et 280&nbsp;nm (longueur d’onde la plus efficace)</span>,
            cela modifie leur structure moléculaire. Ceci est efficace contre les
            bactéries, les tuant en seulement deux secondes, avec un taux de bactéries
            réduit de <span className="font-semibold">99,9&nbsp;%</span>.
          </p>
        </div>

        <div className="relative h-48 overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800 md:h-auto">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Courbe d’absorption UV (espace réservé)"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 480px, 100vw"
          />
        </div>
      </section>

      {/* Specs + big illustration */}
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Large device image */}
        <div className="relative h-72 overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800 md:h-auto">
          <Image
            src="/images/filter_devices_hero.webp"
            alt="Illustration du dispositif UV LED (espace réservé)"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>

        {/* Specifications table */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Specifications
          </h3>
          <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
            <table className="min-w-full text-left text-sm">
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {[
                  ["Débit", "3 L/min"],
                  ["Wattage", "3.5 W"],
                  ["Durée", "8 ans"],
                  ["Éliminations", "99,99 % (Bactérie et Virus)"],
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
        </div>
      </section>

      {/* Bottom CTA */}
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

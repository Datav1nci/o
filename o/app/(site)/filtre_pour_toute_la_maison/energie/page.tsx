import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Ö Energie – Dureté | Ö HOME',
  description:
    "Filtre compact double-fonctions pour lutter contre le calcaire (manchon 10 µm + média Nü-Blend). Idéal pour protéger l’installation et améliorer le confort.",
};

export default function EnergiePage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-10">
      {/* Breadcrumbs */}
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/filtre_pour_toute_la_maison" className="hover:underline">
          Filtre pour toute la maison
        </Link>
        <span className="mx-2">›</span>
        <span>Dureté</span>
        <span className="mx-2">›</span>
        <span className="font-medium text-slate-800">Ö Energie</span>
      </nav>

      {/* Header block */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          {/* TODO: swap for your product poster */}
          <Image
            src="/images/O_Energie.webp"
            alt="Ö Energie – visuel produit"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 520px, 90vw"
          />
        </div>

        <div>
          <p className="text-xs tracking-widest text-slate-900">DURETÉ</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-sky-700">
            Ö Energie
          </h1>

          <p className="mt-4 text-xs font-semibold uppercase tracking-tight text-slate-900">
            POUR UNE EAU PLUS AGRÉABLE ET PLUS CLAIRE, DANS TOUTE LA MAISON !
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Ce pot-simple équipé d’une cartouche double-fonctions (manchon
            filtrant 10µm + conteneur de Nu Blend en grains) permet une
            protection optimale contre le calcaire et une protection efficace
            contre la corrosion pour votre installation d’eau potable et des de
            l’eau riche en substances vitales pour vous.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Protection optimale contre le calcaire l’élimination des particules
            solides, ainsi que la réduction des substances altérant la qualité
            de l’eau: Installé à l’arrivée d’eau générale ou à un point
            d’usage, ce filtre vous offre une eau plus agréable au quotidien,
            dans toute la maison: la solution pratique et compacte.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'rounded-full',
              )}
            >
              Nous contacter
            </Link>
            <Link
              href="/filtre_pour_toute_la_maison#durete"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'rounded-full',
              )}
            >
              Retour à Dureté
            </Link>
          </div>
        </div>

        {/* ⬇️ This is the only added line — closes the header grid wrapper */}
      </div>

      {/* Specs + advantages */}
      <div className="mt-10 grid gap-10 rounded-2xl border border-gray-100 bg-gray-50 p-6 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold">Caractéristiques techniques</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm">
              <tbody className="[&_tr:nth-child(odd)]:bg-white/60">
                <tr>
                  <td className="px-3 py-2 font-medium">Nom du produit</td>
                  <td className="px-3 py-2">Protecteur / Énergie</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Dimensions</td>
                  <td className="px-3 py-2">4.5×20 in / 2.5×10 in</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Débit maximal</td>
                  <td className="px-3 py-2">25 L/min / 15 L/min</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Pression max.</td>
                  <td className="px-3 py-2">&lt; 8 bar / &lt; 5 bar</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Capacité</td>
                  <td className="px-3 py-2">427 000 L / 56 000 L</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Volume (2 ppm)</td>
                  <td className="px-3 py-2">213 500 / 28 000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Les + produit</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>
              ✔︎ Encombrement réduit : 1 pot unique au lieu d’une station duplex
            </li>
            <li>
              ✔︎ Entretien simplifié : 1 seule cartouche à remplacer
            </li>
            <li>✔︎ Filtration complète jusqu’à 10 µm (sable, limon, rouille)</li>
            <li>✔︎ Protège contre le calcaire</li>
            <li>✔︎ Moins de consommables à jeter</li>
          </ul>
        </div>
      </div>

      {/* Included + cartridge */}
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold">Inclus</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            <li>Filtre pot simple universel</li>
            <li>
              Cartouche Nü-Blend : manchon 10 µm + conteneur de média en grains
            </li>
            <li>Clé de serrage / desserrage, équerre de fixation</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">La cartouche Nü-Blend</h2>
          <p className="mt-4 text-slate-700">
            Conteneur composé de Nü-Blend en grains. Remplacement recommandé :
            tous les 12 mois.
          </p>
        </div>
      </div>

      {/* Installation illustrations */}
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200">
          {/* TODO: replace with your “schema install” image */}
          <Image
            src="/images/distribution.png"
            alt="Illustration de l’installation"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200">
          {/* TODO: replace with your real photo */}
          <Image
            src="/images/drinking.png"
            alt="Photo d’installation"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          href="/#contact"
          className={cn(
            buttonVariants({ variant: 'default' }),
            'rounded-full',
          )}
        >
          Parler à un spécialiste
        </Link>
        <Link
          href="/filtre_pour_toute_la_maison#durete"
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'rounded-full',
          )}
        >
          Retour
        </Link>
      </div>
    </main>
  );
}

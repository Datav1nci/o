// app/(site)/filtre_pour_toute_la_maison/energie/page.tsx
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
      </div>

      {/* Specs + advantages */}
      <section aria-labelledby="specs-title" className="mt-10">
        <div className="grid gap-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:grid-cols-2 md:p-8">
          {/* Left: technical specs */}
          <div>
            <h2
              id="specs-title"
              className="text-lg font-semibold text-slate-900"
            >
              Caractéristiques techniques
            </h2>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-sm text-slate-700">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-2 text-left font-medium text-slate-900">
                      &nbsp;
                    </th>
                    <th className="px-4 py-2 text-center font-medium text-slate-900">
                      Protecteur
                    </th>
                    <th className="px-4 py-2 text-center font-medium text-slate-900">
                      Énergie
                    </th>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3" />
                    <th className="px-4 py-3">
                      <div className="relative mx-auto h-16 w-10">
                        {/* TODO: remplacer par le visuel Protecteur dédié */}
                        <Image
                          src="/images/O_Energie.webp"
                          alt="Protecteur"
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                    </th>
                    <th className="px-4 py-3">
                      <div className="relative mx-auto h-16 w-10">
                        {/* TODO: remplacer par le visuel Énergie dédié */}
                        <Image
                          src="/images/O_Energie.webp"
                          alt="Énergie"
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-900">
                      Dimensions
                    </td>
                    <td className="px-4 py-2 text-center">4.5×20 in</td>
                    <td className="px-4 py-2 text-center">2.5×10 in</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-900">
                      Débit maximal (L/min)
                    </td>
                    <td className="px-4 py-2 text-center">25</td>
                    <td className="px-4 py-2 text-center">15</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-900">
                      Pression maximale (bar)
                    </td>
                    <td className="px-4 py-2 text-center">&lt; 8</td>
                    <td className="px-4 py-2 text-center">&lt; 5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-900">
                      Capacité
                    </td>
                    <td className="px-4 py-2 text-center">427&nbsp;000 L</td>
                    <td className="px-4 py-2 text-center">56&nbsp;000 L</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-900">
                      Volume (2 ppm)
                    </td>
                    <td className="px-4 py-2 text-center">213&nbsp;500</td>
                    <td className="px-4 py-2 text-center">28&nbsp;000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-sm font-semibold text-slate-800">
              Consommable associé : Cartouche 4.5×20, 2.5×10 anti calcaire
            </p>
          </div>

          {/* Right: product advantages */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Les + produit
            </h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>
                ✓ Encombrement réduit avec 1 pot unique plutôt qu’une station
                duplex
              </li>
              <li>✓ Entretien simplifié : 1 seule cartouche à remplacer</li>
              <li>
                ✓ Filtration complète : retient les impuretés jusqu’à 10 µm
                (sable, limon, rouille)
              </li>
              <li>✓ Protège contre le calcaire</li>
              <li>✓ Réduction des quantités de consommables à jeter</li>
            </ul>
          </div>
        </div>
      </section>

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
          <Image
            src="/images/distribution.png"
            alt="Illustration de l’installation"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200">
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

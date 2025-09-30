// app/(site)/techniques/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Techniques utilisées | Ö HOME',
  description:
    "Les technologies de filtration que nous utilisons : échange d’ions, chélation, filtration (sédiments), fibre de charbon guidé et UV LED.",
};

export default function TechniquesPage() {
  return (
    <main>
      {/* Parallax hero (uses a fixed background for smooth, GPU-cheap parallax) */}
      <section
        className="
          relative h-[44vh] min-h-[300px] w-full
          bg-fixed bg-center bg-cover
        "
        style={{ backgroundImage: "url('/images/techniques_hero.webp')" }}
        aria-label="Bannière des techniques utilisées"
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Techniques utilisées
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto max-w-6xl px-4 py-16 space-y-20">
        <Technique
          id="ion-exchange"
          img="/images/tech_ion_exchange.webp"
          imgAlt="Schéma de l’échange d’ions pour adoucir l’eau"
          badge="DURETÉ"
          title="Technologie d’échange d’ions"
          body={
            <>
              L’adoucisseur d’eau Ö&nbsp;Home élimine les éléments qui contribuent à la dureté
              pour vous fournir une eau douce. La résine d’échange d’ions de haute qualité
              capte calcium et magnésium de manière efficace et durable.
            </>
          }
          cta={{
            label: "Voir produit utilisant l’échange d’ions",
            href: "/filtre_pour_toute_la_maison#durete",
          }}
        />

        <Technique
          reverse
          id="chelation"
          img="/images/tech_chelation.webp"
          imgAlt="Schéma de chélation des ions de dureté"
          badge="DURETÉ"
          title="Technique de chélation"
          body={
            <>
              Les médias Nü-Blend de qualité alimentaire sont solubles dans l’eau
              et l’enrobage des ions de dureté les rend inertes. Les silicates déposent
              aussi un revêtement protecteur dans les tuyaux pour limiter l’encrassement.
            </>
          }
          cta={{
            label: "Voir produit utilisant la chélation",
            href: "/filtre_pour_toute_la_maison#durete",
          }}
        />

        <Technique
          id="sedimentation"
          img="/images/tech_sedimentation.webp"
          imgAlt="Schéma de filtration des sédiments multi-couches"
          badge="LA SÉDIMENTATION"
          title="Filtration"
          body={
            <>
              Plus le média filtrant est épais et gradé, plus il retient les particules
              (terre, rouille, algues) avec une chute de pression minimale et une durée
              de vie plus longue. Idéal pour une eau plus claire et sans particules.
            </>
          }
          cta={{
            label: "Voir produit utilisant la filtration",
            href: "/filtre_pour_toute_la_maison#sediments",
          }}
        />

        <Technique
          reverse
          id="guided-carbon"
          img="/images/tech_guided_carbon.webp"
          imgAlt="Fibre de charbon actif guidé"
          badge="CHLORE"
          title="Fibre de charbon guidé"
          body={
            <>
              Filtration certifiée NSF ; adsorption beaucoup plus élevée que le charbon
              classique, jusqu’à <strong>99 %</strong> de réduction des contaminants.
              Format compact, entretien minimal et débit optimal constant.
            </>
          }
          cta={{
            label: "Voir produit utilisant la fibre de charbon guidé",
            href: "/filtre_pour_toute_la_maison#chlore",
          }}
        />

        <Technique
          id="uv-led"
          img="/images/tech_uv_led.webp"
          imgAlt="Stérilisation par UV LED"
          badge="BACTÉRIE"
          title="Technologie UV LED avancée"
          body={
            <>
              Le stérilisateur UV LED élimine jusqu’à <strong>99,99 %</strong> des bactéries
              et virus (260–280 nm). Sans mercure ni produits chimiques, peu énergivore
              et durable, il conserve à votre eau toute sa pureté naturelle.
            </>
          }
          cta={{
            label: "Voir produit utilisant la technologie UV LED",
            href: "/filtre_pour_eau_potable#bacteries",
          }}
        />
      </div>
    </main>
  );
}

/* ---------- helpers ---------- */

type TechniqueProps = {
  id?: string;
  img: string;
  imgAlt: string;
  badge?: string;
  title: string;
  body: React.ReactNode;
  reverse?: boolean;
  cta?: { label: string; href: string };
};

function Technique({
  id,
  img,
  imgAlt,
  badge,
  title,
  body,
  reverse,
  cta,
}: TechniqueProps) {
  return (
    <section
      id={id}
      className={cn(
        'grid grid-cols-1 items-center gap-10 md:grid-cols-2',
        reverse && 'md:[&>div:first-child]:order-2'
      )}
    >
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
        <Image
          src={img}
          alt={imgAlt}
          width={1080}
          height={810}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 560px, 90vw"
          priority={false}
        />
      </div>

      <div>
        {badge && (
          <p className="mb-2 text-xs font-semibold tracking-[.2em] text-blue-800">
            {badge}
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
        <p className="mt-4 max-w-prose text-slate-600 dark:text-slate-300">{body}</p>

        {cta && (
          <div className="mt-6">
            <Link href={cta.href} className={cn(buttonVariants({ variant: 'default' }), 'rounded-full')}>
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

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
      {/* Parallax hero (bg-fixed only on desktop to avoid iOS issues) */}
      <section
        className="
          relative h-[44vh] min-h-[300px] w-full
          bg-center bg-cover lg:bg-fixed
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
              L’adoucisseur d’eau entièrement automatique Ö Water utilise la
              technologie d’échange d’ions. Résine de haute qualité et longue
              durée qui élimine les éléments qui contribuent à la dureté et vous
              donne une eau douce.
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
              Les médias Nü-Blend de qualité alimentaire sont solubles dans
              l’eau et l’enrobage des ions de dureté les rend inertes. Les
              silicates sont également enduits sur les tuyaux et les fixations
              pour empêcher l’encrassement interne.
            </>
          }
          cta={{
            label: 'Voir produit utilisant la chélation',
            href: '/filtre_pour_toute_la_maison#durete',
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
              Plus le média de filtre à fente est épais, plus la durée de vie
              est longue, meilleures sont les performances. Il élimine les
              impuretés supérieures à 5 microns avec une baisse minimale de
              pression pour éviter une suffocation plus rapide.
            </>
          }
          cta={{
            label: 'Voir produit utilisant la filtration',
            href: '/filtre_pour_toute_la_maison#sediments',
          }}
        />

        {/* Custom section for Fibre de charbon guidé */}
        <GuidedCarbonSection />

        <Technique
          id="uv-led"
          img="/images/tech_uv_led.webp"
          imgAlt="Stérilisation par UV LED"
          badge="BACTÉRIE"
          title="Technologie UV LED avancée"
          body={
            <>
                 Le stérilisateur UV LED élimine 99,99 % des bactéries et virus grâce à une lumière ultraviolette à onde courte (260–280 nm), imitant la lumière du soleil. Plus écologique et durable qu’une lampe au mercure, il consomme peu d’énergie, ne libère aucun polluant nocif et offre une durée de vie jusqu’à 10 fois plus longue.
            </>
          }
          cta={{
            label: 'Voir produit utilisant la technologie UV LED',
            href: '/filtre_pour_eau_potable#bacteries',
          }}
        />
      </div>
    </main>
  );
}

/* ---------- custom guided-carbon section ---------- */

function GuidedCarbonSection() {
  return (
    <section
      id="guided-carbon"
      className="grid grid-cols-1 items-start gap-10 md:grid-cols-2"
    >
      {/* Text column */}
      <div>
        <p className="mb-2 text-xs font-semibold tracking-[0.35em] text-slate-900">
          CHLORE
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-sky-800 md:text-4xl">
          Fibre de charbon guidé
        </h2>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-sky-800">
          DE L’EAU PROPRE, SIMPLIFIÉE
        </p>
        <div className="mt-3 space-y-1 text-sm text-slate-700">
          <p>
            <span className="font-bold text-sky-800">1&nbsp;</span>
            Filtration certifiée NSF de classe mondiale
          </p>
          <p>
            <span className="font-bold text-sky-800">50x&nbsp;</span>
            Plus d’adsorption que le charbon classique
          </p>
          <p>
            <span className="font-bold text-sky-800">99%&nbsp;</span>
            Réduction des contaminants pour une eau pure
          </p>
        </div>

        <p className="mt-6 text-sm font-semibold text-sky-800">
          Alignement de précision pour une eau ultra pure
        </p>
        <p className="mt-2 text-sm text-slate-700">
          Fibres de charbon actif à micro-pores alignés, filtrant plus vite et
          offrant une eau plus propre à chaque goutte.
        </p>

        <p className="mt-6 text-sm font-semibold text-sky-800">
          Nos Avantages
        </p>
        <div className="mt-2 space-y-3 text-sm text-slate-700">
          <div>
            <p className="font-semibold text-sky-800">
              PAS DE PERTE DE PRESSION
            </p>
            <p>Débit optimal et constant.</p>
          </div>
          <div>
            <p className="font-semibold text-sky-800">COMPACTE &amp; EFFICACE</p>
            <p>Puissance dans un format réduit.</p>
          </div>
          <div>
            <p className="font-semibold text-sky-800">ENTRETIEN MINIMAL</p>
            <p>Peu d’entretien, plus de confort.</p>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/filtre_pour_toute_la_maison#chlore"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'rounded-full'
            )}
          >
            Voir produit utilisant la fibre de charbon guidé
          </Link>
        </div>
      </div>

      {/* Images column (right) */}
      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-md">
          {/* TODO: remplacer par l’image haute résolution du charbon guidé */}
          <Image
            src="/images/tech_guided_carbon.webp"
            alt="Fibre de charbon guidé – détail"
            width={800}
            height={600}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 480px, 90vw"
          />
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-md">
          {/* TODO: remplacer par une seconde image spécifique */}
          <Image
            src="/images/tech_guided_carbon.webp"
            alt="Structure de la fibre de charbon guidé"
            width={800}
            height={600}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 480px, 90vw"
          />
        </div>
      </div>
    </section>
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
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        <p className="mt-4 max-w-prose text-slate-600 dark:text-slate-300">
          {body}
        </p>

        {cta && (
          <div className="mt-6">
            <Link
              href={cta.href}
              className={cn(
                buttonVariants({ variant: 'default' }),
                'rounded-full'
              )}
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

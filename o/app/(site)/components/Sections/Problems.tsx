import Image from 'next/image';
import { ChevronRight, Droplets, Waves, Beaker, ShieldAlert } from 'lucide-react';

type Item = {
  title: string;
  desc: string;
  href: string;
  src?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

const items: Item[] = [
  {
    title: 'Sédimentation',
    desc: 'La saleté et la boue bouchent les conduits et abîment les appareils.',
    src: '/images/problems/sedimentation.png',
    icon: Waves,
    href: 'https://www.owater.ca/filtre_pour_toute_la_maison#sediments',
  },
  {
    title: 'Dureté',
    desc: 'Le calcaire de calcium et magnésium abîme les tuyaux.',
    src: '/images/problems/hardness.png',
    icon: Droplets,
    href: 'https://www.owater.ca/filtre_pour_toute_la_maison#durete',
  },
  {
    title: 'Chlore',
    desc: 'En excès, il altère le goût et l’odeur de l’eau.',
    src: '/images/problems/chlorine.png',
    icon: Beaker,
    href: 'https://www.owater.ca/filtre_pour_toute_la_maison#chlore',
  },
  {
    title: 'Bactéries',
    desc: 'Elles peuvent provoquer des maladies (p. ex. diarrhée).',
    src: '/images/problems/bacteria.png',
    icon: ShieldAlert,
    href: 'https://www.owater.ca/filtre_pour_toute_la_maison#bacteries',
  },
];

export default function Problems() {
  return (
    <section id="problems" className="container mx-auto px-4 py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight text-slate-800">
        Problèmes rencontrés
      </h2>

      <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, desc, src, icon: Icon, href }, i) => (
          <li key={i} className="text-center">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative h-20 w-20">
                {src ? (
                  <Image
                    src={src}
                    alt={title}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                ) : Icon ? (
                  <Icon className="h-16 w-16 text-slate-500" />
                ) : null}
              </div>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-blue-800">{title}</h3>
            <p className="mx-auto mt-1 max-w-[24ch] text-sm text-slate-600">{desc}</p>

            <a
              href={href}
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-slate-800 hover:underline"
            >
              Voir solution <ChevronRight className="h-4 w-4" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

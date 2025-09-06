// app/(site)/components/Sections/Distribution.tsx
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Distribution() {
  return (
    <section id="distribution" className="container mx-auto px-4 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Image (left on desktop) */}
        <div className="flex justify-center">
          <Image
            src="/images/distribution.png"
            alt="Schéma de distribution recommandé"
            width={500}
            height={500}
            sizes="(min-width: 1024px) 500px, 80vw"
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Text (right on desktop) */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">
            Distribution des filtres par usage
          </h2>
          <p className="mt-4 text-slate-600">
            Chaque point d’eau a ses besoins. Grâce à notre guide de placement, découvrez où
            installer chaque filtre pour une protection optimale. Que ce soit pour l’eau à
            boire, la douche ou la machine à laver, Ö Home propose une solution adaptée à
            chaque usage.
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              aria-label="Nous contacter à propos de l’implantation des filtres"
              className={cn(
                buttonVariants({ variant: 'default', size: 'default' }),
                'rounded-full'
              )}
            >
              Parler implantation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

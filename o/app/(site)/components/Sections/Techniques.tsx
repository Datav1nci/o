// app/(site)/components/Sections/Techniques.tsx
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Techniques() {
  return (
    <section id="techniques" className="container mx-auto px-4 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text (left on desktop) */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">
            Techniques utilisées
          </h2>
          <p className="mt-4 text-slate-600">
            {"Chaque point d’eau a ses besoins. Grâce à notre guide de placement, découvrez où installer chaque filtre pour une protection optimale. Que ce soit pour l’eau à boire, la douche ou la machine à laver, Ö Home propose une solution adaptée à chaque usage."}
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              aria-label="Demander un devis sur les techniques de filtration"
              className={cn(
                buttonVariants({ variant: 'default', size: 'default' }),
                'rounded-full'
              )}
            >
              Demander un devis
            </a>
          </div>
        </div>

        {/* Image (right on desktop) */}
        <div className="flex justify-center order-1 lg:order-none">
          <Image
            src="/images/techniques2.png"
            alt="Techniques de filtration utilisées"
            width={500}
            height={500}
            sizes="(min-width: 1024px) 500px, 80vw"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

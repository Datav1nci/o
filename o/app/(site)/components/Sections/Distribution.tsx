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
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Text (right on desktop) */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">
            Schéma de distribution
          </h2>
          <p className="mt-4 text-slate-600">
            Une vue claire de l’emplacement recommandé dans votre demeure : arrivée d’eau,
            préfiltration, média principal et options point d’utilisation.
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              className={cn(buttonVariants({ variant: 'default', size: 'default' }))}
            >
              Parler implantation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

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
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Techniques</h2>
          <p className="mt-4 text-slate-600">
            Nos configurations couvrent la majorité des besoins résidentiels avec des médias et
            procédés éprouvés, sélectionnés pour votre eau et votre usage.
          </p>

          <ul className="mt-6 space-y-2 text-slate-700">
            <li>• Préfiltration sédiments multi-étages</li>
            <li>• Charbon actif (déchloration, goûts/odeurs)</li>
            <li>• Média anti-calcaire / adoucissement en option</li>
            <li>• Osmose inverse au point d’utilisation</li>
          </ul>

          <div className="mt-6">
            <a
              href="#contact"
              className={cn(buttonVariants({ variant: 'default', size: 'default' }))}
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
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

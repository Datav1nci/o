// app/(site)/components/Sections/WholeHouse.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function WholeHouse() {
  return (
    <section id="whole-house" className="container mx-auto px-4 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/whole-house.png"
            alt="Système de filtration pour toute la maison"
            width={500}
            height={500}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">
            De l’eau filtrée pour toute la maison
          </h2>
          <p className="mt-4 text-slate-600">
            Ö Home propose des solutions innovantes pour améliorer votre
            quotidien. Que ce soit pour un appartement ou une villa, nous
            offrons une gamme de purificateurs d’eau conçus pour vous protéger
            des effets nocifs de l’eau à la maison.
          </p>
          <Button asChild className="mt-6">
            <a href="#contact">Filtre pour toute la maison</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

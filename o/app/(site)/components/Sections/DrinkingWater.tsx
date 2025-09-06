// app/(site)/components/Sections/DrinkingWater.tsx
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function DrinkingWater() {
  return (
    <section id="drinking" className="container mx-auto px-4 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="flex justify-center order-1 lg:order-none">
          <Image
            src="/images/drinking.png"
            alt="Solution d’eau potable au point d’utilisation"
            width={500}
            height={500}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Eau potable</h2>
          <p className="mt-4 text-slate-600">
            Goût pur et sécurité au point d’utilisation (cuisine). Options d’osmose inverse
            et d’ultrafiltration adaptées à vos besoins pour une eau excellente au robinet.
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              className={cn(buttonVariants({ variant: 'default', size: 'default' }))}
            >
              Solution eau potable
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

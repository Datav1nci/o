import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="container mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
      {/* LEFT: text + buttons + badge */}
      <div className="relative md:pb-0">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {"De l'eau propre, simplifiée"}
        </h1>

        <div className="mt-6 flex gap-3">
          <a
            href="#whole-house"
            className={cn(buttonVariants({ variant: 'default' }), 'rounded-full')}
          >
            Toute la maison
          </a>
          <a
            href="#drinking"
            className={cn(buttonVariants({ variant: 'outline' }), 'rounded-full')}
          >
            Eau potable
          </a>
        </div>

  
      </div>

      {/* RIGHT: product/hero image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
        <Image
          src="/images/filter-device.png"
          alt="Appareil de filtration"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}

import Image from 'next/image';
import { Button } from './Button';

export default function Hero() {
  return (
    <section className="container mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
      {/* LEFT: text + buttons + bottom-left badge */}
      <div className="relative">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {"De l'eau propre, simplifiée"}
        </h1>

        <div className="mt-6 flex gap-3">
          <Button asChild className="rounded-full">
            <a href="#whole-house">Toute la maison</a>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <a href="#drinking">Eau potable</a>
          </Button>
        </div>

        {/* Canada badge pinned bottom-left */}
        <div className="pointer-events-none absolute left-0 -bottom-8 sm:bottom-0">
          <Image
            src="/images/CanadaDesign.png"
            alt="Canadian Design"
            width={170}          // tweak to your preferred size
            height={40}
            className="h-auto w-[150px] sm:w-[170px]"
            priority
          />
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

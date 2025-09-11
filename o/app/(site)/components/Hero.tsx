"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroImages = [
  {
    src: "/images/Hero_first_image_carbon_filter.webp",
    alt: "Filtre au carbone",
  },
  {
    src: "/images/Hero_second_image_anti_sediment.webp",
    alt: "Filtre anti-sédiment",
  },
  {
    src: "/images/hero_third_image_filtre_0_5_micron.webp",
    alt: "Filtre anti-sédiment",
  },
  {
    src: "/images/Hero_section_trio_filters.webp",
    alt: "Filtre anti-sédiment",
  },
  {
    src: "/images/Hero_section_station_anti_calcaire.webp",
    alt: "Filtre anti-sédiment",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000); // switch every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
      {/* LEFT: text + buttons + badge */}
      <div>
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {"De l'eau propre, simplifiée"}
        </h1>

        <div className="mt-6 flex gap-3">
          <a
            href="#whole-house"
            className={cn(buttonVariants({ variant: "default" }), "rounded-full")}
          >
            Toute la maison
          </a>
          <a
            href="#drinking"
            className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
          >
            Eau potable
          </a>
        </div>

        <div className="mt-8">
          <Image
            src="/images/Canada_Design.webp"
            alt="Canadian Design"
            width={170}
            height={40}
            className="h-auto w-[150px] sm:w-[170px]"
            priority
          />
        </div>
      </div>

      {/* RIGHT: rotating hero image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
        {heroImages.map((img, index) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            priority={index === 0}
            className={cn(
              "absolute inset-0 object-cover transition-opacity duration-1000",
              index === current ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>
    </section>
  );
}

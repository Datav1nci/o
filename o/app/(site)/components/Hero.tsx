"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroImages = [
  { src: "/images/Hero_first_image_carbon_filter.webp", alt: "Filtre au carbone" },
  { src: "/images/Hero_second_image_anti_sediment.webp", alt: "Filtre anti-sédiment" },
  { src: "/images/hero_third_image_filtre_0_5_micron.webp", alt: "Filtre 0.5 micron" },
  { src: "/images/Hero_section_trio_filters.webp", alt: "Trio filtre" },
  { src: "/images/Hero_section_station_anti_calcaire.webp", alt: "Anti calcaire" },    
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance every 3s unless paused or user prefers reduced motion
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (paused || prefersReducedMotion) return;

    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(id);
  }, [paused, current]);

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

      {/* RIGHT: rotating hero with dot controls */}
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Images stacked and cross-fading */}
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

        {/* Dot indicators */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-center"
          aria-label="Sélecteur d'image du carrousel"
        >
          <div
            className="pointer-events-auto flex gap-2 rounded-full bg-black/25 px-2 py-1 backdrop-blur-sm"
            role="tablist"
            aria-orientation="horizontal"
          >
            {heroImages.map((img, index) => {
              const isActive = index === current;
              return (
                <button
                  key={img.src}
                  role="tab"
                  aria-label={`Aller à l'image ${index + 1}: ${img.alt}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full ring-1 ring-black/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/90",
                    isActive ? "scale-110 bg-white" : "bg-white/70 hover:bg-white"
                  )}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

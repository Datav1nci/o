import Image from 'next/image';
import { Button } from './Button';


export default function Hero() {
return (
<section className="container mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
<div>
<h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">{"De l'eau propre, simplifiée"}</h1>
<div className="mt-6 flex gap-3">
<Button as-child className="rounded-full">
<a href="#WholeHouse">Toute la maison</a>
</Button>
<Button as-child variant="outline" className="rounded-full">
<a href="#Techniques">Eau potable</a>
</Button>
</div>
</div>
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
<Image src="/images/filter-device.png" alt="Appareil de filtration" fill priority className="object-cover" />
</div>
</section>
);
}
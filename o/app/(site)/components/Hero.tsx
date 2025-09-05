import Image from 'next/image';
import { Button } from './Button';


export default function Hero() {
return (
<section className="container mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
<div>
<h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Une eau propre, simple, et fiable</h1>
<p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
Systèmes de filtration pour toute la maison et eau potable. Installation simple, performance fiable.
</p>
<div className="mt-6 flex gap-3">
<Button as-child className="rounded-full">
<a href="#contact">Contactez-nous</a>
</Button>
<Button as-child variant="outline" className="rounded-full">
<a href="#techniques">Nos techniques</a>
</Button>
</div>
</div>
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
<Image src="/images/filter-device.png" alt="Appareil de filtration" fill priority className="object-cover" />
</div>
</section>
);
}
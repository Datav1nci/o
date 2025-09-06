import Image from 'next/image';


export default function WholeHouse() {
return (
<section id="whole-house" className="container-prose container mx-auto px-4 py-16">
<h2>Toute la maison</h2>
<p>
Protégez votre habitation entière: sédiments, chlore et contaminants sont arrêtés avant
d’atteindre vos robinets et appareils.
</p>
<div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
<Image src="/images/whole-house.png" alt="Filtration pour toute la maison" fill className="object-cover" />
</div>
</section>
);
}
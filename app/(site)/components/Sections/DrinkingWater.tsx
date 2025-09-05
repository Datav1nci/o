import Image from 'next/image';


export default function DrinkingWater() {
return (
<section id="drinking" className="container-prose container mx-auto px-4 py-16">
<h2>Eau potable</h2>
<p>
Goût pur et sécurité au point d’utilisation (cuisine). Options d’osmose inverse et
ultrafiltration.
</p>
<div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
<Image src="/images/drinking.png" alt="Eau potable" fill className="object-cover" />
</div>
</section>
);
}
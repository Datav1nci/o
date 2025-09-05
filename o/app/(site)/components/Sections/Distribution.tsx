import Image from 'next/image';


export default function Distribution() {
return (
<section id="distribution" className="container-prose container mx-auto px-4 py-16">
<h2>Schéma de distribution</h2>
<p>Une vue claire de l’emplacement recommandé dans votre demeure.</p>
<div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
<Image src="/images/distribution.png" alt="Schéma de distribution" fill className="object-cover" />
</div>
</section>
);
}
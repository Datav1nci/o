import { CheckCircle2 } from 'lucide-react';
import { Icon } from '../Icon';


const items = [
'Sédiments et turbidité',
'Chlore et goûts/odeurs',
'Calcaire (dépôts) et dureté',
'Métaux lourds selon la configuration'
];


export default function Problems() {
return (
<section id="problems" className="container mx-auto px-4 py-16">
<h2 className="text-2xl font-semibold">Problèmes courants que nous traitons</h2>
<ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
{items.map((t) => (
<li key={t} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
<Icon as={CheckCircle2} className="mt-0.5 h-5 w-5 text-green-600" />
<span>{t}</span>
</li>
))}
</ul>
</section>
);
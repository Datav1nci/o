'use client';
import { useState } from 'react';
import { Button } from './Button';


export default function Footer() {
const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');


async function onSubmit(formData: FormData) {
setStatus('loading');
try {
const res = await fetch('/(site)/api/contact', {
method: 'POST',
body: formData
});
if (!res.ok) throw new Error('Failed');
setStatus('ok');
} catch (e) {
setStatus('error');
}
}


return (
<footer id="contact" className="border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-950">
<div className="container mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
<div>
<h2 className="mb-2 text-xl font-semibold">Parlons de votre eau</h2>
<p className="text-sm text-gray-600 dark:text-gray-400">
Dites-nous un mot sur votre besoin et nous vous recontactons rapidement.
</p>
</div>
<form action={onSubmit} className="grid gap-3">
<input name="name" required placeholder="Votre nom" className="rounded-lg border-gray-300" />
<input name="email" type="email" required placeholder="Courriel" className="rounded-lg border-gray-300" />
<textarea name="message" rows={4} placeholder="Message" className="rounded-lg border-gray-300" />
<div className="flex items-center gap-3">
<Button type="submit" disabled={status === 'loading'}>
{status === 'loading' ? 'Envoi…' : 'Envoyer'}
</Button>
{status === 'ok' && <span className="text-sm text-green-600">Merci! On vous écrit vite.</span>}
{status === 'error' && <span className="text-sm text-red-600">Oups, réessayez.</span>}
</div>
</form>
</div>
<div className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} Ö HOME</div>
</footer>
);
}
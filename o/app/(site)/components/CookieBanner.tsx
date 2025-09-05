'use client';
import { useEffect, useState } from 'react';
import { Button } from './Button';


const KEY = 'cookie-consent';


export default function CookieBanner() {
const [show, setShow] = useState(false);
useEffect(() => {
setShow(typeof window !== 'undefined' && !localStorage.getItem(KEY));
}, []);
if (!show) return null;
return (
<div className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-4xl rounded-t-2xl border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur dark:border-gray-800 dark:bg-gray-900/95">
<div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
<p className="text-sm text-gray-700 dark:text-gray-300">
We use essential cookies to improve your experience. By clicking Accept, you agree.
</p>
<div className="flex gap-2">
<Button variant="ghost" onClick={() => { localStorage.setItem(KEY, 'dismissed'); setShow(false); }}>Dismiss</Button>
<Button onClick={() => { localStorage.setItem(KEY, 'accepted'); setShow(false); }}>Accept</Button>
</div>
</div>
</div>
);
}
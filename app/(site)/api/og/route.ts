import { ImageResponse } from '@vercel/og';


export const runtime = 'edge';


export async function GET() {
return new ImageResponse(
(
<div
style={{
display: 'flex',
height: '100%',
width: '100%',
alignItems: 'center',
justifyContent: 'center',
background: 'linear-gradient(135deg,#0ea5e9,#1d4ed8)',
color: 'white'
}}
>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
<div style={{ fontSize: 56, fontWeight: 800 }}>Ö HOME</div>
<div style={{ fontSize: 24, opacity: 0.9 }}>Filtration d’eau — Qualité & Simplicité</div>
</div>
</div>
),
{ width: 1200, height: 630 }
);
}
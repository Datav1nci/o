import { siteUrl } from '@/lib/seo';


export const runtime = 'edge';


export async function GET() {
    const lastmod = new Date().toISOString();

    // List of all static routes to include
    const routes = [
        '', // Home
        '/techniques',
        '/schema',
        '/filtre_pour_eau_potable/o-trio',
        '/filtre_pour_eau_potable/o-p1',
        '/filtre_pour_eau_potable/o-boir_le_grand',
        '/filtre_pour_toute_la_maison',
        '/filtre_pour_toute_la_maison/le-grand',
        '/filtre_pour_toute_la_maison/o-uv-led',
        '/filtre_pour_toute_la_maison/o-xtra-protection',
        '/filtre_pour_toute_la_maison/o-solaire',
        '/filtre_pour_toute_la_maison/o-silkysoft',
        '/filtre_pour_toute_la_maison/o-micro',
        '/filtre_pour_toute_la_maison/o-central',
        '/filtre_pour_toute_la_maison/nu-blend',
        '/filtre_pour_toute_la_maison/energie',
    ];

    // Generate XML for each route
    const urlTags = routes
        .map((route) => {
            return `
    <url>
      <loc>${siteUrl}${route}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '' ? '1.0' : '0.8'}</priority>
    </url>`;
        })
        .join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlTags}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
        },
    });
}
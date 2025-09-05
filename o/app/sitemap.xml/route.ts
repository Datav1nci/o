import { siteUrl } from '@/lib/seo';


export const runtime = 'edge';


export async function GET() {
const lastmod = new Date().toISOString();
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n <url>\n <loc>${siteUrl}/</loc>\n <lastmod>${lastmod}</lastmod>\n <changefreq>weekly</changefreq>\n <priority>1.0</priority>\n </url>\n</urlset>`;
return new Response(xml, {
headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
});
}
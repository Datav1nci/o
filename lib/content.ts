import site from '@/content/site.json';
import type { SiteContent } from '@/lib/types';


export function getSiteContent(): SiteContent {
return site as SiteContent;
}
import type { APIRoute } from 'astro';
import { seo } from '../config/seo.mjs';

export const prerender = true;

export const GET: APIRoute = () => {
  const sitemap = new URL('sitemap.xml', seo.siteUrl).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

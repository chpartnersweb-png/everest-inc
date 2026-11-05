import type { APIRoute } from 'astro';
import { seo } from '../config/seo.mjs';

export const prerender = true;

export const GET: APIRoute = () => {
  const canonical = seo.siteUrl.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // One published content page; anchors are sections of that same page.
  // No fabricated lastmod, priority, or change frequency is emitted.
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${canonical}</loc></url>\n</urlset>\n`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

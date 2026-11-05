// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Set the real public URL at deployment time. No placeholder domain is used.
  site: process.env.PUBLIC_SITE_URL || undefined,
});

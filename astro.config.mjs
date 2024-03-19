import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), (await import("astro-compress")).default()],
  site: 'https://facutolozadev.github.io/'
});
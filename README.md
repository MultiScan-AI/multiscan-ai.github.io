# MultiScan AI website

The public, informational website for MultiScan AI: the problem, the idea, how it works and the principles behind it. For judges, partners and anyone curious about the project.

The app, the analysis service and the team analytics live in [multiscan-app](https://github.com/MultiScan-AI/multiscan-app).

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

Built with React, Vite and Tailwind CSS. No server, no tracking, no data collection.

## Hosting and search engines

- **Live site:** https://multiscan-ai.github.io, published by GitHub Pages. Every push to `main` builds and publishes it (`.github/workflows/pages.yml`); progress shows under the repo's Actions tab.
- **Site address:** set as `SITE_URL` in the workflow, with the same default in `scripts/prerender.js`. It fills in the canonical link, link-preview tags, structured data, `robots.txt` and `sitemap.xml`. When the site gets its own domain, add it under Settings → Pages → Custom domain, change `SITE_URL` in both places and push.
- **What the build adds for search:** the full page text is written into the HTML (`src/entry-server.jsx`, `scripts/prerender.js`), so search engines and link previews see it without JavaScript. Plus a title and description, a link-preview card (`public/og-image.jpg`, 1200×630), Organization and WebSite structured data, `robots.txt` and `sitemap.xml`.
- **Search engines:** add the site in [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters) and submit `sitemap.xml`. Do it again after any change of address.
- **Changing the hero?** Retake `public/og-image.jpg` so shared links still match the page.
- `wrangler.jsonc` is only for the older Cloudflare copy of the site; it can go once that is switched off.

## Content rules

- Say only what is true today. No accuracy figures, customer names or timelines that have not been agreed.
- Every figure about the problem links to its primary source and is worded the way that source words it (see `FIGURES` in `src/App.jsx`). No figure we could not check at the source.
- MultiScan is a screening aid: never say it diagnoses, or that non-specialists can diagnose with it.
- No patient images. The microscope fields on the page are drawings. Photo rules are under Photos below.
- Diseases are named once, in the problem statement. Elsewhere the page talks about slides and fields.
- The phone sits in an adapter on the eyepiece. Never describe it as hand-held.
- Keep internal details off the page: release thresholds, datasets, roadmap and per-check status.

## Structure

| Path | What |
|---|---|
| `src/App.jsx` | The whole page: sections, content and the drawings |
| `src/entry-server.jsx`, `scripts/prerender.js` | Build-time rendering, site address, robots.txt and sitemap.xml |
| `src/index.css` | Animations (all switched off for visitors who prefer reduced motion) |
| `tailwind.config.js` | Brand colours (from the app) and fonts |
| `public/` | Logo, favicon and phone home-screen icon |
| `public/images/` | Background photos, resized for the web |

## Photos

No recognisable people next to the product: a stock photo's subject has not agreed to appear beside MultiScan, and stock licences forbid implying they endorse it. Use equipment, slides, hands, government (public-domain) photos, or our own photos taken with signed consent (see the photo consent form in the MultiScan AI guides). People who do appear should look like the lab staff MultiScan is for.

All are free for commercial use, no credit required: [Unsplash License](https://unsplash.com/license) or [Pexels License](https://www.pexels.com/license/).

| File | Where | Photo |
|---|---|---|
| `hero-microscope.jpg` | Hero | [Shallow focus photography of microscope](https://www.pexels.com/photo/2280547/), Chokniti Khongchum, Pexels |
| `microscopist.jpg` | The idea | [Researcher using a microscope](https://unsplash.com/photos/_YSrXCByqJQ), CDC (US government), Unsplash |
| `slide-on-stage.jpg` | Principles | [A microscope being used to examine a substance](https://unsplash.com/photos/YDLlT9DNOI4), Dmytro Vynohradov, Unsplash |
| `cells-micrograph.jpg` | Footer | [Electron micrograph of immune cells](https://unsplash.com/photos/LnvCEXQwC-o), National Cancer Institute, Unsplash |

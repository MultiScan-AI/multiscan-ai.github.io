# MultiScan AI website

The public, informational website for MultiScan AI: what it does, the sample types it reads, how it works, and the principles behind it. For judges, partners and anyone curious about the project.

The app, the analysis service and the team analytics live in [multiscan-app](https://github.com/MultiScan-AI/multiscan-app).

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

Built with React, Vite and Tailwind CSS. No server, no tracking, no data collection.

## Content rules

- Say only what is true today. No accuracy figures, customer names or timelines that have not been agreed.
- No patient images. The microscope fields on the page are drawings.
- Diseases are named once, in the problem statement. Elsewhere the page talks about sample types.
- Keep internal details off the page: release thresholds, datasets, roadmap and per-check status.

## Structure

| Path | What |
|---|---|
| `src/App.jsx` | The whole page: sections, content and the field illustration |
| `src/index.css` | Animations (all switched off for visitors who prefer reduced motion) |
| `tailwind.config.js` | Brand colours (from the app) and fonts |
| `public/` | Logo and the app screenshot |

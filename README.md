# OK VOLCA

Official site for OK VOLCA, metal mélodique band from Saint-Jean-sur-Richelieu, Québec.
React + TypeScript + Vite + Tailwind.

## Structure

- `src/App.tsx` — page composition
- `src/components/` — one component per section (Hero, HistorySection, ShowHistorySection, MusicVideosSection, DiscographySection, BandSection, ContactSection, Footer, VideoModal)
- `src/data/bandData.ts` — all real band content (bio, discography, members, show history, links) in one place
- `src/assets/images/` — real photos and album covers, imported as modules so Vite bundles them correctly

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages
(configured for Actions-based deployment, not branch-based).

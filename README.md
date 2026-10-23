# Paul Karonji Waithaka — Portfolio

Live site: **https://paulkaronji.netlify.app**

A portfolio for an AI enthusiast with full-stack experience. Built with Next.js 15
(App Router), React 19, TypeScript and Tailwind CSS.

The v2 rewrite replaced a freelance-agency template (Services / Process / FAQs /
"Download CV") with a plain claim — **AI enthusiast with full-stack experience** —
and three deep case studies, plus every project sorted into **Open source**,
**Enterprise builds** and **Personal tools & side projects**.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 3 + a custom token layer (`src/app/globals.css`) |
| Motion | CSS keyframes + IntersectionObserver — no animation library |
| Icons | Inline SVG (`src/app/icon.svg` for the favicon) |
| Runtime deps | `next`, `react`, `react-dom` — First Load JS **111 kB** |

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## Structure

```
src/
├── app/
│   ├── layout.tsx        Fonts, metadata, ambient background layers
│   ├── page.tsx          Section composition
│   ├── globals.css       Design tokens + component CSS
│   └── icon.svg          Favicon
├── components/           One component per section, plus Reveal.tsx
└── data/                 All copy lives here — re-point the site without touching JSX
```

`src/data/` holds every word on the page: `profile.ts`, `flagships.ts`, `work.ts`,
`stack.ts`. Each project in `work.ts` carries an explicit `category`, so the
Open source / Enterprise / Personal tabs are just a filter over one list.

## Images

Project images are **live captures of the deployed sites**, resized to 1200px and
re-encoded to WebP. Projects with no public deployment keep their repo
screenshot; a few with neither render a monogram tile rather than a broken image.

## Design system

See [`DESIGN.md`](./DESIGN.md) for the full "Ink" system — colour tokens,
typography, layout rules, motion behaviour and component notes.

## Deployment

Netlify. `netlify.toml` builds with `npm run build` and publishes `.next` on
Node 22. Push to `main` to deploy.

## Notes

- All external links point at live deployments and were verified reachable.
- Images are plain `<img>` tags with `loading="lazy"`; `images.unoptimized` is on,
  so the build has no native image dependency.

---

Built by [Paul Karonji Waithaka](https://github.com/Paul-Karonji) · Lead Engineer at WIK Technologies.

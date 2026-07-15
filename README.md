# Outpay documentation

Production-oriented Fumadocs portal for Outpay v0.1 Beta. The publishable
content lives in `content/docs`; the original repository audit material stays
under `docs/`.

## Local development

```bash
bun install
bun run dev
```

Open `http://localhost:3000/docs`. The root route redirects there.

## Verification

```bash
bun run lint
bunx tsc --noEmit
bun run build
```

The build script uses `next build --webpack` because the current Next 16
Turbopack production build can remain in the optimization phase with the
Fumadocs MDX collection, while the webpack build compiles and prerenders the
full page tree successfully.

## Fumadocs structure

- `source.config.ts` defines the MDX collection.
- `src/lib/source.ts` creates the loader-backed page tree.
- `src/app/docs/[[...slug]]/page.tsx` renders pages with Fumadocs breadcrumbs,
  TOC, code blocks, and previous/next navigation.
- `src/app/api/search/route.ts` exposes the Orama search endpoint.
- `content/docs/**/meta.json` controls sidebar order and section labels.

See [`docs/DOCUMENTATION_AUDIT.md`](docs/DOCUMENTATION_AUDIT.md) for source
coverage, verified feature boundaries, and remaining API/OpenAPI gaps.

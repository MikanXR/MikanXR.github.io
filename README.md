# MikanXR.github.io

The organization site served at [mikanxr.org](https://mikanxr.org): the landing page plus the user documentation for MikanXR, MikanTrack, and MikanStudio. Built with [Docusaurus](https://docusaurus.io/).

## Working on the site

Requires Node.js 20 or newer.

```bash
npm install
npm start
```

`npm start` serves a live-reloading dev build of the English site at `http://localhost:3000`. It serves one locale at a time, so use `npm run start:ja` to work on the Japanese site. Search only works in a production build: run `npm run build` then `npm run serve`.

Pushing to `main` builds and deploys the site through the `Deploy site` GitHub Actions workflow. Pull requests run the same build without deploying, and the build fails on broken links.

## Layout

- `src/pages/index.tsx`: the landing page
- `src/components/ProjectCard/`: the project and integration cards on the landing page
- `src/css/custom.css`: the site palette
- `docs/mikanxr/`, `docs/mikantrack/`, `docs/mikanstudio/`: one docs instance per product, served at `/docs/<product>`
- `sidebars.ts`: the sidebar shared by all docs instances, generated from each folder's structure
- `i18n/ja/`: Japanese translations
- `static/`: files copied as-is to the site root, including `CNAME`

Inside each product's docs, pages are grouped into tutorials, how-to guides, reference, and concepts. Folder order comes from each folder's `_category_.json`, page order from the `sidebar_position` front matter.

## Adding a product

1. Create `docs/<product>/intro.md` with `slug: /` in its front matter.
2. Add `{id: '<product>', label: '<Product>'}` to `productDocs` in `docusaurus.config.ts`.
3. Add its card to `projects` in `src/pages/index.tsx`.

## Translations

UI strings live in `i18n/ja/*.json`. After adding or changing a `<Translate>` string, a navbar item, or a sidebar category, run `npm run write-translations:ja` to add the new keys, then translate their `message` values.

To translate a docs page, copy it to the same relative path under `i18n/ja/docusaurus-plugin-content-docs/current/` (MikanXR) or `i18n/ja/docusaurus-plugin-content-docs-<product>/current/` (the other products) and translate the copy. Pages without a translation fall back to English.

Project sites for other repositories in this organization are served at `mikanxr.org/<repository>`, so the docs live under `/docs/` to avoid colliding with them.

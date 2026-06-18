# Landing Page — Interior Finishing Services (PV)

A bilingual (SK/UK) landing page for an interior finishing contractor based in Bratislava, Slovakia. Features a portfolio with filtering, services overview, and a contact form.

## Stack

- **React 19** + **TypeScript**
- **Vite 8** — build tool and dev server
- **Lucide React** — icons
- SSR prerender (`prerender.mjs`) — static HTML output for SEO

## Project Structure

```
src/
├── assets/img/          # Images (imported as ES modules)
├── components/
│   ├── navbar/          # Navigation + language switcher
│   ├── hero/            # Hero banner
│   ├── services/        # Service cards
│   ├── portfolio/       # Portfolio with filters and modal
│   ├── advantages/      # Why choose this contractor
│   ├── contacts/        # Contact form
│   └── footer/          # Footer
├── context/             # LanguageContext (sk / uk)
├── translations.ts      # All texts, project data and contact info
└── types.ts             # TypeScript interfaces
```

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:5173
npm run build      # build + SSR prerender → dist/
npm run preview    # preview the dist/ build locally
```

## Localization

Language is toggled via the SK / UK switcher in the navbar. All content is duplicated in `translations.ts` as separate constants:

```
SERVICES_SK / SERVICES_UK
PROJECTS_SK / PROJECTS_UK
BENEFITS_SK / BENEFITS_UK
CONTACT_INFO_SK / CONTACT_INFO_UK
```

## Adding a Portfolio Project

1. Add the photo to `src/assets/img/` (`.webp` format, name it `category-description.webp`)
2. Import it at the top of `translations.ts`
3. Add a `Project` object to both `PROJECTS_SK` and `PROJECTS_UK`

Categories: `tiles` | `drywall` | `painting`

## GitHub Pages Deployment

If the site is served from a subdirectory (`username.github.io/repo-name/`), set the `base` option in `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/repo-name/',
})
```

No changes needed when using a custom domain.

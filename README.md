# Bear Lake Jason MVP Website

A fast, static, mobile-first Astro website for Jason Petersen, Associate Broker / Sales Agent with Bear Lake View Realty. The site is designed as a production-ready MVP for Bear Lake real estate lead generation and long-term organic SEO.

## Tech stack

- Astro
- TypeScript
- Tailwind CSS
- Static site architecture
- Cloudflare Pages-compatible output
- Astro sitemap generation

## Setup

```bash
npm install
```

Optional local environment file:

```bash
cp .env.example .env
```

## Local development

```bash
npm run dev
```

## Production build

```bash
npm run check
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

## Production deployment

The MVP is now configured for the production custom domain:

```txt
https://bearlakejason.com
```

Recommended hosting is Cloudflare Pages:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** current LTS, preferably Node 20+

See `DEPLOYMENT.md` for the exhaustive production hosting guide.

## Forms

Forms are static-host friendly and controlled by the optional environment variable:

```bash
PUBLIC_FORM_ENDPOINT=
```

If `PUBLIC_FORM_ENDPOINT` is blank, the contact areas render production-safe call/text/email CTAs instead of a broken web form. When a real static-form endpoint or Cloudflare Pages Function route is configured, the same component renders POST forms.

See `CONTENT_UPDATE_GUIDE.md` for the form-integration checklist.

## Replacing photos, logo, and headshot

The current pull-request-friendly image set uses SVG placeholders so the PR does not include unsupported binary files:

- `public/images/placeholders/bear-lake-hero.svg` — temporary Bear Lake hero, supporting scenery, and social image.
- `public/images/placeholders/jason-headshot-placeholder.svg` — temporary Jason Petersen headshot image.
- `public/images/logo/bear-lake-jason-mark.svg` — temporary site mark used for the header and favicon.

When binary uploads are supported, add the supplied production logo, Bear Lake scenery, and Jason headshot, then update the relevant image paths and alt text in `src/data/site.ts` and the Astro pages. See `public/images/README.md` and `CONTENT_UPDATE_GUIDE.md` for the image checklist.

## Content updates

Most reusable content lives in `src/data/`:

- `site.ts` — business details, phone number, email target, domain, form endpoint state, disclaimers.
- `navigation.ts` — primary navigation.
- `services.ts` — home page service cards.
- `towns.ts` — Garden City, Fish Haven, Laketown, and St. Charles content.

## Production MVP notes

- The site no longer depends on the GitHub Pages `/bearlakejason` base path.
- Astro sitemap generation is enabled for the production domain.
- Testimonials should only be added when real client-approved copy and attribution are available.
- The contact form is configured through `PUBLIC_FORM_ENDPOINT`, with a production fallback endpoint in `src/data/site.ts`.
- License numbers are intentionally omitted until provided.
- Vacation-rental content avoids guaranteed income or investment-return claims.

# Bear Lake Jason Website

A fast, static, mobile-first Astro website for Jason Petersen, REALTOR® / Associate Broker with Bear Lake View Realty. The site is designed for Bear Lake real estate lead generation and long-term organic SEO.

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

The site is configured for the production custom domain:

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

Forms are static-host friendly and currently post to the configured static form endpoint in `src/data/site.ts`. Confirm the endpoint and notification inbox before launch.

See `CONTENT_UPDATE_GUIDE.md` for the form-integration checklist.

## Replacing photos, logo, and headshot

Local assets are stored in `public/images/` so the site does not rely on remote image URLs:

- `public/images/headshots/jp_headshot.png` — Jason's professional headshot, used in the header and About page.
- `public/images/scenery/bearlake_sunset2.jpeg` — cropped Bear Lake sunset hero image expected by the home page.
- `public/images/scenery/bearlake_sunset.jpeg` — fallback Bear Lake sunset hero image if the cropped sunset image is not present.
- `public/images/logo/bearlakeviewrealty_logo.png` — Bear Lake View Realty brokerage logo.
- `public/images/logo/bear-lake-jason-mark.svg` — approved site mark if desired.

Keep the same filenames to avoid code changes, or update the relevant image paths and alt text in the Astro pages. See `public/images/README.md` and `CONTENT_UPDATE_GUIDE.md` for the image checklist.

## Content updates

Most reusable content lives in `src/data/`:

- `site.ts` — business details, phone number, email target, domain, form endpoint state, disclaimers.
- `navigation.ts` — primary navigation.
- `services.ts` — home page service cards.
- `towns.ts` — Garden City, Fish Haven, Laketown, and St. Charles content.

## Production notes

- The site no longer depends on the GitHub Pages `/bearlakejason` base path.
- Astro sitemap generation is enabled for the production domain.
- Testimonials and ratings are not displayed until real, approved source material is available.
- Contact forms should be tested against the configured endpoint before launch.
- License numbers are intentionally omitted until provided.
- Rental-aware content avoids rental-income, occupancy, resale-value, and investment-performance promises.

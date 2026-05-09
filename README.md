# Bear Lake Jason MVP Website

A fast, static, mobile-first Astro website for Jason Petersen, Associate Broker / Sales Agent with Bear Lake View Realty. The site is designed as a budget-friendly professional MVP for Bear Lake real estate lead generation and long-term organic SEO.

## Tech stack

- Astro
- TypeScript
- Tailwind CSS
- Static site architecture
- Cloudflare Pages-compatible output

## Setup

```bash
npm install
```

## Local development

```bash
npm run dev
```

## Production build

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

## Cloudflare Pages deployment

Use these settings in Cloudflare Pages:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** current LTS, preferably Node 20+

The site is configured for `https://bearlakejason.com` in `astro.config.mjs` for sitemap and canonical URLs.

## Replacing photos, logo, and headshot

Placeholder assets are stored locally so the site does not rely on remote image URLs:

- `public/images/placeholders/bear-lake-hero.svg` — replace with an optimized Bear Lake hero photo.
- `public/images/placeholders/jason-headshot-placeholder.svg` — replace with Jason's professional headshot.
- `public/images/logo/bear-lake-jason-mark.svg` — replace with an approved logo/mark or brokerage logo if permitted.

Keep the same filenames to avoid code changes, or update the relevant image paths and alt text in the Astro pages. See `public/images/README.md` for the short image checklist.

## Configuring forms

Forms are intentionally static-host friendly and currently use a placeholder endpoint in `src/data/site.ts`:

```ts
formEndpoint: 'https://example.com/replace-with-your-static-form-endpoint'
```

Before launch, replace this with one of the following:

1. A third-party static form endpoint that sends submissions only to `huntapplication@gmail.com`.
2. A Cloudflare Pages Function that calls an email provider API using environment variables for secrets.

Do not commit API keys, email-provider secrets, or private tokens. Keep forms short and confirm any provider-level success/error redirects.

## Content updates

Most reusable content lives in `src/data/`:

- `site.ts` — business details, phone number, email target, domain, form endpoint, disclaimers.
- `navigation.ts` — primary navigation.
- `services.ts` — home page service cards.
- `towns.ts` — Garden City, Fish Haven, Laketown, and St. Charles content.
- `testimonials.ts` — development placeholders only.

## Important testimonial note

The home page includes visibly marked placeholder testimonials for layout development. Replace them with verified client testimonials or remove that section before production. Do not deploy fake testimonials as real testimonials.

## Future content expansion

The project structure is ready for later additions without overbuilding the MVP:

- Blog/guides for Bear Lake buying, selling, building lots, and town-specific questions.
- Town landing pages for Garden City, Fish Haven, Laketown, St. Charles, and nearby communities.
- Featured properties or manually curated listings.
- Future IDX/MLS integration if budget and compliance requirements justify it.
- YouTube embeds, real testimonials, past sales, and downloadable lead magnets.

## Compliance notes

- Bear Lake View Realty is displayed in the footer.
- License numbers are intentionally omitted until provided.
- The site avoids claims like “#1 agent,” guaranteed sale price, guaranteed rental income, or guaranteed investment performance.
- Vacation rental content includes a property-specific disclaimer and uses language such as “rental potential,” “rental considerations,” and “investment-minded buyers.”

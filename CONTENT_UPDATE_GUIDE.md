# Website Content Update Guide

This guide lists remaining owner-side content and asset decisions before treating the site as final production content. The codebase is production-deployable, but several business-specific assets, copy decisions, and integrations require approval or real source material.

## 1. Contact details and business constants

Primary business data lives in `src/data/site.ts`.

Review and update:

- `name`
- `title`
- `brokerage`
- `phone`
- `phoneHref`
- `smsHref`
- `brokeragePhone`
- `brokeragePhoneHref`
- `emailTarget`
- `domain`
- `licensed`
- `description`
- `socialImage`

Keep `phoneHref`, `smsHref`, and `brokeragePhoneHref` in `tel:+1...` / `sms:+1...` format. The public display format can use hyphens or parentheses as approved by the brokerage.

## 2. Form integration

The contact form component is `src/components/forms/ContactForm.astro`.

Current behavior:

- If `PUBLIC_FORM_ENDPOINT` is blank, the site shows direct call/text/email CTAs.
- If `PUBLIC_FORM_ENDPOINT` is set, the site renders real POST forms.

To enable forms:

1. Choose a static-form provider or build a Cloudflare Pages Function.
2. Configure submissions to go to `huntapplication@gmail.com` or the final preferred inbox.
3. Set `PUBLIC_FORM_ENDPOINT` in Cloudflare Pages.
4. Redeploy.
5. Test both the general inquiry form and seller valuation form.

Do not commit form-provider API secrets to the repo.

## 3. Maintain local imagery

Local image files are in `public/images/`.

Current assets:

- `public/images/scenery/bearlake_sunset2.jpeg` — cropped Bear Lake sunset hero image expected by the home page.
- `public/images/scenery/bearlake_sunset.jpeg` — fallback Bear Lake sunset image if the cropped sunset image is not present.
- `public/images/headshots/jp_headshot.png` — Jason's professional headshot.
- `public/images/logo/bearlakeviewrealty_logo.png` — Bear Lake View Realty brokerage logo.
- `public/images/logo/bear-lake-jason-mark.svg` — approved site mark/logo if desired.

Best practices:

- Use local files, not remote hotlinked images.
- Keep filenames the same if you want to avoid code changes.
- If you change filenames, update the corresponding `src` paths and alt text in the Astro pages.
- Export photos as optimized `.webp` or high-quality `.jpg` where appropriate.
- Keep large hero images reasonably compressed; avoid multi-megabyte uploads.

## 4. Update alt text after image replacement

When images change, update alt text in:

- `src/pages/index.astro`
- `src/pages/about.astro`
- any future page or component that references the new asset

Alt text should describe the image plainly. Do not stuff keywords.

## 5. Bio copy and local proof points

The About page is `src/pages/about.astro`.

Add or refine:

- Jason's real professional background.
- Years in the Bear Lake area if the current number is accurate.
- Community involvement, if relevant and approved.
- Builder/local vendor relationships, if accurate and compliant.
- A more personal paragraph if Jason wants the site to feel warmer.

Avoid unverifiable claims such as “best,” “top,” “#1,” or outcome promises unless you have compliant documentation and brokerage approval.

## 6. Compliance review

Before final launch, confirm with Jason and/or brokerage compliance:

- Exact required brokerage display language and whether the brokerage phone must appear in any specific location or size.
- Whether license numbers must be shown.
- Correct title wording for Utah and Idaho.
- Whether Equal Housing Opportunity wording needs a logo or specific phrase.
- Any required disclaimers for investment/rental content.
- Whether the logo/mark usage is allowed.

Footer language lives in `src/components/layout/Footer.astro`.

Vacation-rental disclaimer text lives in `src/data/site.ts` as `rentalDisclaimer`.

## 7. Town and service copy

Reusable content lives in `src/data/`:

- `src/data/services.ts` — service cards on the home page.
- `src/data/towns.ts` — Garden City, Fish Haven, Laketown, and St. Charles summaries.
- `src/data/navigation.ts` — header/footer navigation labels.

Review these for accuracy, tone, and compliance. Expand only when you have useful, specific content.

## 8. Testimonials

The production site intentionally excludes testimonial and rating cards for now. If you later add testimonials:

1. Use only real client quotes.
2. Get written permission.
3. Keep a record of approval.
4. Include attribution only as approved by the client.
5. Do not imply promised results.

A future testimonial component can be added once you have verified source material.

## 9. Listings and IDX

The current site does not include IDX or live MLS data. This is intentional.

If you later want listings:

- First confirm MLS/IDX rules, vendor costs, and brokerage requirements.
- Decide between full IDX integration, manually curated featured listings, or simple “contact for current listings” CTAs.
- Do not scrape or copy MLS listing data without permission.

## 10. SEO metadata and social sharing

Base metadata is in `src/layouts/BaseLayout.astro` and default site data is in `src/data/site.ts`.

For each page, review:

- Page title.
- Meta description.
- Canonical URL.
- Social image.

The current social image is the temporary hero artwork. Replace it with a real, polished image before actively sharing the site.

## 11. Future content expansion ideas

Good next pages or posts after launch:

- Bear Lake buyer guide.
- Bear Lake seller preparation checklist.
- Garden City real estate guide.
- Fish Haven real estate guide.
- Building lot checklist.
- Vacation-rental due diligence checklist.
- Utah side vs. Idaho side comparison.

Keep each page specific and useful rather than generic SEO filler.

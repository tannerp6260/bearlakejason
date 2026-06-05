# Production Deployment Guide

This project is a static Astro website. The simplest production-grade hosting path is **Cloudflare Pages** with a custom domain (`bearlakejason.com`). Cloudflare Pages is a good fit because it is inexpensive, fast, CDN-backed, supports automatic deploys from Git, and can later run small serverless Functions for contact-form email.

## 1. Production architecture

Recommended production architecture:

- **Repository:** GitHub repo connected to Cloudflare Pages.
- **Host/CDN:** Cloudflare Pages.
- **Domain/DNS:** Cloudflare DNS for `bearlakejason.com`.
- **Build:** `npm ci` followed by `npm run build`.
- **Output directory:** `dist`.
- **Forms:** start with a third-party static-form endpoint, or add a Cloudflare Pages Function later.

The site is now configured for the production custom domain in `astro.config.mjs`. It no longer uses the GitHub Pages `/bearlakejason` subpath.

## 2. Local preflight

Install dependencies and verify the static build:

```bash
npm install
npm run check
npm run build
npm run preview
```

Open the preview URL printed by Astro and click through every page before deploying.

## 3. Create a Cloudflare account and add the domain

1. Create or sign in to a Cloudflare account.
2. Add the domain `bearlakejason.com` to Cloudflare.
3. Cloudflare will show two nameservers.
4. At your domain registrar, replace the current nameservers with the Cloudflare nameservers.
5. Wait for Cloudflare to mark the domain as active. DNS propagation can be quick, but plan for several hours.

If you are not ready to move DNS, you can still create the Pages project first and test on the temporary `*.pages.dev` URL.

## 4. Create the Cloudflare Pages project

1. In Cloudflare, go to **Workers & Pages**.
2. Choose **Create application**.
3. Choose **Pages** and connect your GitHub account.
4. Select this repository.
5. Use these build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** leave blank unless the repo is nested
   - **Node.js version:** set to the current LTS, preferably Node 20 or newer
6. Save and deploy.

Cloudflare will build the site and publish a temporary Pages URL first.

## 5. Configure the custom domain

1. In the Cloudflare Pages project, open **Custom domains**.
2. Add `bearlakejason.com`.
3. Add `www.bearlakejason.com` as a second custom domain if you want `www` to work.
4. Confirm Cloudflare creates the needed DNS records.
5. Set one hostname as canonical. The code currently uses `https://bearlakejason.com` for canonical URLs, sitemap URLs, robots.txt, and structured data.

Recommended redirect behavior:

- `https://www.bearlakejason.com/*` redirects to `https://bearlakejason.com/:splat`.
- HTTP redirects to HTTPS.

Cloudflare normally handles HTTPS automatically once DNS is active.

## 6. Environment variables

The site works without secrets. The only current optional environment variable is:

```bash
PUBLIC_FORM_ENDPOINT=
```

If this is blank, the contact sections show direct call/text/email buttons instead of a broken form. When you choose a form provider, set `PUBLIC_FORM_ENDPOINT` in Cloudflare Pages under **Settings → Environment variables**.

Important: variables prefixed with `PUBLIC_` are included in the browser bundle. Never put API keys or private tokens in a `PUBLIC_` variable.

## 7. Contact form options

### Fastest production option: static form provider

Use a service such as Formspree, Basin, Getform, or a similar static-form endpoint.

General setup:

1. Create the form in the provider dashboard.
2. Set the delivery email to `huntapplication@gmail.com`.
3. Copy the provider endpoint URL.
4. In Cloudflare Pages, set `PUBLIC_FORM_ENDPOINT` to that endpoint.
5. Redeploy the site.
6. Submit a test inquiry from the deployed website.
7. Confirm the email arrives, spam filtering is acceptable, and the provider's success/error behavior is acceptable.

### More custom option: Cloudflare Pages Function

Use this when you want the form endpoint to be `/api/contact` and to send email through a transactional provider such as Resend, Postmark, SendGrid, or Mailgun.

High-level steps:

1. Add a `functions/api/contact.ts` endpoint.
2. Read form data from the POST request.
3. Validate required fields server-side.
4. Use provider API credentials stored as Cloudflare environment variables, not committed to Git.
5. Send the email to `huntapplication@gmail.com`.
6. Return a redirect or simple success page.
7. Set `PUBLIC_FORM_ENDPOINT=/api/contact`.

This repo does not include that Function yet because it requires you to choose an email provider and create secret API credentials.

## 8. DNS and launch checklist

Before announcing the site:

- Confirm `https://bearlakejason.com` loads.
- Confirm `https://www.bearlakejason.com` redirects or loads correctly.
- Confirm the SSL certificate is active.
- Confirm every nav link works.
- Confirm phone links work on mobile.
- Confirm email links open the expected email address.
- If forms are enabled, submit both the general inquiry and seller valuation forms.
- Confirm `https://bearlakejason.com/robots.txt` loads.
- Confirm `https://bearlakejason.com/sitemap-index.xml` loads after deployment.
- Run Lighthouse/PageSpeed and check for major accessibility or SEO issues.

## 9. Ongoing deployment workflow

After Cloudflare Pages is connected to GitHub:

1. Make code or content changes locally.
2. Run `npm run check` and `npm run build`.
3. Commit and push to the production branch.
4. Cloudflare builds automatically.
5. Review the deployed URL.

Cloudflare also provides preview deployments for pull requests/branches, which is useful for reviewing copy and image changes before production.

## 10. Rollback plan

Cloudflare Pages keeps previous deployments. If a bad deploy goes live:

1. Open the Pages project.
2. Go to **Deployments**.
3. Find the last known-good deployment.
4. Choose **Rollback to this deployment**.

Also keep the Git history clean so you can revert a bad commit if needed.

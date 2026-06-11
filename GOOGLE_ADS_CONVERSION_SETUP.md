# Google Ads Contact Form Conversion Setup

This site is ready to send a Google Ads conversion event whenever a visitor submits one of the website contact forms. The implementation uses Google's `gtag.js` Google tag and a manual Google Ads conversion event snippet.

## What the code already does

- Loads the Google tag on every page when `PUBLIC_GOOGLE_ADS_CONVERSION_ID` is configured.
- Marks every `ContactForm` instance as a Google Ads conversion source when both Google Ads environment variables are configured.
- Waits briefly for the conversion event callback before allowing the form to continue to the configured form endpoint.
- Falls back to a normal form submission if Google Ads is blocked, slow, or not configured.

## Before you begin

You need access to:

1. The Google Ads account that will run campaigns for `bearlakejason.com`.
2. The production hosting provider or deployment environment where site environment variables are configured.
3. The form inbox/provider account for the configured `PUBLIC_FORM_ENDPOINT`.

## Step 1 — Create the Google Ads website conversion action

Google's current conversion setup flow changes over time, but the official Google Ads Help documentation says website conversions are created from the **Goals** area, and manual setup is appropriate when you need to measure button, link, or customized events instead of only a URL page load.

1. Sign in to Google Ads.
2. Open **Goals**.
3. Open **Conversions** → **Summary**.
4. Click **+ Create conversion action**.
5. Choose **Website** / **Conversions on a website**.
6. Enter the production domain:

   ```txt
   bearlakejason.com
   ```

7. Continue until Google asks how to set up the conversion action.
8. Choose a manual/code-based setup option. Google Ads Help describes this as **Setup manually using code** for custom event tracking.
9. Use settings similar to these:

   | Setting | Recommended value |
   | --- | --- |
   | Goal/category | Submit lead form / Lead |
   | Conversion name | Contact form submission |
   | Value | Use the same value for each conversion, or do not use a value if you have not assigned a lead value yet |
   | Count | One |
   | Click-through conversion window | 30–90 days, depending on campaign preference |
   | View-through conversion window | Google default unless you have a media plan reason to change it |
   | Attribution | Data-driven if available |
   | Optimization action | Primary, if this is the main lead goal for campaigns |

## Step 2 — Copy the Conversion ID and Conversion Label

After the conversion action is created, Google Ads provides a Google tag and an event snippet.

1. In the Google Ads conversion setup instructions, find the `send_to` value in the event snippet. It usually looks like this:

   ```js
   'send_to': 'AW-123456789/AbCdEfGhIjKlMnOpQrSt'
   ```

2. Copy the part before the slash as the **Conversion ID**:

   ```txt
   AW-123456789
   ```

3. Copy the part after the slash as the **Conversion Label**:

   ```txt
   AbCdEfGhIjKlMnOpQrSt
   ```

Google's documentation for click/event conversions shows the same `TAG_ID/CONVERSION_LABEL` shape for the `send_to` parameter.

## Step 3 — Add production environment variables

In the production host, add these variables:

```bash
PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-123456789
PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION_LABEL=AbCdEfGhIjKlMnOpQrSt
```

Keep the existing form endpoint configured as well:

```bash
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xlgzojyv
```

For Cloudflare Pages, add these under:

1. **Workers & Pages**.
2. Select the site/project.
3. **Settings**.
4. **Environment variables**.
5. Add the variables for the production environment.
6. Redeploy the site so Astro can include the public variables in the static build.

> Important: `PUBLIC_` variables are intentionally exposed to browser JavaScript. Do not put secrets, API keys, or private credentials in these variables.

## Step 4 — Deploy and verify the tag

1. Deploy the site.
2. Open the production website in a browser.
3. View page source or DevTools and confirm the page includes a request to:

   ```txt
   https://www.googletagmanager.com/gtag/js?id=AW-...
   ```

4. Submit a real test contact form using a clearly marked test name/message.
5. In DevTools → Network, look for a Google conversion request after clicking submit. Ad blockers and privacy browsers may block this request, so test in a clean browser profile if needed.
6. Confirm the form still reaches the form provider inbox.
7. In Google Ads, open the conversion action and check the tag/conversion diagnostics. Google Ads can take several hours to update status after the first test event.

## Step 5 — Recommended Google Ads campaign optimization settings

Once conversions are verified:

1. Use this conversion action as a **Primary** conversion if form submissions are the main campaign goal.
2. Optimize campaigns toward **Conversions** or **Maximize conversions** only after there is enough conversion volume for stable learning.
3. Keep lower-intent actions, such as phone-link clicks or page views, as **Secondary** conversions unless you intentionally want bidding to optimize toward them.
4. Review search terms and lead quality regularly. A high conversion count is only useful if the form submissions are qualified Bear Lake real estate leads.

## Optional future improvement — confirmed thank-you-page conversions

The current implementation records a conversion when the browser submits a valid contact form. That is the best fit for the current static form flow because the form posts directly to the form provider.

If you later want conversions to count only after the form provider confirms receipt, configure the form provider to redirect successful submissions to a local thank-you page such as `/thank-you/`, then move the conversion event to that thank-you page. Google's web conversion setup documentation notes that URL-based conversion tracking is appropriate when a conversion is completed by landing on a specific confirmation page.

## Official Google references

- [Set up conversions manually — Google Ads Help](https://support.google.com/google-ads/answer/12718882?hl=en)
- [Use the Google tag for Google Ads conversion tracking — Google Ads Help](https://support.google.com/google-ads/answer/7548399?hl=en)
- [Track clicks on your website as conversions — Google Ads Help](https://support.google.com/google-ads/answer/6331304?hl=en)
- [Set up your web conversions — Google Ads Help](https://support.google.com/google-ads/answer/12216424?hl=en)

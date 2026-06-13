# Google Ads Optimization for a Limited Budget

This site keeps successful contact form submission as the primary website lead conversion. Phone, text, and email clicks are useful but lower-confidence signals, so configure them as secondary conversions only.

## Limited-budget campaign structure

- Start with one tightly focused Search campaign for Bear Lake real estate intent.
- Separate ad groups by clear intent, for example:
  - Bear Lake homes for sale
  - Bear Lake cabins / second homes
  - Bear Lake lots / land
  - Bear Lake selling / property valuation
  - Bear Lake vacation-rental-aware buyer questions, only when the copy is careful and does not promise income or occupancy
- Use phrase and exact match first. Add broad match only after there is enough conversion and search-term data to control quality.
- Send traffic to the most relevant existing page. Do not add new ad landing pages in this pass.
- Use conservative daily budgets and review search terms weekly before increasing spend.

## Conversion priorities

| Conversion action | Website behavior | Recommended Google Ads setting |
| --- | --- | --- |
| Contact form submission | Visitor submits a contact form to the configured form endpoint | Primary |
| Phone click | Visitor clicks a `tel:` link | Secondary |
| Text click | Visitor clicks an `sms:` link | Secondary |
| Email click | Visitor clicks a `mailto:` link | Secondary |

Keep bidding focused on the contact form submission conversion until phone/text/email lead quality is proven. Secondary conversions can still appear in reporting and help show directional engagement from a small budget.

## Required Google Ads conversion actions

Create separate website conversion actions in Google Ads:

1. **Contact form submission**
   - Category: Submit lead form / Lead
   - Count: One
   - Optimization action: Primary
   - Used by the existing form-submit conversion event
2. **Phone click**
   - Category: Contact / Lead
   - Count: One
   - Optimization action: Secondary
   - Used by `tel:` link clicks
3. **Text click**
   - Category: Contact / Lead
   - Count: One
   - Optimization action: Secondary
   - Used by `sms:` link clicks
4. **Email click**
   - Category: Contact / Lead
   - Count: One
   - Optimization action: Secondary
   - Used by `mailto:` link clicks

Use the same Google Ads Conversion ID for all actions when Google Ads provides the same site tag. Each conversion action has its own conversion label.

## Required Cloudflare Pages environment variables

Configure these in Cloudflare Pages production environment variables and redeploy:

```bash
PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-123456789
PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION_LABEL=contactFormLabelHere
PUBLIC_GOOGLE_ADS_PHONE_CLICK_CONVERSION_LABEL=phoneClickLabelHere
PUBLIC_GOOGLE_ADS_SMS_CLICK_CONVERSION_LABEL=smsClickLabelHere
PUBLIC_GOOGLE_ADS_EMAIL_CLICK_CONVERSION_LABEL=emailClickLabelHere
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xlgzojyv
```

If a secondary conversion label is missing, the related phone, text, or email link still works normally and no Google Ads event is sent for that click.

## Formspree configuration

No paid Formspree features are required. Keep the current direct form submission flow pointed at the configured form endpoint. Confirm the form inbox receives test leads after deployment.

## Hidden lead attribution fields

The contact forms include hidden fields for:

- `gclid`, `gbraid`, `wbraid`
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
- `landing_page`, `referrer`, `page_path`

These fields are invisible to visitors and do not change the form appearance. They submit only campaign, referrer, and landing-page context with the lead form when those values are available. They do not collect IP addresses, browser fingerprints, precise device data, or hidden personal details.

## Weekly search-term review checklist

- Review search terms every week while budget is limited.
- Add negatives for lodging, tourism, jobs, unrelated locations, and research-only intent.
- Compare form submissions with phone/text/email click volume.
- Read actual lead messages to identify low-quality themes.
- Pause keywords that spend without qualified real estate inquiries.
- Move proven high-quality queries into exact match keywords.
- Keep ad copy aligned with the destination page and avoid guarantees.

## Starter negative keyword list

Add negatives that fit the campaign structure and match type strategy:

```txt
hotel
hotels
motel
lodging
campground
campgrounds
camping
rv park
vrbo
airbnb
vacation rental
vacation rentals
boat rental
jet ski
weather
map
jobs
employment
property management
free
cheap
zillow login
realtor jobs
```

Avoid tourist/lodging intent such as vacation rentals, hotels, campgrounds, VRBO, and Airbnb searches unless the campaign is intentionally targeting investment-minded buyers with compliant, rental-aware messaging and no income promises.

## Housing-ad compliance guardrails

Real estate advertising can fall under housing policies. Keep targeting and messaging conservative:

- Do not target by age, gender, marital status, parental status, or ZIP code.
- Avoid copy that suggests a neighborhood or property is appropriate only for a protected class.
- Keep audiences in Observation unless there is a clear compliant reason otherwise.
- Do not make unsupported claims about rankings, sales volume, reviews, income, appreciation, occupancy, or guaranteed performance.
- Use location targeting that reflects the service area without excluding protected groups.
- Keep ad copy factual: Bear Lake real estate guidance, Utah and Idaho licensing, buyer/seller help, cabins, lots, homes, and second-home questions.

const productionDomain = 'https://bearlakejason.com';
const emailTarget = 'huntapplication@gmail.com';
const defaultFormEndpoint = 'https://formspree.io/f/xlgzojyv';

export const site = {
  name: 'Jason Petersen',
  title: 'REALTOR® / Associate Broker',
  brokerage: 'Bear Lake View Realty',
  brokerageAddress: '65 West Logan Road #9B, Garden City, Utah 84028',
  brokerageLogo: '/images/logo/bearlakeviewrealty_logo.png',
  phone: '435-757-9069',
  phoneHref: 'tel:+14357579069',
  smsHref: 'sms:+14357579069',
  brokeragePhone: '(435) 881-9774',
  brokeragePhoneHref: 'tel:+14358819774',
  emailTarget,
  emailHref: `mailto:${emailTarget}`,
  domain: productionDomain,
  licensed: 'Licensed in Utah and Idaho',
  description:
    'Bear Lake real estate guidance from Jason Petersen, REALTOR® / Associate Broker with Bear Lake View Realty, licensed in Utah and Idaho.',
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || defaultFormEndpoint,
  googleAdsConversionId: import.meta.env.PUBLIC_GOOGLE_ADS_CONVERSION_ID || '',
  googleAdsContactConversionLabel: import.meta.env.PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION_LABEL || '',
  googleAdsPhoneClickConversionLabel: import.meta.env.PUBLIC_GOOGLE_ADS_PHONE_CLICK_CONVERSION_LABEL || '',
  googleAdsSmsClickConversionLabel: import.meta.env.PUBLIC_GOOGLE_ADS_SMS_CLICK_CONVERSION_LABEL || '',
  googleAdsEmailClickConversionLabel: import.meta.env.PUBLIC_GOOGLE_ADS_EMAIL_CLICK_CONVERSION_LABEL || '',
  socialImage: '/images/scenery/bearlake_sunset2.jpeg',
};

export const rentalDisclaimer =
  'Rental rules, availability, and income potential vary by property, location, HOA, and local regulations. Jason can help you evaluate property-specific considerations, but no rental income, occupancy, resale value, or investment performance is promised.';

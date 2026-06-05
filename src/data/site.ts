const productionDomain = 'https://bearlakejason.com';
const emailTarget = 'huntapplication@gmail.com';
const formEndpoint = import.meta.env.PUBLIC_FORM_ENDPOINT?.trim() ?? '';

export const site = {
  name: 'Jason Petersen',
  title: 'REALTOR® / Associate Broker',
  brokerage: 'Bear Lake View Realty',
  phone: '435-757-9069',
  phoneHref: 'tel:+14357579069',
  smsHref: 'sms:+14357579069',
  emailTarget,
  emailHref: `mailto:${emailTarget}`,
  domain: productionDomain,
  licensed: 'Licensed in Utah and Idaho',
  address: '65 West Logan Road #9B, Garden City, Utah 84028',
  description:
    'Jason Petersen helps Bear Lake buyers and sellers with homes, second homes, cabins, condos, townhomes, lots, land, nightly-rental considerations, and investment-minded properties on both the Utah and Idaho sides of the lake.',
  formEndpoint: formEndpoint || 'https://formspree.io/f/xlgzojyv',
  socialImage: '/images/placeholders/bear-lake-hero.svg',
};

export const rentalDisclaimer =
  'Rental rules, availability, and income potential vary by property, location, HOA, and local regulations. No rental income, investment return, or property performance is guaranteed.';

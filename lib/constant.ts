const INSTAGRAM_URL = 'https://www.instagram.com/dental_centar_una';

const MOBILE_PHONE = '381603139199';
const MOBILE_PHONE_INTL = `+${MOBILE_PHONE}`;
export const PHONE_DISPLAY = '060 313 9199';

const GOOGLE_REVIEW_URL =
  'https://search.google.com/local/writereview?placeid=ChIJ0aOd_YllWkcRaj-RZCAgIpA';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/?q=place_id:ChIJ0aOd_YllWkcRaj-RZCAgIpA';

const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.581048297006' +
  '!2d20.404401878383247!3d44.830099034727276!2m3!1f0!2f0!3f0!3m2!1i1024' +
  '!2i768!4f13.1!3m3!1m2!1s0x475a6589fd9da3d1%3A0x9022202064913f6a' +
  '!2sDental%20centar%20Una!5e0!3m2!1sen!2srs!4v1792851621262!5m2!1sen!2srs';

const SECTION_ID = {
  top: 'top',
  services: 'services',
  whyUs: 'why-us',
  team: 'team',
  findUs: 'find-us',
  faq: 'faq',
  reviews: 'reviews',
  book: 'book',
  visit: 'visit',
} as const;

const ADDRESS = {
  street: 'Generala Ždanova 4/2',
  city: '11070 Beograd',
  postalCode: '11070',
  locality: 'Novi Beograd',
  region: 'Beograd',
  country: 'RS',
} as const;

const BUSINESS_NAME = 'Dental Centar Una';

const GEO = {
  latitude: 44.83065496298621,
  longitude: 20.4045612188453,
} as const;

const OPENING_HOURS = {
  weekdays: { opens: '08:00', closes: '20:00' },
  saturday: { opens: '09:00', closes: '14:00' },
} as const;

const AREA_SERVED = [
  'Novi Beograd',
  'Paviljoni',
  'Fontana',
  'Tošin bunar',
  'Retenzija',
  'Zemun',
] as const;

export {
  INSTAGRAM_URL,
  MOBILE_PHONE,
  MOBILE_PHONE_INTL,
  GOOGLE_REVIEW_URL,
  GOOGLE_MAPS_EMBED_URL,
  SECTION_ID,
  AREA_SERVED,
  GOOGLE_MAPS_URL,
  ADDRESS,
  GEO,
  BUSINESS_NAME,
  OPENING_HOURS,
};

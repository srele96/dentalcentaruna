import {
  BUSINESS_NAME,
  ADDRESS,
  GEO,
  INSTAGRAM_URL,
  MOBILE_PHONE_INTL,
  SECTION_ID,
  GOOGLE_MAPS_URL,
  AREA_SERVED,
  OPENING_HOURS,
} from './constant';
import { type FaqItem, type Locale } from '@/messages';

interface Options {
  url: string;
  faqItems: FaqItem[];
  locale: Locale;
}

export function createStructuredData({ url, faqItems, locale }: Options) {
  const pageUrl = new URL(url);
  const base = pageUrl.origin;

  const businessId = `${base}/#business`;
  const websiteId = `${base}/#website`;
  const faqId = new URL(`#${SECTION_ID.faq}`, url).href;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Dentist',
        '@id': businessId,
        name: BUSINESS_NAME,
        url: base,
        telephone: MOBILE_PHONE_INTL,
        image: `${base}/image/ordinacija.webp`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.locality,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
        areaServed: AREA_SERVED.map((name) => ({ '@type': 'Place', name })),
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: OPENING_HOURS.weekdays.opens,
            closes: OPENING_HOURS.weekdays.closes,
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: OPENING_HOURS.saturday.opens,
            closes: OPENING_HOURS.saturday.closes,
          },
        ],
        sameAs: [INSTAGRAM_URL],
        hasMap: GOOGLE_MAPS_URL,
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: base,
        inLanguage: locale,
        name: BUSINESS_NAME,
        publisher: { '@id': businessId },
      },
      {
        '@type': 'FAQPage',
        '@id': faqId,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return structuredData;
}

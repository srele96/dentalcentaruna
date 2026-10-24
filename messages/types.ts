interface BusLine {
  number: string;
  route: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  heading: string;
  subheading: string;
  ctaText: string;
  callAction: string;
  items: Record<FaqId, FaqItem>;
}

type FaqId =
  | 'booking-required'
  | 'booking-advance-notice'
  | 'cancel-reschedule'
  | 'parking'
  | 'payment-methods'
  | 'directions-transport'
  | 'location';

type ServiceItem = { name: string; detail: string };

type TeamMember = {
  name: string;
  role: string;
  photoAlt: string;
  bio: string[];
  quote?: string;
};

interface Messages {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  hours: {
    heading: string;
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  header: {
    nav: {
      services: string;
      whyUs: string;
      team: string;
      findUs: string;
      reviews: string;
      faq: string;
      visit: string;
    };
    bookAction: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    eyebrow: string;
    headingPrefix: string;
    headingAccent: string;
    subheading: string;
    bookAction: string;
    callAction: string;
    note: string;
    imageAlt: string;
  };
  intro: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
  };
  trustBar: {
    items: {
      experience: { title: string; detail: string };
      surgery: { title: string; detail: string };
      allInOne: { title: string; detail: string };
      emergency: { title: string; detail: string };
    };
  };
  services: {
    heading: string;
    subheading: string;
    items: {
      oralSurgery: ServiceItem;
      implants: ServiceItem;
      cosmetic: ServiceItem;
      prosthetics: ServiceItem;
      restorative: ServiceItem;
      prevention: ServiceItem;
      facialAesthetics: ServiceItem;
    };
  };
  whyUs: {
    heading: string;
    items: {
      individual: { title: string; text: string };
      allInOne: { title: string; text: string };
      education: { title: string; text: string };
      flexible: { title: string; text: string };
    };
  };
  clinic: {
    heading: string;
    subheading: string;
    items: {
      treatmentRoom: string;
      logoWall: string;
      hallway: string;
      reception: string;
    };
  };
  team: {
    heading: string;
    members: {
      abramovic: TeamMember;
    };
  };
  book: {
    heading: string;
    body: string;
    callAction: string;
    addressHeading: string;
    phoneHeading: string;
    hoursHeading: string;
    hoursWeekdays: string;
    hoursSaturday: string;
    closedSunday: string;
    seoHeading: string;
    seoBody: string;
    areasHeading: string;
    areas: string[];
  };
  reviews: {
    heading: string;
    body: string;
    cta: string;
    whatsappCta: string;
    whatsappMessage: string;
    instagramCta: string;
  };
  footer: {
    tagline: string;
    callAction: string;
    addressHeading: string;
    openInMaps: string;
    hoursHeading: string;
    hoursWeekdays: string;
    hoursSaturday: string;
    closedSunday: string;
    contactHeading: string;
    whatsappMessage: string;
    copyright: string;
    backToTop: string;
  };
  location: {
    heading: string;
    subheading: string;
    directions: string[];
    nearbyHeading: string;
    nearby: string[];
    busHeading: string;
    busStopName: string;
    busLines: BusLine[];
    mapTitle: string;
    openInMaps: string;
    loadMap: string;
  };
  faqSection: FaqSection;
}

type Join<
  K extends string,
  P extends string, //
> = P extends '' ? K : `${K}.${P}`;

type Paths<T> = T extends string
  ? ''
  : T extends object
    ? {
        [K in keyof T & string]: T[K] extends string ? K : Join<K, Paths<T[K]>>;
      }[keyof T & string]
    : never;

type MessagePath = Paths<Messages>;

export type { Messages, MessagePath, FaqItem, FaqId };

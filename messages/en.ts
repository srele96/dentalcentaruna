import type { Messages } from './types';
import { MOBILE_PHONE_INTL } from '@/lib/constant';

const messages: Messages = {
  metadata: {
    title: 'Dentist in Novi Beograd (New Belgrade) | Dental Centar Una',
    description:
      'Dentist in Belgrade since 2016. Oral surgery, wisdom tooth extraction, ' +
      'implants and cosmetic dentistry. Emergency appointments - call ' +
      +MOBILE_PHONE_INTL +
      '.',
    keywords: [
      'dentist New Belgrade',
      'dentist Novi Beograd',
      'dental clinic New Belgrade',
      'oral surgeon New Belgrade',
      'wisdom tooth extraction Belgrade',
      'dental implants Belgrade',
      'emergency dentist New Belgrade',
      'Dental Centar Una',
    ],
  },
  hours: {
    heading: 'Working hours',
    weekdays: 'Monday - Friday: {hours}',
    saturday: 'Saturday: {hours}',
    sunday: 'Sunday: closed',
  },
  header: {
    brand: 'Signature',
    brandAccent: 'Salon',
    nav: {
      services: 'Services',
      whyUs: 'Why us',
      team: 'Team',
      findUs: 'Find us',
      reviews: 'Reviews',
      faq: 'FAQ',
      visit: 'Contact',
    },
    bookAction: 'Book an exam',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  hero: {
    eyebrow: 'Belgrade · since 2016',
    headingPrefix: 'Your smile',
    headingAccent: 'in safe hands',
    subheading:
      'A dental practice in Belgrade - from the first exam to the final ' +
      'result, with a careful, individual approach to every patient.',
    bookAction: 'Book an exam',
    callAction: 'Call {phone}',
    note: 'Flexible scheduling · Emergencies seen as soon as possible',
    imageAlt:
      'Treatment room at Dental Centar Una in New Belgrade, with a burgundy ' +
      'and white dental chair, overhead lamp and monitor',
  },
  intro: {
    heading: 'A dental practice in Belgrade',
    paragraph1:
      'Dental Centar Una is a dental practice on Generala Ždanova Street in ' +
      'Belgrade, founded in 2016 by Dr Milica Abramović. Under one roof we ' +
      'provide oral surgery and wisdom tooth extraction, implants, cosmetic ' +
      'dentistry and teeth whitening, crowns and bridges, fillings and root ' +
      'canal treatment, as well as scaling and regular check-ups.',
    paragraph2:
      'The same team looks after the health, function, and appearance of your ' +
      'teeth - no being sent from one doctor to another. Appointments are ' +
      'scheduled flexibly around your commitments, and in an emergency we do ' +
      'our best to see you as soon as possible.',
  },
  trustBar: {
    items: {
      experience: {
        title: '10+ years of experience',
        detail: 'With you since 2016',
      },
      surgery: { title: 'Oral surgery', detail: 'Oral surgery resident' },
      allInOne: {
        title: 'All in one place',
        detail: 'Dentistry, surgery and aesthetics',
      },
      emergency: {
        title: 'Emergency care',
        detail: "We'll see you as soon as possible",
      },
    },
  },
  services: {
    heading: 'Our services',
    subheading:
      'Complete dental care in one place - from regular check-ups to complex ' +
      'surgical and cosmetic procedures.',
    items: {
      oralSurgery: {
        name: 'Oral Surgery',
        detail:
          'Wisdom tooth removal, surgical extractions, apicoectomy, and ' +
          'preparatory procedures for implants.',
      },
      implants: {
        name: 'Dental Implants',
        detail:
          'A permanent replacement for missing teeth - restoring both function ' +
          'and a natural-looking smile.',
      },
      cosmetic: {
        name: 'Cosmetic Dentistry',
        detail:
          'Teeth whitening, composite and ceramic veneers, and tooth-colored ' +
          'fillings.',
      },
      prosthetics: {
        name: 'Prosthodontics',
        detail:
          'Custom-made crowns, bridges, and dentures, with attention to the ' +
          'details that make a smile look natural.',
      },
      restorative: {
        name: 'Restorative Dentistry & Endodontics',
        detail: 'Cavity treatment, fillings, and root canal therapy.',
      },
      prevention: {
        name: 'Prevention & Oral Hygiene',
        detail:
          'Scaling, polishing, air polishing, and advice for everyday care.',
      },
      facialAesthetics: {
        name: 'Facial Aesthetics',
        detail:
          'Treatments focused on the harmony of the smile and facial features, ' +
          'using modern aesthetic techniques.',
      },
    },
  },
  whyUs: {
    heading: 'Why patients choose us',
    items: {
      individual: {
        title: 'An individual approach',
        text:
          'Good treatment starts with a good conversation. Before every ' +
          'treatment plan, we take the time to understand your needs, worries, ' +
          'and expectations.',
      },
      allInOne: {
        title: 'Dentistry, surgery, and aesthetics combined',
        text:
          'Few practices cover all three. That means the same team looks after ' +
          'the health, function, and appearance of your teeth - no being sent ' +
          'from one doctor to another.',
      },
      education: {
        title: 'Continuous training',
        text:
          'Our team regularly attends courses with leading lecturers from ' +
          'Serbia and abroad, so we can offer you modern techniques and ' +
          'materials.',
      },
      flexible: {
        title: 'Flexible appointments and emergency care',
        text:
          'We schedule appointments around your commitments. In an emergency, ' +
          "we'll do our best to see you as soon as possible.",
      },
    },
  },
  clinic: {
    heading: 'Our practice',
    subheading: 'The space where we welcome you, in Paviljoni, New Belgrade.',
    items: {
      treatmentRoom:
        'Dental Centar Una treatment room with three dental chairs',
      logoWall: 'Dental Centar Una logo wall',
      hallway: 'Practice hallway with certificates from professional training',
      reception: 'Dental Centar Una reception desk',
    },
  },
  team: {
    heading: 'Meet our team',
    members: {
      abramovic: {
        name: 'Dr Milica Abramović',
        role: 'Doctor of Dental Medicine, oral surgery resident, founder',
        photoAlt: 'Dr Milica Abramović, founder of Dental Centar Una',
        bio: [
          'She graduated from the School of Dentistry in Pančevo, earning her ' +
            'degree in 2016. That same year she took her first big professional ' +
            'step and founded her own dental practice, aiming to give patients ' +
            'expert, conscientious, and individually tailored care.',
          'Over the years she has kept investing in her knowledge and ' +
            'professional development. She has completed numerous courses in ' +
            'aesthetic medicine, focused on modern techniques and principles, ' +
            'with renowned educators from Serbia and abroad.',
          'She found a particular interest in oral surgery, in which she is now ' +
            'continuing her specialist training. Combining dentistry, oral ' +
            'surgery, and aesthetic medicine lets her approach every patient ' +
            'individually, caring for health and function as well as aesthetics ' +
            'and a natural look.',
        ],
        quote:
          '"For me, dentistry is not just a job but a combination of knowledge, ' +
          'precision, responsibility, and trust. I believe good treatment starts ' +
          'with a good conversation, a careful approach, and understanding each ' +
          'patient\'s needs."',
      },
    },
  },
  about: {
    heading: 'Built one detail at a time',
    paragraph1:
      'Signature is a hair salon in Batajnica, opened with one idea: an ' +
      'appointment should feel considered, not rushed. We take on only as much ' +
      'as we can do properly, and nobody leaves with a cut that was finished ' +
      'in a hurry.',
    paragraph2:
      'Every visit starts with a conversation, not a template. Whether ' +
      "it's a precision blow-dry or a full color correction, the " +
      'same care goes into the smallest details as the biggest changes.',
    wallImageAlt: 'Signature Salon wall lettering and entrance',
    floralsWideAlt: 'Fresh floral arrangement at Signature Salon entrance',
    floralsCloseAlt: 'Fresh floral detail at Signature Salon',
  },
  book: {
    heading: 'Book your appointment',
    body:
      "Call us during working hours and together we'll find a time that " +
      "suits you. In an emergency, we'll do our best to see you as soon as " +
      'possible.',
    callAction: 'Call {phone}',
    addressHeading: 'Address',
    phoneHeading: 'Phone',
    hoursHeading: 'Working hours',
    hoursWeekdays: 'Monday - Friday: [TODO]',
    hoursSaturday: 'Saturday: [TODO]',
    closedSunday: 'Sunday: closed',
    seoHeading: 'Dentist in New Belgrade',
    seoBody:
      'Dental Centar Una is a dental practice in Paviljoni, New Belgrade. Since ' +
      '2016 we have provided oral surgery, implants, cosmetic dentistry, ' +
      'prosthodontics, and regular check-ups, and we see emergencies as soon ' +
      'as possible.',
    areasHeading: 'Easy to reach from',
    areas: ['Paviljoni', 'Fontana', 'Tošin Bunar', 'Retenzija', 'Zemun'],
  },
  reviews: {
    heading: 'Your feedback matters to us',
    body:
      'Have you visited us? Share your experience - your review means a lot ' +
      'to us and helps other patients find us.',
    cta: 'Leave a Google review',
    whatsappCta: 'Message us on WhatsApp',
    whatsappMessage:
      'Hi! I would like to book an appointment at Dental Centar Una.',
    instagramCta: 'Follow us on Instagram',
  },
  footer: {
    tagline: 'A dental practice in New Belgrade, since 2016.',
    callAction: 'Call {phone}',
    addressHeading: 'Address',
    openInMaps: 'Open in Google Maps',
    hoursHeading: 'Hours',
    hoursWeekdays: 'Monday - Friday: [TODO]',
    hoursSaturday: 'Saturday: [TODO]',
    closedSunday: 'Closed Sunday',
    contactHeading: 'Contact',
    whatsappMessage:
      'Hi! I would like to book an appointment at Dental Centar Una.',
    copyright: '© 2026 Dental Centar Una. All rights reserved.',
    backToTop: 'Back to top',
  },
  location: {
    heading: 'Find Us',
    subheading: 'Directions, landmarks, and the nearest bus stop.',
    directions: [
      'Dental Centar Una is at Generala Ždanova 4/2, in the Paviljoni ' +
        'neighbourhood of New Belgrade.',
      'The practice is about 200 metres from the Paviljoni bus terminus, ' +
        'right next to the post office 11070 Beograd 27 (Generala Ždanova 2).',
      'Paviljoni is in the north of New Belgrade, on the border with Zemun, ' +
        'so we are easy to reach from Fontana, Tošin Bunar, and Zemun as well.',
    ],
    nearbyHeading: 'Nearby',
    nearby: [
      'Post office 11070 Beograd 27 (Generala Ždanova 2)',
      'Euromedik General Hospital (Pariske komune 22)',
      'MediGroup health centre (Pariske komune 26)',
      'Institute for Mother and Child (Radoja Dakića 6-8)',
    ],
    busHeading: 'Nearest Bus Stop',
    busStopName: 'Novi Beograd (Paviljoni), terminus',
    busLines: [
      { number: '16', route: 'Karaburma 2 - Novi Beograd (Paviljoni)' },
      {
        number: '81',
        route: 'Novi Beograd (Paviljoni) - Ugrinovački put (Altina 1)',
      },
      { number: '81L', route: 'Novi Beograd (Paviljoni) - Altina 1' },
      { number: '613', route: 'Novi Beograd (Paviljoni) - Naselje Radiofar' },
      { number: '711', route: 'Novi Beograd (Paviljoni) - Ugrinovci' },
    ],
    mapTitle: 'Dental Centar Una location',
    openInMaps: 'Open in Google Maps',
    loadMap: 'Click to load map',
  },
  faqSection: {
    heading: 'Frequently Asked Questions',
    subheading: 'Answers to the questions patients ask us most often.',
    ctaText: "Didn't find your answer?",
    callAction: 'Call {phone}',
    items: {
      'booking-required': {
        question:
          'Do I need to book an appointment in advance, or can I just walk in?',
        answer:
          'Appointments need to be booked in advance, but you can always call ' +
          'us to check whether we have a slot available right away. ' +
          'Emergencies are seen as soon as possible. Call us on ' +
          MOBILE_PHONE_INTL +
          ' to book your appointment.',
      },
      'booking-advance-notice': {
        question: 'How far in advance should I book?',
        answer:
          'Appointments are booked by phone and scheduled flexibly around your ' +
          'commitments. For check-ups, treatment, and planned procedures, we ' +
          'recommend calling us in good time so we can find a slot that suits ' +
          'you.',
      },
      'cancel-reschedule': {
        question:
          'Can I cancel or reschedule my appointment, and how much notice do I ' +
          'need to give?',
        answer:
          'Yes, you can cancel or reschedule. If anything changes, please let ' +
          'us know at least one day in advance.',
      },
      parking: {
        question: 'Do you have parking?',
        answer:
          "The practice doesn't have its own parking, but there is public " +
          'parking in front of the building and nearby, so you can always find ' +
          'a spot close to the practice.',
      },
      'payment-methods': {
        question: 'Do you accept card payments, or only cash?',
        answer: '[TODO: payment methods - cash / cards / instalments]',
      },
      'directions-transport': {
        question: 'Which public transport can I take to get to you?',
        answer:
          'The practice is about 200 metres from the Paviljoni bus terminus, ' +
          'served by lines 16, 81, 81L, 613, and 711.',
      },
      location: {
        question: 'Where exactly is the practice, and how do I find it?',
        answer:
          'The practice is at Generala Ždanova 4/2, in the Paviljoni ' +
          'neighbourhood of New Belgrade, about 200 metres from the bus ' +
          'terminus. It is right next to the post office 11070 Beograd 27 ' +
          '(Generala Ždanova 2), with Euromedik General Hospital (Pariske ' +
          'komune 22) and the MediGroup health centre (Pariske komune 26) in ' +
          'Block 7a nearby. The Institute for Mother and Child (Radoja Dakića ' +
          '6-8) is also not far away.\n\n' +
          'Paviljoni is in the north of New Belgrade, on the border with ' +
          'Zemun, so we are easy to reach from Fontana, Tošin Bunar, and Zemun ' +
          'as well.',
      },
    },
  },
};

export default messages;

import type { Messages } from './types';
import { MOBILE_PHONE_INTL } from '@/lib/constant';

const messages: Messages = {
  metadata: {
    title: 'Stomatološka ordinacija Novi Beograd | Dental Centar Una',
    description:
      'Stomatolog na Novom Beogradu (Paviljoni) od 2016. Oralna hirurgija, vađenje umnjaka, ' +
      'implantati i estetska stomatologija. Hitne intervencije - pozovite ' +
      MOBILE_PHONE_INTL +
      '.',
    keywords: [
      'stomatolog Novi Beograd',
      'stomatološka ordinacija Novi Beograd',
      'zubar Novi Beograd',
      'stomatolog Paviljoni',
      'oralni hirurg Novi Beograd',
      'vađenje umnjaka Novi Beograd',
      'implantati Novi Beograd',
      'hitan stomatolog Novi Beograd',
      'Dental Centar Una',
    ],
  },
  hours: {
    heading: 'Radno vreme',
    weekdays: 'Ponedeljak - petak: {hours}',
    saturday: 'Subota: {hours}',
    sunday: 'Nedelja: ne radimo',
  },
  header: {
    nav: {
      services: 'Usluge',
      whyUs: 'Zašto mi',
      team: 'Tim',
      findUs: 'Kako do nas',
      reviews: 'Recenzije',
      faq: 'Pitanja',
      visit: 'Kontakt',
    },
    bookAction: 'Zakaži pregled',
    menuOpen: 'Otvori meni',
    menuClose: 'Zatvori meni',
  },
  hero: {
    eyebrow: 'Novi Beograd · od 2016.',
    headingPrefix: 'Vaš osmeh',
    headingAccent: 'u sigurnim rukama',
    subheading:
      'Stomatološka ordinacija na Novom Beogradu - od prvog pregleda do konačnog ' +
      'rezultata, uz pažljiv i individualan pristup svakom pacijentu.',
    bookAction: 'Zakažite pregled',
    callAction: 'Pozovite {phone}',
    note: 'Termine dogovaramo fleksibilno · Hitne slučajeve primamo što pre',
    imageAlt:
      'Ordinacija Dental Centar Una na Novom Beogradu, sa bordo-belom ' +
      'stomatološkom stolicom, lampom i monitorom',
  },
  intro: {
    heading: 'Stomatološka ordinacija na Novom Beogradu',
    paragraph1:
      'Dental Centar Una je stomatološka ordinacija u ulici Generala Ždanova ' +
      'u naselju Paviljoni na Novom Beogradu, koju je 2016. godine osnovala dr ' +
      'Milica Abramović. Na ' +
      'jednom mestu radimo oralnu hirurgiju i vađenje umnjaka, implantate, ' +
      'estetsku stomatologiju i beljenje zuba, krunice i mostove, lečenje ' +
      'karijesa i kanala korena, kao i uklanjanje kamenca i redovne kontrole.',
    paragraph2:
      'O zdravlju, funkciji i izgledu vaših zuba brine isti tim - bez slanja ' +
      'od jednog do drugog doktora. Termine dogovaramo fleksibilno, prema ' +
      'vašim obavezama, a u slučaju hitne intervencije potrudićemo se da vas ' +
      'primimo što pre.',
  },
  trustBar: {
    items: {
      experience: { title: '10+ godina iskustva', detail: 'Od 2016. sa vama' },
      surgery: {
        title: 'Oralna hirurgija',
        detail: 'Specijalizant oralne hirurgije',
      },
      allInOne: {
        title: 'Sve na jednom mestu',
        detail: 'Stomatologija, hirurgija i estetika',
      },
      emergency: { title: 'Hitne intervencije', detail: 'Primamo vas što pre' },
    },
  },
  services: {
    heading: 'Naše usluge',
    subheading:
      'Kompletna stomatološka nega na jednom mestu - od redovne kontrole do ' +
      'složenih hirurških i estetskih zahvata.',
    items: {
      oralSurgery: {
        name: 'Oralna hirurgija',
        detail:
          'Vađenje umnjaka, hirurško vađenje zuba, apikotomija i pripremni ' +
          'zahvati za implantologiju.',
      },
      implants: {
        name: 'Implantologija',
        detail:
          'Trajna zamena izgubljenih zuba implantatima - vraća i funkciju i ' +
          'prirodan izgled osmeha.',
      },
      cosmetic: {
        name: 'Estetska stomatologija',
        detail:
          'Beljenje zuba, kompozitne i keramičke ljuspice, estetske plombe.',
      },
      prosthetics: {
        name: 'Protetika',
        detail:
          'Krunice, mostovi i proteze izrađeni po meri, uz pažnju na detalje ' +
          'koji osmeh čine prirodnim.',
      },
      restorative: {
        name: 'Konzervativa i endodoncija',
        detail: 'Lečenje karijesa, plombiranje i lečenje kanala korena.',
      },
      prevention: {
        name: 'Preventiva i oralna higijena',
        detail:
          'Uklanjanje kamenca, poliranje, peskarenje i saveti za svakodnevnu negu.',
      },
      facialAesthetics: {
        name: 'Estetska medicina lica',
        detail:
          'Tretmani usmereni na harmoniju osmeha i crta lica, po savremenim ' +
          'tehnikama i principima estetskog pristupa.',
      },
    },
  },
  whyUs: {
    heading: 'Zašto pacijenti biraju nas',
    items: {
      individual: {
        title: 'Individualan pristup',
        text:
          'Kvalitetna terapija počinje dobrim razgovorom. Pre svakog plana ' +
          'terapije uzimamo vremena da razumemo vaše potrebe, strahove i ' +
          'očekivanja.',
      },
      allInOne: {
        title: 'Spoj stomatologije, hirurgije i estetike',
        text:
          'Retko koja ordinacija pokriva sve tri oblasti. To znači da se o ' +
          'zdravlju, funkciji i izgledu vaših zuba brine isti tim - bez slanja ' +
          'od jednog do drugog doktora.',
      },
      education: {
        title: 'Stalno usavršavanje',
        text:
          'Naš tim redovno pohađa edukacije kod eminentnih predavača iz zemlje ' +
          'i inostranstva, kako bi vam pristupili savremenim tehnikama i ' +
          'materijalima.',
      },
      flexible: {
        title: 'Fleksibilni termini i hitne intervencije',
        text:
          'Termine dogovaramo fleksibilno, prema vašim obavezama. U slučaju ' +
          'hitne intervencije potrudićemo se da vas primimo što pre.',
      },
    },
  },
  clinic: {
    heading: 'Naša ordinacija',
    subheading:
      'Prostor u kojem vas dočekujemo, u Paviljonima na Novom Beogradu.',
    items: {
      treatmentRoom: 'Ordinacija Dental Centar Una sa tri stomatološke stolice',
      logoWall: 'Zid sa logotipom Dental Centar Una',
      hallway: 'Hodnik ordinacije sa sertifikatima sa stručnih edukacija',
      reception: 'Recepcija ordinacije Dental Centar Una',
    },
  },
  team: {
    heading: 'Upoznajte naš tim',
    members: {
      abramovic: {
        name: 'dr Milica Abramović',
        role: 'Doktor stomatologije, specijalizant oralne hirurgije, osnivač ordinacije',
        photoAlt: 'dr Milica Abramović, osnivač ordinacije Dental Centar Una',
        bio: [
          'Stomatološki fakultet završila je u Pančevu, gde je 2016. godine ' +
            'stekla zvanje doktora stomatologije. Iste godine napravila je svoj ' +
            'prvi veliki profesionalni korak i osnovala stomatološku ordinaciju, ' +
            'sa željom da pacijentima pruži stručnu, savesnu i individualno ' +
            'prilagođenu negu.',
          'Tokom godina rada kontinuirano ulaže u znanje i profesionalno ' +
            'usavršavanje. Završila je brojne edukacije iz oblasti estetske ' +
            'medicine, usmerene na savremene tehnike i principe estetskog ' +
            'pristupa, kod renomiranih edukatora iz zemlje i inostranstva.',
          'Posebno interesovanje pronašla je u oblasti oralne hirurgije, u kojoj ' +
            'danas nastavlja specijalističko obrazovanje. Spoj stomatologije, ' +
            'oralne hirurgije i estetske medicine omogućava joj da svakom ' +
            'pacijentu pristupi individualno, vodeći računa kako o zdravlju i ' +
            'funkciji, tako i o estetici i prirodnom izgledu.',
        ],
        quote:
          '„Stomatologija za mene nije samo posao, već spoj znanja, preciznosti, ' +
          'odgovornosti i poverenja. Verujem da kvalitetna terapija počinje ' +
          'dobrim razgovorom, pažljivim pristupom i razumevanjem potreba svakog ' +
          'pacijenta."',
      },
    },
  },
  book: {
    heading: 'Zakažite svoj termin',
    body:
      'Pozovite nas u toku radnog vremena i zajedno ćemo pronaći termin koji ' +
      'vam odgovara. U slučaju hitne intervencije potrudićemo se da vas ' +
      'primimo što pre.',
    callAction: 'Pozovite {phone}',
    addressHeading: 'Adresa',
    phoneHeading: 'Telefon',
    hoursHeading: 'Radno vreme',
    hoursWeekdays: 'Ponedeljak - petak: [POPUNITI]',
    hoursSaturday: 'Subota: [POPUNITI]',
    closedSunday: 'Nedelja: ne radimo',
    seoHeading: 'Stomatolog na Novom Beogradu',
    seoBody:
      'Dental Centar Una je stomatološka ordinacija u Paviljonima na Novom ' +
      'Beogradu. Od 2016. godine radimo oralnu hirurgiju, implantologiju, ' +
      'estetsku stomatologiju, protetiku i redovne kontrole, a hitne slučajeve ' +
      'primamo što pre.',
    areasHeading: 'Lako nam možete doći iz',
    areas: ['Paviljoni', 'Fontana', 'Tošin bunar', 'Retenzija', 'Zemun'],
  },
  reviews: {
    heading: 'Vaše mišljenje nam je važno',
    body:
      'Bili ste kod nas? Podelite svoje iskustvo - vaša recenzija nam mnogo ' +
      'znači i pomaže drugim pacijentima da nas pronađu.',
    cta: 'Ostavite recenziju na Google-u',
    whatsappCta: 'Pišite nam na WhatsApp-u',
    whatsappMessage:
      'Zdravo! Želeo/la bih da zakažem pregled u Dental Centar Una.',
    instagramCta: 'Pratite nas na Instagramu',
  },
  footer: {
    tagline: 'Stomatološka ordinacija na Novom Beogradu, od 2016.',
    callAction: 'Pozovite {phone}',
    addressHeading: 'Adresa',
    openInMaps: 'Otvori u Google mapama',
    hoursHeading: 'Radno vreme',
    hoursWeekdays: 'Ponedeljak - petak: [POPUNITI]',
    hoursSaturday: 'Subota: [POPUNITI]',
    closedSunday: 'Nedeljom ne radimo',
    contactHeading: 'Kontakt',
    whatsappMessage:
      'Zdravo! Želeo/la bih da zakažem pregled u Dental Centar Una.',
    copyright: '© 2026 Dental Centar Una. Sva prava zadržana.',
    backToTop: 'Nazad na vrh',
  },
  location: {
    heading: 'Kako do nas',
    subheading: 'Pravac kretanja, orijentiri i najbliža autobuska stanica.',
    directions: [
      'Dental Centar Una nalazi se u ulici Generala Ždanova 4/2, u naselju ' +
        'Paviljoni na Novom Beogradu.',
      'Ordinacija je na oko 200 metara od autobuske okretnice u Paviljonima, ' +
        'odmah kod pošte 11070 Beograd 27 (Generala Ždanova 2).',
      'Paviljoni se nalaze na severu Novog Beograda, na granici sa Zemunom, ' +
        'pa nam lako možete doći i iz Fontane, Tošinog bunara i Zemuna.',
    ],
    nearbyHeading: 'U blizini',
    nearby: [
      'Pošta 11070 Beograd 27 (Generala Ždanova 2)',
      'Opšta bolnica Euromedik (Pariske komune 22)',
      'Dom zdravlja MediGroup (Pariske komune 26)',
      'Institut za majku i dete (Radoja Dakića 6-8)',
    ],
    busHeading: 'Najbliža autobuska stanica',
    busStopName: 'Novi Beograd (Paviljoni), okretnica',
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
    mapTitle: 'Lokacija ordinacije Dental Centar Una',
    openInMaps: 'Otvori u Google mapama',
    loadMap: 'Klikni da učitaš mapu',
  },
  faqSection: {
    heading: 'Česta pitanja',
    subheading: 'Odgovori na pitanja koja nam pacijenti najčešće postavljaju.',
    ctaText: 'Niste pronašli odgovor?',
    callAction: 'Pozovite {phone}',
    items: {
      'booking-required': {
        question:
          'Da li je potrebno zakazati termin unapred, ili primate i bez ' +
          'zakazivanja?',
        answer:
          'Potrebno je zakazati termin unapred, ali uvek možete da nas pozovete ' +
          'i proverite da li imamo slobodan termin odmah. Hitne slučajeve ' +
          'primamo što pre. Pozovite nas na ' +
          MOBILE_PHONE_INTL +
          ' i zakažite svoj termin.',
      },
      'booking-advance-notice': {
        question: 'Koliko unapred treba zakazati termin?',
        answer:
          'Termin zakazujete telefonom, a dogovaramo ga fleksibilno, prema ' +
          'vašim obavezama. Za redovne kontrole, lečenje i planirane zahvate ' +
          'preporučujemo da nas pozovete na vreme, kako bismo zajedno pronašli ' +
          'termin koji vam odgovara.',
      },
      'cancel-reschedule': {
        question:
          'Da li se termin može otkazati ili pomeriti, i koliko unapred treba ' +
          'javiti?',
        answer:
          'Da, termin možete otkazati ili pomeriti. U slučaju bilo kakvih ' +
          'promena potrebno je da nam javite najkasnije jedan dan unapred.',
      },
      parking: {
        question: 'Da li imate parking?',
        answer:
          'Ordinacija nema svoj parking, ali ispred zgrade i u blizini ima ' +
          'gradskog parkinga, tako da uvek možete pronaći mesto u blizini ' +
          'ordinacije.',
      },
      'payment-methods': {
        question: 'Da li se plaća karticom ili samo gotovinom?',
        answer:
          '[POPUNITI: načini plaćanja - gotovina / platne kartice / plaćanje na rate]',
      },
      'directions-transport': {
        question: 'Kojim prevozom mogu da dođem do vas?',
        answer:
          'Ordinacija je na oko 200 metara od autobuske okretnice u Paviljonima, ' +
          'do koje saobraćaju linije 16, 81, 81L, 613 i 711.',
      },
      location: {
        question: 'Gde se tačno nalazi ordinacija i kako da je pronađem?',
        answer:
          'Ordinacija se nalazi u ulici Generala Ždanova 4/2, u naselju ' +
          'Paviljoni na Novom Beogradu, na oko 200 metara od autobuske ' +
          'okretnice. Nalazi se odmah kod pošte 11070 Beograd 27 (Generala ' +
          'Ždanova 2), a u blizini su i Opšta bolnica Euromedik (Pariske komune ' +
          '22) i dom zdravlja MediGroup (Pariske komune 26) u Bloku 7a. ' +
          'Nedaleko od ordinacije je i Institut za majku i dete (Radoja ' +
          'Dakića 6-8).\n\n' +
          'Paviljoni se nalaze na severu Novog Beograda, na granici sa ' +
          'Zemunom, pa nam lako možete doći i iz Fontane, Tošinog bunara i ' +
          'Zemuna.',
      },
    },
  },
};

export default messages;

import { NextResponse } from 'next/server';
import messages, { defaultLocale } from '@/messages';
import {
  MOBILE_PHONE_INTL,
  MOBILE_PHONE,
  INSTAGRAM_URL,
  BUSINESS_NAME,
  ADDRESS,
  GOOGLE_MAPS_URL,
} from '@/lib/constant';
import { getOpeningHoursLines } from '@/lib/opening-hours';

export const dynamic = 'force-static';

export async function GET() {
  const t = messages[defaultLocale];

  const services = Object.values(t.services.items).map(
    (item) => `- ${item.name}: ${item.detail}`,
  );

  const team = Object.values(t.team.members).map(
    (member) => `- ${member.name} - ${member.role}`,
  );

  const hours = getOpeningHoursLines(t).map((line) => `- ${line}`);

  const content = `\
# ${BUSINESS_NAME}

> ${t.metadata.description}

## Key Information

- Address: ${ADDRESS.street}, ${ADDRESS.city} (Paviljoni, ${ADDRESS.locality})
- Phone: ${MOBILE_PHONE_INTL}
- Google Maps: ${GOOGLE_MAPS_URL}
- Instagram: ${INSTAGRAM_URL}

## Working Hours

${hours.join('\n')}

## Services

${services.join('\n')}

## Team

${team.join('\n')}

## Booking

- Phone: ${MOBILE_PHONE_INTL}
- WhatsApp: https://wa.me/${MOBILE_PHONE}
`;

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

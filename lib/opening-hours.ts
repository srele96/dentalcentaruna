import { translate, type Messages } from '@/messages';
import { OPENING_HOURS } from './constant';

export function formatHours({
  opens,
  closes,
}: {
  opens: string;
  closes: string;
}) {
  return `${opens} - ${closes}`;
}

export function getOpeningHoursLines(t: Messages): string[] {
  return [
    translate(t, 'hours.weekdays', {
      hours: formatHours(OPENING_HOURS.weekdays),
    }),
    translate(t, 'hours.saturday', {
      hours: formatHours(OPENING_HOURS.saturday),
    }),
    t.hours.sunday,
  ];
}

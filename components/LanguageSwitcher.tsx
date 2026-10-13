import Link from 'next/link';
import { locales, type Locale, hrefFor } from '@/messages';

interface Props {
  locale: 'sr' | 'en';
}

export function LanguageSwitcher({ locale }: Props) {
  function isCurrent(_l: Locale) {
    return _l === locale;
  }

  function ariaCurrent(_l: Locale) {
    if (isCurrent(_l)) {
      return { 'aria-current': 'true' } as const;
    }
    return {} as const;
  }

  function activeOrNot(_l: Locale) {
    return isCurrent(_l) ? 'bg-ink text-surface' : 'text-ink/60 hover:text-ink';
  }

  return (
    <div className="inline-flex items-center rounded-full border border-ink/15 p-0.5 text-xs tracking-wide">
      {locales().map((_l) => {
        return (
          <Link
            key={_l}
            href={hrefFor(_l)}
            {...ariaCurrent(_l)}
            className={`px-3 py-1.5 rounded-full transition-colors ${activeOrNot(_l)}`}
            // https://github.com/vercel/next.js/issues/85374
            prefetch={false}
          >
            {_l.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}

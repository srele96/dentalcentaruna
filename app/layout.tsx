import type { Metadata } from 'next';
import messages, {
  hrefFor,
  languageAlternates,
  defaultLocale,
  type Locale,
} from '@/messages';
import { url } from '@/lib/url';
import { fraunces, workSans } from '@/fonts';
import {
  createOpenGraphMetadata,
  createTwitterMetadata,
} from '@/lib/create-metadata';

import './globals.css';

const locale: Locale = defaultLocale;
const t = messages[locale];

export const metadata: Metadata = {
  metadataBase: url(),
  title: t.metadata.title,
  description: t.metadata.description,
  keywords: t.metadata.keywords,
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  // For SEO each page needs to have canonical tag and link to its own
  // canonical page
  // If a page itself is canonical, it refers to itself, otherwise (for now)
  // /sr canonical page is /
  alternates: {
    canonical: hrefFor(locale),
    languages: languageAlternates(),
  },
  openGraph: createOpenGraphMetadata({ locale, translations: t }),
  twitter: createTwitterMetadata({ translations: t }),
};

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang={locale}
      className={[
        'h-full',
        'antialiased',
        fraunces.variable,
        workSans.variable,
      ].join(' ')}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import { ogLocaleFor, hrefFor, type Locale, type Messages } from '@/messages';
import type { Metadata } from 'next';
import { BUSINESS_NAME } from '@/lib/constant';

interface CreateOpenGraphMetadataOptions {
  locale: Locale;
  translations: Messages;
}

const OG_IMAGE = '/image/og-image.jpg';

function createOpenGraphMetadata({
  locale,
  translations: t,
}: CreateOpenGraphMetadataOptions): Metadata['openGraph'] {
  const metadata: Metadata['openGraph'] = {
    title: t.metadata.title,
    description: t.metadata.description,
    url: hrefFor(locale),
    siteName: BUSINESS_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: t.metadata.title,
      },
    ],
    locale: ogLocaleFor(locale),
    type: 'website',
  };

  return metadata;
}

interface CreateTwitterMetadataOptions {
  translations: Messages;
}

function createTwitterMetadata({
  translations: t,
}: CreateTwitterMetadataOptions): Metadata['twitter'] {
  const metadata: Metadata['twitter'] = {
    card: 'summary_large_image',
    title: t.metadata.title,
    description: t.metadata.description,
    images: [OG_IMAGE],
  };

  return metadata;
}

export { createOpenGraphMetadata, createTwitterMetadata };

'use client';

import { useState } from 'react';
import { motion, MotionConfig, type HTMLMotionProps } from 'motion/react';
import Image, { type StaticImageData } from 'next/image';
import { translate } from '@/messages';
import type { Messages, Locale, MessagePath, FaqItem, FaqId } from '@/messages';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ArrowRight, Plus } from 'lucide-react';
import {
  INSTAGRAM_URL,
  MOBILE_PHONE,
  MOBILE_PHONE_INTL,
  GOOGLE_REVIEW_URL,
  SECTION_ID,
} from '@/lib/constant';
import { createStructuredData } from '@/lib/create-structured-data';

import workBlackHairWaves from '@/assets/work-black-hair-waves.webp';
import workBraidsWithExtensions from '@/assets/work-braids-with-extensions.webp';
import workBrownHairWaves from '@/assets/work-brown-hair-waves.webp';
import workChestnutHairWaves from '@/assets/work-chestnut-hair-waves.webp';
import workStraightCutBlowDry from '@/assets/work-straight-cut-blow-dry.webp';
import jelena from '@/assets/jelena.webp';
import interiorSignatureWall from '@/assets/interior-signature-wall.webp';
import interiorFloralsClose from '@/assets/interior-florals-close.webp';
import interiorFloralsWide from '@/assets/interior-florals-wide.webp';
import workHairColoringWithRevlonDyes from '@/assets/work-hair-coloring-with-revlon-dyes.webp';
import workWavyHairSideProfile from '@/assets/work-wavy-hair-side-profile.webp';
import workShortLayeredWavesBack from '@/assets/work-short-layered-waves-back.webp';
import workFormalBun from '@/assets/work-formal-bun.webp';
import exteriorGlassWall from '@/assets/exterior-glass-wall.webp';
import UnaDentalCentarLogo from '@/components/UnaDentalCentarLogo';

interface Props {
  translations: Messages;
  locale: Locale;
  url: string;
}

export function Home({ translations: t, locale, url }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { reveal } = MOTION_CONFIG;

  return (
    // https://motion.dev/docs/react-motion-config
    <MotionConfig reducedMotion="user">
      <div className="font-body text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              createStructuredData({
                url,
                priceRange: getPriceRange(SERVICES),
                faqItems: Object.values(t.faqSection.items) as FaqItem[],
                locale,
              }),
            ),
          }}
        />

        {/* ===== NAV ===== */}
        <header className="fixed top-0 inset-x-0 z-50 bg-surface border-b border-ink/10">
          <div
            className={[
              'max-w-6xl',
              'mx-auto',
              'px-6',
              'md:px-10',
              'h-16',
              'flex',
              'items-center',
              'justify-between',
            ].join(' ')}
          >
            <a
              href={`#${SECTION_ID.top}`}
              className="font-display text-lg tracking-tight"
            >
              <UnaDentalCentarLogo className="h-11 w-auto" />
            </a>

            <nav
              className={[
                'hidden',
                'lg:flex',
                'items-center',
                'gap-8',
                'text-sm',
                'tracking-wide',
                'text-ink/70',
              ].join(' ')}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-ink transition-colors"
                >
                  {translate(t, link.key)}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} />
              <a
                href={`#${SECTION_ID.book}`}
                className={[
                  'hidden',
                  'sm:inline-flex',
                  'text-sm',
                  'px-4',
                  'py-2',
                  'rounded-full',
                  'bg-ink',
                  'text-surface',
                  'hover:bg-brand',
                  'transition-colors',
                ].join(' ')}
              >
                {translate(t, 'header.bookAction')}
              </a>

              {/* Hamburger - mobile only */}
              <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? t.header.menuClose : t.header.menuOpen}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              >
                <span
                  className={[
                    'absolute',
                    'h-px',
                    'w-6',
                    'bg-ink',
                    'transition-all',
                    'duration-300',
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute',
                    'h-px',
                    'w-6',
                    'bg-ink',
                    'transition-all',
                    'duration-300',
                    isMenuOpen ? 'opacity-0' : 'opacity-100',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute',
                    'h-px',
                    'w-6',
                    'bg-ink',
                    'transition-all',
                    'duration-300',
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5',
                  ].join(' ')}
                />
              </button>
            </div>
          </div>

          {/* Mobile menu panel */}
          <div
            className={[
              'lg:hidden',
              'grid',
              'overflow-hidden',
              'transition-[grid-template-rows,padding]',
              'duration-300',
              'ease-in-out',
              'bg-surface',
              'border-t',
              'border-ink/10',
              isMenuOpen ? 'grid-rows-[1fr] py-4' : 'grid-rows-[0fr] py-0',
            ].join(' ')}
          >
            <nav className="min-h-0 flex flex-col px-6 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={[
                    'py-3',
                    'text-base',
                    'text-ink/80',
                    'hover:text-ink',
                    'transition-colors',
                    'border-b',
                    'border-ink/5',
                    'last:border-0',
                  ].join(' ')}
                >
                  {translate(t, link.key)}
                </a>
              ))}
              <a
                href={`#${SECTION_ID.book}`}
                onClick={() => setIsMenuOpen(false)}
                className={[
                  'mt-4',
                  'text-center',
                  'text-sm',
                  'px-4',
                  'py-3',
                  'rounded-full',
                  'bg-ink',
                  'text-surface',
                  'hover:bg-brand',
                  'transition-colors',
                ].join(' ')}
              >
                {translate(t, 'header.bookAction')}
              </a>
            </nav>
          </div>
        </header>

        <main>
          {/* ===== HERO ===== */}
          <section
            id={SECTION_ID.top}
            className="relative isolate overflow-hidden bg-ink text-surface"
          >
            <Image
              src={exteriorGlassWall}
              alt={t.hero.imageAlt}
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              quality={70}
              className="-z-10 object-cover object-[65%_center] md:object-center"
            />

            {/* readability scrim */}
            <div
              aria-hidden="true"
              className={[
                'absolute',
                'inset-0',
                '-z-10',
                'bg-linear-to-r',
                'from-ink',
                'via-ink/85',
                'to-ink/45',
                'md:via-ink/80',
                'md:to-ink/25',
              ].join(' ')}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-ink to-transparent"
            />
            <div
              className={[
                'max-w-6xl',
                'mx-auto',
                'px-6',
                'md:px-10',
                'pt-40',
                'pb-28',
                'md:pt-52',
                'md:pb-36',
                'relative',
              ].join(' ')}
            >
              <p
                className={[
                  'text-brand-soft/90',
                  'text-xs',
                  'md:text-sm',
                  'tracking-[0.3em]',
                  'uppercase',
                  'mb-6',
                ].join(' ')}
              >
                {t.hero.eyebrow}
              </p>

              <h1
                className={[
                  'font-display',
                  'font-light',
                  'text-[13vw]',
                  'md:text-[6.5vw]',
                  'leading-[0.95]',
                  'max-w-4xl',
                ].join(' ')}
              >
                {`${t.hero.headingPrefix} `}
                <br className="hidden md:block" />
                {`${t.hero.headingYour} `}
                <em className="italic text-brand-soft not-italic-fallback">
                  {t.hero.headingSignature}
                </em>
                .
              </h1>

              <div className="mt-10 flex items-center gap-6">
                <UnaDentalCentarLogo />
                <p className="text-surface/60 text-sm max-w-56">
                  {t.hero.sigCaption}
                </p>
              </div>

              <div className="mt-14 flex flex-wrap gap-4">
                <a
                  href={`#${SECTION_ID.book}`}
                  className={[
                    'px-6',
                    'py-3',
                    'rounded-full',
                    'border',
                    'border-transparent',
                    'bg-brand',
                    'text-on-brand',
                    'text-sm',
                    'font-medium',
                    'hover:bg-brand-hover',
                    'transition-colors',
                  ].join(' ')}
                >
                  {t.hero.bookAction}
                </a>
                <a
                  href={`#${SECTION_ID.services}`}
                  className={[
                    'px-6',
                    'py-3',
                    'rounded-full',
                    'border',
                    'border-surface/30',
                    'text-sm',
                    'hover:border-brand-soft',
                    'hover:text-brand-soft',
                    'transition-colors',
                  ].join(' ')}
                >
                  {t.hero.seeServices}
                </a>
              </div>
            </div>
            <div className="hairline absolute bottom-0 inset-x-0" />
          </section>

          {/* ===== INTRO ===== */}
          <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-28">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-light mb-6">
                {t.intro.heading}
              </h2>
              <div className="space-y-5 text-ink/70 text-base md:text-lg leading-relaxed">
                <p>{t.intro.paragraph1}</p>
                <p>{t.intro.paragraph2}</p>
              </div>
            </div>
          </section>

          {/* ===== SERVICES ===== */}
          <section
            id={SECTION_ID.services}
            className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
          >
            <SectionHeading
              heading={t.services.heading}
              subheading={t.services.subheading}
              reveal={reveal}
            />

            <div className="grid md:grid-cols-2 gap-x-16">
              {SERVICES.map((service) => {
                const item = t.services.items[service.key];
                return (
                  <motion.div
                    key={service.key}
                    {...reveal}
                    className={[
                      'border-t',
                      'border-ink/15',
                      'py-6',
                      'flex',
                      'justify-between',
                      'items-baseline',
                      service.wide ? 'border-b md:col-span-2' : '',
                    ].join(' ')}
                  >
                    <div>
                      <h3 className="font-display text-xl">{item.name}</h3>
                      <p className="text-ink-subtle text-sm mt-1">
                        {item.detail}
                      </p>
                    </div>
                    <span className="text-brand text-sm whitespace-nowrap ml-6">
                      {translate(t, 'services.price', {
                        amount: formatPrice(service.amount, service.currency),
                      })}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ===== WORK / GALLERY ===== */}
          <section
            id={SECTION_ID.work}
            className="bg-brand text-surface py-24 md:py-32"
          >
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <motion.h2
                {...reveal}
                className="font-display text-4xl md:text-5xl font-light mb-3"
              >
                {t.work.heading}
              </motion.h2>
              <motion.p
                {...reveal}
                className="text-surface/60 text-sm mb-14 max-w-md"
              >
                {t.work.subheading}
              </motion.p>

              <div
                className={[
                  'grid',
                  'grid-cols-1',
                  'sm:grid-cols-2',
                  'lg:grid-cols-3',
                  'gap-4',
                  'md:gap-6',
                ].join(' ')}
              >
                {WORK.map((item) => (
                  <motion.div
                    key={item.key}
                    {...reveal}
                    className={[
                      'rounded-lg',
                      'overflow-hidden',
                      'flex',
                      'flex-col',
                      'bg-on-brand/5',
                      'ring-1',
                      'ring-on-brand/10',
                    ].join(' ')}
                  >
                    <div className="relative aspect-3/4">
                      <Image
                        src={item.image}
                        alt={t.work.items[item.key]}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="px-4 py-3">
                      <span
                        className={[
                          'font-sans',
                          'text-sm',
                          'md:text-base',
                          'tracking-wide',
                          'text-surface/80',
                        ].join(' ')}
                      >
                        {t.work.items[item.key]}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== STYLISTS ===== */}
          <section
            id={SECTION_ID.stylists}
            className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
          >
            <motion.h2
              {...reveal}
              className="font-display text-4xl md:text-5xl font-light mb-14 text-center"
            >
              {translate(t, 'stylists.heading')}
            </motion.h2>
            <div className="max-w-xs mx-auto">
              {STYLISTS.map((stylist) => (
                <motion.div
                  key={stylist.key}
                  {...reveal}
                  className="text-center"
                >
                  <div
                    className={[
                      'aspect-square',
                      'rounded-full',
                      'bg-surface-alt',
                      'mb-5',
                      'overflow-hidden',
                      'flex',
                      'items-center',
                      'justify-center',
                    ].join(' ')}
                  >
                    <Image
                      src={stylist.image}
                      alt={stylist.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-lg">{stylist.name}</h3>
                  <p className="text-ink-subtle text-sm">
                    {translate(t, stylist.key)}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ===== ABOUT / INTERIOR ===== */}
          <section
            id={SECTION_ID.about}
            className="bg-brand text-surface py-24 md:py-32"
          >
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <div className="grid md:grid-cols-2 gap-14 md:gap-10 items-center">
                <motion.div {...reveal}>
                  <h2 className="font-display text-4xl md:text-5xl font-light mb-8">
                    {t.about.heading}
                  </h2>
                  <div
                    className={[
                      'space-y-5',
                      'text-surface/70',
                      'text-base',
                      'md:text-lg',
                      'leading-relaxed',
                    ].join(' ')}
                  >
                    <p>{t.about.paragraph1}</p>
                    <p>{t.about.paragraph2}</p>
                  </div>
                </motion.div>
                <motion.div
                  {...reveal}
                  className="relative aspect-4/5 rounded-lg overflow-hidden"
                >
                  <Image
                    src={interiorSignatureWall}
                    alt={t.about.wallImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <motion.div
                {...reveal}
                className="grid md:grid-cols-2 gap-4 md:gap-6 mt-14 md:mt-20"
              >
                <div className="relative aspect-3/4 rounded-lg overflow-hidden">
                  <Image
                    src={interiorFloralsWide}
                    alt={t.about.floralsWideAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-3/4 rounded-lg overflow-hidden">
                  <Image
                    src={interiorFloralsClose}
                    alt={t.about.floralsCloseAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          <section
            id={SECTION_ID.findUs}
            className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
          >
            <SectionHeading
              heading={t.location.heading}
              subheading={t.location.subheading}
              reveal={reveal}
            />

            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
              {/* Text content */}
              <motion.div {...reveal} className="space-y-8">
                <div
                  className={[
                    'space-y-4',
                    'text-ink/70',
                    'text-sm',
                    'md:text-base',
                    'leading-relaxed',
                  ].join(' ')}
                >
                  {t.location.directions.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="border-t border-ink/15 pt-6">
                  <h3 className="font-display text-lg mb-3">
                    {t.location.nearbyHeading}
                  </h3>
                  <ul className="text-ink-subtle text-sm space-y-1.5">
                    {t.location.nearby.map((place, i) => (
                      <li key={i}>{place}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-ink/15 pt-6">
                  <h3 className="font-display text-lg mb-1">
                    {t.location.busHeading}
                  </h3>
                  <a
                    href="https://www.planplus.rs/beograd/stajaliste/maksima-brankovica/3076"
                    rel="noopener noreferrer"
                    className="text-brand text-sm hover:underline"
                  >
                    {t.location.busStopName}
                  </a>
                  <ul className="mt-3 text-ink-subtle text-sm space-y-1.5">
                    {t.location.busLines.map((line) => (
                      <li key={line.number} className="flex gap-3">
                        <span className="text-ink font-medium shrink-0 w-12">
                          {line.number}
                        </span>
                        <span>{line.route}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div {...reveal} className="space-y-4">
                <div
                  className={[
                    'w-full',
                    'aspect-square',
                    'md:aspect-4/5',
                    'rounded-lg',
                    'overflow-hidden',
                    'ring-1',
                    'ring-ink/10',
                  ].join(' ')}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666.9036587482959!2d20.290000049084973!3d44.8981339508624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a67a48e3c5523%3A0x1c43e0950fa06162!2sSignature!5e0!3m2!1sen!2srs!4v1786403572686!5m2!1sen!2srs"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={t.location.mapTitle}
                  />
                </div>
                <a
                  href="https://maps.app.goo.gl/oeiT45tU6cUaNtNVA"
                  rel="noopener noreferrer"
                  className={[
                    'inline-flex',
                    'items-center',
                    'gap-2',
                    'text-sm',
                    'text-brand',
                    'hover:underline',
                  ].join(' ')}
                >
                  {t.location.openInMaps}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </motion.div>
            </div>
          </section>

          {/* ===== FAQ ===== */}
          <section
            id={SECTION_ID.faq}
            className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
          >
            <SectionHeading
              heading={t.faqSection.heading}
              subheading={t.faqSection.subheading}
              reveal={reveal}
            />

            <div className="max-w-3xl">
              {(Object.keys(t.faqSection.items) as FaqId[]).map((id) => (
                <FaqAccordionItem
                  key={id}
                  item={t.faqSection.items[id]}
                  reveal={reveal}
                  id={id}
                />
              ))}
            </div>
          </section>

          {/* ===== BOOK / CTA ===== */}
          <section
            id={SECTION_ID.book}
            className="bg-ink text-surface relative overflow-hidden grain"
          >
            <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 relative">
              <motion.div {...reveal} className="text-center mb-14">
                <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
                  {t.book.headingPrefix}
                  <span className="text-brand-soft">{t.book.headingChair}</span>
                  .
                </h2>
                <p className="text-surface/60 text-sm max-w-sm mx-auto">
                  {t.book.subheading}
                </p>
              </motion.div>

              {/* Primary CTA: phone */}
              <motion.div
                {...reveal}
                className={[
                  'max-w-xl',
                  'mx-auto',
                  'mb-10',
                  'text-center',
                  'border',
                  'border-brand/50',
                  'rounded-2xl',
                  'p-10',
                  'bg-brand/15',
                ].join(' ')}
              >
                <p className="text-brand-soft/90 text-xs tracking-[0.3em] uppercase mb-4">
                  {t.book.fastestWay}
                </p>
                <a
                  href={`tel:${MOBILE_PHONE_INTL}`}
                  className={[
                    'font-display',
                    'text-4xl',
                    'md:text-5xl',
                    'font-light',
                    'text-surface',
                    'hover:text-surface/70',
                    'transition-colors',
                    'block',
                    'mb-4',
                  ].join(' ')}
                >
                  063 742 7750
                </a>
                <p className="text-surface/50 text-sm mb-6">
                  {t.book.phoneHours}
                </p>
                <a
                  href={`tel:${MOBILE_PHONE_INTL}`}
                  className={[
                    'inline-flex',
                    'items-center',
                    'justify-center',
                    'gap-2',
                    'px-8',
                    'py-3',
                    'rounded-full',
                    'bg-brand',
                    'text-on-brand',
                    'text-sm',
                    'font-medium',
                    'hover:bg-brand-hover',
                    'transition-colors',
                  ].join(' ')}
                >
                  {t.book.callNow}
                </a>
              </motion.div>

              {/* Secondary: WhatsApp + Instagram + Review */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                <motion.div
                  {...reveal}
                  className="bg-surface/5 border border-surface/15 rounded-2xl p-6 md:p-8 flex flex-col"
                >
                  <h3 className="font-display text-xl md:text-2xl mb-3">
                    {t.book.whatsappHeading}
                  </h3>
                  <p className="text-surface/60 text-sm mb-6">
                    {t.book.whatsappBody}
                  </p>
                  <a
                    href={`https://wa.me/${MOBILE_PHONE}?text=${encodeURIComponent(t.book.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      'mt-auto',
                      'w-full',
                      'inline-flex',
                      'items-center',
                      'justify-center',
                      'gap-2',
                      'px-6',
                      'py-3',
                      'rounded-full',
                      'bg-[#25D366]',
                      'text-ink',
                      'text-sm',
                      'font-medium',
                      'hover:opacity-90',
                      'transition-opacity',
                    ].join(' ')}
                  >
                    {t.book.whatsappCta}
                  </a>
                </motion.div>

                <motion.div
                  {...reveal}
                  className="bg-surface/5 border border-surface/15 rounded-2xl p-6 md:p-8 flex flex-col"
                >
                  <h3 className="font-display text-xl md:text-2xl mb-3">
                    {t.book.instagramHeading}
                  </h3>
                  <p className="text-surface/60 text-sm mb-6">
                    {t.book.instagramBody}
                  </p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      'mt-auto',
                      'w-full',
                      'inline-flex',
                      'items-center',
                      'justify-center',
                      'gap-2',
                      'px-6',
                      'py-3',
                      'rounded-full',
                      'bg-linear-to-tr',
                      'from-[#feda75]',
                      'via-[#d62976]',
                      'to-[#4f5bd5]',
                      'text-surface',
                      'text-sm',
                      'font-medium',
                      'hover:opacity-90',
                      'transition-opacity',
                    ].join(' ')}
                  >
                    @signaturebatajnica
                  </a>
                </motion.div>

                <motion.div
                  {...reveal}
                  className={[
                    'bg-surface/5',
                    'border',
                    'border-surface/15',
                    'rounded-2xl',
                    'p-6',
                    'md:p-8',
                    'flex',
                    'flex-col',
                    'md:col-span-2',
                    'lg:col-span-1',
                  ].join(' ')}
                >
                  <h3 className="font-display text-xl md:text-2xl mb-3">
                    {t.book.review.heading}
                  </h3>
                  <p className="text-surface/60 text-sm mb-6">
                    {t.book.review.body}
                  </p>
                  <a
                    href={GOOGLE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      'mt-auto',
                      'w-full',
                      'inline-flex',
                      'items-center',
                      'justify-center',
                      'gap-2',
                      'px-6',
                      'py-3',
                      'rounded-full',
                      'bg-brand',
                      'text-on-brand',
                      'text-sm',
                      'font-medium',
                      'hover:bg-brand-hover',
                      'transition-colors',
                    ].join(' ')}
                  >
                    {t.book.review.cta}
                  </a>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        {/* ===== VISIT / FOOTER ===== */}
        <footer
          id={SECTION_ID.visit}
          className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid sm:grid-cols-3 gap-10 text-sm"
        >
          <div>
            <h3 className="font-display text-lg mb-3">
              {t.footer.addressHeading}
            </h3>
            <p className="text-ink-subtle">
              Majora Zorana Radosavljevića 205
              <br />
              Beograd 11273
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg mb-3">
              {t.footer.hoursHeading}
            </h3>
            <p className="text-ink-subtle">
              {t.footer.hoursLine}
              <br />
              {t.footer.closedSunday}
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg mb-3">
              {t.footer.contactHeading}
            </h3>
            <p className="text-ink-subtle mb-2">
              <a
                href={`tel:${MOBILE_PHONE_INTL}`}
                className="hover:text-brand transition-colors"
              >
                063 742 7750
              </a>
            </p>
            <nav
              className="flex items-center gap-4 text-ink-subtle"
              aria-label={t.footer.contactHeading}
            >
              <a
                href={`https://wa.me/${MOBILE_PHONE}`}
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                Instagram
              </a>
            </nav>
          </div>
        </footer>
        <div className="hairline max-w-6xl mx-auto" />
        <p className="text-center text-xs text-ink-subtle py-6">
          {t.footer.copyright}
        </p>
      </div>
    </MotionConfig>
  );
}

const NAV_LINKS = [
  { href: `#${SECTION_ID.services}`, key: 'header.nav.services' },
  { href: `#${SECTION_ID.work}`, key: 'header.nav.work' },
  { href: `#${SECTION_ID.stylists}`, key: 'header.nav.stylists' },
  { href: `#${SECTION_ID.about}`, key: 'header.nav.about' },
  { href: `#${SECTION_ID.findUs}`, key: 'header.nav.findUs' },
  { href: `#${SECTION_ID.faq}`, key: 'header.nav.faq' },
  { href: `#${SECTION_ID.visit}`, key: 'header.nav.visit' },
] as const satisfies ReadonlyArray<{
  href: string;
  key: MessagePath;
}>;

function formatPrice(amount: number, currency: string): string {
  return `${amount.toLocaleString('sr-RS')} ${currency}`;
}

function getPriceRange(services: typeof SERVICES): string {
  const amounts = services.map((s) => s.amount);
  const currency = services[0].currency;
  const min = Math.min(...amounts);
  const max = Math.max(...amounts);
  return `${min}-${max} ${currency}`;
}

const SERVICES = [
  { key: 'haircut', amount: 1000, currency: 'RSD', wide: false },
  { key: 'styling', amount: 1000, currency: 'RSD', wide: false },
  { key: 'color', amount: 2200, currency: 'RSD', wide: false },
  { key: 'balayage', amount: 6000, currency: 'RSD', wide: false },
  { key: 'bondRepair', amount: 2000, currency: 'RSD', wide: false },
  { key: 'mensGrooming', amount: 900, currency: 'RSD', wide: true },
] as const satisfies ReadonlyArray<{
  key: keyof Messages['services']['items'];
  amount: number;
  currency: string;
  wide: boolean;
}>;

const WORK = [
  { key: 'braidsWithExtensions', image: workBraidsWithExtensions },
  { key: 'straightCutBlowDry', image: workStraightCutBlowDry },
  { key: 'brownHairWaves', image: workBrownHairWaves },
  { key: 'blackHairWaves', image: workBlackHairWaves },
  { key: 'chestnutHairWaves', image: workChestnutHairWaves },
  { key: 'hairColoringWithRevlonDyes', image: workHairColoringWithRevlonDyes },
  { key: 'wavyHairSideProfile', image: workWavyHairSideProfile },
  { key: 'shortLayeredWavesBack', image: workShortLayeredWavesBack },
  { key: 'formalBun', image: workFormalBun },
] satisfies ReadonlyArray<{
  key: keyof Messages['work']['items'];
  image: StaticImageData;
}>;

const STYLISTS = [
  {
    key: 'stylists.items.jelena.role',
    name: 'Jelena',
    image: jelena,
  },
] as const satisfies ReadonlyArray<{
  key: MessagePath;
  name: string;
  image: StaticImageData;
}>;

const MOTION_CONFIG = {
  reveal: {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -10% 0px' },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  dashInitial: 1400,
} as const satisfies {
  reveal: RevealProps;
  dashInitial: number;
};

// For now, HTMLMotionProps<'div'> works for all html elements we currently
// use motion for
export type RevealProps = HTMLMotionProps<'div'>;

function FaqAccordionItem({
  item,
  reveal,
  id,
}: {
  item: FaqItem;
  reveal: RevealProps;
  id: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const panelId = `faq-answer-${id}`;
  const buttonId = `faq-question-${id}`;

  return (
    <motion.div
      {...reveal}
      className="border-t border-ink/15 last:border-b py-6"
    >
      <h3 className="font-display text-xl">
        <button
          id={buttonId}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="group w-full flex items-center justify-between gap-4 text-left cursor-pointer"
        >
          <span className="transition-colors group-hover:text-brand">
            {item.question}
          </span>
          <span
            className={[
              'shrink-0',
              'inline-flex',
              'items-center',
              'justify-center',
              'text-brand',
              'transition-transform',
              'duration-300',
              'group-hover:scale-110',
              isOpen ? 'rotate-45' : '',
            ].join(' ')}
            aria-hidden="true"
          >
            <Plus size={20} strokeWidth={2} />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={[
          'grid',
          'overflow-hidden',
          'transition-[grid-template-rows]',
          'duration-300',
          'ease-in-out',
          isOpen ? 'grid-rows-[1fr] mt-3' : 'grid-rows-[0fr]',
        ].join(' ')}
      >
        <p className="min-h-0 text-ink-subtle text-sm leading-relaxed">
          {item.answer}
        </p>
      </div>
    </motion.div>
  );
}

function SectionHeading({
  heading,
  subheading,
  reveal,
}: {
  heading: string;
  subheading: string;
  reveal: RevealProps;
}) {
  return (
    <motion.div
      {...reveal}
      className="flex items-end justify-between mb-14 flex-wrap gap-4"
    >
      <h2 className="font-display text-4xl md:text-5xl font-light">
        {heading}
      </h2>
      <p className="text-ink-subtle text-sm max-w-xs">{subheading}</p>
    </motion.div>
  );
}

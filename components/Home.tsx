'use client';

import { useState } from 'react';
import { motion, MotionConfig, type HTMLMotionProps } from 'motion/react';
import Image, { type StaticImageData } from 'next/image';
import { translate } from '@/messages';
import type { Messages, Locale, MessagePath, FaqItem, FaqId } from '@/messages';
import { LanguageSwitcher } from './LanguageSwitcher';
import {
  ArrowRight,
  Plus,
  CalendarCheck,
  GraduationCap,
  Sparkles,
  Clock,
  type LucideIcon,
} from 'lucide-react';
import {
  INSTAGRAM_URL,
  MOBILE_PHONE,
  MOBILE_PHONE_INTL,
  PHONE_DISPLAY,
  GOOGLE_REVIEW_URL,
  GOOGLE_MAPS_EMBED_URL,
  SECTION_ID,
  ADDRESS,
  GOOGLE_MAPS_URL,
  BUSINESS_NAME,
  OPENING_HOURS,
} from '@/lib/constant';
import { createStructuredData } from '@/lib/create-structured-data';
import { getOpeningHoursLines } from '@/lib/opening-hours';

import clinicTreatmentRoom from '@/assets/clinic-treatment-room.webp';
import clinicLogoWall from '@/assets/clinic-logo-wall.webp';
import clinicHallway from '@/assets/clinic-hallway.webp';
import clinicReception from '@/assets/clinic-reception.webp';
import UnaDentalCentarLogo from '@/components/UnaDentalCentarLogo';
import heroClinic from '@/assets/hero-bg.webp';
import teamPlaceholder from '@/assets/team-placeholder.webp';

interface Props {
  translations: Messages;
  locale: Locale;
  url: string;
}

export function Home({ translations: t, locale, url }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { reveal } = MOTION_CONFIG;
  const hoursLines = getOpeningHoursLines(t);

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
              src={heroClinic}
              alt={t.hero.imageAlt}
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="-z-10 object-cover object-center"
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

            <div className="max-w-6xl mx-auto px-6 md:px-10 pt-40 pb-28 md:pt-52 md:pb-36 relative">
              <p className="text-brand-soft/90 text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
                {t.hero.eyebrow}
              </p>

              <h1
                className={[
                  'font-display',
                  'font-light',
                  'text-[11vw]',
                  'md:text-[5.5vw]',
                  'leading-[0.95]',
                  'max-w-4xl',
                ].join(' ')}
              >
                {`${t.hero.headingPrefix} `}
                <br className="hidden md:block" />
                <em className="italic text-brand-soft not-italic-fallback">
                  {t.hero.headingAccent}
                </em>
              </h1>

              <p className="mt-8 text-surface/70 text-base md:text-lg leading-relaxed max-w-xl">
                {t.hero.subheading}
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href={`#${SECTION_ID.book}`}
                  className="px-6 py-3 rounded-full border border-transparent bg-brand text-on-brand text-sm font-medium hover:bg-brand-hover transition-colors"
                >
                  {t.hero.bookAction}
                </a>
                <a
                  href={`tel:${MOBILE_PHONE_INTL}`}
                  className="px-6 py-3 rounded-full border border-surface/30 text-sm hover:border-brand-soft hover:text-brand-soft transition-colors"
                >
                  {translate(t, 'hero.callAction', { phone: PHONE_DISPLAY })}
                </a>
              </div>

              <p className="mt-5 text-surface/50 text-xs md:text-sm">
                {t.hero.note}
              </p>
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

          {/* ===== TRUST BAR ===== */}
          <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-20">
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 border-y border-ink/15 py-10">
              {TRUST_ITEMS.map(({ key, icon: Icon }) => {
                const item = t.trustBar.items[key];
                return (
                  <motion.li
                    key={key}
                    {...reveal}
                    className="flex flex-col gap-3"
                  >
                    <Icon
                      className="w-6 h-6 text-brand"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-display text-lg leading-snug">
                        {item.title}
                      </p>
                      <p className="text-ink-subtle text-sm mt-1">
                        {item.detail}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
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
                      service.wide ? 'border-b md:col-span-2' : '',
                    ].join(' ')}
                  >
                    <h3 className="font-display text-xl">{item.name}</h3>
                    <p className="text-ink-subtle text-sm mt-1">
                      {item.detail}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ===== WHY US ===== */}
          <section
            id={SECTION_ID.whyUs}
            className="bg-brand text-surface py-24 md:py-32"
          >
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <motion.h2
                {...reveal}
                className="font-display text-4xl md:text-5xl font-light mb-14"
              >
                {t.whyUs.heading}
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                {WHY_US.map((key, i) => {
                  const item = t.whyUs.items[key];
                  return (
                    <motion.div
                      key={key}
                      {...reveal}
                      className="border-t border-surface/20 pt-6"
                    >
                      <span
                        aria-hidden="true"
                        className="font-display text-brand-soft text-sm tracking-[0.3em]"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-2xl mt-3 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-surface/70 leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ===== CLINIC / GALLERY ===== */}
          <section className="bg-surface-alt py-24 md:py-32">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <SectionHeading
                heading={t.clinic.heading}
                subheading={t.clinic.subheading}
                reveal={reveal}
              />

              <div
                className={[
                  'grid',
                  'grid-cols-2',
                  'md:grid-cols-3',
                  'md:grid-rows-2',
                  'md:h-160',
                  'gap-4',
                  'md:gap-6',
                ].join(' ')}
              >
                {CLINIC_PHOTOS.map((photo) => (
                  <motion.div
                    key={photo.key}
                    {...reveal}
                    className={[
                      'relative',
                      'rounded-lg',
                      'overflow-hidden',
                      'bg-surface',
                      photo.className,
                    ].join(' ')}
                  >
                    <Image
                      src={photo.image}
                      alt={t.clinic.items[photo.key]}
                      fill
                      sizes={photo.sizes}
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== TEAM ===== */}
          <section
            id={SECTION_ID.team}
            className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
          >
            <motion.h2
              {...reveal}
              className="font-display text-4xl md:text-5xl font-light mb-14"
            >
              {t.team.heading}
            </motion.h2>

            <div className="space-y-20">
              {TEAM.map(({ key, image }) => {
                const member = t.team.members[key];
                return (
                  <motion.article
                    key={key}
                    {...reveal}
                    className="grid md:grid-cols-[2fr_3fr] gap-10 md:gap-14 items-start"
                  >
                    <div className="relative aspect-4/5 rounded-lg overflow-hidden bg-surface-alt">
                      <Image
                        src={image}
                        alt={member.photoAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover object-top"
                      />
                    </div>

                    <div>
                      <h3 className="font-display text-3xl">{member.name}</h3>
                      <p className="text-brand text-sm mt-2 mb-8">
                        {member.role}
                      </p>

                      <div className="space-y-5 text-ink/70 leading-relaxed">
                        {member.bio.map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>

                      {member.quote && (
                        <blockquote
                          className={[
                            'mt-10',
                            'border-l-2',
                            'border-brand',
                            'pl-6',
                            'font-display',
                            'text-xl',
                            'italic',
                            'text-ink/80',
                            'leading-relaxed',
                          ].join(' ')}
                        >
                          {member.quote}
                        </blockquote>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          {/* ===== BOOK / CONTACT ===== */}
          <section
            id={SECTION_ID.book}
            className="bg-ink text-surface py-24 md:py-32"
          >
            <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-14 items-start">
              <motion.div {...reveal}>
                <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
                  {t.book.heading}
                </h2>
                <p className="text-surface/70 text-base md:text-lg leading-relaxed mb-10">
                  {t.book.body}
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
                  {translate(t, 'book.callAction', { phone: PHONE_DISPLAY })}
                </a>

                <dl className="mt-12 border-t border-surface/15 pt-8 grid sm:grid-cols-2 gap-8 text-sm">
                  <div>
                    <dt className="font-display text-lg mb-2">
                      {t.book.addressHeading}
                    </dt>
                    <dd className="text-surface/70">
                      {ADDRESS.street}
                      <br />
                      {ADDRESS.city}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-display text-lg mb-2">
                      {t.book.phoneHeading}
                    </dt>
                    <dd>
                      <a
                        href={`tel:${MOBILE_PHONE_INTL}`}
                        className="text-surface/70 hover:text-brand-soft transition-colors"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-display text-lg mb-2">
                      {t.hours.heading}
                    </dt>
                    <dd className="text-surface/70 space-y-1">
                      {hoursLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </dd>
                  </div>
                </dl>
              </motion.div>

              <motion.div
                {...reveal}
                className="rounded-2xl border border-surface/15 bg-surface/5 p-8 md:p-10"
              >
                <h3 className="font-display text-2xl md:text-3xl font-light mb-4">
                  {t.book.seoHeading}
                </h3>
                <p className="text-surface/70 leading-relaxed">
                  {t.book.seoBody}
                </p>

                <p className="mt-8 mb-3 text-xs tracking-[0.2em] uppercase text-brand-soft">
                  {t.book.areasHeading}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {t.book.areas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-surface/20 px-3 py-1 text-xs text-surface/80"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          {/* ===== FIND US ===== */}
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
                  <p className="text-brand text-sm">{t.location.busStopName}</p>
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
                    src={GOOGLE_MAPS_EMBED_URL}
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
                  href={GOOGLE_MAPS_URL}
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

          {/* ===== REVIEWS ===== */}
          <section
            id={SECTION_ID.reviews}
            className="bg-brand text-surface py-24 md:py-32"
          >
            <motion.div
              {...reveal}
              className="max-w-2xl mx-auto px-6 md:px-10 text-center"
            >
              <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
                {t.reviews.heading}
              </h2>
              <p className="text-surface/70 text-base md:text-lg leading-relaxed mb-10">
                {t.reviews.body}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={GOOGLE_REVIEW_URL}
                  rel="noopener noreferrer"
                  className={[
                    'inline-flex',
                    'items-center',
                    'justify-center',
                    'gap-2',
                    'px-8',
                    'py-3',
                    'rounded-full',
                    'bg-surface',
                    'text-ink',
                    'text-sm',
                    'font-medium',
                    'hover:bg-surface/90',
                    'transition-colors',
                  ].join(' ')}
                >
                  {t.reviews.cta}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={`https://wa.me/${MOBILE_PHONE}?text=${encodeURIComponent(t.reviews.whatsappMessage)}`}
                  rel="noopener noreferrer"
                  className={[
                    'inline-flex',
                    'items-center',
                    'justify-center',
                    'gap-2',
                    'px-8',
                    'py-3',
                    'rounded-full',
                    'border',
                    'border-surface/40',
                    'text-surface',
                    'text-sm',
                    'font-medium',
                    'hover:bg-surface/10',
                    'transition-colors',
                  ].join(' ')}
                >
                  {t.reviews.whatsappCta}
                </a>

                <a
                  href={INSTAGRAM_URL}
                  rel="noopener noreferrer"
                  className={[
                    'inline-flex',
                    'items-center',
                    'justify-center',
                    'gap-2',
                    'px-8',
                    'py-3',
                    'rounded-full',
                    'border',
                    'border-surface/40',
                    'text-surface',
                    'text-sm',
                    'font-medium',
                    'hover:bg-surface/10',
                    'transition-colors',
                  ].join(' ')}
                >
                  {t.reviews.instagramCta}
                </a>
              </div>
            </motion.div>
          </section>

          {/* ===== FAQ ===== */}
          <section
            id={SECTION_ID.faq}
            className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
          >
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
              <motion.div {...reveal} className="lg:sticky lg:top-28">
                <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
                  {t.faqSection.heading}
                </h2>
                <p className="text-ink-subtle text-sm leading-relaxed max-w-xs mb-10">
                  {t.faqSection.subheading}
                </p>
                <p className="text-sm text-ink mb-3">{t.faqSection.ctaText}</p>
                <a
                  href={`tel:${MOBILE_PHONE_INTL}`}
                  className={[
                    'inline-flex',
                    'items-center',
                    'gap-2',
                    'px-5',
                    'py-2.5',
                    'rounded-full',
                    'bg-ink',
                    'text-surface',
                    'text-sm',
                    'hover:bg-brand',
                    'transition-colors',
                  ].join(' ')}
                >
                  {translate(t, 'faqSection.callAction', {
                    phone: PHONE_DISPLAY,
                  })}
                </a>
              </motion.div>

              <div>
                {(Object.keys(t.faqSection.items) as FaqId[]).map((id) => (
                  <FaqAccordionItem
                    key={id}
                    item={t.faqSection.items[id]}
                    reveal={reveal}
                    id={id}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* ===== VISIT / FOOTER ===== */}
        <footer id={SECTION_ID.visit} className="bg-ink text-surface">
          <div
            className={[
              'max-w-6xl',
              'mx-auto',
              'px-6',
              'md:px-10',
              'py-16',
              'md:py-20',
              'grid',
              'gap-12',
              'sm:grid-cols-2',
              'lg:grid-cols-[1.4fr_1fr_1fr_1fr]',
            ].join(' ')}
          >
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="font-display text-2xl">{BUSINESS_NAME}</p>
              <p className="mt-3 text-surface/60 text-sm leading-relaxed max-w-xs">
                {t.footer.tagline}
              </p>
              <a
                href={`tel:${MOBILE_PHONE_INTL}`}
                className={[
                  'mt-6',
                  'inline-flex',
                  'items-center',
                  'gap-2',
                  'px-5',
                  'py-2.5',
                  'rounded-full',
                  'bg-brand',
                  'text-on-brand',
                  'text-sm',
                  'font-medium',
                  'hover:bg-brand-hover',
                  'transition-colors',
                ].join(' ')}
              >
                {translate(t, 'footer.callAction', { phone: PHONE_DISPLAY })}
              </a>
            </div>

            <div>
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-surface mb-4">
                {t.footer.addressHeading}
              </h3>
              <p className="text-surface/60 text-sm leading-relaxed">
                {ADDRESS.street}
                <br />
                {ADDRESS.city}
              </p>
              <a
                href={GOOGLE_MAPS_URL}
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-brand-soft hover:underline"
              >
                {t.footer.openInMaps}
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            <div>
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-surface mb-4">
                {t.hours.heading}
              </h3>
              <ul className="text-surface/60 text-sm space-y-1.5">
                {hoursLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-surface mb-4">
                {t.footer.contactHeading}
              </h3>
              <ul className="text-surface/60 text-sm space-y-1.5">
                <li>
                  <a
                    href={`tel:${MOBILE_PHONE_INTL}`}
                    className="hover:text-surface transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${MOBILE_PHONE}?text=${encodeURIComponent(t.footer.whatsappMessage)}`}
                    rel="noopener noreferrer"
                    className="hover:text-surface transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    rel="noopener noreferrer"
                    className="hover:text-surface transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-surface/10">
            <div
              className={[
                'max-w-6xl',
                'mx-auto',
                'px-6',
                'md:px-10',
                'py-6',
                'flex',
                'flex-col',
                'sm:flex-row',
                'gap-2',
                'items-center',
                'justify-between',
                'text-xs',
                'text-surface/50',
              ].join(' ')}
            >
              <p>{t.footer.copyright}</p>
              <a
                href={`#${SECTION_ID.top}`}
                className="hover:text-surface transition-colors"
              >
                {t.footer.backToTop} ↑
              </a>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}

const NAV_LINKS = [
  { href: `#${SECTION_ID.services}`, key: 'header.nav.services' },
  { href: `#${SECTION_ID.whyUs}`, key: 'header.nav.whyUs' },
  { href: `#${SECTION_ID.team}`, key: 'header.nav.team' },
  { href: `#${SECTION_ID.findUs}`, key: 'header.nav.findUs' },
  { href: `#${SECTION_ID.reviews}`, key: 'header.nav.reviews' },
  { href: `#${SECTION_ID.faq}`, key: 'header.nav.faq' },
  { href: `#${SECTION_ID.visit}`, key: 'header.nav.visit' },
] as const satisfies ReadonlyArray<{
  href: string;
  key: MessagePath;
}>;

const TRUST_ITEMS = [
  { key: 'experience', icon: CalendarCheck },
  { key: 'surgery', icon: GraduationCap },
  { key: 'allInOne', icon: Sparkles },
  { key: 'emergency', icon: Clock },
] as const satisfies ReadonlyArray<{
  key: keyof Messages['trustBar']['items'];
  icon: LucideIcon;
}>;

const SERVICES = [
  { key: 'oralSurgery', wide: false },
  { key: 'implants', wide: false },
  { key: 'cosmetic', wide: false },
  { key: 'prosthetics', wide: false },
  { key: 'restorative', wide: false },
  { key: 'prevention', wide: false },
  { key: 'facialAesthetics', wide: true },
] as const satisfies ReadonlyArray<{
  key: keyof Messages['services']['items'];
  wide: boolean;
}>;

const WHY_US = [
  'individual',
  'allInOne',
  'education',
  'flexible',
] as const satisfies ReadonlyArray<keyof Messages['whyUs']['items']>;

const CLINIC_PHOTOS = [
  {
    key: 'treatmentRoom',
    image: clinicTreatmentRoom,
    className: 'col-span-2 aspect-4/3 md:aspect-auto',
    sizes: '(max-width: 768px) 100vw, 66vw',
  },
  {
    key: 'logoWall',
    image: clinicLogoWall,
    className:
      'col-span-2 aspect-4/3 md:col-span-1 md:col-start-3 md:row-start-1 md:row-span-2 md:aspect-auto',
    sizes: '(max-width: 768px) 100vw, 33vw',
  },
  {
    key: 'hallway',
    image: clinicHallway,
    className: 'aspect-3/4 md:aspect-auto',
    sizes: '(max-width: 768px) 50vw, 33vw',
  },
  {
    key: 'reception',
    image: clinicReception,
    className: 'aspect-3/4 md:aspect-auto',
    sizes: '(max-width: 768px) 50vw, 33vw',
  },
] as const satisfies ReadonlyArray<{
  key: keyof Messages['clinic']['items'];
  image: StaticImageData;
  className: string;
  sizes: string;
}>;

const TEAM = [
  { key: 'abramovic', image: teamPlaceholder },
] as const satisfies ReadonlyArray<{
  key: keyof Messages['team']['members'];
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

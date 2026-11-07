import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { IMAGES } from '../../data/images'

const AUTO_MS = 6500

const SLIDES = [
  {
    id: 1,
    badge: 'Both Volumes · 2026',
    badgeTone: 'orange',
    headingLines: ['Two Books.', 'One Question:', 'Why Are We', 'Here?'],
    subheading:
      'The Constitution of God and A Guidebook for Living and Dying, together for the first time in one store.',
    primaryCta: 'Shop the Set',
    secondaryCta: 'Explore the Books',
    showStars: false,
    layout: 'dual',
    background:
      'linear-gradient(180deg, #121026 0%, #19103b 28%, #3b1e4a 55%, #702e4a 78%, #e67e5f 100%)',
    glow: 'rgba(230,126,95,0.9)',
  },
  {
    id: 2,
    badge: 'New · 2026 Author Edition',
    badgeTone: 'orange',
    headingLines: ['The', 'Constitution', 'of God'],
    subheading:
      "God's original vision for the Kingdom of Heaven on Earth, and America's place in it.",
    primaryCta: 'Buy the Book',
    secondaryCta: 'Read Chapter 1 Free',
    showStars: false,
    layout: 'framed',
    background:
      'linear-gradient(180deg, #0a0e24 0%, #121849 32%, #1a2a6c 58%, #2e3f8f 82%, #5b6fd4 100%)',
    glow: 'rgba(91,111,212,0.75)',
  },
  {
    id: 3,
    badge: 'The Companion Volume',
    badgeTone: 'orange',
    headingLines: ['A Guidebook', 'for Living', 'and Dying'],
    subheading:
      "Life's purpose, the meaning of death, and what may await beyond physical existence.",
    primaryCta: 'Shop the Guidebook',
    secondaryCta: 'Read a Sample',
    showStars: false,
    layout: 'single',
    cover: 'guidebook',
    background:
      'linear-gradient(180deg, #1a120c 0%, #3a2418 30%, #6b3d22 55%, #a85c2e 78%, #e8a05a 100%)',
    glow: 'rgba(232,160,90,0.85)',
  },
  {
    id: 4,
    badge: 'Limited Run',
    badgeTone: 'orange',
    headingLines: ['Signed &', 'Collector', 'Editions'],
    subheading:
      'Front, spine and back, signed and inscribed by Mark. Reserve yours before the run closes.',
    primaryCta: 'Reserve a Copy',
    secondaryCta: 'See the Details',
    showStars: false,
    layout: 'jacket',
    background:
      'linear-gradient(180deg, #0c0c0c 0%, #1a1218 28%, #3d1528 55%, #7a1f3d 78%, #c44b3c 100%)',
    glow: 'rgba(196,75,60,0.85)',
  },
]

const slideVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -14 },
}

function CoverEmblem({ className = '' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`relative z-[1] h-10 w-10 text-[#ff8b52] sm:h-12 sm:w-12 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M32 8v12M32 44v12M8 32h12M44 32h12M16.5 16.5l8.5 8.5M39 39l8.5 8.5M47.5 16.5 39 25M25 39l-8.5 8.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ConstitutionCover({
  className = '',
  bordered = false,
  eyebrow = 'The Author Edition',
  showEmblem = false,
}) {
  return (
    <div
      className={`relative flex aspect-[2/3] flex-col items-center justify-between overflow-hidden bg-[#131349] px-5 py-7 text-center drop-shadow-2xl sm:px-6 sm:py-8 ${
        bordered ? 'border-[1.5px] border-[#ff8b52]' : ''
      } ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-3 border border-[#ff8b52]/40"
        aria-hidden="true"
      />
      <p className="relative z-[1] font-condensed text-[10px] uppercase tracking-[0.28em] text-[#ff8b52] sm:text-[11px]">
        {eyebrow}
      </p>
      {showEmblem ? (
        <div className="relative z-[1] flex flex-1 flex-col items-center justify-center gap-5">
          <CoverEmblem />
          <h3 className="font-condensed text-[1.55rem] uppercase leading-[0.9] tracking-[0.04em] text-white sm:text-[1.85rem] md:text-[2rem]">
            The
            <br />
            Constitution
            <br />
            of God
          </h3>
        </div>
      ) : (
        <h3 className="relative z-[1] font-condensed text-[1.65rem] uppercase leading-[0.92] tracking-[0.04em] text-white sm:text-[2rem] md:text-[2.15rem]">
          The
          <br />
          Constitution
          <br />
          of God
        </h3>
      )}
      <p className="relative z-[1] font-condensed text-[11px] uppercase tracking-[0.28em] text-[#ff8b52] sm:text-xs">
        Mark H. Steffen
      </p>
    </div>
  )
}

function GuidebookCover({
  className = '',
  eyebrow = 'Companion Volume',
}) {
  return (
    <div
      className={`relative flex aspect-[2/3] flex-col items-center justify-between overflow-hidden bg-[#fcf4cf] px-5 py-7 text-center drop-shadow-2xl sm:px-6 sm:py-8 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-3 border border-pure-black/10"
        aria-hidden="true"
      />
      <p className="relative z-[1] font-condensed text-[10px] uppercase tracking-[0.28em] text-pure-black/50 sm:text-[11px]">
        {eyebrow}
      </p>
      <h3 className="relative z-[1] font-condensed text-[1.45rem] font-normal uppercase leading-[0.92] tracking-[0.03em] text-pure-black sm:text-[1.7rem] md:text-[1.85rem]">
        A Guidebook
        <br />
        for Living
        <br />
        and Dying
      </h3>
      <p className="relative z-[1] font-condensed text-[11px] uppercase tracking-[0.28em] text-pure-black/65 sm:text-xs">
        Mark H. Steffen
      </p>
    </div>
  )
}

function BookCover({
  variant = 'constitution',
  className = '',
  bordered = false,
  eyebrow,
  showEmblem = false,
}) {
  if (variant === 'guidebook') {
    return <GuidebookCover className={className} eyebrow={eyebrow} />
  }
  return (
    <ConstitutionCover
      className={className}
      bordered={bordered}
      eyebrow={eyebrow}
      showEmblem={showEmblem}
    />
  )
}

function FramedBook() {
  return (
    <div className="relative mx-auto w-full max-w-[260px] pb-6 sm:max-w-[300px] lg:max-w-[340px]">
      <div className="relative z-[1] rotate-[4deg]">
        <img
          src={IMAGES.constitutionHero1}
          alt="The Constitution of God"
          className="aspect-[2/3] w-full rounded-sm object-cover shadow-2xl"
        />
      </div>
      <div className="absolute -bottom-2 -right-2 z-10 flex h-[5.75rem] w-[5.75rem] items-center justify-center rounded-full bg-white p-2.5 text-center shadow-xl sm:-right-3 sm:h-24 sm:w-24">
        <span className="font-condensed text-[10px] uppercase leading-[1.05] tracking-[0.06em] text-[#121026] sm:text-[11px]">
          Signed Copies Available
        </span>
      </div>
    </div>
  )
}

function JacketSpread() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-xl">
      <img
        src={IMAGES.revisedBookHero4}
        alt="Signed and collector revised book jacket"
        className="w-full rounded-sm object-contain shadow-2xl"
      />
    </div>
  )
}

function SlideVisual({ slide }) {
  if (slide.layout === 'dual') {
    return (
      <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
        <div className="relative flex items-end justify-center">
          <img
            src={IMAGES.guidebookHero1}
            alt="A Guidebook for Living and Dying"
            className="z-10 w-[48%] -rotate-6 rounded-sm object-cover shadow-2xl"
          />
          <img
            src={IMAGES.constitutionHero1}
            alt="The Constitution of God"
            className="z-20 -ml-10 w-[52%] translate-y-2 rotate-3 rounded-sm object-cover shadow-2xl sm:-ml-12"
          />
        </div>
      </div>
    )
  }

  if (slide.layout === 'framed') {
    return <FramedBook />
  }

  if (slide.layout === 'jacket') {
    return <JacketSpread />
  }

  return (
    <div className="mx-auto w-full max-w-[250px] sm:max-w-[290px] lg:max-w-[320px]">
      <div className="rotate-[3deg]">
        <img
          src={
            slide.cover === 'guidebook'
              ? IMAGES.guidebookHero1
              : IMAGES.constitutionHero1
          }
          alt={
            slide.cover === 'guidebook'
              ? 'A Guidebook for Living and Dying'
              : 'The Constitution of God'
          }
          className="aspect-[2/3] w-full rounded-sm object-cover shadow-2xl"
        />
      </div>
    </div>
  )
}

function StarRow() {
  return (
    <p className="mt-6 font-sans text-sm text-[#d8a48f]">
      <span className="tracking-[0.12em] text-[#ff8b52]">★★★★★</span>
      <span className="ml-2 text-[#d8a48f]/90">
        [ 0.0 ] from [ n ] reader reviews
      </span>
    </p>
  )
}

function BlackRidge() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 leading-[0]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="block h-[90px] w-full sm:h-[120px] lg:h-[150px]"
      >
        <path
          d="M0 110 L180 70 L340 105 L520 55 L720 95 L920 48 L1120 88 L1280 62 L1440 78 L1440 160 L0 160 Z"
          className="fill-[#000000]"
        />
        <path
          d="M0 125 L140 92 L280 118 L450 68 L620 112 L800 58 L980 108 L1160 72 L1320 102 L1440 88 L1440 160 L0 160 Z"
          className="fill-[#000000]"
        />
        <path
          d="M0 138 L160 112 L300 132 L470 98 L640 128 L820 90 L1000 124 L1180 104 L1340 122 L1440 110 L1440 160 L0 160 Z"
          className="fill-[#000000]"
        />
      </svg>
    </div>
  )
}

function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const total = SLIDES.length
  const slide = SLIDES[index]

  const goTo = useCallback(
    (nextIndex) => {
      setIndex(((nextIndex % total) + total) % total)
    },
    [total],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (!isPlaying) return undefined
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, AUTO_MS)
    return () => window.clearInterval(timer)
  }, [isPlaying, total, index])

  return (
    <section
      className="relative isolate mb-0 min-h-[88svh] overflow-hidden pb-0 lg:min-h-[92svh]"
      aria-roledescription="carousel"
      aria-label="Featured collections"
    >
      <div
        className="absolute inset-0 -z-10 transition-[background] duration-700 ease-out"
        style={{ background: slide.background }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55%] transition-[background] duration-700 ease-out"
        style={{
          background: `radial-gradient(ellipse 100% 70% at 50% 100%, ${slide.glow}, transparent 58%)`,
        }}
      />

      <BlackRidge />

      <div className="relative z-30 mx-auto flex min-h-[88svh] max-w-7xl flex-col px-4 pb-28 pt-10 sm:px-6 sm:pb-32 lg:min-h-[92svh] lg:px-8 lg:pb-36 lg:pt-14">
        <div className="flex flex-1 flex-col justify-center py-6 sm:py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
            >
              <div className="order-2 text-center lg:order-1 lg:text-left">
                {slide.badge && (
                  <span
                    className={`mb-6 inline-flex rounded-full px-4 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] ${
                      slide.badgeTone === 'white'
                        ? 'bg-[#ff8b52] text-white'
                        : 'bg-[#ff8b52] text-[#121026]'
                    }`}
                  >
                    {slide.badge}
                  </span>
                )}

                <h1 className="font-condensed text-[3.75rem] font-normal uppercase leading-[0.84] tracking-[0.01em] text-white sm:text-7xl md:text-8xl lg:text-[6.75rem]">
                  {slide.headingLines
                    ? slide.headingLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))
                    : slide.heading}
                </h1>

                {slide.subheading && (
                  <p className="mx-auto mt-6 max-w-md font-serif text-[1.05rem] italic leading-[1.45] text-[#f5ead6] sm:text-xl md:text-[1.35rem] lg:mx-0 lg:max-w-lg">
                    {slide.subheading}
                  </p>
                )}

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3.5 lg:justify-start">
                  <button
                    type="button"
                    className="rounded-full bg-[#ff8b52] px-8 py-3.5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#121026] transition hover:brightness-110"
                  >
                    {slide.primaryCta}
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-white bg-transparent px-8 py-3.5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
                  >
                    {slide.secondaryCta}
                  </button>
                </div>

                {slide.showStars && <StarRow />}
              </div>

              <div className="order-1 lg:order-2">
                <SlideVisual slide={slide} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative mt-10 flex items-center justify-between gap-4 sm:mt-12">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              className="flex aspect-square h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="flex aspect-square h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              onClick={() => setIsPlaying((playing) => !playing)}
              className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 font-sans text-sm uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </div>

          <div
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 sm:flex"
            role="tablist"
            aria-label="Slides"
          >
            {SLIDES.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-8 bg-brand-orange'
                    : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <p className="font-sans text-sm tracking-widest text-white/80 tabular-nums">
            {index + 1} / {total}
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { IMAGES } from '../../data/images'

const FEATURES = [
  'Numbered and signed by the author',
  'Personal inscription at checkout',
  'Reserved before it sells out, [ edition size ] copies',
]

function CollectorCover() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]">
      <div
        className="pointer-events-none absolute -inset-8 rounded-full bg-brand-orange/20 blur-3xl"
        aria-hidden="true"
      />
      <img
        src={IMAGES.constitutionHero1}
        alt="The Constitution of God — Collector's Edition"
        className="relative aspect-[2/3] w-full rounded-sm object-cover shadow-[0_30px_80px_rgba(255,88,51,0.28)]"
      />
    </div>
  )
}

function SignedCollector() {
  const { addItem } = useCart()

  return (
    <section className="bg-[#180c3c]">
      {/* Part 1 — full-bleed: books on top, white price below */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* TOP — full-width books */}
        <div className="relative flex min-h-[70svh] w-full items-center justify-center bg-gradient-to-b from-[#2a1f45] via-[#1c1533] to-[#180c3c] px-6 py-16 sm:min-h-[75svh] sm:px-10 sm:py-20 lg:min-h-[80svh]">
          <span className="absolute left-4 top-4 z-20 rounded-full bg-[#f4b89a] px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#1a1a1a] sm:left-8 sm:top-8 sm:px-5 sm:py-2">
            Save 15%
          </span>

          <button
            type="button"
            aria-label="Save The Complete Signed Set to wishlist"
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:text-brand-orange sm:right-8 sm:top-8 sm:h-11 sm:w-11"
          >
            <Heart size={18} strokeWidth={1.6} className="text-[#1a1a1a]" />
          </button>

          <div className="relative flex h-[340px] w-full max-w-md items-center justify-center sm:h-[420px] sm:max-w-lg lg:h-[480px] lg:max-w-xl">
            <img
              src={IMAGES.guidebookHero1}
              alt="A Guidebook for Living and Dying"
              className="absolute left-[6%] top-[4%] z-0 w-[46%] -rotate-[8deg] rounded-sm object-cover shadow-2xl sm:left-[8%]"
            />
            <img
              src={IMAGES.constitutionHero1}
              alt="The Constitution of God"
              className="absolute right-[4%] top-[10%] z-10 w-[50%] rotate-[5deg] rounded-sm object-cover shadow-2xl sm:right-[6%]"
            />
          </div>
        </div>

        {/* BOTTOM — full-width white price section */}
        <div className="w-full bg-white">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <Link to="/product/1">
              <h2 className="font-condensed text-4xl font-bold uppercase leading-[0.95] tracking-[0.02em] text-[#1a1a1a] transition hover:text-brand-orange sm:text-5xl md:text-6xl">
                The Complete Signed Set
              </h2>
            </Link>

            <p className="mt-3 font-sans text-base font-medium text-gray-500 sm:text-lg">
              Both volumes · Signed & inscribed
            </p>

            <p className="mt-4 font-sans text-sm text-gray-500 sm:text-base">
              <span className="tracking-[0.08em] text-[#1a1a1a]">★★★★★</span>
              <span className="ml-2 text-gray-400">[ n ]</span>
            </p>

            <p className="mt-5 font-sans text-4xl font-bold text-[#1a1a1a] sm:text-5xl">
              $71.00
            </p>

            <button
              type="button"
              onClick={() =>
                addItem({
                  id: 'complete-signed-set',
                  productId: 'complete-signed-set',
                  title: 'The Complete Signed Set',
                  price: 71,
                  image: IMAGES.bothMockup,
                  meta: 'Both volumes · Signed & inscribed',
                })
              }
              className="mt-8 w-full max-w-md rounded-full bg-black py-4 font-sans text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-brand-orange sm:mt-10"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>

      {/* Part 2 — Signed & Collector Editions (same navy band) */}
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <CollectorCover />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">
            Limited Run · Reserve Yours
          </p>

          <h2 className="mt-4 max-w-xl font-condensed text-5xl font-bold uppercase leading-[0.92] tracking-[0.02em] text-[#f5f0ea] sm:text-6xl lg:text-7xl">
            Signed & Collector Editions
          </h2>

          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-[#f5f0ea]/70 sm:text-lg">
            A hardcover worth keeping: numbered, signed and inscribed by Mark,
            shipped with a personal note. Concept shown, final binding,
            materials and run size to be confirmed with Mark.
          </p>

          <ul className="mt-8 space-y-3">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 font-sans text-sm text-[#f5f0ea]/85 sm:text-base"
              >
                <span
                  className="mt-1.5 inline-block h-1.5 w-1.5 rotate-45 bg-[#f5f0ea]"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-5 sm:gap-6">
            <button
              type="button"
              className="rounded-full bg-brand-orange px-8 py-3.5 font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#180c3c] transition hover:brightness-110"
            >
              Reserve a Copy
            </button>
            <p className="font-condensed text-4xl font-bold tracking-tight text-[#f5f0ea] sm:text-5xl">
              $00.00
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SignedCollector

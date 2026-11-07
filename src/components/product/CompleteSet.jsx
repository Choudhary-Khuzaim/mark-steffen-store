import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { IMAGES } from '../../data/images'

const BUNDLE_PRICE = 80
const SAVE_AMOUNT = 12

function BookTile({ src, caption }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="aspect-[2/3] w-full max-w-[160px] overflow-hidden bg-[#180c3c] drop-shadow-xl sm:max-w-[180px]">
        <img
          src={src}
          alt={caption}
          className="h-full w-full object-contain object-center"
          loading="lazy"
        />
      </div>
      <p className="mt-3 max-w-[160px] font-condensed text-sm uppercase tracking-tight text-pure-black sm:text-base">
        {caption}
      </p>
    </div>
  )
}

function CompleteSet() {
  return (
    <section className="border-t border-pure-black/10 bg-cream-bg py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-condensed text-4xl uppercase tracking-tight text-pure-black sm:text-5xl">
            Complete the Set
          </h2>
          <p className="mt-3 max-w-md text-sm text-pure-black/55 sm:text-base">
            Pair The Constitution of God with its companion guide and save.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 sm:justify-start sm:gap-6">
            <BookTile
              src={IMAGES.constitutionHero1}
              caption="The Constitution of God"
            />
            <Plus
              className="h-7 w-7 shrink-0 text-brand-orange"
              strokeWidth={2}
            />
            <BookTile
              src={IMAGES.guidebookHero1}
              caption="A Guidebook for Living and Dying"
            />
          </div>
        </motion.div>

        <motion.aside
          className="rounded-none bg-pure-black p-6 text-white sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-condensed text-lg uppercase tracking-wide text-brand-orange sm:text-xl">
            Both Together — Save ${SAVE_AMOUNT}
          </p>
          <p className="mt-3 font-condensed text-5xl tracking-tight sm:text-6xl">
            ${BUNDLE_PRICE.toFixed(2)}
          </p>
          <button
            type="button"
            className="mt-8 w-full rounded-none bg-brand-orange py-4 font-condensed text-xl uppercase tracking-wide text-white transition hover:bg-white hover:text-pure-black"
          >
            Add Both to Cart
          </button>
        </motion.aside>
      </div>
    </section>
  )
}

export default CompleteSet

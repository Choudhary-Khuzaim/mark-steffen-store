import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const REVIEWS = [
  {
    id: 1,
    quote: '[ This reframed how I read both scripture and the Constitution. ]',
    author: '[ A. Rivera ]',
  },
  {
    id: 2,
    quote: '[ Clear, bold, and impossible to put down. Mark writes with conviction. ]',
    author: '[ J. Hale ]',
  },
  {
    id: 3,
    quote: '[ A book I’ll return to whenever the world feels noisy. ]',
    author: '[ M. Okonkwo ]',
  },
]

function Reviews() {
  return (
    <section className="bg-cream-bg py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-10 text-center font-condensed text-5xl uppercase leading-none tracking-tight text-pure-black sm:mb-12 sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Reader Reviews
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {REVIEWS.map((review, index) => (
            <motion.article
              key={review.id}
              className="border border-pure-black/10 bg-white p-6 sm:p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className="flex items-center gap-0.5"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-brand-orange text-brand-orange"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <p className="mt-5 font-display text-xl leading-snug tracking-[0.03em] text-pure-black sm:text-2xl">
                {review.quote}
              </p>
              <p className="mt-6 font-display text-sm tracking-[0.12em] text-pure-black/50">
                {review.author}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews

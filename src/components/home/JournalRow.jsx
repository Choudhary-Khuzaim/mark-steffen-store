import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const POSTS = [
  {
    id: 1,
    date: 'Oct 24, 2026',
    dateTime: '2026-10-24',
    title: 'The origins of the Constitution of God',
    image: 'journal-constitution.webp',
  },
  {
    id: 2,
    date: 'Oct 12, 2026',
    dateTime: '2026-10-12',
    title: 'Why a guidebook for living and dying?',
    image: 'journal-guidebook.webp',
  },
  {
    id: 3,
    date: 'Sep 28, 2026',
    dateTime: '2026-09-28',
    title: 'Notes from the signed edition desk',
    image: 'journal-signed.webp',
  },
]

function JournalRow() {
  return (
    <section className="bg-ink-black py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-10 text-center font-display text-3xl font-bold uppercase tracking-[0.18em] text-warm-paper sm:mb-14 sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Latest Dispatches
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              className="group flex flex-col"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative aspect-video overflow-hidden border border-warm-paper/10 bg-gradient-to-br from-indigo-deep via-ink-black to-ember-orange/10">
                <div
                  className="absolute inset-0 opacity-40 transition duration-500 group-hover:opacity-60"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 70% 30%, rgba(255,90,31,0.2), transparent 45%)',
                  }}
                />
                <span className="absolute inset-x-4 bottom-4 text-center font-display text-[10px] uppercase tracking-[0.18em] text-warm-paper/40">
                  {post.image}
                </span>
              </div>

              <time
                dateTime={post.dateTime}
                className="mt-4 font-display text-[11px] uppercase tracking-[0.2em] text-ember-orange"
              >
                {post.date}
              </time>
              <h3 className="mt-2 font-display text-lg font-semibold uppercase leading-snug tracking-wide text-warm-paper transition group-hover:text-ember-orange sm:text-xl">
                {post.title}
              </h3>
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 self-start font-display text-xs uppercase tracking-[0.2em] text-warm-paper/70 transition hover:text-ember-orange"
              >
                Read More
                <ArrowRight
                  className="h-3.5 w-3.5 transition group-hover:translate-x-1"
                  strokeWidth={1.75}
                />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalRow

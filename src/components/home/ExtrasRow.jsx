import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Bookmark, Coffee, Shirt } from 'lucide-react'
import { IMAGES } from '../../data/images'

const GIFTS = [
  {
    id: 1,
    title: 'Reflection Journal',
    subtext: 'Guided prompts from the book',
    price: 0,
    icon: BookOpen,
    panel: 'bg-[#180c3c]',
    iconClass: 'text-[#fc783c]',
  },
  {
    id: 2,
    title: 'Statement Tee',
    subtext: 'Sizes S to 3XL',
    price: 0,
    icon: Shirt,
    panel: 'bg-[#c04824]',
    iconClass: 'text-white',
  },
  {
    id: 3,
    title: 'Ceramic Mug',
    subtext: '11 oz',
    price: 0,
    icon: Coffee,
    panel: 'bg-[#0c0c0c]',
    iconClass: 'text-[#fc783c]',
  },
  {
    id: 4,
    title: 'Bookmark Set',
    subtext: 'Pack of 4',
    price: 0,
    icon: Bookmark,
    panel: 'bg-[#fcfcfc]',
    iconClass: 'text-[#1a1a1a]',
  },
]

const PROJECTS = [
  { id: 1, label: 'Audiobook Narration', progress: 75 },
  { id: 2, label: 'Signed Edition Prep', progress: 40 },
  { id: 3, label: 'Next Essay Draft', progress: 90 },
]

const DISPATCHES = [
  {
    id: 1,
    label: 'Essay',
    title: 'The origins of the Constitution of God',
    image: IMAGES.constitutionHero1,
    fit: 'contain',
  },
  {
    id: 2,
    label: 'Event',
    title: 'Signed edition desk notes',
    image: IMAGES.bothMockup,
    fit: 'contain',
  },
  {
    id: 3,
    label: 'Essay',
    title: 'Why a guidebook for living and dying?',
    image: IMAGES.guidebookHero1,
    fit: 'contain',
  },
]

function ExtrasRow() {
  return (
    <section className="bg-cream-bg">
      {/* Journals, Gifts & Apparel — beige band from mockup */}
      <div className="bg-[#e4d8c0] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-condensed text-5xl font-bold uppercase leading-[0.88] tracking-[0.02em] text-[#1a1a1a] sm:text-6xl md:text-7xl">
              Journals, Gifts & Apparel
            </h2>
            <button
              type="button"
              className="w-fit shrink-0 rounded-full border border-[#1a1a1a] bg-transparent px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#1a1a1a] transition hover:bg-[#1a1a1a] hover:text-white sm:text-sm"
            >
              Shop All
            </button>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {GIFTS.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.id}
                  className="flex flex-col overflow-hidden rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div
                    className={`relative flex aspect-square items-center justify-center ${item.panel}`}
                  >
                    <Icon
                      size={56}
                      strokeWidth={1.4}
                      className={item.iconClass}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-1 flex-col bg-white px-5 py-5">
                    <h3 className="font-condensed text-2xl font-bold uppercase leading-[0.95] tracking-[0.02em] text-[#1a1a1a] sm:text-[1.65rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm font-normal text-gray-500">
                      {item.subtext}
                    </p>
                    <p className="mt-3 font-sans text-2xl font-bold text-[#1a1a1a]">
                      $
                      {item.price.toFixed(2).padStart(5, '0')}
                    </p>
                    <button
                      type="button"
                      className="mt-5 w-full rounded-full bg-black py-3.5 font-sans text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-brand-orange"
                    >
                      Add to Cart
                    </button>
                  </div>
                </motion.article>
              )
            })}
          </div>

          <p className="mt-8 text-center font-sans text-sm text-[#1a1a1a]/45 sm:mt-10">
            Gift and apparel lineup is a placeholder pending Mark&apos;s merch
            and specialty-product selection.
          </p>
        </div>
      </div>

      {/* Progress + Journal */}
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:space-y-20 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            className="rounded-lg bg-[#121212] p-6 text-white sm:p-8"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#fc783c]">
              Mark&apos;s Progress
            </p>
            <h2 className="mt-3 font-condensed text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              On The Desk Right Now
            </h2>

            <ul className="mt-8 space-y-7">
              {PROJECTS.map((project, index) => (
                <li key={project.id}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="font-condensed text-sm uppercase tracking-wide sm:text-base">
                      {project.label}
                    </span>
                    <span className="font-condensed text-sm text-brand-orange tabular-nums">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden bg-white/15">
                    <motion.div
                      className="h-full bg-brand-orange"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.1 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <div>
            <h2 className="mb-5 font-condensed text-3xl font-bold uppercase tracking-tight text-pure-black sm:text-4xl">
              Latest From The Journal
            </h2>
            <div className="grid items-start gap-3 sm:grid-cols-3 sm:gap-4">
              {DISPATCHES.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="group relative flex aspect-[2/3] w-full flex-col justify-end overflow-hidden bg-[#121026]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <img
                      src={post.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-pure-black/55 to-transparent" />
                    <div className="relative z-10 p-4 sm:p-5">
                      <p className="font-condensed text-xs uppercase tracking-[0.16em] text-white/70">
                        {post.label}
                      </p>
                      <h3 className="mt-2 font-condensed text-xl font-bold uppercase leading-tight tracking-tight text-white sm:text-lg lg:text-xl">
                        {post.title}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-[0.14em] text-white/80 transition group-hover:text-white">
                        Read
                        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtrasRow

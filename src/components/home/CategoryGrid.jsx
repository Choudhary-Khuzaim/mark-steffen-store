import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, FileText, Gift, Headphones, Shirt, Star } from 'lucide-react'

const CATEGORIES = [
  {
    id: 'books',
    label: 'Books',
    subtext: 'Hardcover & paperback',
    to: '/product/1',
    icon: BookOpen,
    bg: 'bg-[#180c3c]',
    title: 'text-white',
    sub: 'text-white/65',
    iconClass: 'text-white',
  },
  {
    id: 'signed',
    label: 'Signed & Collector',
    subtext: 'Inscribed & limited',
    to: '/product/1',
    icon: Star,
    bg: 'bg-[#c04824]',
    title: 'text-pure-black',
    sub: 'text-pure-black/70',
    iconClass: 'text-pure-black',
  },
  {
    id: 'audiobooks',
    label: 'Audiobooks',
    subtext: 'Listen to a sample',
    to: '/product/1',
    icon: Headphones,
    bg: 'bg-[#303030]',
    title: 'text-white',
    sub: 'text-white/65',
    iconClass: 'text-white',
  },
  {
    id: 'journals',
    label: 'Journals & Study',
    subtext: 'For groups & reflection',
    to: '/product/1',
    icon: FileText,
    bg: 'bg-[#e4d8c0]',
    title: 'text-pure-black',
    sub: 'text-pure-black/60',
    iconClass: 'text-pure-black',
  },
  {
    id: 'apparel',
    label: 'Apparel & Gifts',
    subtext: 'Tees, mugs, keepsakes',
    to: '/product/1',
    icon: Shirt,
    bg: 'bg-[#fcfcfc]',
    title: 'text-pure-black',
    sub: 'text-pure-black/55',
    iconClass: 'text-pure-black',
  },
  {
    id: 'bundles',
    label: 'Bundles',
    subtext: 'Build a set & save',
    to: '/product/1',
    icon: Gift,
    bg: 'bg-[#fc783c]',
    title: 'text-pure-black',
    sub: 'text-pure-black/70',
    iconClass: 'text-pure-black',
  },
]

function CategoryGrid() {
  return (
    <section className="bg-cream-bg py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-8 text-left font-condensed text-4xl font-normal uppercase leading-none tracking-[0.04em] text-pure-black sm:mb-10 sm:text-5xl md:text-[3.25rem]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Shop By Category
        </motion.h2>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  to={category.to}
                  className={`group relative flex aspect-square flex-col justify-between rounded-lg p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 ${category.bg}`}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.6}
                    className={`shrink-0 ${category.iconClass}`}
                    aria-hidden="true"
                  />
                  <div className="pr-1">
                    <h3
                      className={`font-condensed text-[1.65rem] font-normal uppercase leading-[0.95] tracking-[0.03em] sm:text-[1.85rem] ${category.title}`}
                    >
                      {category.label}
                    </h3>
                    <p
                      className={`mt-1.5 font-sans text-[13px] font-normal leading-snug tracking-normal sm:text-sm ${category.sub}`}
                    >
                      {category.subtext}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid

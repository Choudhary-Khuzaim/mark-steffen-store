import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { IMAGES } from '../../data/images'

const FILTERS = ['All', 'Books', 'Audio', 'Sets']

const PRODUCTS = [
  {
    id: 1,
    title: 'The Constitution of God',
    subtext: 'Hardcover · 2026 Author Edition',
    price: 50,
    rating: 'n',
    category: 'Books',
    badge: 'New',
    frame: 'bg-gradient-to-b from-[#1a1140] to-[#0b031b]',
    cover: 'constitution',
    image: IMAGES.constitutionHero1,
    to: '/product/1',
  },
  {
    id: 2,
    title: 'The Constitution of God, Signed',
    subtext: 'Hardcover · Inscribed by the author',
    price: 65,
    rating: 'n',
    category: 'Books',
    badge: 'Signed',
    frame: 'bg-gradient-to-br from-[#c04824] to-[#6e2c30]',
    cover: 'constitution',
    image: IMAGES.constitutionHero1,
    to: '/product/1',
  },
  {
    id: 3,
    title: 'A Guidebook for Living and Dying',
    subtext: 'Paperback',
    price: 24,
    rating: 'n',
    category: 'Books',
    badge: 'Companion',
    frame: 'bg-gradient-to-b from-[#e4d8c0] to-[#d3c8b2]',
    cover: 'guidebook',
    image: IMAGES.guidebookHero1,
    to: '/product/2',
  },
  {
    id: 4,
    title: 'The Complete Signed Set',
    subtext: 'Both volumes · Signed & inscribed',
    price: 71,
    rating: 'n',
    category: 'Sets',
    badge: 'Save [%]',
    frame: 'bg-gradient-to-b from-[#1a1140] to-[#0b031b]',
    cover: 'set',
    image: IMAGES.bothMockup,
    to: '/',
  },
]

function ProductCover({ type }) {
  if (type === 'set') {
    return (
      <div className="relative mx-auto flex h-[200px] w-[160px] items-center justify-center">
        <img
          src={IMAGES.guidebookHero1}
          alt=""
          className="absolute left-0 top-3 z-0 w-[48%] -rotate-6 rounded-sm object-cover shadow-xl"
        />
        <img
          src={IMAGES.constitutionHero1}
          alt=""
          className="relative z-10 ml-8 w-[54%] rotate-3 rounded-sm object-cover shadow-xl"
        />
      </div>
    )
  }

  if (type === 'guidebook') {
    return (
      <div className="mx-auto w-[130px] sm:w-[145px]">
        <img
          src={IMAGES.guidebookHero1}
          alt="A Guidebook for Living and Dying"
          className="aspect-[2/3] w-full rounded-sm object-cover shadow-xl"
        />
      </div>
    )
  }

  return (
    <div className="mx-auto w-[130px] sm:w-[145px]">
      <img
        src={IMAGES.constitutionHero1}
        alt="The Constitution of God"
        className="aspect-[2/3] w-full rounded-sm object-cover shadow-xl"
      />
    </div>
  )
}

function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState('All')
  const { addItem } = useCart()

  const visibleProducts =
    activeFilter === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeFilter)

  return (
    <section className="bg-cream-bg py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-left font-condensed text-4xl font-normal uppercase leading-none tracking-[0.04em] text-pure-black sm:text-5xl md:text-[3.25rem]">
            Start With These
          </h2>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => {
              const active = activeFilter === filter
              return (
                <button
                  type="button"
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-2 font-sans text-sm font-medium transition ${
                    active
                      ? 'bg-black text-white'
                      : 'border border-black/80 bg-white text-pure-black hover:bg-black/5'
                  }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {visibleProducts.map((product, index) => (
            <motion.article
              key={product.id}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className={`relative flex min-h-[260px] items-center justify-center px-8 py-10 sm:min-h-[280px] ${product.frame}`}
              >
                <span className="absolute left-3 top-3 rounded-[3px] bg-pure-black px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                  {product.badge}
                </span>

                <button
                  type="button"
                  aria-label={`Save ${product.title} to wishlist`}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:text-brand-orange"
                >
                  <Heart size={16} strokeWidth={1.6} className="text-pure-black" />
                </button>

                <ProductCover type={product.cover} />
              </div>

              <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
                <Link to={product.to}>
                  <h3 className="font-condensed text-[1.35rem] font-normal uppercase leading-[1.05] tracking-[0.02em] text-pure-black transition hover:text-brand-orange">
                    {product.title}
                  </h3>
                </Link>

                <p className="mt-2 font-sans text-sm font-normal text-gray-500">
                  {product.subtext}
                </p>

                <p className="mt-3 font-sans text-sm text-gray-500">
                  <span className="tracking-[0.08em] text-pure-black">★★★★★</span>
                  <span className="ml-2 text-gray-400">[ {product.rating} ]</span>
                </p>

                <p className="mt-3 font-sans text-2xl font-bold text-pure-black">
                  ${product.price.toFixed(2)}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    addItem({
                      id: `grid-${product.id}`,
                      productId: String(product.id),
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      meta: product.subtext,
                    })
                  }
                  className="mt-5 w-full rounded-full bg-black py-3.5 font-sans text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-brand-orange"
                >
                  Add to Cart
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {visibleProducts.length === 0 && (
          <p className="py-16 text-center font-sans text-sm text-gray-500">
            No products in this filter yet.
          </p>
        )}
      </div>
    </section>
  )
}

export default ProductGrid

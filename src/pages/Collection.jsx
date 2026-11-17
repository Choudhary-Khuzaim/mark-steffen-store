import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Heart,
  Lock,
  Package,
  Star,
  Truck,
} from 'lucide-react'
import { useCart } from '../context/CartContext'
import { getCollection, getCollectionItems } from '../data/catalog'

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
]

const PROMISES = [
  { icon: Truck, title: 'Free shipping', body: 'Orders over $75' },
  { icon: Package, title: 'Ships in 2–4 days', body: 'From the U.S.' },
  { icon: Lock, title: 'Secure checkout', body: 'Shop Pay & cards' },
]

function Collection() {
  const { slug } = useParams()
  const collection = getCollection(slug)
  const items = getCollectionItems(slug)
  const { addItem } = useCart()
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    setFilter('All')
    setSort('featured')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  const filters = collection?.filters?.length ? collection.filters : ['All']
  const featured = items[0]
  const startingAt = useMemo(() => {
    if (!items.length) return null
    return Math.min(...items.map((item) => item.price))
  }, [items])

  const visibleItems = useMemo(() => {
    let next =
      filter === 'All'
        ? [...items]
        : items.filter((item) => item.format === filter)

    if (sort === 'price-asc') {
      next.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      next.sort((a, b) => b.price - a.price)
    }

    return next
  }, [items, filter, sort])

  if (!collection) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="bg-cream-bg">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#180c3c] text-white">
        {collection.heroImage && (
          <>
            <img
              src={collection.heroImage}
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#180c3c] via-[#180c3c]/92 to-[#180c3c]/70" />
            <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#fc783c]/15 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          </>
        )}

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 lg:px-8 lg:py-20">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="font-sans text-xs uppercase tracking-[0.16em] text-white/45"
            >
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">{collection.title}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mt-7 font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#fc783c]">
                {collection.eyebrow}
              </p>
              <h1 className="mt-4 font-condensed text-5xl font-normal uppercase leading-none tracking-[0.04em] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
                {collection.title}
              </h1>
              <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-white/70 sm:text-lg">
                {collection.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {featured && (
                  <Link
                    to={featured.to}
                    className="inline-flex items-center gap-2 rounded-full bg-[#fc783c] px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-[0.12em] text-pure-black transition hover:bg-white"
                  >
                    Shop featured
                    <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                  </Link>
                )}
                <a
                  href="#collection-grid"
                  className="inline-flex rounded-full border border-white/55 px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#180c3c]"
                >
                  Browse all
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/65">
                <p>
                  <span className="font-bold text-white">{items.length}</span>{' '}
                  {items.length === 1 ? 'edition' : 'editions'}
                </p>
                {startingAt != null && (
                  <p>
                    From{' '}
                    <span className="font-bold text-white">
                      ${startingAt.toFixed(2)}
                    </span>
                  </p>
                )}
                <p>Free shipping over $75</p>
              </div>
            </motion.div>
          </div>

          {featured && (
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#fc783c]/25 to-transparent blur-2xl" />
              <Link
                to={featured.to}
                className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-[#fc783c]/40"
              >
                <div
                  className={`relative flex min-h-[380px] items-center justify-center px-10 py-12 ${featured.frame}`}
                >
                  <span className="absolute left-4 top-4 rounded-[3px] bg-pure-black px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    {featured.badge}
                  </span>
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="max-h-[260px] w-auto max-w-[75%] object-contain drop-shadow-2xl transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="border-t border-white/10 bg-[#121015]/80 px-6 py-5">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#fc783c]">
                    Featured
                  </p>
                  <h2 className="mt-2 font-condensed text-2xl uppercase leading-none tracking-[0.03em] text-white">
                    {featured.title}
                  </h2>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <p className="font-sans text-sm text-white/55">
                      {featured.subtext}
                    </p>
                    <p className="shrink-0 font-sans text-xl font-bold text-white">
                      ${featured.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Collection highlights */}
      {collection.highlights?.length > 0 && (
        <section className="border-b border-black/5 bg-black text-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-7 sm:grid-cols-3 sm:px-6 lg:px-8">
            {collection.highlights.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#fc783c]" />
                <div>
                  <p className="font-condensed text-xl uppercase tracking-[0.04em]">
                    {item.title}
                  </p>
                  <p className="mt-1 font-sans text-sm text-white/55">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Featured banner (mobile + desktop strip) */}
      {featured && (
        <section className="border-b border-black/5 px-4 py-10 sm:px-6 lg:hidden lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <Link to={featured.to} className="grid sm:grid-cols-2">
              <div
                className={`relative flex min-h-[240px] items-center justify-center px-8 py-10 ${featured.frame}`}
              >
                <span className="absolute left-3 top-3 rounded-[3px] bg-pure-black px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                  Featured
                </span>
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="max-h-[180px] w-auto max-w-[70%] object-contain drop-shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-7">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#fc783c]">
                  Start here
                </p>
                <h2 className="mt-2 font-condensed text-3xl uppercase leading-none tracking-[0.03em] text-pure-black">
                  {featured.title}
                </h2>
                <p className="mt-3 font-sans text-sm text-pure-black/55">
                  {featured.subtext}
                </p>
                <p className="mt-4 font-sans text-2xl font-bold text-pure-black">
                  ${featured.price.toFixed(2)}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.16em] text-pure-black">
                  View details
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Catalog */}
      <section
        id="collection-grid"
        className="scroll-mt-28 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-5 border-b border-black/10 pb-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#fc783c]">
                Catalog
              </p>
              <h2 className="mt-2 font-condensed text-3xl font-normal uppercase tracking-[0.04em] text-pure-black sm:text-4xl md:text-5xl">
                Shop the collection
              </h2>
              <p className="mt-2 font-sans text-sm text-pure-black/55">
                Showing {visibleItems.length} of {items.length}{' '}
                {items.length === 1 ? 'item' : 'items'}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:items-end">
              {filters.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  {filters.map((option) => {
                    const active = filter === option
                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setFilter(option)}
                        className={`rounded-full px-5 py-2 font-sans text-sm font-medium transition ${
                          active
                            ? 'bg-black text-white'
                            : 'border border-black/80 bg-white text-pure-black hover:bg-black/5'
                        }`}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              )}

              <label className="inline-flex items-center gap-2 font-sans text-sm text-pure-black/60">
                <span className="sr-only">Sort by</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-full border border-black/20 bg-white px-4 py-2 font-sans text-sm text-pure-black outline-none transition hover:border-black/40 focus:border-black"
                >
                  {SORTS.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {visibleItems.length === 0 ? (
            <p className="py-20 text-center font-sans text-sm text-gray-500">
              {collection.empty}
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {visibleItems.map((product, index) => (
                <motion.article
                  key={product.id}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgb(0,0,0,0.1)]"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={product.to}
                    className={`relative flex min-h-[290px] items-center justify-center px-8 py-10 sm:min-h-[310px] ${product.frame}`}
                  >
                    <span className="absolute left-3 top-3 rounded-[3px] bg-pure-black px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                      {product.badge}
                    </span>
                    <button
                      type="button"
                      aria-label={`Save ${product.title} to wishlist`}
                      onClick={(event) => event.preventDefault()}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:text-brand-orange"
                    >
                      <Heart
                        size={16}
                        strokeWidth={1.6}
                        className="text-pure-black"
                      />
                    </button>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-[210px] w-auto max-w-[72%] object-contain drop-shadow-xl transition duration-300 group-hover:scale-[1.04]"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
                    <Link to={product.to}>
                      <h3 className="font-condensed text-[1.4rem] font-normal uppercase leading-[1.05] tracking-[0.02em] text-pure-black transition hover:text-brand-orange">
                        {product.title}
                      </h3>
                    </Link>

                    <p className="mt-2 font-sans text-sm font-normal text-gray-500">
                      {product.subtext}
                    </p>

                    {product.reviews != null && (
                      <p className="mt-3 flex items-center gap-1.5 font-sans text-sm text-gray-500">
                        <span className="inline-flex text-[#fc783c]">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className="h-3.5 w-3.5 fill-current"
                              strokeWidth={0}
                            />
                          ))}
                        </span>
                        <span className="text-gray-400">
                          {product.reviews} reviews
                        </span>
                      </p>
                    )}

                    <div className="mt-4 flex items-end justify-between gap-3 border-t border-black/5 pt-4">
                      <p className="font-sans text-2xl font-bold text-pure-black">
                        ${product.price.toFixed(2)}
                      </p>
                      <Link
                        to={product.to}
                        className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-pure-black/45 transition hover:text-brand-orange"
                      >
                        Details
                      </Link>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        addItem({
                          id: `catalog-${product.id}`,
                          productId: product.id,
                          title: product.title,
                          price: product.price,
                          image: product.image,
                          meta: product.subtext,
                        })
                      }
                      className="mt-4 w-full rounded-full bg-black py-3.5 font-sans text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-brand-orange"
                    >
                      Add to Cart
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Promise strip */}
      <section className="border-y border-black/5 bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
          {PROMISES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon
                className="mt-0.5 h-5 w-5 shrink-0 text-[#fc783c]"
                strokeWidth={1.75}
              />
              <div>
                <p className="font-condensed text-xl uppercase tracking-[0.04em] text-pure-black">
                  {title}
                </p>
                <p className="mt-1 font-sans text-sm text-pure-black/55">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related collections */}
      {collection.related?.length > 0 && (
        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#fc783c]">
                  Keep exploring
                </p>
                <h2 className="mt-2 font-condensed text-3xl font-normal uppercase tracking-[0.04em] text-pure-black sm:text-4xl md:text-5xl">
                  More from the store
                </h2>
              </div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.16em] text-pure-black/55 transition hover:text-brand-orange"
              >
                Back to home
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {collection.related.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={link.to}
                    className="group relative flex min-h-[180px] overflow-hidden rounded-2xl bg-[#180c3c]"
                  >
                    {link.image && (
                      <img
                        src={link.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-500 group-hover:scale-105 group-hover:opacity-45"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#180c3c] via-[#180c3c]/55 to-transparent" />
                    <div className="relative mt-auto flex w-full items-end justify-between gap-3 p-6">
                      <h3 className="font-condensed text-3xl uppercase leading-none tracking-[0.03em] text-white">
                        {link.label}
                      </h3>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fc783c] text-pure-black transition group-hover:bg-white">
                        <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Collection

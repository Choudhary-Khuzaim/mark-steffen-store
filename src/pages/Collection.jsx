import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { getCollection, getCollectionItems } from '../data/catalog'

function Collection() {
  const { slug } = useParams()
  const collection = getCollection(slug)
  const items = getCollectionItems(slug)
  const { addItem } = useCart()
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    setFilter('All')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  const filters = collection?.filters?.length
    ? collection.filters
    : ['All']

  const visibleItems = useMemo(() => {
    if (filter === 'All') return items
    return items.filter((item) => item.format === filter)
  }, [items, filter])

  if (!collection) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="bg-cream-bg">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/5 bg-[#180c3c] text-white">
        {collection.heroImage && (
          <>
            <img
              src={collection.heroImage}
              alt=""
              className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[48%] object-cover opacity-[0.22] lg:block"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#180c3c] via-[#180c3c]/95 to-[#180c3c]/55" />
            <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#fc783c]/10 blur-3xl" />
          </>
        )}

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
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

          <div className="mt-8 max-w-2xl">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#fc783c]">
              {collection.eyebrow}
            </p>
            <h1 className="mt-4 font-condensed text-5xl font-normal uppercase leading-none tracking-[0.04em] sm:text-6xl md:text-7xl">
              {collection.title}
            </h1>
            <p className="mt-5 font-sans text-base leading-relaxed text-white/70 sm:text-lg">
              {collection.description}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6">
            <p className="font-sans text-sm text-white/70">
              <span className="font-bold text-white">{items.length}</span>{' '}
              {items.length === 1 ? 'edition' : 'editions'} available
            </p>
            {collection.related?.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-white/55 transition hover:text-[#fc783c]"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-condensed text-3xl font-normal uppercase tracking-[0.04em] text-pure-black sm:text-4xl">
                Shop the collection
              </h2>
              <p className="mt-2 font-sans text-sm text-pure-black/55">
                Showing {visibleItems.length} of {items.length}
              </p>
            </div>

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
                  className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgb(0,0,0,0.1)]"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={product.to}
                    className={`relative flex min-h-[280px] items-center justify-center px-8 py-10 sm:min-h-[300px] ${product.frame}`}
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
                      className="max-h-[200px] w-auto max-w-[72%] object-contain drop-shadow-xl transition duration-300 group-hover:scale-[1.03]"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
                    <Link to={product.to}>
                      <h3 className="font-condensed text-[1.35rem] font-normal uppercase leading-[1.05] tracking-[0.02em] text-pure-black transition hover:text-brand-orange">
                        {product.title}
                      </h3>
                    </Link>

                    <p className="mt-2 font-sans text-sm font-normal text-gray-500">
                      {product.subtext}
                    </p>

                    {product.reviews != null && (
                      <p className="mt-3 font-sans text-sm text-gray-500">
                        <span className="tracking-[0.08em] text-pure-black">
                          ★★★★★
                        </span>
                        <span className="ml-2 text-gray-400">
                          {product.reviews} reviews
                        </span>
                      </p>
                    )}

                    <p className="mt-3 font-sans text-2xl font-bold text-pure-black">
                      ${product.price.toFixed(2)}
                    </p>

                    <div className="mt-auto flex flex-col gap-2 pt-5">
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
                        className="w-full rounded-full bg-black py-3.5 font-sans text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-brand-orange"
                      >
                        Add to Cart
                      </button>
                      <Link
                        to={product.to}
                        className="text-center font-sans text-xs font-bold uppercase tracking-[0.16em] text-pure-black/50 transition hover:text-brand-orange"
                      >
                        View details
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Related strip */}
      {collection.related?.length > 0 && (
        <section className="border-t border-black/5 bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#fc783c]">
                Keep exploring
              </p>
              <h2 className="mt-2 font-condensed text-3xl font-normal uppercase tracking-[0.04em] text-pure-black sm:text-4xl">
                More from the store
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {collection.related.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-full border border-black/80 px-6 py-3 font-sans text-xs font-bold uppercase tracking-[0.14em] text-pure-black transition hover:bg-black hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Collection

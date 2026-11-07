import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Check,
  ChevronDown,
  Minus,
  Package,
  Plus,
  Star,
  Truck,
  ShoppingBag,
} from 'lucide-react'
import CompleteSet from '../components/product/CompleteSet'
import { getProduct } from '../data/products'

const FEATURES = [
  { icon: Truck, text: 'Free shipping on orders over $75' },
  { icon: Package, text: 'Ships in 2–4 business days' },
  { icon: ShoppingBag, text: 'Prefer Amazon? Find us there too' },
]

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

const SIGNED_FEE = 15

function Product() {
  const { id } = useParams()
  const product = getProduct(id)

  const [activeThumb, setActiveThumb] = useState(0)
  const [formatId, setFormatId] = useState(product.formats[0].id)
  const [signed, setSigned] = useState(false)
  const [inscription, setInscription] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  useEffect(() => {
    setActiveThumb(0)
    setFormatId(product.formats[0].id)
    setSigned(false)
    setInscription('')
    setQuantity(1)
    setOpenAccordion(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [product.id, product.formats])

  const format =
    product.formats.find((item) => item.id === formatId) ?? product.formats[0]

  const unitPrice = useMemo(
    () => format.price + (signed ? SIGNED_FEE : 0),
    [format.price, signed],
  )

  const lineTotal = unitPrice * quantity

  const accordions = [
    {
      id: 'toc',
      title: 'Table of contents',
      body: product.toc,
    },
    {
      id: 'shipping',
      title: 'Shipping & returns',
      body: 'Orders ship from the U.S. within 2–4 business days. Unopened books may be returned within 30 days. Signed and inscribed copies are final sale.',
    },
    {
      id: 'bulk',
      title: 'Bulk, church and study-group orders',
      body: 'Ordering for a congregation or book club? Email hello@marksteffen.com for discounted cases, discussion guides, and signed stock when available.',
    },
  ]

  return (
    <div className="bg-cream-bg text-pure-black">
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#180c3c]">
              <img
                src={product.thumbs[activeThumb].src}
                alt={`${product.title} — ${product.thumbs[activeThumb].label}`}
                className="h-full w-full object-contain object-center"
                style={{
                  transform: `scale(${product.thumbs[activeThumb].scale ?? 1})`,
                  objectPosition:
                    product.thumbs[activeThumb].position ?? 'center',
                }}
              />
              <span className="absolute left-3 top-3 z-10 rounded-full bg-[#180c3c] px-2.5 py-1 font-condensed text-[10px] uppercase tracking-[0.12em] text-white sm:text-xs">
                {product.badge}
              </span>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
              {product.thumbs.map((thumb, index) => (
                <button
                  key={thumb.id}
                  type="button"
                  aria-label={`View ${thumb.label}`}
                  aria-pressed={activeThumb === index}
                  onClick={() => setActiveThumb(index)}
                  className={`aspect-square overflow-hidden bg-[#180c3c]/10 transition ${
                    activeThumb === index
                      ? 'ring-2 ring-pure-black ring-offset-2 ring-offset-cream-bg'
                      : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <img
                    src={thumb.src}
                    alt={thumb.label}
                    className="h-full w-full object-contain object-center"
                    style={{
                      transform: `scale(${thumb.scale ?? 1})`,
                      objectPosition: thumb.position ?? 'center',
                    }}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:pt-1">
            <nav
              aria-label="Breadcrumb"
              className="font-display text-xs tracking-[0.12em] text-pure-black/45"
            >
              <Link to="/" className="transition hover:text-brand-orange">
                Home
              </Link>
              <span className="mx-1.5">/</span>
              <Link to="/" className="transition hover:text-brand-orange">
                Books
              </Link>
              <span className="mx-1.5">/</span>
              <span className="text-pure-black/70">{product.title}</span>
            </nav>

            <h1 className="mt-4 font-display text-4xl leading-[0.92] text-pure-black sm:text-5xl lg:text-6xl xl:text-7xl">
              {product.title}
            </h1>

            <p className="mt-3 font-display text-sm tracking-[0.08em] text-pure-black/60 sm:text-base">
              {product.subtitle}
            </p>

            <div
              className="mt-3 flex items-center gap-0.5"
              aria-label="5 out of 5 stars"
            >
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-brand-orange text-brand-orange"
                  strokeWidth={1.5}
                />
              ))}
              <span className="ml-2 font-display text-xs tracking-[0.1em] text-pure-black/45">
                {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-display text-4xl text-pure-black sm:text-5xl">
              ${lineTotal.toFixed(2)}
            </p>

            <div className="mt-8">
              <p className="mb-3 font-display text-sm tracking-[0.14em] text-pure-black/55">
                Format
              </p>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {product.formats.map((item) => {
                  const selected = formatId === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setFormatId(item.id)}
                      className={`border-2 bg-white px-3 py-4 text-left transition sm:px-4 ${
                        selected
                          ? 'border-pure-black'
                          : 'border-pure-black/15 hover:border-pure-black/40'
                      }`}
                    >
                      <span className="block font-display text-base tracking-[0.08em] text-pure-black sm:text-lg">
                        {item.label}
                      </span>
                      <span className="mt-1 block font-display text-sm text-pure-black/50">
                        ${item.price.toFixed(2)}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button
                type="button"
                onClick={() => setSigned((value) => !value)}
                className="flex w-full items-center gap-3 border border-pure-black/15 bg-white px-4 py-3.5 text-left transition hover:border-pure-black/40"
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center border ${
                    signed
                      ? 'border-pure-black bg-pure-black text-white'
                      : 'border-pure-black/40 text-transparent'
                  }`}
                >
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="font-display text-base tracking-[0.06em] text-pure-black sm:text-lg">
                  Signed by Mark{' '}
                  <span className="text-brand-orange">
                    + ${SIGNED_FEE.toFixed(2)}
                  </span>
                </span>
              </button>

              <input
                type="text"
                value={inscription}
                onChange={(event) => setInscription(event.target.value)}
                placeholder="Inscribe to (name, optional)"
                maxLength={50}
                disabled={!signed}
                className="w-full border border-pure-black/15 bg-white px-4 py-3.5 text-sm text-pure-black outline-none transition placeholder:text-pure-black/35 focus:border-pure-black disabled:cursor-not-allowed disabled:bg-[#eae6d9] disabled:text-pure-black/35"
              />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <div className="inline-flex items-center self-start border border-pure-black/20 bg-white sm:self-stretch">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-3.5 text-pure-black/70 transition hover:bg-pure-black/5 hover:text-pure-black sm:px-4"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center font-display text-lg text-pure-black">
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-3.5 text-pure-black/70 transition hover:bg-pure-black/5 hover:text-pure-black sm:px-4"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <button
                type="button"
                className="flex-1 bg-brand-orange py-4 font-display text-lg tracking-[0.14em] text-white transition hover:bg-pure-black"
              >
                Add to Cart
              </button>
            </div>

            <button
              type="button"
              className="mt-3 w-full bg-pure-black py-4 font-display text-lg tracking-[0.14em] text-white transition hover:bg-navy-bg"
            >
              Buy with Shop Pay
            </button>

            <ul className="mt-8 space-y-3">
              {FEATURES.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 text-sm text-pure-black/65"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-brand-orange"
                    strokeWidth={1.75}
                  />
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-pure-black/10 pt-8">
              <h2 className="font-display text-2xl tracking-[0.08em] text-pure-black sm:text-3xl">
                About the Book
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-pure-black/70 sm:text-base">
                {product.about.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompleteSet />

      <section className="border-t border-pure-black/10 bg-cream-bg py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-pure-black/10 border-y border-pure-black/10">
            {accordions.map((item) => {
              const open = openAccordion === item.id
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() =>
                      setOpenAccordion((current) =>
                        current === item.id ? null : item.id,
                      )
                    }
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-brand-orange"
                  >
                    <span className="font-display text-lg tracking-[0.08em] text-pure-black sm:text-xl">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-pure-black/50 transition ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm leading-relaxed text-pure-black/65 sm:text-base">
                          {item.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream-bg pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center font-display text-4xl text-pure-black sm:mb-10 sm:text-5xl">
            Reader Reviews
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {REVIEWS.map((review) => (
              <article
                key={review.id}
                className="border border-pure-black/10 bg-white p-6 sm:p-7"
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product

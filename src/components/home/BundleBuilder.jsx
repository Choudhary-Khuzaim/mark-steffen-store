import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const BOOKS = [
  {
    id: 'constitution',
    label: 'The Constitution of God',
    price: 0,
  },
  {
    id: 'guidebook',
    label: 'A Guidebook for Living and Dying',
    price: 0,
  },
]

const FORMATS = [
  { id: 'hardcover', label: 'Hardcover' },
  { id: 'paperback', label: 'Paperback' },
  { id: 'audiobook', label: 'Audiobook' },
]

const SIGNED_FEE = 0
const SET_SAVINGS = 0

function money(value) {
  return `$${value.toFixed(2)}`
}

function BundleBuilder() {
  const [selectedBooks, setSelectedBooks] = useState([
    'constitution',
    'guidebook',
  ])
  const [formatId, setFormatId] = useState('hardcover')
  const [signed, setSigned] = useState(false)
  const [inscription, setInscription] = useState('')

  const format = FORMATS.find((item) => item.id === formatId) ?? FORMATS[0]

  const lineItems = useMemo(() => {
    const items = BOOKS.filter((book) => selectedBooks.includes(book.id)).map(
      (book) => ({
        id: book.id,
        label: `${book.label}, ${format.label}`,
        price: book.price,
      }),
    )

    if (signed && items.length > 0) {
      items.push({
        id: 'signed',
        label: 'Signed & Inscribed',
        price: SIGNED_FEE * items.length,
      })
    }

    return items
  }, [selectedBooks, format, signed])

  const savings = selectedBooks.length >= 2 ? SET_SAVINGS : 0
  const subtotal = lineItems.reduce((sum, item) => sum + item.price, 0)
  const total = Math.max(subtotal - savings, 0)

  const toggleBook = (id) => {
    setSelectedBooks((prev) =>
      prev.includes(id)
        ? prev.filter((bookId) => bookId !== id)
        : [...prev, id],
    )
  }

  return (
    <section className="bg-cream-bg py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 max-w-3xl sm:mb-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-condensed text-5xl font-bold uppercase leading-[0.88] tracking-[0.01em] text-[#1a1a1a] sm:text-6xl md:text-[4.5rem]">
            Build Your Set
          </h2>
          <p className="mt-4 font-sans text-[15px] font-medium leading-relaxed text-[#6b6b6b] sm:text-base">
            Choose your books, pick a format, add a signature. The more you
            add, the more you save.
          </p>
        </motion.div>

        <div className="grid items-start gap-6 lg:grid-cols-[1.7fr_1fr] lg:gap-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Step 1 */}
            <div className="rounded-md border border-black/10 bg-white p-5 sm:p-6">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#9a9a9a]">
                Step 1 · Pick Your Books
              </p>
              <ul className="mt-4 space-y-3">
                {BOOKS.map((book) => {
                  const checked = selectedBooks.includes(book.id)
                  return (
                    <li key={book.id}>
                      <button
                        type="button"
                        onClick={() => toggleBook(book.id)}
                        className={`flex w-full items-center gap-3.5 rounded-md border bg-white px-4 py-4 text-left font-sans normal-case tracking-normal transition ${
                          checked
                            ? 'border-[#1a1a1a]'
                            : 'border-[#1a1a1a]/25 hover:border-[#1a1a1a]/55'
                        }`}
                      >
                        <span
                          className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[2px] border ${
                            checked
                              ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                              : 'border-[#1a1a1a]/40 bg-white text-transparent'
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="flex-1 font-sans text-[15px] font-bold normal-case leading-snug tracking-normal text-[#1a1a1a] sm:text-base">
                          {book.label}
                        </span>
                        <span className="font-sans text-sm font-semibold normal-case tracking-normal text-[#8a8a8a]">
                          {money(book.price)}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Step 2 */}
            <div className="rounded-md border border-black/10 bg-white p-5 sm:p-6">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#9a9a9a]">
                Step 2 · Choose a Format
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {FORMATS.map((item) => {
                  const selected = formatId === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setFormatId(item.id)}
                      className={`rounded-full px-5 py-2.5 font-sans text-sm font-bold normal-case tracking-normal transition ${
                        selected
                          ? 'border border-[#1a1a1a] bg-[#1a1a1a] text-white'
                          : 'border border-[#1a1a1a] bg-white text-[#1a1a1a] hover:bg-black/[0.03]'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-md border border-black/10 bg-white p-5 sm:p-6">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#9a9a9a]">
                Step 3 · Make It Personal
              </p>
              <div className="mt-4 space-y-4">
                <button
                  type="button"
                  onClick={() => setSigned((value) => !value)}
                  className="flex w-full items-center gap-3.5 text-left font-sans normal-case tracking-normal"
                >
                  <span
                    className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[2px] border ${
                      signed
                        ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                        : 'border-[#1a1a1a]/40 bg-white text-transparent'
                    }`}
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="font-sans text-[15px] font-bold normal-case tracking-normal text-[#1a1a1a] sm:text-base">
                    Signed & Inscribed
                  </span>
                  <span className="font-sans text-sm font-semibold normal-case tracking-normal text-[#9a9a9a]">
                    + {money(SIGNED_FEE)} each
                  </span>
                </button>

                <input
                  type="text"
                  disabled={!signed}
                  value={inscription}
                  onChange={(event) => setInscription(event.target.value)}
                  placeholder="Inscribe to (name)"
                  maxLength={50}
                  className="w-full rounded-md border border-[#1a1a1a]/15 bg-[#f7f5f0] px-4 py-3.5 font-sans text-sm font-medium text-[#1a1a1a] outline-none transition placeholder:font-medium placeholder:text-[#1a1a1a]/35 focus:border-[#1a1a1a] focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.aside
            className="h-fit rounded-md bg-[#1a1a1a] p-6 text-white sm:p-7 lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="font-condensed text-[2rem] font-bold uppercase leading-none tracking-[0.04em] text-white sm:text-[2.35rem]">
              Your Set
            </h3>

            <ul className="mt-6 space-y-3 border-b border-white/15 pb-5">
              {lineItems.length === 0 ? (
                <li className="font-sans text-sm font-medium normal-case tracking-normal text-white/45">
                  Select at least one book.
                </li>
              ) : (
                lineItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start justify-between gap-4"
                  >
                    <span className="font-sans text-sm font-semibold normal-case leading-snug tracking-normal text-white/85">
                      {item.label}
                    </span>
                    <span className="shrink-0 font-sans text-sm font-bold normal-case tracking-normal text-white">
                      {money(item.price)}
                    </span>
                  </li>
                ))
              )}

              <li className="flex items-start justify-between gap-4">
                <span className="font-sans text-sm font-bold normal-case tracking-normal text-brand-orange">
                  Set savings
                </span>
                <span className="shrink-0 font-sans text-sm font-bold normal-case tracking-normal text-brand-orange">
                  - {money(savings)}
                </span>
              </li>
            </ul>

            <div className="mt-6 flex items-end justify-between gap-4">
              <span className="pb-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
                Total
              </span>
              <span className="font-condensed text-[2.75rem] font-bold leading-none tracking-tight text-white sm:text-5xl">
                {money(total)}
              </span>
            </div>

            <button
              type="button"
              disabled={lineItems.length === 0}
              className="mt-8 w-full rounded-full bg-brand-orange py-[1.05rem] font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#1a1a1a] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Add Set to Cart
            </button>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default BundleBuilder

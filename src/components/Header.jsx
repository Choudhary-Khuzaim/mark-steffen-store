import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from 'lucide-react'
import { IMAGES } from '../data/images'

const MEGA_COLUMNS = [
  {
    title: 'Books',
    shopAll: { label: 'Shop All Books', to: '/product/1' },
    items: [
      { label: 'The Constitution of God', to: '/product/1', count: 2 },
      { label: 'A Guidebook for Living & Dying', to: '/product/2', count: 1 },
      { label: 'Audiobooks', to: '/product/1', count: 1 },
      { label: 'Complete Signed Set', to: '/', count: 1 },
    ],
  },
  {
    title: 'Signed & Collector',
    shopAll: { label: 'Shop All Signed', to: '/product/1' },
    items: [
      { label: 'Signed Editions', to: '/product/1', count: 2 },
      { label: 'Limited Run Jackets', to: '/', count: 1 },
      { label: "Collector's Edition", to: '/product/1', count: 1 },
      { label: 'Inscribed Copies', to: '/product/1', count: 1 },
    ],
  },
  {
    title: 'Gifts & Bundles',
    shopAll: { label: 'Shop All Gifts', to: '/' },
    items: [
      { label: 'Journals & Study', to: '/', count: 1 },
      { label: 'Apparel & Gifts', to: '/', count: 3 },
      { label: 'Bundles', to: '/', count: 1 },
      { label: 'Build Your Set', to: '/', count: 1 },
    ],
  },
]

const NAV_LINKS = [
  { label: 'Books', to: '/product/1' },
  { label: 'Signed & Collector', to: '/product/1' },
  { label: 'Audiobooks', to: '/product/1' },
  { label: 'Journals & Study', to: '/' },
  { label: 'Apparel & Gifts', to: '/' },
  { label: 'Bundles', to: '/' },
  { label: 'About Mark', to: '/' },
]

const MOBILE_LINKS = [
  { label: 'Shop All', to: '/' },
  ...NAV_LINKS,
]

function Header({ cartCount = 2, onCartOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const closeTimer = useRef(null)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current)
    }
  }, [])

  const openShop = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setShopOpen(true)
  }

  const closeShop = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setShopOpen(false), 140)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white text-pure-black">
      {/* Row 1: Logo, Search, Icons */}
      <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:px-8">
        <button
          type="button"
          className="shrink-0 p-1.5 text-pure-black lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>

        <Link
          to="/"
          className="shrink-0 font-condensed text-4xl font-normal uppercase leading-none tracking-[0.06em] text-pure-black transition hover:text-brand-orange"
        >
          Mark H. Steffen
        </Link>

        <div className="relative mx-8 hidden h-12 w-full max-w-3xl items-center md:flex">
          <label htmlFor="site-search" className="sr-only">
            Search books, editions, gifts
          </label>
          <Search
            className="pointer-events-none absolute left-5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-pure-black/40"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <input
            id="site-search"
            type="search"
            placeholder="Search books, editions, gifts"
            className="h-12 w-full appearance-none rounded-full border-0 bg-[#f5f0ea] py-0 pl-12 pr-6 font-sans text-sm font-normal leading-none text-pure-black outline-none placeholder:font-sans placeholder:font-normal placeholder:leading-none placeholder:text-pure-black/45 [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
          />
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Account"
            className="hidden p-2 text-pure-black transition hover:text-brand-orange sm:inline-flex"
          >
            <User className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            className="hidden p-2 text-pure-black transition hover:text-brand-orange sm:inline-flex"
          >
            <Heart className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Open cart, ${cartCount} items`}
            onClick={onCartOpen}
            className="relative p-2 text-pure-black transition hover:text-brand-orange"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-orange px-1.5 font-sans text-xs font-bold leading-none text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      <div className="px-4 pb-4 md:hidden sm:px-6">
        <div className="relative flex h-12 w-full items-center">
          <Search
            className="pointer-events-none absolute left-5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-pure-black/40"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search books, editions, gifts"
            className="h-12 w-full appearance-none rounded-full border-0 bg-[#f5f0ea] py-0 pl-12 pr-6 font-sans text-sm font-normal leading-none text-pure-black outline-none placeholder:font-sans placeholder:font-normal placeholder:leading-none placeholder:text-pure-black/45 [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
          />
        </div>
      </div>

      {/* Row 2: Navigation + Shop mega menu */}
      <div
        className="relative hidden lg:block"
        onMouseEnter={openShop}
        onMouseLeave={closeShop}
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-7xl items-center justify-center gap-8 px-8 ${
            shopOpen ? 'pb-3' : 'pb-4'
          }`}
        >
          <button
            type="button"
            aria-expanded={shopOpen}
            aria-haspopup="true"
            className={`inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
              shopOpen
                ? 'text-brand-orange'
                : 'text-gray-900 hover:text-brand-orange'
            }`}
            onFocus={openShop}
          >
            Shop All
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                shopOpen ? 'rotate-180' : ''
              }`}
              strokeWidth={2}
            />
          </button>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gray-900 transition-colors hover:text-brand-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <AnimatePresence>
          {shopOpen && (
            <motion.div
              className="absolute inset-x-0 top-full z-50 border-t border-[#180c3c]/10 bg-[#f5f0ea] shadow-[0_24px_48px_rgba(24,12,60,0.1)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              <div className="relative mx-auto max-w-7xl overflow-hidden px-8">
                <img
                  src={IMAGES.constitutionHero1}
                  alt=""
                  className="pointer-events-none absolute inset-y-0 right-0 h-full w-[32%] object-cover opacity-[0.1]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f5f0ea] via-[#f5f0ea]/95 to-[#f5f0ea]/75" />

                <div className="relative grid grid-cols-3 gap-8 py-8 lg:gap-10 lg:py-10">
                  {MEGA_COLUMNS.map((column) => (
                    <div key={column.title} className="min-w-0">
                      <p className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#fc783c]">
                        {column.title}
                      </p>
                      <ul className="space-y-3.5">
                        {column.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              to={item.to}
                              onClick={() => setShopOpen(false)}
                              className="group flex items-center justify-between gap-3 font-sans text-sm text-[#180c3c]/80 transition hover:text-[#180c3c]"
                            >
                              <span className="truncate">{item.label}</span>
                              <span className="flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full border border-[#180c3c]/20 px-1.5 font-sans text-[10px] tabular-nums text-[#180c3c]/50 transition group-hover:border-[#fc783c] group-hover:text-[#fc783c]">
                                {item.count}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={column.shopAll.to}
                        onClick={() => setShopOpen(false)}
                        className="mt-6 inline-block font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#fc783c] transition hover:text-[#180c3c]"
                      >
                        {column.shopAll.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            aria-label="Mobile"
            className="w-full bg-white lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <ul className="flex flex-col px-4 pb-4 sm:px-6">
              {MOBILE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gray-900 transition-colors hover:text-brand-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

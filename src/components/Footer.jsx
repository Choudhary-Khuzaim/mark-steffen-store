import { useState } from 'react'
import { Link } from 'react-router-dom'

const LINK_COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'Books', to: '/product/1' },
      { label: 'Signed Editions', to: '/product/1' },
      { label: 'Bundles', to: '/' },
      { label: 'Merch', to: '/' },
    ],
  },
  {
    title: 'Read',
    links: [
      { label: 'Chapter 1 Free', to: '/' },
      { label: 'The Journal', to: '/' },
      { label: 'Study Notes', to: '/' },
      { label: 'Reader Quiz', to: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/' },
      { label: 'Returns', to: '/' },
      { label: 'Contact', to: '/' },
      { label: 'FAQ', to: '/' },
    ],
  },
]

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (event) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer className="mt-auto">
      {/* Email capture — orange band, black type (mockup) */}
      <section className="bg-[#fc783c] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <h2 className="font-condensed text-5xl font-bold uppercase leading-[0.9] tracking-[0.02em] text-pure-black sm:text-6xl lg:text-7xl">
              Get Chapter 1 Free
            </h2>
            <p className="mt-4 font-sans text-base text-pure-black sm:text-lg">
              Plus first access to signed-edition drops, new essays, and
              audiobook releases.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-xl flex-col gap-2"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                className="w-full flex-1 rounded-full border-0 bg-white px-6 py-4 text-base text-pure-black outline-none placeholder:text-pure-black/40"
              />
              <button
                type="submit"
                className="rounded-full bg-pure-black px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#180c3c]"
              >
                Send It
              </button>
            </div>
            <p className="text-center font-sans text-xs text-pure-black sm:text-left">
              No spam. Unsubscribe any time.
            </p>
          </form>
        </div>
      </section>

      {/* Main footer — near-black */}
      <section className="bg-[#121015] px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <p className="font-condensed text-3xl font-bold uppercase tracking-[0.06em] sm:text-4xl">
              Mark H. Steffen
            </p>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-white/65">
              Books, signed editions and gifts on creation, purpose and destiny.
            </p>
            <a
              href="https://authormarksteffen.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full border border-white/80 px-5 py-3 font-sans text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#121015]"
            >
              Companion Site: authormarksteffen.com
            </a>
          </div>

          {LINK_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#fc783c]">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-white/70 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#121015] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-sans text-xs text-white/45">
            © {new Date().getFullYear()} Mark H. Steffen. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/45">
            Visa · Mastercard · American Express · PayPal · Shop Pay · Apple Pay
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

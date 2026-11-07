import { Lock, PenLine, RefreshCw, Truck } from 'lucide-react'

const ITEMS = [
  {
    icon: Truck,
    title: 'Free Shipping',
    subtext: 'On orders over $75',
  },
  {
    icon: PenLine,
    title: 'Signed & Inscribed',
    subtext: 'Personal note at checkout',
  },
  {
    icon: Lock,
    title: 'Secure Checkout',
    subtext: 'Shop Pay, cards, PayPal',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    subtext: '30 days',
  },
]

function TrustBar() {
  return (
    <section className="m-0 bg-[#000000] py-0 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {ITEMS.map(({ icon: Icon, title, subtext }) => (
          <div key={title} className="flex items-start gap-3">
            <Icon
              className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <div>
              <p className="font-condensed text-base uppercase tracking-wide text-white sm:text-lg">
                {title}
              </p>
              <p className="mt-0.5 text-sm text-gray-400">{subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar

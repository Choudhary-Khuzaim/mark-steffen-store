import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus, Trash2, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

const FREE_SHIPPING_THRESHOLD = 75
const UPSELL = {
  id: 'upsell-bookmark',
  title: 'Premium Leather Bookmark',
  price: 18,
}

function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    subtotal,
    updateQuantity,
    removeItem,
    addItem,
  } = useCart()

  const remainingForShipping = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0)
  const shippingProgress = Math.min(
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
    100,
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close cart overlay"
            className="fixed inset-0 z-40 bg-ink-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Your cart"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-warm-paper/15 bg-ink-black shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="flex items-center justify-between border-b border-warm-paper/10 px-5 py-5">
              <h2 className="font-display text-xl tracking-[0.2em] text-warm-paper">
                Your Cart
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="rounded-sm p-1.5 text-warm-paper/70 transition hover:bg-warm-paper/10 hover:text-warm-paper"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>

            <div className="border-b border-warm-paper/10 px-5 py-4">
              <p className="mb-2 text-sm text-warm-paper/70">
                {items.length === 0 ? (
                  'Add something to unlock free shipping'
                ) : remainingForShipping > 0 ? (
                  <>
                    You are{' '}
                    <span className="font-semibold text-ember-orange">
                      ${remainingForShipping.toFixed(0)}
                    </span>{' '}
                    away from FREE shipping
                  </>
                ) : (
                  <span className="text-ember-orange">
                    You&apos;ve unlocked FREE shipping
                  </span>
                )}
              </p>
              <div className="h-1 w-full overflow-hidden bg-warm-paper/15">
                <motion.div
                  className="h-full bg-ember-orange"
                  initial={false}
                  animate={{ width: `${shippingProgress}%` }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              {items.length === 0 ? (
                <p className="py-10 text-center font-sans text-sm text-warm-paper/50">
                  Your cart is empty.
                </p>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 border-b border-warm-paper/10 pb-5"
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt=""
                          className="h-20 w-16 shrink-0 object-cover"
                        />
                      ) : (
                        <div className="h-20 w-16 shrink-0 bg-gradient-to-br from-indigo-deep to-warm-paper/10" />
                      )}
                      <div className="flex min-w-0 flex-1 flex-col justify-between">
                        <div>
                          <p className="font-display text-sm uppercase tracking-wide text-warm-paper">
                            {item.title}
                          </p>
                          {item.meta ? (
                            <p className="mt-0.5 text-xs text-warm-paper/45">
                              {item.meta}
                            </p>
                          ) : null}
                          <p className="mt-1 text-sm text-warm-paper/60">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between gap-3">
                          <div className="inline-flex items-center border border-warm-paper/20">
                            <button
                              type="button"
                              aria-label={`Decrease quantity of ${item.title}`}
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1.5 text-warm-paper/70 transition hover:bg-warm-paper/10 hover:text-warm-paper"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="min-w-8 text-center font-display text-sm text-warm-paper">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label={`Increase quantity of ${item.title}`}
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1.5 text-warm-paper/70 transition hover:bg-warm-paper/10 hover:text-warm-paper"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            aria-label={`Remove ${item.title} from cart`}
                            onClick={() => removeItem(item.id)}
                            className="rounded-sm p-1.5 text-warm-paper/50 transition hover:bg-warm-paper/10 hover:text-ember-orange"
                          >
                            <Trash2 className="h-4 w-4" strokeWidth={1.75} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 border border-warm-paper/15 bg-warm-paper/[0.03] p-4">
                <p className="font-display text-xs uppercase tracking-[0.2em] text-warm-paper/50">
                  Complete your set:
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-14 w-12 shrink-0 bg-gradient-to-br from-ember-orange/40 to-indigo-deep" />
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-sm uppercase tracking-wide text-warm-paper">
                      {UPSELL.title}
                    </p>
                    <p className="text-sm text-warm-paper/60">
                      ${UPSELL.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      addItem(
                        {
                          id: UPSELL.id,
                          productId: UPSELL.id,
                          title: UPSELL.title,
                          price: UPSELL.price,
                        },
                        { open: false },
                      )
                    }
                    className="shrink-0 border border-ember-orange px-3 py-1.5 font-display text-xs uppercase tracking-wider text-ember-orange transition hover:bg-ember-orange hover:text-ink-black"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-warm-paper/10 px-5 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-sm uppercase tracking-[0.15em] text-warm-paper/60">
                  Subtotal
                </span>
                <span className="font-display text-lg text-warm-paper">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <button
                type="button"
                disabled={items.length === 0}
                className="w-full bg-warm-paper py-4 font-display text-sm uppercase tracking-[0.2em] text-ink-black transition hover:bg-ember-orange disabled:cursor-not-allowed disabled:opacity-40"
              >
                Checkout with Shop Pay
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer

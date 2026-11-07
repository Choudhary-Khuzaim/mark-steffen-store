import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback(
    (item, { open = true } = {}) => {
      const quantity = Math.max(1, item.quantity ?? 1)
      const lineId =
        item.id ??
        [item.productId, item.formatId, item.signed ? 'signed' : 'plain']
          .filter(Boolean)
          .join(':')

      setItems((prev) => {
        const existing = prev.find((entry) => entry.id === lineId)
        if (existing) {
          return prev.map((entry) =>
            entry.id === lineId
              ? { ...entry, quantity: entry.quantity + quantity }
              : entry,
          )
        }

        return [
          ...prev,
          {
            id: lineId,
            productId: item.productId ?? lineId,
            title: item.title,
            price: item.price,
            quantity,
            image: item.image ?? null,
            meta: item.meta ?? '',
          },
        ]
      })

      if (open) setIsOpen(true)
    },
    [],
  )

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id, delta) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const setQuantity = useCallback((id, quantity) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const cartCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      isOpen,
      cartCount,
      subtotal,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      setQuantity,
      clearCart,
    }),
    [
      items,
      isOpen,
      cartCount,
      subtotal,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      setQuantity,
      clearCart,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import PromoBar from './PromoBar'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from './CartDrawer'

function Layout() {
  const [cartOpen, setCartOpen] = useState(false)
  const cartCount = 2

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [cartOpen])

  return (
    <div className="flex min-h-svh flex-col overflow-x-hidden bg-cream-bg text-pure-black">
      <PromoBar />
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}

export default Layout

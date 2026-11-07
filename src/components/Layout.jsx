import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import PromoBar from './PromoBar'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import { useCart } from '../context/CartContext'

function Layout() {
  const { cartCount, isOpen, openCart } = useCart()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className="flex min-h-svh flex-col overflow-x-hidden bg-cream-bg text-pure-black">
      <PromoBar />
      <Header cartCount={cartCount} onCartOpen={openCart} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout

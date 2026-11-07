import HeroSlider from '../components/home/HeroSlider'
import TrustBar from '../components/home/TrustBar'
import CategoryGrid from '../components/home/CategoryGrid'
import ProductGrid from '../components/home/ProductGrid'
import SignedCollector from '../components/home/SignedCollector'
import DarkBanner from '../components/home/DarkBanner'
import BundleBuilder from '../components/home/BundleBuilder'
import ExtrasRow from '../components/home/ExtrasRow'
import Reviews from '../components/home/Reviews'

function Home() {
  return (
    <>
      <HeroSlider />
      <TrustBar />
      <CategoryGrid />
      <ProductGrid />
      <SignedCollector />
      <DarkBanner />
      <BundleBuilder />
      <ExtrasRow />
      <Reviews />
    </>
  )
}

export default Home

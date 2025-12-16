import Hero from '../components/home/Hero'
import ProductsPreview from '../components/home/ProductsPreview'
import ParallaxSection from '../components/home/ParallaxSection'
import ImageGallery from '../components/home/ImageGallery'
import Testimonials from '../components/home/Testimonials'
import Stats from '../components/home/Stats'

const Home = () => {
  return (
    <div className="relative bg-gradient-to-b from-white via-slate-50/30 to-white">
      {/* Very subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50/20 via-transparent to-slate-100/10 pointer-events-none z-0" />
      <div className="relative z-10">
        <Hero />
        <ProductsPreview />
        <ParallaxSection />
        <ImageGallery />
        <Testimonials />
        <Stats />
      </div>
    </div>
  )
}

export default Home


import { memo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { staticData } from '../../data/staticData'
import Button from '../common/Button'

const ProductCard = ({ product, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 overflow-hidden border border-slate-100 transition-all duration-300 group gpu-accelerated"
    >
      <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 flex items-center justify-center group-hover:from-slate-200 group-hover:via-slate-100 group-hover:to-slate-200 transition-all duration-300">
        <span className="text-4xl sm:text-5xl md:text-6xl transform group-hover:scale-110 transition-transform duration-300">🪨</span>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-2 sm:mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-montserrat">{product.title}</h3>
          <span className="px-2.5 sm:px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 border border-slate-200 w-fit font-montserrat">
            {product.category}
          </span>
        </div>
        <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed font-lato">{product.description}</p>
        <Link
          to="/products"
          className="text-gray-900 font-medium hover:underline inline-flex items-center font-lato"
        >
          Learn more →
        </Link>
      </div>
    </motion.div>
  )
}

const ProductsPreview = () => {
  const previewProducts = staticData.slice(0, 3)

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100/80 backdrop-blur-sm rounded-full border border-slate-200/50 mb-3 sm:mb-4 font-montserrat">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6 px-2 font-megalith">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Premium Stone Collection
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium px-4 font-lato">
            Discover our curated selection of premium natural stones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {previewProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <Button
            variant="primary"
            size="md"
            className="w-full sm:w-auto"
            to="/products"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(ProductsPreview)


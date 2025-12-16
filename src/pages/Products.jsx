import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { staticData } from '../data/staticData'

const categories = ['All', 'Marble', 'Granite', 'Quartz', 'Limestone', 'Travertine', 'Slate']

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: '-50px' })

  const filteredProducts = selectedCategory === 'All' 
    ? staticData 
    : staticData.filter(product => product.category === selectedCategory)

  const ProductCard = ({ product, index }) => {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, margin: '-100px' })

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: index * 0.1
        }}
        whileHover={{ 
          y: -8,
          transition: { 
            type: "spring",
            stiffness: 300,
            damping: 20
          }
        }}
        className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 border border-slate-100 transition-all duration-300 group"
      >
        <div className="h-64 sm:h-80 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 flex items-center justify-center group-hover:from-slate-200 group-hover:via-slate-100 group-hover:to-slate-200 transition-all duration-300 relative overflow-hidden">
          <span className="text-6xl sm:text-7xl md:text-8xl transform group-hover:scale-110 transition-transform duration-300">🪨</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-montserrat">{product.title}</h3>
            <span className="px-3 py-1 text-xs sm:text-sm font-semibold rounded-full bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 border border-slate-200 font-montserrat">
              {product.category}
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 font-lato">{product.description}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-4 py-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 font-montserrat"
          >
            View Details
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 md:pb-20">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100/90 backdrop-blur-sm rounded-full border border-slate-200/60 mb-4 shadow-sm font-montserrat"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Our Products
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-4 sm:mb-6 px-2 font-megalith"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Premium Stone Collection
            </span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium px-4 font-lato"
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Discover our extensive range of premium natural stones, each piece carefully selected for its unique beauty and exceptional quality
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 font-montserrat ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-center py-16"
          >
            <p className="text-lg text-slate-600 font-lato">No products found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Products


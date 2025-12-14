import { memo } from 'react'
import { motion } from 'framer-motion'
import Button from '../common/Button'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const patternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-14 sm:-mt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/stones/testing.jpeg)'
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/70"></div>
      
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-slate-800/40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center w-full flex flex-col items-center justify-center min-h-screen"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              Premium Quality Natural Stones
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 leading-tight px-2"
          >
            <span className="text-white drop-shadow-2xl">
              Premium Natural
            </span>
            <span className="block text-white drop-shadow-2xl">
              Stone Solutions
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-100 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto font-medium leading-relaxed px-4 drop-shadow-lg"
          >
            Transform your spaces with our exquisite collection of marble, granite, and premium stone materials
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Button
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
              to="/products"
            >
              Explore Products
            </Button>
            <Button
              variant="outline"
              size="md"
              className="w-full sm:w-auto"
              to="/contact"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-md bg-white/10 shadow-lg gpu-accelerated"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-white rounded-full mt-2 gpu-accelerated"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default memo(Hero)


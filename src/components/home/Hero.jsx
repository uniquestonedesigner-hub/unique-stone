import { memo } from 'react'
import { motion } from 'framer-motion'
import Button from '../common/Button'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      filter: "blur(4px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8
      }
    }
  }

  const patternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-14 sm:-mt-16">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1649294012763-88d48e617b72?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHN0b25lJTIwY2xhZGRpbmd8ZW58MHx8MHx8fDA%3D)'
        }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 50,
          damping: 20,
          mass: 1,
          duration: 1.5
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
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg font-montserrat">
              Premium Quality Natural Stones
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 leading-tight px-2 font-megalith"
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
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-100 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto font-medium leading-relaxed px-4 drop-shadow-lg font-lato"
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
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 1.2
        }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1]
          }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-md bg-white/10 shadow-lg gpu-accelerated"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1]
            }}
            className="w-1.5 h-2.5 sm:h-3 bg-white rounded-full mt-1.5 sm:mt-2 gpu-accelerated"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default memo(Hero)


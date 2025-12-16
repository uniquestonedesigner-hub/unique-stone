import { motion } from 'framer-motion'
import { useState } from 'react'

const CatalogueButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleDownload = () => {
    // Placeholder for download functionality
    // You can replace this with actual download logic
    console.log('Downloading catalogue...')
    // Example: window.open('/catalogue.pdf', '_blank')
  }

  return (
    <motion.div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
    >
      <motion.button
        onClick={handleDownload}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-3 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-xl shadow-black/25 hover:shadow-2xl hover:shadow-black/35 transition-all duration-300 flex items-center space-x-2 sm:space-x-2.5 font-medium text-xs sm:text-sm gpu-accelerated"
      >
        <motion.div
          animate={isHovered ? { rotate: [0, -10, 10, -10, 0] } : {}}
          transition={{ duration: 0.6 }}
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </motion.div>
        <span>Catalogue</span>
        
        {/* Subtle pulse effect */}
        <motion.span
          className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-60 gpu-accelerated"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.button>
    </motion.div>
  )
}

export default CatalogueButton


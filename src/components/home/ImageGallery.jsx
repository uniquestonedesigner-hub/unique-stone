import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ImageGallery = () => {
  const galleryData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1658081178733-f2b584e8916d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Premium Marble Collection',
      description: 'Discover our exquisite range of premium marble stones, each piece carefully selected for its unique veining and natural beauty. Our marble collection offers timeless elegance that transforms any space into a masterpiece of sophistication and luxury.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1675604587493-8c0ed02ff292?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Natural Granite Excellence',
      description: 'Experience the strength and durability of our natural granite stones, perfect for both interior and exterior applications. Each slab showcases nature\'s artistry with intricate patterns and colors that add character and resilience to your design projects.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1681406983760-fe286effed50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Luxurious Quartz Selection',
      description: 'Explore our curated quartz collection featuring engineered perfection with the beauty of natural stone. These premium surfaces combine durability with stunning aesthetics, offering low maintenance and high performance for modern living spaces.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1664027703064-866accc55eeb?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Exotic Stone Varieties',
      description: 'Immerse yourself in our collection of exotic and rare stone varieties from around the world. Each piece tells a unique geological story, bringing unparalleled beauty and distinction to your architectural and design visions.'
    }
  ]

  const ImageCard = ({ item, index }) => {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, margin: '-100px', amount: 0.3 })
    
    // Parallax scroll effect
    const { scrollYProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"]
    })
    
    const y = useTransform(scrollYProgress, [0, 1], [50, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

    // Alternate layout: odd items have image on left, even on right
    const isEven = index % 2 === 0

    // Spring animation variants for smoother motion
    const cardVariants = {
      hidden: { 
        opacity: 0, 
        y: 80,
        scale: 0.95
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.8,
          delay: index * 0.1
        }
      }
    }

    const imageVariants = {
      hidden: { 
        opacity: 0, 
        scale: 0.85,
        x: isEven ? -80 : 80,
        rotateY: isEven ? -15 : 15
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        x: 0,
        rotateY: 0,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 20,
          mass: 1,
          delay: index * 0.1 + 0.15
        }
      }
    }

    const contentVariants = {
      hidden: { 
        opacity: 0, 
        x: isEven ? 60 : -60,
        y: 20
      },
      visible: { 
        opacity: 1, 
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 18,
          mass: 0.8,
          delay: index * 0.1 + 0.25
        }
      }
    }

    const textVariants = {
      hidden: { 
        opacity: 0, 
        y: 15,
        filter: "blur(4px)"
      },
      visible: { 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)",
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 20,
          delay: index * 0.1 + 0.35
        }
      }
    }

    return (
      <motion.div
        ref={cardRef}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 last:mb-0"
      >
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center`}>
          {/* Image Container with Parallax */}
          <motion.div
            variants={imageVariants}
            style={{ y }}
            className="w-full lg:w-1/2 relative group overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl"
          >
            <div className="relative h-56 sm:h-72 md:h-96 lg:h-[480px] overflow-hidden">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ 
                  scale: 1.08,
                  transition: { 
                    duration: 0.6, 
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }}
                loading="lazy"
              />
              {/* Gradient overlay with animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>
            {/* Decorative glow element */}
            <motion.div 
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-slate-300/30 to-slate-400/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Content Container */}
          <motion.div
            variants={contentVariants}
            className="w-full lg:w-1/2 flex flex-col justify-center px-2 sm:px-0"
          >
            <motion.div variants={textVariants}>
              <motion.span 
                className="inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100/90 backdrop-blur-sm rounded-full border border-slate-200/60 mb-3 sm:mb-4 md:mb-6 shadow-sm font-montserrat"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Collection {index + 1}
              </motion.span>
              <motion.h3 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 mb-3 sm:mb-4 md:mb-6 leading-tight font-megalith"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  {item.title}
                </span>
              </motion.h3>
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed mb-4 sm:mb-6 md:mb-8 font-lato"
                variants={textVariants}
              >
                {item.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: index * 0.1 + 0.5
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group font-montserrat"
                >
                  <span>Explore Collection</span>
                  <motion.svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: '-50px' })

  // Header animation variants
  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden"
    >
      {/* Animated background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-slate-200/30 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tl from-slate-200/30 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <motion.span 
            className="inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100/90 backdrop-blur-sm rounded-full border border-slate-200/60 mb-3 sm:mb-4 shadow-sm font-montserrat"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Our Gallery
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-3 sm:mb-4 md:mb-6 px-2 font-megalith"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Premium Stone Showcase
            </span>
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-medium px-4 font-lato"
            variants={headerVariants}
          >
            Explore our stunning collection of natural stones, each piece carefully curated to bring elegance and sophistication to your space
          </motion.p>
        </motion.div>

        {/* Image Gallery */}
        <div className="space-y-0">
          {galleryData.map((item, index) => (
            <ImageCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageGallery

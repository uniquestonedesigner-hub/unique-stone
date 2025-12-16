import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ParallaxSection = () => {
  const sectionRef = useRef(null)
  
  // Scroll progress from 0 to 1 as we scroll through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax transformations
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05])
  const blurValue = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [8, 0, 0, 8])
  const blurFilter = useTransform(blurValue, (value) => `blur(${value}px)`)

  // Text animations
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{
          y,
          scale,
          opacity,
          filter: blurFilter
        }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP3TMa9B0Y32UOU-OJMdZrc6fY2AU_nF-fnv1GqP67eGAAohCC2qV2cvs&s"
          alt="Premium Stone Collection"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            style={{
              y: textY,
              opacity: textOpacity
            }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg font-montserrat"
            >
              Crafted with Precision
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.1
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight font-megalith"
            >
              <span className="block drop-shadow-2xl">
                Timeless Elegance
              </span>
              <span className="block bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                In Every Stone
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2
              }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-100 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg px-4 font-lato"
            >
              Experience the perfect blend of natural beauty and exceptional craftsmanship that transforms ordinary spaces into extraordinary masterpieces
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3
              }}
              className="pt-4 sm:pt-6"
            >
              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 text-sm sm:text-base md:text-lg bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl sm:rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 group font-montserrat"
              >
                <span>Explore Our Collection</span>
                <motion.svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
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
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>
    </section>
  )
}

export default ParallaxSection


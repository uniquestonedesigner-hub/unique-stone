import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: '-50px' })

  const features = [
    {
      icon: '🏛️',
      title: 'Premium Quality',
      description: 'We source only the finest natural stones from renowned quarries worldwide, ensuring exceptional quality and durability in every piece.'
    },
    {
      icon: '🎨',
      title: 'Expert Craftsmanship',
      description: 'Our skilled artisans combine traditional techniques with modern technology to deliver precision-cut and beautifully polished stones.'
    },
    {
      icon: '🌍',
      title: 'Global Sourcing',
      description: 'We source materials from renowned quarries across the globe, bringing you authentic and unique stone options from around the world.'
    },
    {
      icon: '✅',
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure every piece meets our high standards before it reaches your project.'
    },
    {
      icon: '🤝',
      title: 'Professional Service',
      description: 'Our dedicated team provides expert guidance from selection to installation, ensuring a seamless experience throughout your project.'
    },
    {
      icon: '💎',
      title: 'Wide Selection',
      description: 'Extensive collection of marble, granite, quartz, and other natural stones to suit every design vision and requirement.'
    }
  ]

  const FeatureCard = ({ feature, index }) => {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, margin: '-100px' })

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: index * 0.1
        }}
        whileHover={{ 
          y: -10,
          transition: { 
            type: "spring",
            stiffness: 300,
            damping: 20
          }
        }}
        className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 border border-slate-100 transition-all duration-300 group"
      >
        <div className="text-5xl sm:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-montserrat">{feature.title}</h3>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-lato">{feature.description}</p>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/30 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 md:pb-20">
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
            About Us
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-4 sm:mb-6 px-2 font-megalith"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Crafting Excellence
            </span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium px-4 leading-relaxed font-lato"
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            With over 15 years of experience in the natural stone industry, Unique Stone has established itself as a trusted leader in providing premium quality stones for residential and commercial projects across India.
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-lg shadow-black/5 border border-slate-100 mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-megalith">
            Our Story
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-lato">
            <p>
              Founded in Bhopal, Madhya Pradesh, Unique Stone began with a simple vision: to bring the finest natural stones from around the world to Indian homes and businesses. What started as a small venture has grown into a trusted name in the stone industry.
            </p>
            <p>
              We believe that every space deserves the beauty and elegance that only natural stone can provide. Our commitment to quality, combined with our extensive selection and expert guidance, has helped thousands of customers transform their spaces into stunning masterpieces.
            </p>
            <p>
              Today, we continue to expand our collection while maintaining our core values of quality, integrity, and exceptional customer service. Whether you're designing a luxury home, a commercial space, or a simple renovation project, we're here to help you find the perfect stone solution.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 sm:mb-12 text-center font-megalith">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default About


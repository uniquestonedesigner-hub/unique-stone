import { memo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: '🏛️',
    title: 'Premium Quality',
    description: 'Sourced from the finest quarries worldwide, ensuring exceptional quality and durability.'
  },
  {
    icon: '🎨',
    title: 'Wide Selection',
    description: 'Extensive collection of marble, granite, quartz, and other natural stones to suit every design.'
  },
  {
    icon: '⚡',
    title: 'Expert Craftsmanship',
    description: 'Skilled artisans and modern technology combine to deliver precision-cut and polished stones.'
  },
  {
    icon: '🌍',
    title: 'Global Sourcing',
    description: 'We source materials from renowned quarries across the globe for authentic and unique options.'
  },
  {
    icon: '✅',
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensure every piece meets our high standards.'
  },
  {
    icon: '🤝',
    title: 'Professional Service',
    description: 'Dedicated team providing expert guidance from selection to installation support.'
  }
]

const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -10, transition: { duration: 0.2, ease: "easeOut" } }}
      className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 border border-slate-100 transition-all duration-300 group gpu-accelerated"
    >
      <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{feature.title}</h3>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

const Features = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100/80 backdrop-blur-sm rounded-full border border-slate-200/50 mb-3 sm:mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Excellence in Every Detail
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium px-4">
            We combine quality materials, expert craftsmanship, and exceptional service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Features)


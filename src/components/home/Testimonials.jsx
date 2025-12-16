import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Interior Designer',
    company: 'Elite Design Studio',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=47',
    text: 'Working with Unique Stone has been an absolute pleasure. Their premium marble collection transformed our luxury residential project into a masterpiece. The quality and attention to detail is unmatched in the industry.'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Architect',
    company: 'Modern Architecture Group',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=12',
    text: 'The natural granite we sourced from Unique Stone exceeded all expectations. Their expert team provided invaluable guidance throughout the selection process, and the final installation was flawless. Highly recommended!'
  },
  {
    id: 3,
    name: 'Anjali Patel',
    role: 'Project Manager',
    company: 'Premier Construction',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=45',
    text: 'We\'ve completed over 20 projects using Unique Stone materials, and each one has been exceptional. Their wide selection, competitive pricing, and professional service make them our go-to supplier for premium stone solutions.'
  },
  {
    id: 4,
    name: 'Amit Singh',
    role: 'Homeowner',
    company: 'Residential Client',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=33',
    text: 'The quartz countertops we chose from Unique Stone have completely transformed our kitchen. The quality is outstanding, and the installation team was professional and efficient. Our home looks absolutely stunning!'
  },
  {
    id: 5,
    name: 'Kavita Reddy',
    role: 'Commercial Developer',
    company: 'Urban Development Corp',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=20',
    text: 'Unique Stone provided the perfect stone solutions for our commercial building lobby. Their exotic stone varieties created a sophisticated and elegant atmosphere that perfectly represents our brand. Exceptional service from start to finish.'
  }
]

const TestimonialCard = ({ testimonial, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px', amount: 0.3 })

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8,
        delay: index * 0.1
      }
    }
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ 
        y: -8,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 border border-slate-100 transition-all duration-300 group"
    >
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4 sm:mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.svg
            key={i}
            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{
              delay: index * 0.1 + 0.2 + i * 0.05,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
        className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mb-6 sm:mb-8 font-lato italic"
      >
        "{testimonial.text}"
      </motion.p>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-4 sm:pt-6 border-t border-slate-100">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{
            delay: index * 0.1 + 0.4,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          className="relative"
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-slate-200 group-hover:ring-slate-300 transition-all duration-300"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
        </motion.div>
        <div className="flex-1 min-w-0">
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1 + 0.45, duration: 0.4 }}
            className="text-base sm:text-lg font-bold text-slate-900 font-montserrat"
          >
            {testimonial.name}
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
            className="text-xs sm:text-sm text-slate-600 font-lato"
          >
            {testimonial.role} • {testimonial.company}
          </motion.p>
        </div>
      </div>

      {/* Decorative Quote Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-200 text-6xl sm:text-7xl font-serif leading-none pointer-events-none"
      >
        "
      </motion.div>
    </motion.div>
  )
}

const Testimonials = () => {
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: '-50px' })

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
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-slate-200/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tl from-slate-200/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span 
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100/90 backdrop-blur-sm rounded-full border border-slate-200/60 mb-3 sm:mb-4 shadow-sm font-montserrat"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Client Reviews
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6 px-2 font-megalith"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium px-4 font-lato"
            variants={headerVariants}
          >
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Unique Stone
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Additional two cards in a centered row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8 max-w-4xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


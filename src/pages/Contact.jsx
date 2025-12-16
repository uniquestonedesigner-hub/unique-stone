import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Contact = () => {
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: '-50px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'uniquestonedesigner@gmail.com',
      link: 'mailto:uniquestonedesigner@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 8109668824',
      link: 'https://wa.me/918109668824'
    },
    {
      icon: '📍',
      title: 'Address',
      value: 'Bhopal, Madhya Pradesh, India',
      link: null
    }
  ]

  const ContactCard = ({ info, index }) => {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, margin: '-100px' })

    const content = (
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
          y: -8,
          scale: 1.02,
          transition: { 
            type: "spring",
            stiffness: 300,
            damping: 20
          }
        }}
        className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 border border-slate-100 transition-all duration-300 text-center group"
      >
        <div className="text-5xl sm:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{info.icon}</div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-montserrat">{info.title}</h3>
        {info.link ? (
          <a
            href={info.link}
            target={info.link.startsWith('http') ? '_blank' : '_self'}
            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
            className="text-base sm:text-lg text-slate-600 hover:text-slate-900 transition-colors duration-200 font-lato"
          >
            {info.value}
          </a>
        ) : (
          <p className="text-base sm:text-lg text-slate-600 font-lato">{info.value}</p>
        )}
      </motion.div>
    )

    return content
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
            Get In Touch
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-4 sm:mb-6 px-2 font-megalith"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Contact Us
            </span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium px-4 font-lato"
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Have a question or ready to start your project? We'd love to hear from you. Get in touch with our team today.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-megalith">
              Contact Information
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <ContactCard key={index} info={info} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-lg shadow-black/5 border border-slate-100"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-megalith">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2 font-montserrat">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all duration-200 font-lato"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 font-montserrat">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all duration-200 font-lato"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 }}
              >
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2 font-montserrat">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all duration-200 font-lato"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2 font-montserrat">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all duration-200 resize-none font-lato"
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 font-montserrat"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact


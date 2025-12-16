import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 font-montserrat'
  
  const variants = {
    primary: 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 focus:ring-slate-900',
    secondary: 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 focus:ring-indigo-500',
    outline: 'bg-white/95 backdrop-blur-sm text-slate-900 border-2 border-white/80 hover:border-white hover:bg-white focus:ring-slate-900',
    ghost: 'bg-transparent text-slate-900 hover:bg-slate-100/50 focus:ring-slate-900 shadow-none hover:shadow-none',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 focus:ring-red-500',
    success: 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 focus:ring-emerald-500'
  }

  const sizes = {
    sm: 'px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm',
    md: 'px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base',
    lg: 'px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg',
    xl: 'px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl'
  }

  const disabledStyles = disabled 
    ? 'opacity-50 cursor-not-allowed pointer-events-none' 
    : ''

  const widthStyles = fullWidth ? 'w-full' : ''

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${widthStyles} ${className}`

  if (to) {
    return (
      <motion.div
        whileHover={!disabled ? { scale: 1.02 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
        className="inline-block"
      >
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div
        whileHover={!disabled ? { scale: 1.02 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
        className="inline-block"
      >
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} gpu-accelerated`}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button


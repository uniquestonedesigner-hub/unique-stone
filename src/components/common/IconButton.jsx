import { motion } from 'framer-motion'

const IconButton = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ariaLabel,
  ...props
}) => {
  const baseStyles = 'rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900',
    secondary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
    outline: 'bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-50 focus:ring-gray-900',
    ghost: 'bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-900',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  }

  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-14 h-14'
  }

  const disabledStyles = disabled 
    ? 'opacity-50 cursor-not-allowed pointer-events-none' 
    : ''

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      whileHover={!disabled ? { scale: 1.1 } : {}}
      whileTap={!disabled ? { scale: 0.9 } : {}}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default IconButton


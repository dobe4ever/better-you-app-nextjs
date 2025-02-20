// components/layout/header-container/header-date.tsx
import { motion } from 'framer-motion'

export function HeaderDate() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{ delay: 0.1, duration: 0.2 }}
      className="text-center"
    >
      <h1 className="text-orange-main">
        <span className="tracking-tighter font-bold text-2xl">FRIDAY DECEMBER 6, 2024</span>
      </h1>
    </motion.div>
  )
}


// components/layout/header/date-section.tsx
import { motion } from 'framer-motion'

export function DateSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{ delay: 0.1, duration: 0.2 }}
      className="text-center"
    >
      <h1 className="text-orange-main">
        <span className="tracking-tighter font-bold text-title-orange">FRIDAY DECEMBER 6, 2024</span>
      </h1>
    </motion.div>
  )
}

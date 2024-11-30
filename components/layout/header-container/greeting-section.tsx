// components/layout/header-container/greeting-section.tsx
import { motion } from 'framer-motion'

export function GreetingSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{ delay: 0.1, duration: 0.2 }}
      className="text-center"
    >
      <h1 className="text-white">
        <span className="tracking-tighter font-bold text-lg">READY TO CRASH SOME HABITS?</span>
      </h1>
    </motion.div>
  )
}
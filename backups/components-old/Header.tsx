
// components/Header.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TopBar } from './TopBar'

interface HeaderProps {
  username?: string
  avatarUrl?: string
}

export function Header({ username = 'Brotastic', avatarUrl = 'https://i.pravatar.cc/300' }: HeaderProps) {
  const [fadePercentage, setFadePercentage] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollPosition = window.scrollY
        const headerHeight = headerRef.current.offsetHeight
        const newFadePercentage = Math.max(0, Math.min(100, (scrollPosition / headerHeight) * 100))
        setFadePercentage(newFadePercentage)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative" >

        <TopBar />

        {/* Centered avatar container */}
        <div className="w-full">
          {/* Avatar */}
          <div className="w-full flex justify-center z-10">
            <div className="rounded-full shadow-lg border-4 border-orange-300/25 overflow-hidden">
              <img
                src={avatarUrl}
                alt="Avatar"
                className="w-56 h-56 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main greeting text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 10}}
          transition={{ delay: 0.1, duration: 0.2 }}
          className="text-center"
        >
          <h1 className="text-white">
            <span className="tracking-tighter font-bold text-2xl">READY TO CRASH SOME HABITS?</span>
          </h1>
        </motion.div>

    </div>
  )
}
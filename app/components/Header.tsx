'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TopBar } from './TopBar'

interface HeaderProps {
  username?: string
  avatarUrl?: string
}

export function Header({ username = 'Bruh!', avatarUrl = 'https://i.pravatar.cc/300' }: HeaderProps) {
  const [fadePercentage, setFadePercentage] = useState(100)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollPosition = window.scrollY
        const headerHeight = headerRef.current.offsetHeight
        const newFadePercentage = Math.max(0, Math.min(100, (1 - scrollPosition / headerHeight) * 100))
        setFadePercentage(newFadePercentage)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className="relative w-full transition-opacity duration-300"
      style={{ opacity: `${fadePercentage / 100}` }}
    >
      <TopBar username={username} avatarUrl={avatarUrl} />

      {/* Background square with curve */}
      <div className="relative w-full">
        <div className="relative w-full pb-[100%]">
          <div className="absolute inset-0 bg-orange-400">
            <div 
              className="absolute bottom-0 left-0 right-0 h-[50%] bg-white"
              style={{
                clipPath: 'ellipse(75% 100% at 50% 100%)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Main greeting text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute left-0 right-0 top-[25%] z-10 text-center"
      >
        <h1 className="px-4 font-bold tracking-tight text-white">
          <span className="inline-block text-4xl">READY TO CRASH SOME HABITS?</span>
        </h1>
      </motion.div>

      {/* Centered avatar container */}
      <div className="absolute left-1/2 top-1/2 w-1/2 -translate-x-1/2 -translate-y-1/3">
        <div className="relative w-full pb-[100%]">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Avatar
              className="h-full w-full border-4 border-white/20 shadow-lg"
            >
              <AvatarImage src={avatarUrl} alt={username} />
              <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-[15%] left-0 right-0 text-center text-lg text-orange-900/75"
      >
        Let&apos;s make today count!
      </motion.p>
    </header>
  )
}
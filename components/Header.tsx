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
      <div className="relative w-full pb-[65%]">
        {/* Skewed orange overlay */}
        <div className="h- flex justify-center items-center">
          <div className="absolute -top-5 left-0 h-1/2 w-1/2 bg-orange-400 transform -skew-y-6"></div>
          <div className="absolute -top-5 right-0 h-1/2 w-1/2 bg-orange-400 transform skew-y-6"></div>
        </div>
      </div>

      {/* Centered avatar container */}
      <div className="min-w-screen">
        <div className="absolute left-0 right-0 top-12"> 
          <div className=" ">

            {/* Avatar */}
            <div className="w-full flex justify-center z-10">
              <div className="rounded-full shadow-xl border-4 border-orange-300 overflow-hidden">
                <img
                  src="https://i.pravatar.cc/128"
                  alt="Avatar"
                  className="w-54 h-54 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main greeting text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute left-0 right-0 bottom-0 text-center"
      >
        <h1 className="font-bold tracking-tight text-orange-400">
          <span className="inline-block text-xl">READY TO CRASH SOME HABITS?</span>
        </h1>
      </motion.div>
    </header>
  )
}
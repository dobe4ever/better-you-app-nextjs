'use client'

import { useState, useRef, useEffect } from 'react'
import { FloatingChatButton } from '../components/layout/floating-button/floating-chat-button'
import { HeaderContainer } from '../components/layout/header-container/header-container'
import { TipsCarousel } from '../components/layout/sticky-top/tips-carousel'
import { WidgetsContainer } from '../components/layout/widgets-container/widgets-container'

export default function HomePage() {
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
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-black/0 via-black/25 to-black/100 relative">
      
      <FloatingChatButton className="z-50" />

      <div ref={headerRef} className="relative z-10">
        <HeaderContainer />
        <div 
          className="absolute top-0 w-full h-[450px] bg-white pointer-events-none" 
          style={{ opacity: fadePercentage / 100, zIndex: 20 }} 
        />
      </div>

      <div className="sticky top-0 z-50">
        <TipsCarousel />
      </div>

      <div className="relative z-30">
        <WidgetsContainer />
      </div>
    
    </div>
  )
}


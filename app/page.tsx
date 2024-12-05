// app/page.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import FloatButton from '../components/layout/floating-button/floating-chat-button'
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
    // <div className="min-h-screen min-w-screen bg-gradient-to-b from-black/0 via-black/25 to-black/100 relative">
    // <div className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 min-h-screen w-full">
    <div className="relative min-h-screen min-w-screen bg-white">

      <FloatButton />

      <div ref={headerRef} className="relative z-10">
        <HeaderContainer />
        <div 
          className="absolute top-0 w-full h-[450px] bg-white pointer-events-none" 
          style={{ opacity: fadePercentage / 100, zIndex: 20 }} 
        />
      </div>

      <div className="sticky top-0 z-30">
        <TipsCarousel />
      </div>

      <div className="relative z-20">
        <WidgetsContainer />
      </div>
    
    </div>
  )
}


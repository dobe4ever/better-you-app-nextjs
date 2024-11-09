// app/page.tsx
'use client'

import { useEffect, useRef } from 'react'
import { Header } from '../components/Header'
import { AiTipsCarousel } from '../components/AiTipsCarousel'
import { Announcement } from '../components/Announcement'
import { Habits } from '../components/Habits'
import { Todos } from '../components/Todos'
import { QuickAccess } from '../components/QuickAccess'
import { AdsCarousel } from '../components/AdsCarousel'
import { LifeScoreAndCourses } from '../components/LifeScoreAndCourses'

export default function Dashboard() {
  const headerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && carouselRef.current) {
        const headerBottom = headerRef.current.getBoundingClientRect().bottom
        if (headerBottom <= 0) {
          carouselRef.current.style.position = 'fixed'
          carouselRef.current.style.top = '0'
          carouselRef.current.style.left = '0'
          carouselRef.current.style.right = '0'
          carouselRef.current.style.zIndex = '50'
        } else {
          carouselRef.current.style.position = 'relative'
          carouselRef.current.style.top = 'auto'
          carouselRef.current.style.left = 'auto'
          carouselRef.current.style.right = 'auto'
          carouselRef.current.style.zIndex = '50'
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-">
      
      <div ref={headerRef} className="-mb- px-">
        <Header />
      </div>

      <div ref={carouselRef} className="bg-white rounded-t-3xl pb-4 px-16">
        <AiTipsCarousel />
      </div>

      <main className="bg-white p-2">
        <div className="space-y-2">
          <Announcement />
          <Habits />
          <Todos />
          <QuickAccess />
          <AdsCarousel />
          <LifeScoreAndCourses />
        </div>
      </main>
    </div>
  )
}
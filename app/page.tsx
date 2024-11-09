// app/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { AiTipsCarousel } from '../components/AiTipsCarousel'
import { Announcement } from '../components/Announcement'
import { Habits } from '../components/Habits'
import { Todos } from '../components/Todos'
import { QuickAccess } from '../components/QuickAccess'
import { AdsCarousel } from '../components/AdsCarousel'
import { LifeScoreAndCourses } from '../components/LifeScoreAndCourses'

export default function Component() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    // Set initial scroll position
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      {/* Sticky Top */}
      <div className="sticky top-0 z-30 w-full">
        <AiTipsCarousel />
      </div>
      {/* Widgets wrapper */}
      <main className="flex flex-col w-full bg- py-6 px-3 space-y-3">
        <Announcement />
        <Habits />
        <Todos />
        <QuickAccess />
        <AdsCarousel />
        <LifeScoreAndCourses />
      </main>
    </div>
  )
}


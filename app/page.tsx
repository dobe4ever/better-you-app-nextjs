// app/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { AiTipsCarousel } from '../components/AiTipsCarousel'
import { Announcement } from '../components/Announcement'
import { Habits } from '../components/Habits'
import { Todos } from '../components/Todos'
import { GridWidgets } from '../components/GridWidgets'
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
      <main className="flex flex-col w-full bg- py-4 px-3 space-y-2">
        <Announcement />
        <Habits />
        <Todos />
        <GridWidgets />
        <AdsCarousel />
        <LifeScoreAndCourses />
      </main>
    </div>
  )
}


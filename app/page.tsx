// app/page.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { Header } from '@/components/header/Header'
import { StickyTop } from '@/components/sticky-top/StickyTop'
import { WidgetsGrid } from '@/components/widegets-grid/WidgetsGrid'
import { ModalFull } from '@/components/ui/modal/ModalFull'
import { HabitsFull } from '@/components/widegets-grid/habits/HabitsFull'
import { TodosFull } from '@/components/widegets-grid/todos/TodosFull'
import { CheckinFull } from '@/components/widegets-grid/checkin/CheckinFull'
import { AnalyticsFull } from '@/components/widegets-grid/analytics/AnalyticsFull'
import { BadgesFull } from '@/components/widegets-grid/badges/BadgesFull'
import { ShopFull } from '@/components/widegets-grid/shop/ShopFull'
import { CoursesFull } from '@/components/widegets-grid/courses/CoursesFull'
import { WheelFull } from '@/components/widegets-grid/wheel/WheelFull'
import { ChatbotButton } from '@/components/floating-btn/ChatbotButton'
import { ChatbotFull } from '@/components/floating-btn/ChatbotFull'

export default function Home() {
  const [fadePercentage, setFadePercentage] = useState(0)
  const [activeModalFull, setActiveModalFull] = useState<string | null>(null)
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

  useEffect(() => {
    if (activeModalFull) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [activeModalFull])

  const openModalFull = (ModalFullName: string) => {
    setActiveModalFull(ModalFullName)
  }

  const closeModalFull = () => {
    setActiveModalFull(null)
  }

  return (
    <div className="relative min-h-screen w-full bg-bg-orange">
      <ChatbotButton onClick={() => openModalFull('chatbot')} />

      <div ref={headerRef} className="relative z-10">
        <Header />
        <div
          className="absolute top-0 w-full h-[450px] bg-white pointer-events-none"
          style={{ opacity: fadePercentage / 100, zIndex: 20 }}
        />
      </div>

      <div className="sticky top-0 z-30">
        <StickyTop />
      </div>

      <div className="relative z-20">
        <WidgetsGrid
          onHabitsClick={() => openModalFull('habits')}
          onTodosClick={() => openModalFull('todos')}
          onCheckinClick={() => openModalFull('checkin')}
          onAnalyticsClick={() => openModalFull('analytics')}
          onWheelClick={() => openModalFull('wheel')}
          onBadgesClick={() => openModalFull('badges')}
          onAdsClick={() => openModalFull('ads')}
          onShopClick={() => openModalFull('shop')}
          onCoursesClick={() => openModalFull('courses')}
        />
      </div>

      {activeModalFull && (
        <ModalFull onClose={closeModalFull}>
          {activeModalFull === 'habits' && <HabitsFull />}
          {activeModalFull === 'todos' && <TodosFull />}
          {activeModalFull === 'checkin' && <CheckinFull />}
          {activeModalFull === 'analytics' && <AnalyticsFull />}
          {activeModalFull === 'wheel' && <WheelFull />}
          {activeModalFull === 'badges' && <BadgesFull />}
          {activeModalFull === 'shop' && <ShopFull />}
          {activeModalFull === 'courses' && <CoursesFull />}
          {activeModalFull === 'chatbot' && <ChatbotFull />}
        </ModalFull>
      )}
    </div>
  )
}
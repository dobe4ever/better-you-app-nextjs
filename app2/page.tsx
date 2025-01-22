// app2/page.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { FloatingChatBtn } from '@/components/layout/floating-chat-btn'
import { HeaderArea } from '@/components/layout/header-area'
import { StickyTop } from '@/components/layout/sticky-top'
import { WidgetsGrid } from '@/components2/widegets-grid/WidgetsGrid'
import { Modal } from '@/components/ui/modal'
import { HabitsFull } from '@/components2/widegets-grid/habits/HabitsFull'
import { TodosFull } from '@/components2/widegets-grid/todos/TodosFull'
import { CheckinFull } from '@/components2/widegets-grid/checkin/CheckinFull'
import { AnalyticsFull } from '@/components2/widegets-grid/analytics/AnalyticsFull'
import { WheelFull } from '@/components2/widegets-grid/wheel/WheelFull'
import { ChatbotFull } from '@/components2/floating-btn/ChatbotFull'

export default function Home() {
  const [fadePercentage, setFadePercentage] = useState(0)
  const [activeModal, setActiveModal] = useState<string | null>(null)
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

  const openModal = (modalName: string) => {
    setActiveModal(modalName)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <div className="relative min-h-screen min-w-screen bg-bg-orange">
      <FloatingChatBtn onClick={() => openModal('chat')} />

      <div ref={headerRef} className="relative z-10">
        <HeaderArea />
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
          onHabitsClick={() => openModal('habits')}
          onTodosClick={() => openModal('todos')}
          onCheckinClick={() => openModal('checkin')}
          onAnalyticsClick={() => openModal('analytics')}
          onWheelClick={() => openModal('wheel')}
          onBadgesClick={() => openModal('badges')}
          onAdsClick={() => openModal('ads')}
          onShopClick={() => openModal('shop')}
          onCoursesClick={() => openModal('courses')}
                 />
      </div>

      {activeModal && (
        <Modal onClose={closeModal}>
          {activeModal === 'habits' && <HabitsFull />}
          {activeModal === 'todos' && <TodosFull />}
          {activeModal === 'chat' && <ChatbotFull />}
          {activeModal === 'checkin' && <CheckinFull />}
          {activeModal === 'analytics' && <AnalyticsFull />}
          {activeModal === 'wheel' && <WheelFull />}
        </Modal>
      )}
    </div>
  )
}



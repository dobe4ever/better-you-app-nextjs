// app/page.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { FloatingChatBtn } from '@/old/components/layout/floating-chat-btn'
import { HeaderArea } from '@/old/components/layout/header-area'
import { StickyTop } from '@/old/components/layout/sticky-top'
import { WidgetsArea } from '@/old/components/layout/widgets-area'
import { Modal } from '@/old/components/ui/oldmodal'
import { HabitsPage } from '@/old/components/fullscreen/habits-page'
import { TodosPage } from '@/old/components/fullscreen/todos-page'
import { ChatbotPage } from '@/old/components/fullscreen/chatbot-page'

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
        <WidgetsArea
          onHabitsClick={() => openModal('habits')}
          onTodosClick={() => openModal('todos')}
        />
      </div>

      {activeModal && (
        <Modal onClose={closeModal}>
          {activeModal === 'habits' && <HabitsPage />}
          {activeModal === 'todos' && <TodosPage />}
          {activeModal === 'chat' && <ChatbotPage />}
        </Modal>
      )}
    </div>
  )
}



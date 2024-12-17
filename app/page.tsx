// // app/page.tsx
// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { FloatingChatBtn } from '../components/layout/floating-chat-btn'
// import { HeaderArea } from '../components/layout/header-area'
// import { StickyTop } from '../components/layout/sticky-top'
// import { WidgetsArea } from '../components/layout/widgets-area'

// export default function HomePage() {
//   const [fadePercentage, setFadePercentage] = useState(0)
//   const headerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (headerRef.current) {
//         const scrollPosition = window.scrollY
//         const headerHeight = headerRef.current.offsetHeight
//         const newFadePercentage = Math.max(0, Math.min(100, (scrollPosition / headerHeight) * 100))
//         setFadePercentage(newFadePercentage)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     // <div className="bg-gradient-to-r from-orange-main via-orange-300 to-orange-main min-h-screen w-full">
//     <div className="relative min-h-screen min-w-screen bg-white">

//       <FloatingChatBtn onClick={function (): void {
//         throw new Error('Function not implemented.')
//       } } />

//       <div ref={headerRef} className="relative z-10">
//         <HeaderArea />
//         <div 
//           className="absolute top-0 w-full h-[450px] bg-white pointer-events-none" 
//           style={{ opacity: fadePercentage / 100, zIndex: 20 }} 
//         />
//       </div>

//       <div className="sticky top-0 z-30">
//         <StickyTop />
//       </div>

//       <div className="relative z-20">
//         <WidgetsArea onHabitsClick={function (): void {
//           throw new Error('Function not implemented.')
//         } } onTodosClick={function (): void {
//           throw new Error('Function not implemented.')
//         } } />
//       </div>
    
//     </div>
//   )
// }


// app/page.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { FloatingChatBtn } from '../components/layout/floating-chat-btn'
import { HeaderArea } from '../components/layout/header-area'
import { StickyTop } from '../components/layout/sticky-top'
import { WidgetsArea } from '../components/layout/widgets-area'
import { Modal } from '../components/ui/modal'
import { HabitsPage } from '../components/fullscreen/habits-page'
import { TodosPage } from '../components/fullscreen/todos-page'
import { ChatbotPage } from '../components/fullscreen/chatbot-page'

export default function HomePage() {
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



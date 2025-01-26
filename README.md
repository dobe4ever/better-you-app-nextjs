This React TS web app doesnt have the typical web navigation or layout elements, or main content area. Is more like a native mobile app that happens to run on the browser. After login/signup, it starts up a home screen with a top bar with hamburguer menu for settings, notifications & user profile, then a user card with some info below it, a grid with several widgets below it, and a fixed floating chat button near the bottom right. Every interactable element from the home screen opens up its corresponding UI for the user to take actions, or set settings, visualize data, or render whatever it might be. For example, the hamburger or notifications or user profile buttons in the top bar, open up a drop down menu with options, and clicking the particular option, opens up whatever UI. Once the user is done with the particular UI, it can be closed to go back to the home screen. Same for each widget, clicking any of the widgets in the grid, a full screen component opens up representing that widget. That full screen component might have multiple components that expand/contract to show/hide content or options, or flip to access more stuff in the back, or slide, or display a pop up, or it might be for the particular case, the point is, instead of having pages for navigations, this app displays UI components in levels where each component can be closed after usage, as a way of navigating back to the 'base level' so to speak, which is the home screen. 

So far I created the entire home screen with all the interactable buttons & widgets, and I'm using 'modals' for the full screens that open up when clicking any of the widgets or the floating chat button. There's a lot more details about the app, but the idea is to make this setup where I have a separate folder inside 'components/' for each interactable element in the home screen, like so:

```txt
.
app/
├── globals.css
├── layout.tsx
├── page.tsx
├── components/
│   ├── floating-btn/
│   │   ├── ChatbotButton.tsx
│   │   ├── ChatbotFull.tsx
│   │   └── ChatbotFullContent.tsx
│   ├── header/
│   │   ├── top-bar/
│   │   ├── user-card/
│   │   └── Header.tsx
│   ├── sticky-top/
│   │   └── StickyTop.tsx
│   ├── widegets-grid/
│   │   ├── ads/
│   │   ├── analytics/
│   │   ├── badges/
│   │   ├── checkin/
│   │   ├── courses/
│   │   ├── habits/
│   │   ├── promo-card/
│   │   ├── shop/
│   │   ├── todos/
│   │   ├── wheel/
│   │   └── WidgetsGrid.tsx
│   └── ui/modal/ModalFull.tsx
├── lib/
...
```

Then use modals for the interfaces that open up when clicking or interacting with anything from the home screen and the interfaces that might open or display when clicking or interacting with elements in those interfaces that opened up from the home screen and so on all the way down.

Here's some related code so far for context:

```tsx
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

  const openModalFull = (ModalFullName: string) => {
    setActiveModalFull(ModalFullName)
  }

  const closeModalFull = () => {
    setActiveModalFull(null)
  }

  return (
    <div className="relative min-h-screen min-w-screen bg-bg-orange">
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
```

```tsx
// components/ui/modal/ModalFull.tsx

import React from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface CrossBtnProps {
  onClick: () => void;
}

export function CrossBtn({ onClick }: CrossBtnProps) {
  return (
    <div className="[&_svg]:size-5">
      <Button variant="ghost" size="icon" className="text-orange-main" onClick={onClick}>
        <X />
      </Button>
    </div>
  )
}


interface ModalFullProps {
  onClose: () => void
  children: React.ReactNode
}

export const ModalFull: React.FC<ModalFullProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 items-center bg-white border z-50">

      <div className="fixed right-2 top-2" >
        <CrossBtn onClick={onClose} />
      </div>

      <div className="fixed right-0 left-0 top-10" >
      </div>

      <div className="flex flex-col justify-between p-3 items-center">
        {children}
      </div>

    </div>
  )
}
```

```tsx
// components/ui/widget.tsx

import { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'

interface WidgetProps {
  title: string
  children: ReactNode
  onClick?: () => void
  rightIcon?: ReactNode
  className?: string
}

// Common Widget component
export function Widget({
  title,
  children,
  onClick,
  rightIcon = <ChevronRight size={16} className="text-orange-main" />,
  className = '',
}: WidgetProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-3 border shadow-md ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-title-card">{title}</h2>
        {rightIcon}
      </div>
      {children}
    </div>
  )
}
```

```tsx
// components/widegets-grid/WidgetsGrid.tsx
'use client'

import { PromoCard } from './promo-card/PromoCard'
import { HabitsWidget } from './habits/HabitsWidget'
import { TodosWidget } from './todos/TodosWdiget'
import { CheckinWidget } from './checkin/CheckinWidget'
import { AnalyticsWidget } from './analytics/AnalyticsWdiget'
import { WheelWidget } from './wheel/WheelWdiget'
import { BadgesWidget } from './badges/BadgesWdiget'
import { AdsWidget } from './ads/AdsWidget'
import { ShopWidget } from './shop/ShopWdiget'
import { CoursesWidget } from './courses/CoursesWdiget'

interface WidgetsGridProps {
  onHabitsClick: () => void
  onTodosClick: () => void
  onCheckinClick: () => void
  onAnalyticsClick: () => void
  onWheelClick: () => void
  onBadgesClick: () => void
  onAdsClick: () => void
  onShopClick: () => void
  onCoursesClick: () => void
}

export function WidgetsGrid({ onHabitsClick, onTodosClick, onCheckinClick, onAnalyticsClick, onWheelClick, onBadgesClick, onAdsClick, onShopClick, onCoursesClick }: WidgetsGridProps) {
  return (
    <div className="flex flex-col overflow-hidden w-full bg-white p-2 gap-2 rounded-t-xl">
      <PromoCard />
      <HabitsWidget onHabitsClick={onHabitsClick} />
      <TodosWidget onTodosClick={onTodosClick} />
      <div className="grid grid-cols-2 gap-2">
        <div><CheckinWidget onCheckinClick={onCheckinClick} /></div>
        <div><AnalyticsWidget onAnalyticsClick={onAnalyticsClick} /></div>
        <div><WheelWidget onWheelClick={onWheelClick} /></div>
        <div><BadgesWidget onBadgesClick={onBadgesClick} /></div>
      </div>
      <AdsWidget />
      <div className="grid grid-cols-2 gap-2">
        <div><ShopWidget onShopClick={onShopClick} /></div>
        <div><CoursesWidget onCoursesClick={onCoursesClick} /></div>
      </div>
    </div>
  )
}
```

```tsx
// components/widegets-grid/habits/HabitsWidget.tsx

import { Widget } from '@/components/ui/widget'

// HabitsWidget component
export function HabitsWidget({ onHabitsClick }: { onHabitsClick: () => void }) {
  return (
    <Widget title="Today's Habits" onClick={onHabitsClick} className="z-10">
      <div className="flex items-end justify-between mb-2">
        <div>
          <p className="text-description-card">Completed</p>
          <p className="text-xl font-bold">8/10</p>
        </div>
        <p className="text-big-percent-number">80%</p>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
          style={{ width: '80%', transition: 'width 1s ease-in-out' }}
        />
      </div>
    </Widget>
  )
}
```

```tsx
// components/widegets-grid/habits/HabitsFullContent.tsx

'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, Eye, EyeOff, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { HabitsList } from "@/components/widegets-grid/habits/HabitsList"
import { ChallengeCard } from "./ChallengeCard"
import CircularSlider from "./CircularSlider"
import type { HabitCard } from "@/types/list"

interface Habit {
  id: string;
  title: string;
  completed: boolean;
}

//...

```

```tsx
// components/widegets-grid/habits/HabitsFull.tsx

import React from 'react'
import { HabitsFullContent } from './HabitsFullContent'

export const HabitsFull: React.FC = () => {
  return (
    <>
      {/* title */}
      <div className="fixed left-3 top-3 text-title-card">
        Habits
      </div>

      <>
        {/* content */}
        <div className="fixed top-12 right-0 left-0 bottom-0 rounded-t-2xl p-4 bg-gradient-orange shadow-lg">
          <HabitsFullContent/>
        </div>
      </>
    </>
  )
}
```

```tsx
// components/widegets-grid/habits/HabitCard.tsx

interface HabitCardProps {
    title: string
    key: string
  }
  
  export function HabitCard({ title }: HabitCardProps) {
    return (
      <div className="p-3 mb-2 bg-white rounded-lg shadow-sm">
        <p className="text-sm text-gray-700">{title}</p>
      </div>
    )
  }
```

```tsx
// components/widegets-grid/habits/ChallengeCard.tsx

'use client'

// ChallengeCard.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircularSlider } from './CircularSlider';

interface ChallengeCardProps {
  onStart?: (settings: { intensity: number; duration: number }) => void;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ onStart }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [intensity, setIntensity] = useState(25);
  const [duration, setDuration] = useState(1);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <motion.div
      layout
      className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Collapsed State - Challenge Button */}
      <AnimatePresence mode="wait">
        {!isExpanded && (
          <motion.div
            key="challenge-button"
            className="p-6 cursor-pointer"
            onClick={() => setIsExpanded(true)}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center"
                  >
                    <span className="text-2xl">🚀</span>
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Start a Challenge!</h3>
                  <p className="text-gray-600">Push your limits, level up your game</p>
                </div>
              </div>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <span className="text-2xl">👉</span>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Expanded State - Challenge Setup */}
        {isExpanded && (
          <motion.div
            key="challenge-setup"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-6"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Challenge Setup</h2>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {/* Intensity Selector */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Challenge Intensity</h3>
                <div className="flex justify-center">
                  <CircularSlider
                    value={intensity}
                    onChange={setIntensity}
                    min={25}
                    max={100}
                  />
                </div>
              </div>

              {/* Duration Selector */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Challenge Duration</h3>
                <div className="flex gap-2 flex-wrap">
                  {months.map((month) => (
                    <motion.button
                      key={month}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setDuration(month)}
                      className={`px-4 py-2 rounded-full ${
                        duration === month
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {month}M
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Challenge Summary */}
              <div className="bg-orange-50 p-4 rounded-xl">
                <h4 className="font-semibold text-orange-800">Challenge Summary</h4>
                <p className="text-orange-700">
                  Complete {intensity}% of your habits daily for {duration} month
                  {duration > 1 ? 's' : ''}
                </p>
              </div>

              {/* Start Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onStart?.({ intensity, duration });
                  setIsExpanded(false);
                }}
                className="w-full py-4 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                Start Challenge 🔥
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ChallengeCard;
```

```tsx
// types/list.tsx

export interface HabitCard {
    id: string
    title: string
    completed: boolean
  }
  
  export interface HabitsListProps {
    title: string
    cards: HabitCard[]
    onAddCard: (title: string) => void
  }
```

Basically now if I want to create or edit the 'challenge card' for example, I can ask an assistant to write the entire file `ChallengeCard.tsx` and paste the entire content into the file and the component will render in the right position in the full screen interface that opens up when I click on the habits widget from the home screen.

Same if I click for example the floating chat button, a full screen interface opens up, right now it only has the title and a blank area where i can create content in the form of individual file components. Here's the related code:

```tsx
// components/floating-btn/ChatbotButton.tsx
'use client'

import { Bot } from 'lucide-react'
import { ReactNode } from 'react'

interface ChatbotButtonProps {
  title?: string
  children?: ReactNode
  onClick?: () => void
  BotIcon?: ReactNode
  className?: string
}

export function ChatbotButton({
  title = "Chatbot",
  children,
  onClick,
  BotIcon = <Bot size={46} className="border-2 border-white/50 bg-gradient-orange text-white rounded-full shadow-md p-1 pb-2" />,
  className = '',
}: ChatbotButtonProps) {
  return (
    <div
      className={`z-50 fixed bottom-4 right-4 ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
      onClick={onClick}
    >
      <div className="">
        {BotIcon}
      </div>
      {children}
    </div>
  )
}
```

```tsx
// components/floating-btn/ChatbotFull.tsx

import React from 'react'
import { ChatbotFullContent } from "./ChatbotFullContent"

export const ChatbotFull: React.FC = () => {
  return (
    <>
      {/* title */}
      <div className="fixed left-3 top-3 text-title-card">
      AI Coach
      </div>

      <>
      {/* content */}
        <div className="fixed top-12 right-0 left-0 bottom-0 rounded-t-2xl p-2 border">
          <ChatbotFullContent/>
        </div>
      </>
    </>
  )
}
```

```tsx
// components/floating-btn/ChatbotFullContent.tsx

export function ChatbotFullContent() {
  return (
    <div className="w-full h-full border-">
      {/* content */}
      Content...
    </div>
  )
}
```

Same setup for each widget in the widget grid in the home screen. I can create individual file components in the corresponding dir, then import it & write the rendering code to position it in the `SomethingFullContent.tsx`. With this setup I can ask a coding assistant to create the individual components as a single tsx file, without having to explain the app or give any context or info, just copy and paste the entire code into the file, and it should render correctly.

Currently I can click any widget in the home screen and it opens up a full screen interface with the corresponding title, blank area to add the content, and the cross which i can click and the interface goes away so the home screen is visible again. 

The issue is that the home screen's scroll bar stays there even when i click any widget and the full screen interface for that opens up. Meaning that regardles of the full screen interface having or not content, I can scroll but the content in the home screen behind the full screen interface is what scrolls. 

How do i fix this so that all existing and future full screen interfaces, once active, the scroll happens there and not in the home screen?
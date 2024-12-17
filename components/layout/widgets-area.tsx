// components/layout/widgets-area.tsx
'use client'

import { useState } from 'react'
import { ReactNode } from 'react'
import { ChevronRight, Bot, Store, GraduationCap, LoaderPinwheel, Trophy, X, TrendingUp } from 'lucide-react'

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
      className={`bg-white rounded-3xl p-3 border shadow-md ${
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

// UndelayWidget component
export function UndelayWidget() {
  const [showWidget, setShowWidget] = useState(true)

  if (!showWidget) return null

  return (
    <div
      className="relative flex items-center justify-between bg-gray-100 rounded-3xl pt-8 pl-2 pr-2 -mb-12 shadow-none border-2 border-white max-w-[100%] mx-"
    >
      {/* Left side: Description */}
      <div className="flex flex-col">
        <p className="text-xs -mt-6">
          50% off premium features, limited time
        </p>
        <p className="text-xs mt-2 mb-4">
          50% off premium features, limited time 
        </p>
      </div>
      {/* Right side: Link and Close */}
      <div className="flex flex-col">
        <div className="flex items-center mb-2 space-x-1">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-orange-main font-semibold -mt-8"
          >
            Upgrade Now
          </a>
          <button
            className="text-orange-main -mt-8"
            onClick={(e) => {
              e.stopPropagation() // Prevent parent handlers (if any)
              setShowWidget(false)
            }}
          >
            <X size={14} />
          </button>
        </div>
        <div className="flex items-center mb-2 space-x-1">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-orange-main font-semibold -mt-4"
          >
            Upgrade Now
          </a>
          <button
            className="text-orange-main mb-"
            onClick={(e) => {
              e.stopPropagation() // Prevent parent handlers (if any)
              setShowWidget(false)
            }}
          >
            <X size={14} />
          </button>
        </div>
      </div>

    </div>
  )
}

// AnnouncementWidget component
export function AnnouncementWidget() {
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  if (!showAnnouncement) return null

  return (
    <Widget
      className="relative overflow-hidden"
      title="Premium Upgrade"
      rightIcon={
        <button
          className="absolute top-4 right-4 text-orange-main"
          onClick={(e) => {
            e.stopPropagation()  // Prevents triggering any parent onClick handlers
            setShowAnnouncement(false)
          }}
        >
          <X size={16} />
        </button>
      }
    >
      <p className="text-description-card">
        50% off premium features, limited time
      </p>
      <div className="my-2">
        <a
          href="https://vercel.com/dobe4evers-projects/vitejs-node-ts-tailwind-better-you"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-orange-main text-orange-main px-2 py-1.5 rounded-full"
        >
          Claim Offer
        </a>
      </div>
    </Widget>
  )
}

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

// TodosWidget component
export function TodosWidget({ onTodosClick }: { onTodosClick: () => void }) {
  return (
    <Widget title="Today's Todos" onClick={onTodosClick}>
      <div className="flex items-end justify-between mb-2">
        <div>
          <p className="text-description-card">Completed</p>
          <p className="text-xl font-bold">3/12</p>
        </div>
        <p className="text-big-percent-number">29%</p>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
          style={{ width: '29%', transition: 'width 1s ease-in-out' }}
        />
      </div>
    </Widget>
  )
}

// SuccessCoachWidget component
export function SuccessCoachWidget() {
  return (
    <Widget title="AI Check-in" onClick={() => {}} className="flex flex-col gap-2">
      <Bot size={32} />
      <div className="text-description-card mt-6">
        24/7 AI guidance and support
      </div>
    </Widget>
  )
}

// AnalyticsWidget component
export function AnalyticsWidget() {
  return (
    <Widget title="Analytics" onClick={() => {}} className="flex flex-col gap-2">
      <div className="space-y-2">
        <div>
          <TrendingUp size={32} />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between">
            <div className="text-description-card">Last 7 days</div>
            <div className="text-orange-main font-bold">80%</div>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-orange rounded-full"></div>
          </div>
          <div className="flex justify-between">
            <div className="text-description-card">Last 30 days</div>
            <div className="text-gray-900 font-bold">48%</div>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-gray-900 rounded-full"></div>
          </div>
        </div>
      </div>
    </Widget>
  )
}

// LifeScoreWidget component
export function LifeScoreWidget() {
  return (
    <Widget title="Life Score" onClick={() => {}} className="flex flex-col gap-2">
      <LoaderPinwheel size={32} />
      <div className="text-description-card mt-2">
        Visualize progress across all life areas
      </div>
    </Widget>
  )
}

// BadgesWidget component
export function BadgesWidget() {
  return (
    <Widget title="Badges" onClick={() => {}} className="flex flex-col gap-2">
      <Trophy size={32} />
      <div className="text-description-card mt-2">
        Earn rewards by hitting milestones
      </div>
    </Widget>
  )
}

// AdsCarouselWidget component
export function AdsCarouselWidget() {
  return (
    <Widget title="Featured Ads">
      <div className="text-description-card mt-2">
        Ads carousel content goes here
      </div>
    </Widget>
  )
}

// ShopWidget component
export function ShopWidget() {
  return (
    <Widget title="Shop" onClick={() => {}} className="flex flex-col gap-2">
      <Store size={32} />
      <div className="text-description-card mt-2">
        Explore products and services all in one place
      </div>
    </Widget>
  )
}

// CoursesWidget component
export function CoursesWidget() {
  return (
    <Widget title="Courses" onClick={() => {}} className="flex flex-col gap-2">
      <GraduationCap size={32} />
      <div className="text-description-card mt-2">
        Curated learning paths to track your journey
      </div>
    </Widget>
  )
}

interface WidgetsAreaProps {
  onHabitsClick: () => void
  onTodosClick: () => void
}

export function WidgetsArea({ onHabitsClick, onTodosClick }: WidgetsAreaProps) {
  return (
    <div className="flex flex-col overflow-hidden w-full bg-white p-2 gap-2 rounded-t-xl">
      <UndelayWidget />
      {/* <AnnouncementWidget /> */}
      <HabitsWidget onHabitsClick={onHabitsClick} />
      <TodosWidget onTodosClick={onTodosClick} />
      <div className="grid grid-cols-2 gap-2">
        <div><SuccessCoachWidget /></div>
        <div><AnalyticsWidget /></div>
        <div><LifeScoreWidget /></div>
        <div><BadgesWidget /></div>
      </div>
      <AdsCarouselWidget />
      <div className="grid grid-cols-2 gap-2">
        <div><ShopWidget /></div>
        <div><CoursesWidget /></div>
      </div>
    </div>
  )
}

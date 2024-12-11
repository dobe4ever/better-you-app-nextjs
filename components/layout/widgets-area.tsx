// components/layout/widgets-area.tsx
'use client'

import { useState } from 'react'
import { ReactNode } from 'react'
import { ChevronRight, Bot, Store, GraduationCap, LoaderPinwheel, Trophy, X, TrendingUp } from 'lucide-react'

// commmon Widget component
interface WidgetProps {
  title: string
  children: ReactNode
  onClick?: () => void
  rightIcon?: ReactNode
  className?: string
}

export function Widget({
  title,
  children,
  onClick,
  rightIcon = <ChevronRight size={16} className="text-orange-400" />,
  className = '',
}: WidgetProps) {
  return (
    <div
      className={`bg-white rounded-lg p-4 border shadow-md ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-md font-semibold">{title}</h2>
        {rightIcon}
      </div>
      {children}
    </div>
  )
}

// AdsCarouselWidget component
export function AdsCarouselWidget() {
    return (
    <Widget title="Featured Ads">
        <div className="text-sm text-gray-600 mt-2">
            Ads carousel content goes here
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
                <div className="space-y-1 text-sm">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Last 7 Days</span>
                        <span className="text-orange-500 font-bold">80%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-orange-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Last 30 days</span>
                        <span className="text-gray-900 font-bold">48%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-gray-900 rounded-full"></div>
                    </div>
                </div>
            </div>
        </Widget>
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
            className="absolute top-4 right-4 text-orange-400"
            onClick={(e) => {
            e.stopPropagation();  // Prevents triggering any parent onClick handlers
            setShowAnnouncement(false);
            }}
        >
            <X size={16} />
        </button>
        }
    >
    <p className="text-sm text-gray-400">
        50% off premium features, limited time
    </p>
    <div className="mt-4">
        <a
        href="https://vercel.com/dobe4evers-projects/vitejs-node-ts-tailwind-better-you"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-orange-400 text-sm text-orange-400 px-4 py-2 rounded-full"
        >
        Claim Offer
        </a>
        </div>
    </Widget>
    )
}

// BadgesWidget component
export function BadgesWidget() {
    return (
        <Widget title="Badges" onClick={() => {}} className="flex flex-col gap-2">
        <Trophy size={32} />
            <div className="text-sm text-gray-600 mt-2">
                Earn rewards by reaching milestones
            </div>
        </Widget>
    )
}

// HabitsWidget component
export function HabitsWidget() {
    return (
        <Widget title="Today's Habits" onClick={() => {}}>
            <div className="flex items-end justify-between mb-2">
                <div>
                <p className="text-sm text-gray-400">Completed</p>
                <p className="text-xl font-bold">8/10</p>
                </div>
                <p className="text-4xl font-bold">80%</p>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div 
                className="h-full rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
                style={{ width: '80%', transition: 'width 1s ease-in-out' }}
                />
            </div>
        </Widget>
    )
}

// LifeScoreWidget component
export function LifeScoreWidget() {
    return (
        <Widget title="Life Score" onClick={() => {}} className="flex flex-col gap-2">
        <LoaderPinwheel size={32} />
        <div className="text-sm text-gray-600 mt-2">
        Visualize progress across all life areas
        </div>
        </Widget>
    )
}

// ShopWidget component
export function ShopWidget() {
    return (
        <Widget title="Shop" onClick={() => {}} className="flex flex-col gap-2">
        <Store size={32} />
        <div className="text-sm text-gray-600 mt-2">
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
        <div className="text-sm text-gray-600 mt-2">
            Curated learning paths to track your journey
        </div>
        </Widget>
    )
}

// SuccessCoachWidget component
export function SuccessCoachWidget() {
    return (
        <Widget title="AI Check-in" onClick={() => {}} className="flex flex-col gap-2">
        <Bot size={32} />
        <div className="text-sm text-gray-600 mt-6">
        24/7 AI guidance and support
        </div>
        </Widget>
    )
}

// TodosWidget component
export function TodosWidget() {
    return (
        <Widget title="Today's Todos" onClick={() => {}}>
        <div className="flex items-end justify-between mb-2">
        <div>
            <p className="text-sm text-gray-400">Completed</p>
            <p className="text-xl font-bold">3/12</p>
        </div>
        <p className="text-4xl font-bold">29%</p>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
        <div 
            className="h-full rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
            style={{ width: '29%', transition: 'width 1s ease-in-out' }}
        />
        </div>
    </Widget>
    )
}

export function WidgetsArea() {
    return (
        // <div className="bg-gray-200 rounded-t-2xl mt-4 p-4 space-y-4 flex-grow">
        <div className="flex flex-col overflow-hidden w-full bg-white pt- p-4 gap-4 rounded-t-xl">
        <AnnouncementWidget />
        <HabitsWidget />
        <TodosWidget />
        <div className="grid grid-cols-2 gap-4">
            <div><SuccessCoachWidget /></div>
            <div><AnalyticsWidget /></div>
            <div><LifeScoreWidget /></div>
            <div><BadgesWidget /></div>
        </div>
        <AdsCarouselWidget />
        <div className="grid grid-cols-2 gap-4">
            <div><ShopWidget /></div>
            <div><CoursesWidget /></div>
        </div>
        </div>
    )
}
  
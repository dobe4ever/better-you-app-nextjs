// // components/layout/widgets-container/widgets.tsx
// 'use client'

// import { useState } from 'react'
// import { ReactNode } from 'react'
// import { ChevronRight, Bot, Store, GraduationCap, LoaderPinwheel, Trophy, X, TrendingUp } from 'lucide-react'

// interface WidgetProps {
//   title: string
//   children: ReactNode
//   onClick?: () => void
//   rightIcon?: ReactNode
//   className?: string
// }

// export function Widget({
//   title,
//   children,
//   onClick,
//   rightIcon = <ChevronRight size={16} className="text-orange-400" />,
//   className = '',
// }: WidgetProps) {
//   return (
//     <div
//       className={`bg-white rounded-xl p-4 border shadow-md ${
//         onClick ? 'cursor-pointer' : ''
//       } group ${className}`}
//     >
//       <div className="flex justify-between items-center mb-2">
//         <h2 className="text-md font-semibold">{title}</h2>
//         {rightIcon}
//       </div>
//       {children}
//     </div>
//   )
// }

// export function AdsCarouselWidget() {
//     return (
//     <Widget title="Featured Ads">
//         <div className="text-sm text-gray-600 mt-2">
//         Ads carousel content goes here
//         </div>
//     </Widget>
//     )
// }

// export function AnalyticsWidget() {
//     return (
//         <Widget title="Analytics" className="flex flex-col gap-2">
//         <div className="space-y-2">
//             <div>
//             <TrendingUp size={32} />
//             </div>
//             <div className="space-y-1 text-sm">
//             <div className="flex justify-between items-center">
//                 <span className="text-gray-600">Last 7 Days</span>
//                 <span className="text-orange-500 font-bold">80%</span>
//             </div>
//             <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
//                 <div className="h-full w-3/4 bg-orange-500 rounded-full"></div>
//             </div>
//             <div className="flex justify-between items-center">
//                 <span className="text-gray-600">Last 30 days</span>
//                 <span className="text-gray-900 font-bold">48%</span>
//             </div>
//             <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
//                 <div className="h-full w-1/2 bg-gray-900 rounded-full"></div>
//             </div>
//             </div>
//         </div>
//         </Widget>
//     )
// }

// export function AnnouncementWidget() {
//     const [showAnnouncement, setShowAnnouncement] = useState(true)

//     if (!showAnnouncement) return null

//     return (
//         <Widget 
//         className="relative overflow-hidden"
//         title="Premium Upgrade"
//         rightIcon={
//         <button 
//             className="absolute top-4 right-4 text-orange-400"
//             onClick={(e) => {
//             e.stopPropagation();  // Prevents triggering any parent onClick handlers
//             setShowAnnouncement(false);
//             }}
//         >
//             <X size={16} />
//         </button>
//         }
//     >
//     <p className="text-sm text-gray-400">
//         50% off premium features, limited time
//     </p>
//     <div className="mt-4">
//         <a
//         href="https://vercel.com/dobe4evers-projects/vitejs-node-ts-tailwind-better-you"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="border border-orange-400 text-sm text-orange-400 px-4 py-2 rounded-full"
//         >
//         Claim Offer
//         </a>
//         </div>
//     </Widget>
//     )
// }

// export function BadgesWidget() {
//     return (
//         <Widget title="Badges" className="flex flex-col gap-2">
//         <Trophy size={32} />
//         <div className="text-sm text-gray-600 mt-2">
//         Earn rewards by reaching milestones
//         </div>
//         </Widget>
//     )
// }

// export function HabitsWidget() {
//     return (
//         <Widget title="Today's Habits" onClick={() => {}}>
//         <div className="flex items-end justify-between mb-2">
//             <div>
//             <p className="text-sm text-gray-400">Completed</p>
//             <p className="text-xl font-bold">8/10</p>
//             </div>
//             <p className="text-4xl font-bold">80%</p>
//         </div>
//         <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
//             <div 
//             className="h-full rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
//             style={{ width: '80%', transition: 'width 1s ease-in-out' }}
//             />
//         </div>
//         </Widget>
//     )
// }

// export function LifeScoreWidget() {
//     return (
//         <Widget title="Life Score" className="flex flex-col gap-2">
//         <LoaderPinwheel size={32} />
//         <div className="text-sm text-gray-600 mt-2">
//         Visualize progress across all life areas
//         </div>
//         </Widget>
//     )
// }

// export function ShopWidget() {
//     return (
//         <Widget title="Shop" className="flex flex-col gap-2">
//         <Store size={32} />
//         <div className="text-sm text-gray-600 mt-2">
//             Explore products and services all in one place
//         </div>
//         </Widget>
//     )
// }

// export function CoursesWidget() {
//     return (
//         <Widget title="Courses" className="flex flex-col gap-2">
//         <GraduationCap size={32} />
//         <div className="text-sm text-gray-600 mt-2">
//             Curated learning paths to track your journey
//         </div>
//         </Widget>
//     )
// }

// export function SuccessCoachWidget() {
//     return (
//         <Widget title="AI Check-in" className="flex flex-col gap-2">
//         <Bot size={32} />
//         <div className="text-sm text-gray-600 mt-6">
//         24/7 AI guidance and support
//         </div>
//         </Widget>
//     )
// }

// export function TodosWidget() {
//     return (
//         <Widget title="Today's Todos" onClick={() => {}}>
//         <div className="flex items-end justify-between mb-2">
//         <div>
//             <p className="text-sm text-gray-400">Completed</p>
//             <p className="text-xl font-bold">3/12</p>
//         </div>
//         <p className="text-4xl font-bold">29%</p>
//         </div>
//         <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
//         <div 
//             className="h-full rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
//             style={{ width: '29%', transition: 'width 1s ease-in-out' }}
//         />
//         </div>
//     </Widget>
//     )
// }


// components/layout/widgets-container/pages.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { FloatingChatBtn } from '../components/layout/floating-chat-btn'
import { Header } from '../components/layout/header'
import { StickyTop } from '../components/layout/sticky-top'
import { Widgets } from '../components/layout/widgets'

// Home component
export function Home() {
  const [fadePercentage, setFadePercentage] = useState(0)
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

  return (
    // <div className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 min-h-screen w-full">
    // <div className="relative min-h-screen min-w-screen bg-white">
        <div className="flex flex-col overflow-hidden w-full"> 

        <FloatingChatBtn />

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
            <Widgets />
        </div>
        
    </div>
  )
}

export function AnalyticsPage() {
    return (
        <div className="flex flex-col gap-2 z-100">
            <div>
                Analytics Page
            </div>
        </div>
    )
}

export function AnnouncementPage() {
    return (
        <div className="flex flex-col gap-2 z-100">
            <div>
                Announcement Page
            </div>
        </div>
    )
}

export function BadgesPage() {
    return (
        <div className="flex flex-col gap-2 z-100">
            <div>
                Badges Page
            </div>
        </div>
    )
}

// export function HabitsPage() {
//     return (
//         <div className="flex flex-col gap-2 z-100">
//             <div>
//                  Habits Page
//             </div>
//         </div>
//     )
// }
export function HabitsPage() {
    return (
      // <div className="min-h-screen bg-white p-4">
      <div className="fixed inset-0 bg-white p-4 z-100">
        <div className="flex-col">
          <h1 className="text-2xl font-bold mb-4">Habits Dashboard</h1>
          <p>This is where all your habits details would go. Stay tuned for more awesomeness!!</p>
          {/* Add more habit-related content here */}
        </div>
      </div>
    )
  }

export function LifeScorePage() {
    return (
        <div className="flex flex-col gap-2 z-100">
            <div>
                Life Score Page
            </div>
        </div>
    )
}

export function ShopPage() {
    return (
        <div className="flex flex-col gap-2 z-100">
            <div>
                Shop Page
            </div>
        </div>
    )
}

export function CoursesPage() {
    return (
        <div className="flex flex-col gap-2 z-100">
            <div>
                Courses Page
            </div>
        </div>
    )
}

export function SuccessCoachPage() {
    return (
        <div className="flex flex-col gap-2 z-100">
            <div>
                Success Coach Page
            </div>
        </div>
    )
}

export function TodosPage() {
    return (
        <div className="flex flex-col gap-2 z-100">
            <div>
                Todos Page
            </div>
        </div>
    )
}
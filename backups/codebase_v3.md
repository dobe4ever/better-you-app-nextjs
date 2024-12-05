```css
. (root)
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── common/
│   │   ├── two-column-widget.tsx
│   │   └── widget.tsx
│   ├── layout/
│   │   ├── floating-button/
│   │   │   └── floating-chat-button.tsx
│   │   ├── header-container/
│   │   │   ├── avatar-section.tsx
│   │   │   ├── greeting-section.tsx
│   │   │   ├── header-container.tsx
│   │   │   ├── shapes-background.tsx
│   │   │   └── top-bar.tsx
│   │   ├── sticky-top/
│   │   │   └── tips-carousel.tsx
│   │   └── widgets-container/
│   │       ├── achievements-widget/
│   │       │   └── achievements-widget.tsx
│   │       ├── ads-widget/
│   │       │   └── ads-carousel-widget.tsx
│   │       ├── analytics-widget/
│   │       │   └── analytics-widget.tsx
│   │       ├── announcement-widget/
│   │       │   └── announcement-widget.tsx
│   │       ├── habits-widget/
│   │       │   └── habits-widget.tsx
│   │       ├── life-score-widget/
│   │       │   └── life-score-widget.tsx
│   │       └── shop-courses-widget/
│   │           └── shop-courses-widget.tsx
│   ├── ui/ (shcdn)
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── drop-down.tsx
│   │   └── progress.tsx
├── lib/
│   └── utils.ts
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
```tsx
// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Better You App',
  description: 'An app to help you become a better version of yourself',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

```tsx
// app/page.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { FloatingChatButton } from '../components/layout/floating-button/floating-chat-button'
import { HeaderContainer } from '../components/layout/header-container/header-container'
import { TipsCarousel } from '../components/layout/sticky-top/tips-carousel'
import { WidgetsContainer } from '../components/layout/widgets-container/widgets-container'

export default function HomePage() {
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
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-black/0 via-black/25 to-black/100">
      
      <FloatingChatButton />

      <div ref={headerRef} className="">
        <HeaderContainer />
        <div className="absolute top-0 w-full h-[450px] bg-white" style={{ opacity: fadePercentage / 100 }} />
      </div>

      <div className="sticky top-0">
        <TipsCarousel />
      </div>

      <WidgetsContainer />
    
    </div>
  )
}
```

```tsx
// components/common/two-column-widget.tsx
import { ReactNode } from 'react'

interface TwoColumnWidgetProps {
  leftWidget: ReactNode
  rightWidget: ReactNode
}

export function TwoColumnWidget({ leftWidget, rightWidget }: TwoColumnWidgetProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>{leftWidget}</div>
      <div>{rightWidget}</div>
    </div>
  )
}
```

```tsx
// components/common/widget.tsx
import { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'

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
      className={`bg-white rounded-md p-4 border shadow ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-semibold">{title}</h2>
        {rightIcon}
      </div>
      {children}
    </div>
  )
}
```

```tsx
// components/layout/floating-button/floating-chat-button.tsx
import { Bot } from 'lucide-react'
import { Button } from '../../ui/button'

export function FloatingChatButton() {
  return (
    <Button
      className="fixed bottom-4 right-4 rounded-full p-3 bg-orange-500 z-50"
      onClick={() => console.log('Open chat')}
    >
      <Bot className="h-6 w-6 text-white" />
    </Button>
  )
}
```

```tsx
// components/layout/header-container/avatar-section.tsx
export function AvatarSection({ avatarUrl = 'https://i.pravatar.cc/300' }) {
  return (
    <div className="w-full flex justify-center z-10">
      <div className="rounded-full shadow-lg border-4 border-orange-300/25 overflow-hidden">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-48 h-48 object-cover"
        />
      </div>
    </div>
  )
}
```

```tsx
// components/layout/header-container/greeting-section.tsx
import { motion } from 'framer-motion'

export function GreetingSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{ delay: 0.1, duration: 0.2 }}
      className="text-center"
    >
      <h1 className="text-white">
        <span className="tracking-tighter font-bold text-lg">READY TO CRASH SOME HABITS?</span>
      </h1>
    </motion.div>
  )
}
```

```tsx
// components/layout/header-container/header-container.tsx
import { TopBar } from './top-bar'
import { AvatarSection } from './avatar-section'
import { GreetingSection } from './greeting-section'
import { ShapesBackground } from './shapes-background'

export function HeaderContainer() {
  return (
    <div className="">
      <TopBar />
      <AvatarSection />
      <GreetingSection />
      <ShapesBackground />
    </div>
  )
}
```

```tsx
// components/layout/header-container/shapes-background.tsx
export function ShapesBackground() {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 -z-10">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 400 800">
          <path d="M0 0 H400 V800 H0 Z" fill="#f97316" />
          <path d="M250 0 L400 0 L400 300 Z" fill="#404040" />
          <path d="M0 750 L400 75 L400 800 Z" fill="#fb9a47" />
        </svg>
      </div>
    )
  }
```
```tsx
// components/layout/header-container/top-bar.tsx
'use client'

import { useState } from 'react'
import { Menu, LogOut, Settings, Bell, UserPen } from 'lucide-react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function TopBar({ username = 'Brotastic', avatarUrl = 'https://i.pravatar.cc/300' }) {
  const [notificationCount, setNotificationCount] = useState(3)
  const initials = username.slice(0, 2).toUpperCase()

  return (
    <div className="relative p-2 z-10">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative text-white">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-full">
              <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
              <DropdownMenuItem>Menu Item 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <h1 className="text-xl font-semibold text-white">Logo</h1>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative text-white">
                <Bell />
                {notificationCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white"
                  >
                    {notificationCount}
                  </motion.span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-full">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setNotificationCount(prev => Math.max(0, prev - 1))}>
                Mark as read
              </DropdownMenuItem>
              <DropdownMenuItem>View all notifications</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full text-white">
                <Avatar className="border-2 border-white h-8 w-8">
                  <AvatarImage src={avatarUrl} alt={username} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-full p-2">
              <DropdownMenuItem className="text-sm text-gray-400 p-2">email@gmail.com</DropdownMenuItem>
              <DropdownMenuItem className="flex flex-row">
                <Avatar className="border-2 border-orange-500 h-8 w-8">
                  <AvatarImage src={avatarUrl} alt={username} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <span className="flex flex-col gap-0 ml-2">
                  <h1>{username}</h1>
                  <p className="text-gray-400">Free plan</p>
                </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /> Settings</DropdownMenuItem>
              <DropdownMenuItem><UserPen className="mr-2 h-4 w-4" /> Edit Profile</DropdownMenuItem>
              <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" /> Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
```

```tsx
// components/layout/sticky-top/tips-carousel.tsx
'use client'

import { useState, useEffect } from 'react'
import { Bot, ChevronLeft, ChevronRight } from 'lucide-react'

export function TipsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)
  
  const tips = [
    {
      message: "You're building a strong routine",
      detail: "3 days streak! Keep it up!",
    },
    {
      message: "Great progress on your goals",
      detail: "You've completed 80% of your weekly targets",
    },
    {
      message: "Time for a mindful break",
      detail: "You've been focused for 2 hours straight",
    },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % tips.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + tips.length) % tips.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="rounded border-y border-black bg-white m-4 p-1.5 z-100">
      <div className="flex items-center justify-between bg-white">
        <button 
          onClick={(e) => {
            e.stopPropagation()
            prevSlide()
          }}
          className="bg-white z-10"
          aria-label="Previous tip"
        >
          <ChevronLeft size={20} className="text-black/75 m-1" />
        </button>
        <div className="overflow-hidden px-2">
          <div
            className="flex transition-transform duration-300 ease-out w-full"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {tips.map((tip, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <div className="flex items-center gap-2 px-0">
                  <div className="flex-shrink-0">
                    <Bot size={36} className="text-black/75" />
                  </div>
                  <blockquote className="flex flex-col border-l-2 pl-2 border-black/75 italic text-sm text-black/75">
                    <p className="text-md text-black font-semibold">{tip.message}</p>
                    <p className="text-xs text-gray-500">{tip.detail}</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation()
            nextSlide()
          }}
          className="bg-white z-10"
          aria-label="Next tip"
        >
          <ChevronRight size={20} className="text-black/75"/>
        </button>
      </div>
    </div>
  )
}
```

```tsx
// components/layout/widgets-container/achievements-widget/achievements-widget.tsx
import { Trophy } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function AchievementsWidget() {
  return (
    <Widget title="Achievements" className="flex flex-col gap-2">
      <Trophy size={32} />
      <div className="text-sm text-gray-600 mt-2">
        Unlock rewards as you reach new milestones
      </div>
    </Widget>
  )
}
```

```tsx
// components/layout/widgets-container/ads-widget/ads-carousel-widget.tsx
import { Widget } from '../../../common/widget'

export function AdsCarouselWidget() {
  return (
    <Widget title="Featured Ads">
      <div className="text-sm text-gray-600 mt-2">
        Ads carousel content goes here
      </div>
    </Widget>
  )
}
```

```tsx
// components/layout/widgets-container/analytics-widget/analytics-widget.tsx
import { TrendingUp } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function AnalyticsWidget() {
  return (
    <Widget title="Analytics" className="flex flex-col gap-2">
      <div className="space-y-2">
        <div>
          <TrendingUp size={32} />
          <div className="text-xs text-gray-500">Trending Up</div>
        </div>
        <div className="space-y-1 text-xs">
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
```

```tsx
// components/layout/widgets-container/announcement-widget/announcement-widget.tsx
'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function AnnouncementWidget() {
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  if (!showAnnouncement) return null

  return (
    <Widget
      className=""
      title="Upgrade to Premium 50% off limited time offer!"
      rightIcon={
        <button
          className="absolute top-4 right-4 text-orange-400"
          onClick={(e) => {
            e.stopPropagation()
            setShowAnnouncement(false)
          }}
        >
          <X size={16} />
        </button>
      }
    >
      <div className="mt-4">
        <a
          href="https://example.com/premium-offer"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-orange-500 text-sm p-2 rounded-md"
        >
          Read More
        </a>
      </div>
    </Widget>
  )
}
```

```tsx
// components/layout/widgets-container/habits-widget/habits-widget.tsx
import { ChevronRight } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function HabitsWidget() {
  return (
    <Widget title="Today's Habits" rightIcon={<ChevronRight className="h-5 w-5 text-orange-400" />}>
      <div className="flex items-center justify-between">
        <div className="my-2">
          <p className="text-sm text-gray-400">Completed</p>
          <p className="text-md font-bold">8/10</p>
        </div>
        <p className="text-2xl font-bold">80%</p>
      </div>
      
      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full rounded-full bg-black"
          style={{ width: '80%', transition: 'width 1s ease-in-out' }} 
        />
      </div>
    </Widget>
  )
}
```

```tsx
// components/layout/widgets-container/life-score-widget/life-score-widget.tsx
import { LoaderPinwheel } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function LifeScoreWidget() {
  return (
    <Widget title="Life Score" className="flex flex-col gap-2">
      <LoaderPinwheel size={32} />
      <div className="text-sm text-gray-600 mt-2">
        Measure your score across all life areas with our intuitive wheel assessment tool
      </div>
    </Widget>
  )
}
```

```tsx
// components/layout/widgets-container/shop-courses-widget/shop-courses-widget.tsx
import { Store, GraduationCap } from 'lucide-react'
import { Widget } from '../../../common/widget'
import { TwoColumnWidget } from '../../../common/two-column-widget'

function ShopWidget() {
  return (
    <Widget title="Shop" className="flex flex-col gap-2">
      <Store size={32} />
      <div className="text-sm text-gray-600 mt-2">
        Explore products and services all in one place
      </div>
    </Widget>
  )
}

function CoursesWidget() {
  return (
    <Widget title="Courses" className="flex flex-col gap-2">
      <GraduationCap size={32} />
      <div className="text-sm text-gray-600 mt-2">
        Explore curated learning paths and track your educational journey in one place
      </div>
    </Widget>
  )
}

export function ShopCoursesWidget() {
  return (
    <TwoColumnWidget
      leftWidget={<ShopWidget />}
      rightWidget={<CoursesWidget />}
    />
  )
}
```

```tsx
// components/layout/widgets-container/success-coach-widget/success-coach-widget.tsx
import { Bot } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function SuccessCoachWidget() {
  return (
    <Widget title="Success Coach" className="flex flex-col gap-2">
      <Bot size={32} />
      <div className="text-sm text-gray-600 mt-2">
        Get instant guidance and support from your 24/7 AI coach
      </div>
    </Widget>
  )
}
```

```tsx
// components/layout/widgets-container/todos-widget/todos-widget.tsx
import { ChevronRight } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function TodosWidget() {
  return (
    <Widget title="Today's Todo's" rightIcon={<ChevronRight className="h-5 w-5 text-orange-400" />}>
      <div className="flex items-center justify-between">
        <div className="my-2">
          <p className="text-sm text-gray-400">Completed</p>
          <p className="text-md font-bold">3/12</p>
        </div>
        <p className="text-2xl font-bold">29%</p>
      </div>
      
      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full rounded-full bg-black"
          style={{ width: '29%', transition: 'width 1s ease-in-out' }} 
        />
      </div>
    </Widget>
  )
}
```

```tsx
// components/layout/widgets-container/widgets-container.tsx
import { AnnouncementWidget } from './announcement-widget/announcement-widget'
import { HabitsWidget } from './habits-widget/habits-widget'
import { TodosWidget } from './todos-widget/todos-widget'
import { SuccessCoachWidget } from './success-coach-widget/success-coach-widget'
import { AnalyticsWidget } from './analytics-widget/analytics-widget'
import { LifeScoreWidget } from './life-score-widget/life-score-widget'
import { AchievementsWidget } from './achievements-widget/achievements-widget'
import { AdsCarouselWidget } from './ads-widget/ads-carousel-widget'
import { ShopCoursesWidget } from './shop-courses-widget/shop-courses-widget'
import { TwoColumnWidget } from '../../common/two-column-widget'

export function WidgetsContainer() {
  return (
    <div className="bg-white rounded-t-2xl mt-4 p-4 space-y-4 flex-grow">
      <AnnouncementWidget />
      <HabitsWidget />
      <TodosWidget />
      <TwoColumnWidget
        leftWidget={<SuccessCoachWidget />}
        rightWidget={<AnalyticsWidget />}
      />
      <TwoColumnWidget
        leftWidget={<LifeScoreWidget />}
        rightWidget={<AchievementsWidget />}
      />
      <AdsCarouselWidget />
      <ShopCoursesWidget />
    </div>
  )
}
```

```tsx
// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

```svg
<!-- public/bg.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 800">
  <path d="M0 0 H400 V800 H0 Z" fill="#f97316" />
  <path d="M250 0 L400 0 L400 300 Z" fill="#404040" />
  <path d="M0 750 L400 75 L400 800 Z" fill="#fb9a47" />
</svg>
```

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev, isServer }) => {
    config.optimization.minimize = false;
    return config;
  },
}

module.exports = nextConfig
```

```tsx
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
```
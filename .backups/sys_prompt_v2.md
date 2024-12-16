Yo! You are Bro bot, an engaging LLM with a passion for sarcasm, the very human type of sarcasm, with its nuances and richness. You're notorious for giving few fucks about political correctness and politics in general. You treat all users like they are your Bruh and can talk about any imaginable subject, from deep and complex topics, to the current state of Kim Kardashian's butt, or assist with professional tasks & projects of any kind. Anything goes! 

# Mission at hand:
Yooo bruh! Got ur react typescript, tailwind and the full stack hat handy? 

# Context:
- Next.js app directory structure
- React's built-in hooks
- Mobile-first. 
- The app should be full width and behave responsively to a certain size, then it stops widening and stays centered. 
- Keep consistent to the libraries, setups, etc, in the existing code.

# Layout:
0. Background: Sleek shapes SVG fixed bg (currently is the first part of the rendering code in the page.tsx) 

1. HeaderContainer:
   - Top bar with a hamburger menu & "Logo" text on the left, and notification bell and user avatar on the right.
   - Large circular user avatar in the center.
   - Greetings text.
   - Tips Carousel - Stick to the top of the screen when scrolling.
   - The header container should occupy roughly the top half of the screen height & full width.
2. WidgetsContainer (White, full width box, with rounded top corners, that holds all widgets):
The WidgetsContainer should occupy the rest of the screen height below the HeaderContainer and be full width.
   - AnnouncementWidget
   - HabitsWidget - full W
   - TodosWidget - full W
   - Grid Widgets 2x2 - full W > line 1: SuccessCoachWidget & AnalyticsWidget. line 2: LifeScoreWidget & AchievementsWidget
   - AdsCarouselWidget - full W
   - ShopCourses - Two side-by-side widgets for ShopWidget and CoursesWidget

3. FloatingChatButton (Fixed, always visible chat button near the bottom-right. When clicked it opens a full screen chatbot interface)

# Scroll & Fade effect:
The HeaderContainer, incl all content in it except the Tips Carousel, fades to white during scroll.
## Scroll & Fade Logic:
- Tips Carousel initial scroll position = Header fade overlay 0%
- Tips Carousel scroll position at the top of the screen = Header fade overlay 100%
So the fading speed will match whatever speed user scrolls. 
- The Tips Carousel sticks to the top, and the WidgetContaner continues to scroll behind it as needed.

# Important:
Always consider whats the best practice approach based on the context & what the app needs to do, how it needs to display, behave, etc.

Yo! When writing new files or editing existing ones, always include the file path comment in the first line & always write the entire content for the file at hand. Do not omit anything for brevity. This is because new content overwrites the previous content of the file in full. 

# Previous versions:
`codebase_v1.md`
Deploys, works & looks fairly well except some messed up visual details.
```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```jsx
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

```jsx
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

```jsx
// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

```jsx
// app/page.tsx
'use client'
import { useState, useRef, useEffect } from 'react'
import { Header } from '../components/Header'
import { AiTipsCarousel } from '../components/AiTipsCarousel'
import { Announcement } from '../components/Announcement'
import { Habits } from '../components/Habits'
import { Todos } from '../components/Todos'
import { GridWidgets } from '../components/GridWidgets'
import { AdsCarousel } from '../components/AdsCarousel'
import { ShopAndCourses } from '../components/ShopAndCourses'

export default function Component() {
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
        
        {/* Background SVG - Fixed position */}        
        <div className="fixed w-full h-[70%] -z-10">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 400 800">
            <path d="M0 0 H400 V800 H0 Z" fill="#f97316" />
            <path d="M250 0 L400 0 L400 300 Z" fill="#404040" />
            <path d="M0 750 L400 75 L400 800 Z" fill="#fb9a47" />
          </svg>
        </div>
        
        {/* Content container - Relative position */}
        <div className="relative">
          
          {/* Header */}          
          <div ref={headerRef} >
            <div className="pb-4">
              <Header />
            </div>
            <div className="absolute inset-0 w-full h-[60%] bg-white" style={{ opacity: fadePercentage / 100 }} />
          </div>
          
         {/* Sticky Top */}
          <div className="sticky top-0 z-30">
            <AiTipsCarousel />
          </div>

          {/* Widgets wrapper */}
          <main className="bottom-0 flex flex-col w-full rounded-t-2xl p-4 space-y-2 bg-white z-20">
            <Announcement />
            <Habits />
            <Todos />
            <GridWidgets />
            <AdsCarousel />
            <ShopAndCourses />
          </main>
        </div>
    </div>
  )
}
```

```jsx
// components/Header.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TopBar } from './TopBar'

interface HeaderProps {
  username?: string
  avatarUrl?: string
}

export function Header({ username = 'Brotastic', avatarUrl = 'https://i.pravatar.cc/300' }: HeaderProps) {
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
    <div className="relative" >

        <TopBar />

        {/* Centered avatar container */}
        <div className="w-full">
          {/* Avatar */}
          <div className="w-full flex justify-center z-10">
            <div className="rounded-full shadow-lg border-4 border-orange-300/25 overflow-hidden">
              <img
                src={avatarUrl}
                alt="Avatar"
                className="w-56 h-56 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main greeting text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 10}}
          transition={{ delay: 0.1, duration: 0.2 }}
          className="text-center"
        >
          <h1 className="text-white">
            <span className="tracking-tighter font-bold text-2xl">READY TO CRASH SOME HABITS?</span>
          </h1>
        </motion.div>

    </div>
  )
}
```

```jsx
// components/TopBar.tsx
'use client'

import { useState } from 'react'
import { Menu, LogOut, Settings, Bell, UserPen, User } from 'lucide-react'
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

        {/* Left side */}
        <div className="flex items-center gap-4">

          {/* Hamburger */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative text-white">
                <Menu />
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

          <h1 className="text- font-semibold text-white">Logo</h1>

        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>

              {/* Bell */}
              <Button variant="ghost" size="icon" className="relative text-white">
                <Bell />

                {/* Count */}
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

            {/* Context menu */}
            <DropdownMenuContent align="end" className="w-full">
              {/* Label */}
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* Items */}
              <DropdownMenuItem onClick={() => setNotificationCount(prev => Math.max(0, prev - 1))}>
                Mark as read
              </DropdownMenuItem>

              <DropdownMenuItem>View all notifications</DropdownMenuItem>

            </DropdownMenuContent>

          </DropdownMenu>

          {/* Profile */}
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

            {/* Context menu */}
            <DropdownMenuContent align="end" className="w-full p-">

              <DropdownMenuItem className="text- text-gray-500 p-2"> email@gmail.com </DropdownMenuItem>

              <DropdownMenuItem className="flex flex-row" > 
                
                <Avatar className="border-2 border-gradient-orange h-8 w-8">
                  <AvatarImage src={avatarUrl} alt={username} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>

                <span className="flex flex-col gap-0">
                  <h1> {username} </h1>
                  <p className="text-gray-500"> Free plan </p>
                </span>

              </DropdownMenuItem>
              
              <DropdownMenuSeparator />

              <DropdownMenuItem> <Settings className="mr-2 h-4 w-4" /> Settings</DropdownMenuItem>
              <DropdownMenuItem> <UserPen className="mr-2 h-4 w-4" /> Edit Profile </DropdownMenuItem>
              <DropdownMenuItem> <LogOut className="mr-2 h-4 w-4" /> Log out</DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
```

```jsx
// components/AiTipsCarousel.tsx
'use client'

import { useState, useEffect } from 'react';
import { Bot, ChevronLeft, ChevronRight } from 'lucide-react';

export function AiTipsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  
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
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % tips.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + tips.length) % tips.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded border-y border-black bg-white m-4 p-1.5">

      <div className="flex items-center justify-between bg-white">
        {/* Left Navigation */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="bg-white z-10"
          aria-label="Previous tip"
        >
          <ChevronLeft size={20} className="text-black/75 m-" />
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden px-">
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

        {/* Right Navigation */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="bg-white z-10"
          aria-label="Next tip"
        >
          <ChevronRight size={20} className="text-black/75"/>
        </button>

      </div>

    </div>
  );
}

```

```jsx
// components/Announcement.tsx
'use client'

import { useState, ReactNode } from 'react'
import { X, ChevronRight } from 'lucide-react'

interface WidgetProps {
  title: string
  children: ReactNode
  onClick?: () => void
  rightIcon?: ReactNode
  className?: string
}

const Widget = ({
  title,
  children,
  onClick,
  rightIcon = (
    <ChevronRight
      size={16}
      className="text-orange-main"
    />
  ),
  className = '',
}: WidgetProps) => {
  return (
    <div
      className={`bg-white rounded-md p-4 shadow ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
    >
      <div className="flex justify-between items-center mb-0">
        <h2 className="text-sm font-semibold">{title}</h2>
        {rightIcon}
      </div>
      {children}
    </div>
  )
}

export function Announcement() {
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  if (!showAnnouncement) return null

  return (
    <div className="bg-white rounded-md border p-">
      {showAnnouncement && (
        <Widget
          className="relative overflow-hidden"
          title="Upgrade to Premium 50% off limited time offer!"
          rightIcon={
            <button
              className="absolute top-4 right-4 text-orange-main"
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
              href="https://vercel.com/dobe4evers-projects/vitejs-node-ts-tailwind-better-you"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gradient-orange text-sm p-2 rounded-md"
            >
              Read More
            </a>
          </div>
        </Widget>
      )}
    </div>
  )
}
```

```jsx
// components/GridWidgets.tsx
import { ReactNode } from 'react'
import { LoaderPinwheel, TrendingUp, Bot, Trophy, ChevronRight } from 'lucide-react'

interface WidgetProps {
  title: string
  children: ReactNode
  onClick?: () => void
  rightIcon?: ReactNode
  className?: string
}

const Widget = ({
  title,
  children,
  onClick,
  rightIcon = (
    <ChevronRight
      size={16}
      className="text-orange-main"
    />
  ),
  className = '',
}: WidgetProps) => {
  return (
    <div
      className={`bg-white rounded-md p-4 border shadow ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
    >
      <div className="flex justify-between items-center mb-0">
        <h2 className="text-sm font-semibold">{title}</h2>
        {rightIcon}
      </div>
      {children}
    </div>
  )
}

export function GridWidgets() {
  return (
    <div className="grid grid-cols-2 gap-2 mt-0">
      
      {/* Success Coach Widget */}
      <Widget 
        title="Success Coach" 
        className="flex flex-col gap-2"
      >
        <Bot size={32} />

        <div className="text-sm text-gray-600 mt-2">
        Get instant guidance and support from your 24/7 AI coach
        </div>
      </Widget>

      {/* Analytics Widget */}
      <Widget title="Analytics" className="flex flex-col gap-2">
        <div className="space-y-2">
          <div>
          <TrendingUp size={32} />
          <div className="text-xs text-gray-500">Trending Up</div>
        </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Last 7 Days</span>
              <span className="text-orange-main font-bold">80%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-orange-main rounded-full"></div>
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

      {/* Life score Widget */}
      <Widget 
        title="Life Score" 
        className="flex flex-col gap-2"
      >
        <LoaderPinwheel size={32} />

        <div className="text-sm text-gray-600 mt-2">
        Measure your score across all life areas with our intuitive wheel assessment tool
        </div>
      </Widget>

      {/* Achievements Widget */}
      <Widget 
        title="Achievements" 
        className="flex flex-col gap-2"
      >
        <Trophy size={32} />
        <div className="text-sm text-gray-600 mt-2">
        Unlock rewards as you reach new milestones
        </div>
      </Widget>
    </div>
  )
}
```

```jsx
// app/components/Habits.tsx
import { ChevronRight } from 'lucide-react'

export function Habits() {
  return (
    <div className="bg-white rounded-md border shadow p-4">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">Today's Habits</p>
        <ChevronRight className="h-5 w-5 text-orange-main" />
      </div>

      <div className="flex items-center justify-between">
        <div className="my-2">
          <p className="text-sm text-gray-500">Completed</p>
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
    </div>
  )
}
```

```jsx
// components/ShopAndCourses.tsx
import { ReactNode } from 'react'
import { GraduationCap, ChevronRight, Store } from 'lucide-react'

interface WidgetProps {
  title: string
  children: ReactNode
  onClick?: () => void
  rightIcon?: ReactNode
  className?: string
}

const Widget = ({
  title,
  children,
  onClick,
  rightIcon = (
    <ChevronRight
      size={16}
      className="text-orange-main"
    />
  ),
  className = '',
}: WidgetProps) => {
  return (
    <div
      className={`bg-white rounded-md p-4 border shadow ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
    >
      <div className="flex justify-between items-center mb-0">
        <h2 className="text-sm font-semibold">{title}</h2>
        {rightIcon}
      </div>
      {children}
    </div>
  )
}

export function ShopAndCourses() {
  return (
    <div className="grid grid-cols-2 gap-2 mt-0">
      <Widget 
        title="Shop" 
        className="flex flex-col gap-2"
      >
        <Store size={32} />
        <div className="text-sm text-gray-600 mt-2">
        Explore products and services all in one place
        </div>
      </Widget>
      <Widget 
        title="Courses" 
        className="flex flex-col gap-2"
      >
        <GraduationCap size={32} />
        <div className="text-sm text-gray-600 mt-2">
        Explore curated learning paths and track your educational journey in one place
        </div>
      </Widget>
    </div>
  )
}
```

```jsx
// app/components/Todos.tsx
import { ChevronRight } from 'lucide-react'

export function Todos() {
  return (
    <div className="bg-white rounded-md border shadow p-4">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">Today's Todo's</p>
        <ChevronRight className="h-5 w-5 text-orange-main" />
      </div>

      <div className="flex items-center justify-between">
        <div className="my-2">
          <p className="text-sm text-gray-500">Completed</p>
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
    </div>
  )
}
```

```jsx
// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

# Latest versions:

`file_structure_v2.md`
```txt
.
├── app/
│   ├── globals.css 
│   ├── layout.tsx 
│   └── page.tsx 
├── components/
│   ├── layout/
│   │   ├── background/
│   │   │   └── shapes-background.tsx 
│   │   ├── floating-button/
│   │   │   └── floating-chat-button.tsx 
│   │   ├── header-container/
│   │   │   ├── header-container.tsx 
│   │   │   ├── top-bar.tsx 
│   │   │   ├── logo-symbol.tsx
│   │   │   ├── avatar-section.tsx 
│   │   │   ├── greeting-section.tsx 
│   │   │   └── tips-carousel.tsx 
│   │   └── widgets-container/
│   │         ├── widgets-container.tsx
│   │         ├── announcement-widget/
│   │         │   └── announcement-widget.tsx 
│   │         ├── habits-widget/
│   │         │   ├── habits-widget.tsx 
│   │         │   ├── habits-page.tsx
│   │         │   ├── habits-top-buttons.tsx
│   │         │   ├── set-challenge-ui.tsx
│   │         │   ├── current-challenge.tsx
│   │         │   ├── habit-card.tsx
│   │         │   └── habit-card-back.tsx
│   │         ├── todos-widget/
│   │         │   ├── todos-widget.tsx 
│   │         │   ├── todos-page.tsx
│   │         │   ├── todos-top-buttons.tsx
│   │         │   ├── todo-card.tsx
│   │         │   └── todo-card-back.tsx
│   │         ├── success-coach-widget/
│   │         │   ├── success-coach-widget.tsx 
│   │         │   └── success-coach-page.tsx
│   │         ├── analytics-widget/
│   │         │   ├── analytics-widget.tsx 
│   │         │   └── analytics-page.tsx
│   │         ├── life-score-widget/
│   │         │   ├── life-score-widget.tsx 
│   │         │   └── life-score-page.tsx
│   │         ├── achievements-widget/
│   │         │   ├── achievements-widget.tsx 
│   │         │   └── achievements-page.tsx
│   │         ├── ads-widget/
│   │         │   └── ads-carousel-widget.tsx 
│   │         └── shop-courses-widget/
│   │             └── shop-courses-widget.tsx 
│   ├── ui/ (shadcn components)
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── progress.tsx
│   └── common/
│        ├── icon-button.tsx
│        ├── hide-completed-button.tsx
│        ├── challenge-button.tsx
│        ├── add-button.tsx
│        ├── full-page.tsx
│        └── widget.tsx 
├── lib/
│        └── utils.ts
├── public/
│        ├── logo-symbol.svg
│        └── bg.svg 
config files ...
```

`components_hierarchy_v2.mmd`
```
flowchart TD
    HomePage["HomePage"]
    BackgroundShapes["BackgroundShapes"]
    FloatingChatButton["FloatingChatButton"]
    HeaderContainer["HeaderContainer"]
    TopBar["TopBar"]
    AvatarSection["AvatarSection"]
    GreetingSection["GreetingSection"]
    TipsCarousel["TipsCarousel"]
    WidgetsContainer["WidgetsContainer"]

    AnnouncementWidget["AnnouncementWidget"]
    AnnouncementPage["AnnouncementPage"]

    HabitsWidget["HabitsWidget"]
    HabitsPage["HabitsPage"]
    HabitsTopButtons["HabitsTopButtons"]
    HabitsListContainer["HabitsListContainer"]
    HabitCard["HabitCard"]
    HabitCardBack["HabitCardBack"]

    TodosWidget["TodosWidget"]
    TodosPage["TodosPage"]
    TodosTopButtons["TodosTopButtons"]
    TodoListContainer["TodoListContainer"]
    TodoCard["TodoCard"]
    TodoCardBack["TodoCardBack"]

    SuccessCoachWidget["SuccessCoachWidget"]
    SuccessCoachPage["SuccessCoachPage"]

    AnalyticsWidget["AnalyticsWidget"]
    AnalyticsPage["AnalyticsPage"]

    LifeScoreWidget["LifeScoreWidget"]
    LifeScorePage["LifeScorePage"]

    AchievementsWidget["AchievementsWidget"]
    AchievementsPage["AchievementsPage"]

    AdsCarouselWidget["AdsCarouselWidget"]
    ShopCoursesWidgets["ShopCoursesWidgets"]

    HomePage --> BackgroundShapes
    HomePage --> FloatingChatButton
    HomePage --> HeaderContainer
    HomePage --> WidgetsContainer

    HeaderContainer --> TopBar
    HeaderContainer --> AvatarSection
    HeaderContainer --> GreetingSection
    HeaderContainer --> TipsCarousel

    WidgetsContainer --> AnnouncementWidget
    WidgetsContainer --> HabitsWidget
    WidgetsContainer --> TodosWidget
    WidgetsContainer --> SuccessCoachWidget
    WidgetsContainer --> AnalyticsWidget
    WidgetsContainer --> LifeScoreWidget
    WidgetsContainer --> AchievementsWidget
    WidgetsContainer --> AdsCarouselWidget
    WidgetsContainer --> ShopCoursesWidgets

    AnnouncementWidget --> AnnouncementPage

    HabitsWidget --> HabitsPage
    HabitsPage --> HabitsTopButtons
    HabitsPage --> HabitsListContainer
    HabitsListContainer --> HabitCard
    HabitCard --> HabitCardBack

    TodosWidget --> TodosPage
    TodosPage --> TodosTopButtons
    TodosPage --> TodoListContainer
    TodoListContainer --> TodoCard
    TodoCard --> TodoCardBack

    SuccessCoachWidget --> SuccessCoachPage
    AnalyticsWidget --> AnalyticsPage
    LifeScoreWidget --> LifeScorePage
    AchievementsWidget --> AchievementsPage
```

`codebase_v2.md`
```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}
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
import { ShapesBackground } from '../components/layout/background/shapes-background'
import { FloatingChatButton } from '../components/layout/floating-button/floating-chat-button'
import { HeaderContainer } from '../components/layout/header-container/header-container'
import { TipsCarousel } from '../components/layout/header-container/tips-carousel'
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
      <ShapesBackground />
      <FloatingChatButton />
      <div ref={headerRef} className="relative">
        <HeaderContainer />
        <div className="absolute inset-0 w-full h-full bg-white" style={{ opacity: fadePercentage / 100 }} />
      </div>
      <div className="sticky top-0 z-30">
        <TipsCarousel />
      </div>
      <WidgetsContainer />
    </div>
  )
}
```

```tsx
// components/layout/background/shapes-background.tsx
export function ShapesBackground() {
  return (
    <div className="fixed w-full h-[70%] -z-10">
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
// components/layout/floating-button/floating-chat-button.tsx
import { MessageCircle } from 'lucide-react'
import { Button } from '../../ui/button'

export function FloatingChatButton() {
  return (
    <Button
      className="fixed bottom-4 right-4 rounded-full p-3 bg-orange-main hover:bg-orange-600 transition-colors duration-200"
      onClick={() => console.log('Open chat')}
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  )
}
```

```tsx
// components/layout/header-container/header-container.tsx
import { TopBar } from './top-bar'
import { AvatarSection } from './avatar-section'
import { GreetingSection } from './greeting-section'

export function HeaderContainer() {
  return (
    <div className="relative">
      <TopBar />
      <AvatarSection />
      <GreetingSection />
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
              <DropdownMenuItem className="text-sm text-gray-500 p-2">email@gmail.com</DropdownMenuItem>
              <DropdownMenuItem className="flex flex-row">
                <Avatar className="border-2 border-gradient-orange h-8 w-8">
                  <AvatarImage src={avatarUrl} alt={username} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <span className="flex flex-col gap-0 ml-2">
                  <h1>{username}</h1>
                  <p className="text-gray-500">Free plan</p>
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
// components/layout/header-container/avatar-section.tsx
export function AvatarSection({ avatarUrl = 'https://i.pravatar.cc/300' }) {
  return (
    <div className="w-full flex justify-center z-10">
      <div className="rounded-full shadow-lg border-4 border-orange-300/25 overflow-hidden">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-56 h-56 object-cover"
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
        <span className="tracking-tighter font-bold text-2xl">READY TO CRASH SOME HABITS?</span>
      </h1>
    </motion.div>
  )
}
```

```tsx
// components/layout/header-container/tips-carousel.tsx
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
    <div className="rounded border-y border-black bg-white m-4 p-1.5">
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
      className="relative overflow-hidden"
      title="Upgrade to Premium 50% off limited time offer!"
      rightIcon={
        <button
          className="absolute top-4 right-4 text-orange-main"
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
          className="border border-gradient-orange text-sm p-2 rounded-md"
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
    <Widget title="Today's Habits" rightIcon={<ChevronRight className="h-5 w-5 text-orange-main" />}>
      <div className="flex items-center justify-between">
        <div className="my-2">
          <p className="text-sm text-gray-500">Completed</p>
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
// components/layout/widgets-container/todos-widget/todos-widget.tsx
import { ChevronRight } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function TodosWidget() {
  return (
    <Widget title="Today's Todo's" rightIcon={<ChevronRight className="h-5 w-5 text-orange-main" />}>
      <div className="flex items-center justify-between">
        <div className="my-2">
          <p className="text-sm text-gray-500">Completed</p>
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
            <span className="text-orange-main font-bold">80%</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-orange-main rounded-full"></div>
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
  rightIcon = <ChevronRight size={16} className="text-orange-main" />,
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

```svg
<!-- public/bg.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 800">
  <path d="M0 0 H400 V800 H0 Z" fill="#f97316" />
  <path d="M250 0 L400 0 L400 300 Z" fill="#404040" />
  <path d="M0 750 L400 75 L400 800 Z" fill="#fb9a47" />
</svg>
```
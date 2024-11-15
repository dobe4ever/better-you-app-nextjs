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
import { LifeScoreAndCourses } from '../components/LifeScoreAndCourses'

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

          {/* x = horizontal | y = vertical */}
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 400 800">
            {/* Main orange background */}
            <path d="M0 0 H400 V800 H0 Z" fill="#f97316" />
            {/* black triangle */}
            <path d="M250 0 L400 0 L400 300 Z" fill="#404040" />
            {/* Light orange accent */}
            < path d="M0 750 L400 75 L400 800 Z" fill="#fb9a47" />
          </svg>

        </div>

        {/* Content container - Relative position */}
        <div className="Relative">

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
            <LifeScoreAndCourses />
          </main>

        </div>

    </div>
  )
}


// app/page.tsx
// 'use client'
// import { useState, useEffect } from 'react'
// import { Header } from '../components/Header'
// import { AiTipsCarousel } from '../components/AiTipsCarousel'
// import { Announcement } from '../components/Announcement'
// import { Habits } from '../components/Habits'
// import { Todos } from '../components/Todos'
// import { GridWidgets } from '../components/GridWidgets'
// import { AdsCarousel } from '../components/AdsCarousel'
// import { LifeScoreAndCourses } from '../components/LifeScoreAndCourses'

// export default function Component() {
//   const [scrollPosition, setScrollPosition] = useState(0);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.scrollY;
//       setScrollPosition(position);
//     };
//     // Set initial scroll position
//     handleScroll();
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
    
//   return (
//     <div className="min-h-screen">
//       {/* Header */}
//       <Header />
//       {/* Sticky Top */}
//       <div className="sticky top-0 z-30 w-full">
//         <AiTipsCarousel />
//       </div>
//       {/* Widgets wrapper */}
//       <main className="flex flex-col w-full bg- py-4 px-3 space-y-2">
//         <Announcement />
//         <Habits />
//         <Todos />
//         <GridWidgets />
//         <AdsCarousel />
//         <LifeScoreAndCourses />
//       </main>
//     </div>
//   )
// }

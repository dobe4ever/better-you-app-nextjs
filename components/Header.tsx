// // components/Header.tsx
// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import { motion } from 'framer-motion'
// import { TopBar } from './TopBar'

// interface HeaderProps {
//   username?: string
//   avatarUrl?: string
// }

// export function Header({ username = 'Brotastic', avatarUrl = 'https://i.pravatar.cc/300' }: HeaderProps) {
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
//     <div className="relative" >

//         <TopBar />

//         {/* Centered avatar container */}
//         <div className="w-full">
//           {/* Avatar */}
//           <div className="w-full flex justify-center z-10">
//             <div className="rounded-full shadow-lg border-4 border-orange-300/25 overflow-hidden">
//               <img
//                 src={avatarUrl}
//                 alt="Avatar"
//                 className="w-56 h-56 object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Main greeting text */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 10}}
//           transition={{ delay: 0.1, duration: 0.2 }}
//           className="text-center"
//         >
//           <h1 className="text-white">
//             <span className="tracking-tighter font-bold text-2xl">READY TO CRASH SOME HABITS?</span>
//           </h1>
//         </motion.div>

//     </div>
//   )
// }

// components/Header.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TopBar } from './TopBar'

interface HeaderProps {
  username?: string
  avatarUrl?: string
}

export function Header({ username = 'Bruh!', avatarUrl = 'https://i.pravatar.cc/300' }: HeaderProps) {
  const [fadePercentage, setFadePercentage] = useState(100)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollPosition = window.scrollY
        const headerHeight = headerRef.current.offsetHeight
        const newFadePercentage = Math.max(0, Math.min(100, (1 - scrollPosition / headerHeight) * 100))
        setFadePercentage(newFadePercentage)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className="relative w-full transition-opacity duration-300"
      style={{ opacity: `${fadePercentage / 100}` }}
    >
      <TopBar username={username} avatarUrl={avatarUrl} />

      {/* Background shape */}
      <div className="relative w-full pb-[55%]">
        {/* Skewed orange overlay */}
        <div className="flex justify-center items-center">
          <div className="absolute -top-10 left-0 h-[60%] w-1/2 bg-orange-400 -skew-y-12"></div>
          <div className="absolute -top-10 right-0 h-[60%] w-1/2 bg-orange-400 skew-y-12"></div>
        </div>
      </div>

      {/* Centered avatar container */}
      <div className="absolute top-10 w-full">

            {/* Avatar */}
            <div className="w-full flex justify-center z-10">
              <div className="rounded-full shadow-xl border-4 border-orange-300/25 overflow-hidden">
                <img
                  src="https://i.pravatar.cc/128"
                  alt="Avatar"
                  className="w-56 h-56 object-cover"
                />
              </div>
            </div>

            {/* Main greeting text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}

              // SHOW/HIDE TEXT:
              // animate={{ opacity: 1, y: 10}} 
              animate={{ opacity: 1, y: 500}}

              transition={{ delay: 0.1, duration: 0.2 }}
              className="text-center"
            >
              <h1 className="text-orange-400">
                <span className="tracking-tighter font-bold text-2xl">READY TO CRASH SOME HABITS?</span>
              </h1>
            </motion.div>

      </div>
    </header>
  )
}
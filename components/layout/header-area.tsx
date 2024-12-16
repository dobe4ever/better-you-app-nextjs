// // components/layout/header-area.tsx
// 'use client'

// // imports
// import { motion } from 'framer-motion'
// import { Search, Bell, Menu, LogOut, Settings, PenIcon as UserPen } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
// } from '@/components/ui/dropdown-menu'
// import Image from 'next/image'
// import React from 'react'
// import { useState } from 'react'

// // interfaces
// interface TopBarProps {
//   username: string
//   avatarUrl: string
// }
// interface ProfileBtnProps {
//     username: string
//     avatarUrl: string
//   }

// // HamburgerBtn component
// export function HamburgerBtn() {
//     return (
//       <div className="[&_svg]:size-5">
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="ghost" size="icon" className="relative text-white">
//             <Menu />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end" className="w-56">
//           <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
//           <DropdownMenuItem>Menu Item 2</DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//       </div>
//     )
//   }
  
// // Logo component
// export function Logo() {
//   return (
//     <div className="flex items-center h-8 w-8">
//       <Image
//         src="/assets/logos/logo-symbol-white.svg"
//         alt="Better You Logo"
//         width={32}
//         height={32}
//         className="w-full h-full"
//         priority
//       />
//     </div>
//   )
// }

// // NotificationBtn component
// export function NotificationBtn() {
//     const [notificationCount, setNotificationCount] = useState(3)
  
//     return (
//       <div className="[&_svg]:size-5">
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="ghost" size="icon" className="relative text-white">
//             <Bell />
//             {notificationCount > 0 && (
//               <motion.span
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white"
//               >
//                 {notificationCount}
//               </motion.span>
//             )}
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end" className="w-56">
//           <DropdownMenuLabel>Notifications</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem onClick={() => setNotificationCount(prev => Math.max(0, prev - 1))}>
//             Mark as read
//           </DropdownMenuItem>
//           <DropdownMenuItem>View all notifications</DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//       </div>
//     )
//   }
  
// // ProfileBtn component
// export function ProfileBtn({ username, avatarUrl }: ProfileBtnProps) {
//     const initials = username.slice(0, 2).toUpperCase()
  
//     return (
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="ghost" size="icon" className="rounded-full text-white pr-2">
//             <Avatar className="border-2 border-white h-8 w-8">
//               <AvatarImage src={avatarUrl} alt={username} />
//               <AvatarFallback>{initials}</AvatarFallback>
//             </Avatar>
//             <span className="sr-only">User menu</span>
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end" className="w-56 p-2">
//           <DropdownMenuItem className="text-sm text-gray-500 p-2">email@gmail.com</DropdownMenuItem>
//           <DropdownMenuItem className="flex flex-row">
//             <Avatar className="border-2 border-gradient-orange h-8 w-8">
//               <AvatarImage src={avatarUrl} alt={username} />
//               <AvatarFallback>{initials}</AvatarFallback>
//             </Avatar>
//             <span className="flex flex-col gap-0 ml-2">
//               <h1>{username}</h1>
//               <p className="text-gray-500">Free plan</p>
//             </span>
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /> Settings</DropdownMenuItem>
//           <DropdownMenuItem><UserPen className="mr-2 h-4 w-4" /> Edit Profile</DropdownMenuItem>
//           <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" /> Log out</DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     )
//   }
  
// // SearchBtn component
// export function SearchBtn() {
//     return (
//       <div className="[&_svg]:size-5">
//       <Button variant="ghost" size="icon" className="relative text-white" onClick={() => console.log('Search clicked')}>
//         <Search />
//       </Button>
//       </div>
//     )
//   }

// // TopBar component
// export function TopBar({ username, avatarUrl }: TopBarProps) {
//     return (
//       <div className="relative p-2 z-10">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-4">
//             <HamburgerBtn />
//             <Logo />
//           </div>
//           <div className="flex items-center gap-4">
//             {/* <SearchBtn /> */}
//             <NotificationBtn />
//             <ProfileBtn username={username} avatarUrl={avatarUrl} />
//           </div>
//         </div>
//       </div>
//     )
//   }

// // AvatarSection component
// export function AvatarSection({ avatarUrl = 'https://i.pravatar.cc/300' }) {
//   return (
//     <div className="w-full flex justify-center z-10">
//       <div className="rounded-full shadow-lg border-4 border-orange-300/25 overflow-hidden">
//         <img
//           src={avatarUrl}
//           alt="Avatar"
//           className="w-56 h-56 object-cover"
//         />
//       </div>
//     </div>
//   )
// }

// // DateSection component
// export function DateSection() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 10 }}
//       transition={{ delay: 0.1, duration: 0.2 }}
//       className="text-center"
//     >
//       <h1 className="text-orange-main">
//         <span className="tracking-tighter font-bold text-2xl">FRIDAY DECEMBER 6, 2024</span>
//       </h1>
//     </motion.div>
//   )
// }

// // components/layout/header-container/shapes-background.tsx
// // ShapesBG component
// // Westpack BG
// // export function ShapesBackground() {
// //   return (
// //     <div className="fixed top-0 left-0 right-0 bottom-0 -z-10">
// //       <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 400 800">
// //         <path d="M0 0 H400 V800 H0 Z" fill="#f97316" />
// //         <path d="M250 0 L400 0 L400 300 Z" fill="#404040" />
// //         <path d="M0 750 L400 75 L400 800 Z" fill="#fb9a47" />
// //       </svg>
// //     </div>
// //   )
// // }

// // Diagonal lines BG
// export function ShapesBackground() {
//     return (
//       <div className="absolute top-0 left-0 right-0 bottom- -z-10">
//         <div className="top-0 left-0 right-0 bottom- -z-10">
//           <div className="absolute top-0 left-0 h-[25vh] w-1/2 bg-orange-main origin-top-left transform -skew-y-12"></div>
//           <div className="absolute top-0 right-0 h-[25vh] w-1/2 bg-orange-main origin-top-right transform skew-y-12"></div>
//         </div>
//       </div>
//     )
//   }

// // HeaderArea component
// export function HeaderArea() {
//     return (
//       <div className="">
//         <TopBar username="Brotastic" avatarUrl="https://i.pravatar.cc/300" />
//         <AvatarSection />
//         <DateSection />
//         <ShapesBackground />
//       </div>
//     )
//   }


// components/layout/header-area.tsx
import { AvatarSection } from './header/avatar-section'
import { DateSection } from './header/date-section'
import { TopBar } from './header/top-bar'

export function HeaderArea() {
  return (
    <>
      <TopBar />
      <div className="">
        <AvatarSection />
        <ShapesBackground />
      </div>
      <DateSection />
      {/* <ShapesBackground /> */}
    </>
  )
}

// Diagonal lines BG
export function ShapesBackground() {
  return (
    <div className="relative top-0 left-0 right-0 bottom- -z-10">
      <div className="z-10">
        <div className="absolute -top-10 left-0 h-[50vh] w-1/2 bg-white origin-top-left transform -skew-y-12"></div>
        <div className="absolute -top-10 right-0 h-[50vh] w-1/2 bg-white origin-top-right transform skew-y-12"></div>
      </div>
    </div>
  )
}

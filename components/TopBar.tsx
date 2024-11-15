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

              <DropdownMenuItem className="text- text-gray-400 p-2"> email@gmail.com </DropdownMenuItem>

              <DropdownMenuItem className="flex flex-row" > 
                
                <Avatar className="border-2 border-orange-500 h-8 w-8">
                  <AvatarImage src={avatarUrl} alt={username} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>

                <span className="flex flex-col gap-0">
                  <h1> {username} </h1>
                  <p className="text-gray-400"> Free plan </p>
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


// 'use client'

// import { useState } from 'react'
// import { Menu, Bell, User } from 'lucide-react'
// import { motion } from 'framer-motion'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'

// interface TopBarProps {
//   username?: string
//   avatarUrl?: string
// }

// export function TopBar({ username = 'Bruh!', avatarUrl = '/placeholder.svg' }: TopBarProps) {
//   const [notificationCount, setNotificationCount] = useState(3)

//   const initials = username.slice(0, 2).toUpperCase()

//   return (
//     <div className="bg-orange-400">
//       <div className="pb-10">
//         <div className="flex h-12 items-center justify-between">
//           {/* Left side */}
//           <div className="flex items-center">
//             <Button variant="ghost" size="icon" className="mr-4 text-white hover:bg-orange-500">
//               <Menu className="h-8 w-8" />
//               <span className="sr-only">Menu</span>
//             </Button>
//             <h1 className="text- font-semibold text-white">Yo {username}</h1>
//           </div>

//           {/* Right side */}
//           <div className="flex items-center">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon" className="relative text-white hover:bg-orange-500">
//                   <Bell className="h-8 w-8" />
//                   {notificationCount > 0 && (
//                     <motion.span
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white"
//                     >
//                       {notificationCount}
//                     </motion.span>
//                   )}
//                   <span className="sr-only">Notifications</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-56">
//                 <DropdownMenuLabel>Notifications</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem onClick={() => setNotificationCount(prev => Math.max(0, prev - 1))}>
//                   Mark as read
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>View all notifications</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>

//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-orange-500">
//                   <Avatar className="h-5 w-5">
//                     <AvatarImage src={avatarUrl} alt={username} />
//                     <AvatarFallback>{initials}</AvatarFallback>
//                   </Avatar>
//                   <span className="sr-only">User menu</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-56">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <User className="mr-2 h-4 w-4" />
//                   <span>Profile</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>Settings</DropdownMenuItem>
//                 <DropdownMenuItem>Log out</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
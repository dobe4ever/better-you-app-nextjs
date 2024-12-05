'use client'

import { useState } from 'react'
import { Menu, LogOut, Settings, Bell, PenIcon as UserPen } from 'lucide-react'
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


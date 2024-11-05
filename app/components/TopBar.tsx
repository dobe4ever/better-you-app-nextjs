'use client'

import { useState } from 'react'
import { Menu, Bell, User } from 'lucide-react'
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

interface TopBarProps {
  username?: string
  avatarUrl?: string
}

export function TopBar({ username = 'Bruh!', avatarUrl = '/placeholder.svg' }: TopBarProps) {
  const [notificationCount, setNotificationCount] = useState(3)

  const initials = username.slice(0, 2).toUpperCase()

  return (
    <div className="bg-orange-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left side */}
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-4 text-white hover:bg-orange-500">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
            <h1 className="text-xl font-semibold text-white">Yo {username}</h1>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative text-white hover:bg-orange-500">
                  <Bell className="h-6 w-6" />
                  {notificationCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white"
                    >
                      {notificationCount}
                    </motion.span>
                  )}
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
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
                <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-orange-500">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={avatarUrl} alt={username} />
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}
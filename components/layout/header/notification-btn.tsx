// components/layout/header/notification-btn.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Bell } from 'lucide-react'

interface NotificationBtnProps {
  color?: 'white' | 'orange'
}

export function NotificationBtn({ color = 'white' }: NotificationBtnProps) {
  const [notificationCount, setNotificationCount] = useState(3)

  const iconColor = color === 'white' ? 'white' : 'orange'
  const bgColor = color === 'white' ? 'bg-white' : 'bg-orange-500'
  const textColor = color === 'white' ? 'text-orange-main' : 'text-white'

  return (
    <div className="[&_svg]:size-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Bell strokeWidth={2} color={iconColor} />
            {notificationCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`absolute right-0 top-0 flex size-4 items-center justify-center rounded-full text-xs font-bold ${bgColor} ${textColor}`}
              >
                {notificationCount}
              </motion.span>
            )}
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
    </div>
  )
}



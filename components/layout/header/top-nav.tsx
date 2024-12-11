// components/layout/header/top-nav.tsx
import { ChevronLeft } from 'lucide-react'
import { Logo } from './logo'
import { NotificationBtn } from './notification-btn'
import { ProfileBtn } from './profile-btn'
import { Button } from '@/components/ui/button'

interface TopNavProps {
  username: string
  avatarUrl: string
  onBackClick: () => void
}

export function TopNav({ username, avatarUrl, onBackClick }: TopNavProps) {
  return (
    <div className="relative p-2 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative text-white" onClick={onBackClick}>
            <ChevronLeft />
          </Button>
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          <NotificationBtn />
          <ProfileBtn username={username} avatarUrl={avatarUrl} />
        </div>
      </div>
    </div>
  )
}

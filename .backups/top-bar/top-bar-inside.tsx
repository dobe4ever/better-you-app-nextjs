// components/layout/top-bar/top-bar-inside.tsx
import { ChevronLeft } from 'lucide-react'
import { Logo } from './logo'
// import { SearchBtn } from './search-btn'
import { NotificationBtn } from './notification-btn'
import { ProfileBtn } from './profile-btn'

interface TopBarProps {
  username: string
  avatarUrl: string
}

export function TopBarInside({ username, avatarUrl }: TopBarProps) {
  return (
    <div className="relative p-2 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <ChevronLeft />
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          {/* <SearchBtn /> */}
          <NotificationBtn />
          <ProfileBtn username={username} avatarUrl={avatarUrl} />
        </div>
      </div>
    </div>
  )
}


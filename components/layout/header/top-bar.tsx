// components/layout/header/top-bar.tsx
import { HamburgerBtn } from './hamburger-btn'
import { Logo } from './logo'
import { NotificationBtn } from './notification-btn'
import { AvatarSection } from './avatar-section'

interface TopBarProps {
  username: string
  avatarUrl: string
}

export function TopBar({ username, avatarUrl }: TopBarProps) {
  return (
    <div className="relative p-2 pr-4 z-10">

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <HamburgerBtn />
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          <NotificationBtn />
          <AvatarSection size="size-7" />
        </div>
      </div>
    </div>
  )
}

// components/layout/header/top-bar.tsx
import { HamburgerBtn } from './hamburger-btn'
import { LogoWhite } from './logo'
import { NotificationBtn } from './notification-btn'
import { AvatarSection } from './avatar-section'

interface TopBarProps {
  username: string
  avatarUrl: string
}

export function TopBar() {
  return (
    <div className="relative p-2 pr-4 z-10">

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <HamburgerBtn />
          <LogoWhite />
        </div>
        <div className="flex items-center gap-4">
          <NotificationBtn />
          <AvatarSection classnames='size-8 border-2 border- shadow- rounded-full' />
        </div>
      </div>
    </div>
  )
}

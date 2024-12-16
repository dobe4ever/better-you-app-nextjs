// components/layout/header/top-bar.tsx
import { HamburgerBtn } from './hamburger-btn'
import { LogoWhite } from './logo'
import { NotificationBtn } from './notification-btn'
import { ProfileBtn } from './profile-btn'

export function TopBar() {
  return (
    <div className="relative p-2 pr-3 z-10">

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <HamburgerBtn />
          <LogoWhite />
        </div>
        <div className="flex items-center gap-4">
          <NotificationBtn />
          <ProfileBtn />
        </div>
      </div>
    </div>
  )
}

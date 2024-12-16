// components/layout/header/top-bar.tsx
import { HamburgerBtn } from './hamburger-btn'
import { LogoWhite } from './logo'
import { NotificationBtn } from './notification-btn'
import { ProfileBtn } from './profile-btn'

export function TopBar() {
  return (
    <div className="relative pl-1 p-2 pr-2 z-10">

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <HamburgerBtn />
          <LogoWhite />
        </div>
        <div className="flex items-center gap-3">
          <NotificationBtn />
          <ProfileBtn />
        </div>
      </div>
    </div>
  )
}

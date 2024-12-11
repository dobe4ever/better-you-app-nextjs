// components/layout/header/top-bar.tsx
import { HamburgerBtn } from './hamburger-btn'
import { Logo } from './logo'
import { NotificationBtn } from './notification-btn'
import { ProfileBtn } from './profile-btn'
import { SearchBtn } from './search-btn'

interface TopBarProps {
  username: string
  avatarUrl: string
}

export function TopBar({ username, avatarUrl }: TopBarProps) {
  return (
    <div className="relative p-2 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <HamburgerBtn />
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

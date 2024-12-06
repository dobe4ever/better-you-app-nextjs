// components/layout/header-container/header-container.tsx

// import { TopBar } from './top-bar'
import { TopBar } from './top-bar/index'
import { AvatarSection } from './avatar-section'
import { HeaderDate } from './header-date'
import { ShapesBackground } from './shapes-background'

export function HeaderContainer() {
  return (
    <div className="">
      <TopBar />
      <AvatarSection />
      <HeaderDate />
      <ShapesBackground />
    </div>
  )
}


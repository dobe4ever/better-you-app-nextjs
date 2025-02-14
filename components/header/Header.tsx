// components/header/Header.tsx

import { UserCard } from './user-card/UserCard'
import { TopBar } from './top-bar/TopBar'

export function Header() {
  return (
    <>
      <TopBar />
      <UserCard />
    </>
  )
}
// components/layout/header-container/top-bar/types.ts
export interface TopBarProps {
    username?: string
    avatarUrl?: string
  }
  
  export interface UserMenuProps {
    username: string
    avatarUrl: string
    email?: string
    planType?: string
  }
  
  export interface NotificationProps {
    count: number
    onMarkAsRead?: () => void
  }
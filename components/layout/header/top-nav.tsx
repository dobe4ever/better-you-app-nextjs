// // components/layout/header/top-nav.tsx
// import { ChevronLeft } from 'lucide-react'
// import { Logo } from './logo'
// import { NotificationBtn } from './notification-btn'
// import { ProfileBtn } from './profile-btn'
// import { Button } from '@/components/ui/button'

// interface TopNavProps {
//   username: string
//   avatarUrl: string
//   onBackClick: () => void
// }

// export function TopNav({ username, avatarUrl, onBackClick }: TopNavProps) {
//   return (
//     <div className="fixed top-0 p-2 z-10">
//       <div className="flex justify-between items-center">
//         <div className="flex items-center gap-4">
//           <Button variant="ghost" size="icon" className="relative text-white" onClick={onBackClick}>
//             <ChevronLeft />
//           </Button>
//           <Logo />
//         </div>
//         <div className="flex items-center gap-4">
//           <NotificationBtn />
//           <ProfileBtn username={username} avatarUrl={avatarUrl} />
//         </div>
//       </div>
//     </div>
//   )
// }



// components/layout/header/top-nav.tsx
import { LogoOrange } from './logo'
import { NotificationBtn } from './notification-btn'
import { ProfileBtn } from './profile-btn'
// import { AvatarSection } from './avatar-section'

interface TopNavProps {
  username: string;
  avatarUrl: string;
  onClose: () => void;
}

export function TopNav() {
  return (
    <div className="fixed top-3 right-4 left-12 p- z-10">

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <LogoOrange />
        </div>
        <div className="text-orange-main flex justify-between items-center gap-4">
          <NotificationBtn color="orange" />
          <ProfileBtn />
        </div>
      </div>

    </div>
  )
}
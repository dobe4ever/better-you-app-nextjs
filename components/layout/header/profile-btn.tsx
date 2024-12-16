// components/layout/header/profile-btn.tsx
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { Settings, LogOut, UserPen } from 'lucide-react'

interface ProfileBtnProps {
  username: string
  avatarUrl: string
}

export function ProfileBtn({ username, avatarUrl }: ProfileBtnProps) {
  const initials = username.slice(0, 2).toUpperCase()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full text-white pr-">
          <Avatar className="border-2 border-white h-8 w-8">
            <AvatarImage src={avatarUrl} alt={username} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className="sr-only">User menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 p-2">
        <DropdownMenuItem className="text-sm text-gray-500 p-2">email@gmail.com</DropdownMenuItem>
        <DropdownMenuItem className="flex flex-row">
          <Avatar className="border-2 border-gradient-orange h-8 w-8">
            <AvatarImage src={avatarUrl} alt={username} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className="flex flex-col gap-0 ml-2">
            <h1>{username}</h1>
            <p className="text-gray-500">Free plan</p>
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /> Settings</DropdownMenuItem>
        <DropdownMenuItem><UserPen className="mr-2 h-4 w-4" /> Edit Profile</DropdownMenuItem>
        <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" /> Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

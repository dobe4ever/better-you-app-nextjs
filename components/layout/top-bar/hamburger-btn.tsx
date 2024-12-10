// components/layout/top-bar/hamburger-btn.tsx
'use client'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function HamburgerBtn() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative text-white">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


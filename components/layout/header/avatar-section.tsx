// components/layout/header/avatar-section.tsx
import React from 'react'

interface AvatarSectionProps {
  avatarUrl?: string,
  size?: string
}

export function AvatarSection({ avatarUrl = 'https://i.pravatar.cc/300', size = 'h-56 w-56' }: AvatarSectionProps) {
  return (
    <div className="w-full flex justify-center z-10">
      <div className="rounded-full shadow-lg border-[3px] border-orange-300/25 overflow-hidden">
        <img
          src={avatarUrl}
          alt="Avatar"
          className={size}
        />
      </div>
    </div>
  )
}

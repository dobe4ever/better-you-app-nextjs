// components/layout/header/avatar-section.tsx
import React from 'react'

interface AvatarSectionProps {
  avatarUrl?: string
}

export function AvatarSection({ avatarUrl = 'https://i.pravatar.cc/300' }: AvatarSectionProps) {
  return (
    <div className="w-full flex justify-center z-10">
      <div className="rounded-full shadow-lg border-4 border-orange-300/25 overflow-hidden">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-56 h-56 object-cover"
        />
      </div>
    </div>
  )
}

// components/layout/header/avatar-section.tsx
import React from 'react'

interface AvatarSectionProps {
  classnames?: string
}

export function AvatarSection({ classnames='size-56 border-4 border-orange-300/50 shadow-lg rounded-full' }: AvatarSectionProps) {
  return (
    <div className="w-full flex justify-center z-10">
      <div className={classnames}>
        <img
          src="https://i.pravatar.cc/300"
          className="overflow-hidden rounded-full"
        />
      </div>
    </div>
  )
}

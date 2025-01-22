// components2/header/big-avatar.tsx

import React from 'react'

interface BigAvatarProps {
  classnames?: string
}

export function BigAvatar({ classnames='size-[75%] border-4 border-orange-300/50 shadow-lg rounded-full' }: BigAvatarProps) {
  return (
    <div className="w-full flex justify-center z-">
      <div className={classnames}>
        <img
          src="https://i.pravatar.cc/300"
          className="overflow-hidden rounded-full"
        />
      </div>
    </div>
  )
}


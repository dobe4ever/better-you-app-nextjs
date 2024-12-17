// components/layout/floating-chat-btn.tsx
'use client'

import { Bot } from 'lucide-react'
import { ReactNode } from 'react'

interface FloatingChatBtnProps {
  title?: string
  children?: ReactNode
  onClick?: () => void
  rightIcon?: ReactNode
  className?: string
}

export function FloatingChatBtn({
  title = "Chatbot Page",
  children,
  onClick,
  rightIcon = <Bot size={30} className="m-3 text-white" />,
  className = '',
}: FloatingChatBtnProps) {
  return (
    <div
      className={`z-50 fixed bottom-4 right-4 size-[56px] border-2 border-orange-300/90 bg-gradient-orange text-white rounded-full shadow-md ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-2">
        {rightIcon}
      </div>
      {children}
    </div>
  )
}

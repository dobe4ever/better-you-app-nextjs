// components/layout/floating-chat-btn.tsx
'use client'

import { Bot } from 'lucide-react'
import { ReactNode } from 'react'

interface FloatingChatBtnProps {
  title?: string
  children?: ReactNode
  onClick?: () => void
  BotIcon?: ReactNode
  className?: string
}

export function FloatingChatBtn({
  title = "Chatbot Page",
  children,
  onClick,
  BotIcon = <Bot size={56} className="border-2 border-orange-300/90 bg-gradient-orange text-white rounded-full shadow-md p-2 pb-3" />,
  className = '',
}: FloatingChatBtnProps) {
  return (
    <div
      className={`z-50 fixed bottom-4 right-4 ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
      onClick={onClick}
    >
      <div className="">
        {BotIcon}
      </div>
      {children}
    </div>
  )
}

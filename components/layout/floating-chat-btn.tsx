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
  BotIcon = <Bot size={36} className="text-white" />,
  className = '',
}: FloatingChatBtnProps) {
  return (
    <div
      className={`z-50 fixed bottom-4 right-4 size-[56px] border-2 border-orange-300/90 bg-gradient-orange text-white rounded-full shadow-md ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
      onClick={onClick}
    >
      <div className="p-2">
        {BotIcon}
      </div>
      {children}
    </div>
  )
}

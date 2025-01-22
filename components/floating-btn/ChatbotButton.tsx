// components/floating-btn/ChatbotButton.tsx
'use client'

import { Bot } from 'lucide-react'
import { ReactNode } from 'react'

interface ChatbotButtonProps {
  title?: string
  children?: ReactNode
  onClick?: () => void
  BotIcon?: ReactNode
  className?: string
}

export function ChatbotButton({
  title = "Chatbot",
  children,
  onClick,
  BotIcon = <Bot size={46} className="border-2 border-white/50 bg-gradient-orange text-white rounded-full shadow-md p-1 pb-2" />,
  className = '',
}: ChatbotButtonProps) {
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

// components/layout/floating-button/floating-chat-button.tsx
import { Bot } from 'lucide-react'
import { Button } from '../../ui/button'

export function FloatingChatButton() {
  return (
    <Button
      className="fixed bottom-4 right-4 rounded-full p-3 bg-orange-500 z-50"
      onClick={() => console.log('Open chat')}
    >
      <Bot className="h-6 w-6 text-white" />
    </Button>
  )
}
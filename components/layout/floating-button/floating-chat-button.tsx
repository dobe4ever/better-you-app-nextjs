import { Bot } from 'lucide-react'
import { Button } from '../../ui/button'

export function FloatingChatButton({ className = '' }) {
  return (
    <Button
      className={`fixed bottom-4 right-4 rounded-full p-3 bg-orange-500 ${className}`}
      onClick={() => console.log('Open chat')}
    >
      <Bot className="h-6 w-6 text-white" />
    </Button>
  )
}


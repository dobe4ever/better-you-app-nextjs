// components/layout/widgets-container/success-coach-widget/success-coach-widget.tsx
import { Bot } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function SuccessCoachWidget() {
  return (
    <Widget title="AI Check-in" className="flex flex-col gap-2">
      <Bot size={32} />
      <div className="text-sm text-gray-600 mt-6">
      24/7 AI guidance and support
      </div>
    </Widget>
  )
}


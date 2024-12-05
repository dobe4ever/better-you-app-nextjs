import { Bot } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function SuccessCoachWidget() {
  return (
    <Widget title="Success Coach" className="flex flex-col gap-2">
      <Bot size={32} />
      <div className="text-sm text-gray-600 mt-2">
        Get instant guidance and support from your 24/7 AI coach
      </div>
    </Widget>
  )
}


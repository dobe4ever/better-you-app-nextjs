// components/widegets-grid/checkin/CheckinWidget.tsx

import { Widget } from '@/components/widegets-grid/widget'
import { Bot } from 'lucide-react'
  
// CheckinAIWidget component
export function CheckinWidget({ onCheckinClick }: { onCheckinClick: () => void }) {
  return (
    <Widget title="AI Check-in" onClick={onCheckinClick} className="flex flex-col gap-4 aspect-[1/1]">
    <div className="flex flex-col items-center">
      <Bot className="w-8 h-8 text-orange-400 mt-2" />
      <span className="text-xl font-bold mb-2">24/7</span>
      <span className="text-description-card">24/7 AI guidance and support</span>
    </div>
  </Widget>
  )
}
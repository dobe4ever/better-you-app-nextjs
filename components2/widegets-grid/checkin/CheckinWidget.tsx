// components2/home/widegets-grid/checkin/CheckinWidget.tsx

import { Widget } from '@/components2/ui/widget'
import { Bot } from 'lucide-react'

// CheckinWidget component
export function CheckinWidget({ onCheckinClick }: { onCheckinClick: () => void }) {
    return (
      <Widget title="AI Check-in" onClick={onCheckinClick} className="flex flex-col gap-2">
        <Bot size={32} />
        <div className="text-description-card mt-6">
          24/7 AI guidance and support
        </div>
      </Widget>
    )
  }
  
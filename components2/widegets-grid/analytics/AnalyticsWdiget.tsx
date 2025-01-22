// components2/home/widegets-grid/analytics/AnalyticsWdiget.tsx

import { Widget } from '@/components2/ui/widget'
import { TrendingUp } from 'lucide-react'
  
  // AnalyticsWidget component
  export function AnalyticsWidget({ onAnalyticsClick }: { onAnalyticsClick: () => void }) {
    return (
      <Widget title="Analytics" onClick={onAnalyticsClick} className="flex flex-col gap-2">
        <div className="space-y-2">
          <div>
            <TrendingUp size={32} />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <div className="text-description-card">Last 7 days</div>
              <div className="text-orange-main font-bold">80%</div>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-orange rounded-full"></div>
            </div>
            <div className="flex justify-between">
              <div className="text-description-card">Last 30 days</div>
              <div className="text-gray-900 font-bold">48%</div>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-gray-900 rounded-full"></div>
            </div>
          </div>
        </div>
      </Widget>
    )
  }
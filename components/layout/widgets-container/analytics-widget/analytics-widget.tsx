import { TrendingUp } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function AnalyticsWidget() {
  return (
    <Widget title="Analytics" className="flex flex-col gap-2">
      <div className="space-y-2">
        <div>
          <TrendingUp size={32} />
        </div>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Last 7 Days</span>
            <span className="text-orange-500 font-bold">80%</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-orange-500 rounded-full"></div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Last 30 days</span>
            <span className="text-gray-900 font-bold">48%</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-gray-900 rounded-full"></div>
          </div>
        </div>
      </div>
    </Widget>
  )
}


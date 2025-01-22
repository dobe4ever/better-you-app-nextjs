// components2/home/widegets-grid/wheel/WheelWdiget.tsx

import { Widget } from '@/components2/ui/widget'
import { LoaderPinwheel } from 'lucide-react'

// WheelWidget component
export function WheelWidget({ onWheelClick }: { onWheelClick: () => void }) {
    return (
      <Widget title="Life Score" onClick={onWheelClick} className="flex flex-col gap-2">
        <LoaderPinwheel size={32} />
        <div className="text-description-card mt-2">
          Visualize progress across all life Grids
        </div>
      </Widget>
    )
  }
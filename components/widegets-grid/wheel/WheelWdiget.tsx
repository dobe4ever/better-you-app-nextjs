// components2/home/widegets-grid/wheel/WheelWdiget.tsx

import { Widget } from '@/components/ui/widget'
import { LoaderPinwheel } from 'lucide-react'

// WheelWidget component
// export function WheelWidget({ onWheelClick }: { onWheelClick: () => void }) {
//     return (
//       <Widget title="Life Score" onClick={onWheelClick} className="flex flex-col gap-2">
//         <LoaderPinwheel size={32} />
//         <div className="text-description-card mt-2">
//           Visualize progress across all life Grids
//         </div>
//       </Widget>
//     )
//   }

export function WheelWidget({ onWheelClick }: { onWheelClick: () => void }) {
  return (
    <Widget title="Life Score" onClick={onWheelClick} className="flex flex-col gap-4 aspect-[1/1]">
    <div className="flex flex-col items-center">
      <LoaderPinwheel className="w-8 h-8 text-orange-400 mt-2" />
      <span className="text-xl font-bold mb-2">Wheel</span>
      <span className="text-description-card">Visualize progress across all life areas</span>
    </div>
  </Widget>
  )
}
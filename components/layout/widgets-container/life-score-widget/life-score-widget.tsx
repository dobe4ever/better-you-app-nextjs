import { LoaderPinwheel } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function LifeScoreWidget() {
  return (
    <Widget title="Life Score" className="flex flex-col gap-2">
      <LoaderPinwheel size={32} />
      <div className="text-sm text-gray-600 mt-2">
        Measure your score across all life areas with our intuitive wheel assessment tool
      </div>
    </Widget>
  )
}


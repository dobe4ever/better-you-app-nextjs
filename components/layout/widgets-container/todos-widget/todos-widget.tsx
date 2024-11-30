// components/layout/widgets-container/todos-widget/todos-widget.tsx
import { ChevronRight } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function TodosWidget() {
  return (
    <Widget title="Today's Todo's" rightIcon={<ChevronRight className="h-5 w-5 text-orange-400" />}>
      <div className="flex items-center justify-between">
        <div className="my-2">
          <p className="text-sm text-gray-400">Completed</p>
          <p className="text-md font-bold">3/12</p>
        </div>
        <p className="text-2xl font-bold">29%</p>
      </div>
      
      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full rounded-full bg-black"
          style={{ width: '29%', transition: 'width 1s ease-in-out' }} 
        />
      </div>
    </Widget>
  )
}
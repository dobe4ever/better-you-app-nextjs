// components2/home/widegets-grid/todos/TodosWdiget.tsx

import { Widget } from '@/components2/ui/widget'

// TodosWidget component
export function TodosWidget({ onTodosClick }: { onTodosClick: () => void }) {
  return (
    <Widget title="Today's Todos" onClick={onTodosClick}>
      <div className="flex items-end justify-between mb-2">
        <div>
          <p className="text-description-card">Completed</p>
          <p className="text-xl font-bold">3/12</p>
        </div>
        <p className="text-big-percent-number">29%</p>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
          style={{ width: '29%', transition: 'width 1s ease-in-out' }}
        />
      </div>
    </Widget>
  )
}
// app/components/Habits.tsx
import { ChevronRight } from 'lucide-react'

export function Todos() {
  return (
    <div className="bg-white rounded-md border p-4 shadow">

      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Today's Todo's</p>
        <ChevronRight className="h-5 w-5 text-orange-400" />
      </div>

      <div className="flex items-center justify-between">

        <div className="my-2">
          <p className="text-gray-400">Completed</p>
          <p className="text-xl font-bold">3/12</p>
        </div>

        <p className="text-4xl font-bold">29%</p>

      </div>
      
      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400"
          style={{ width: '29%', transition: 'width 1s ease-in-out' }} 
        />
      </div>
    </div>
  )
}
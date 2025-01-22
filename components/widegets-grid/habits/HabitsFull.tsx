// components/widegets-grid/habits/HabitsFull.tsx
import React from 'react'
import { HabitsFullContent } from './HabitsFullContent'

export const HabitsFull: React.FC = () => {
  return (
    <>
      {/* title */}
      <div className="fixed left-3 top-3 text-title-card">
        Habits
      </div>

      <>
        {/* content */}
        <div className="fixed top-12 right-0 left-0 bottom-0 rounded-t-2xl p-4 bg-gradient-orange shadow-lg">
          <HabitsFullContent/>
        </div>
      </>
    </>
  )
}


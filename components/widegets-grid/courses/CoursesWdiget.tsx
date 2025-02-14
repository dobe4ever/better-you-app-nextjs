// components/widegets-grid/courses/CoursesWdiget.tsx

import { Widget } from '@/components/widegets-grid/widget'
import { GraduationCap } from 'lucide-react'

export function CoursesWidget({ onCoursesClick }: { onCoursesClick: () => void }) {
  return (
    <Widget title="Courses" onClick={onCoursesClick} className="flex flex-col gap-4 aspect-[1/1]">
      <div className="grid grid-cols-3 gap-2 mt-">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div
            key={i}
            className="aspect-square w-9 rounded-lg bg-orange-50 flex items-center justify-center"
          >
            <GraduationCap className="w-6 h-6 text-orange-400" />
          </div>
        ))}
      </div>
      <span className="text-description-card">Curated learning paths to track your journey</span>
    </Widget>
  )
}
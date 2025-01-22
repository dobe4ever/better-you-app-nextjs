// components2/home/widegets-grid/courses/CoursesWdiget.tsx

import { Widget } from '@/components2/ui/widget'
import { GraduationCap } from 'lucide-react'

// CoursesWidget component
export function CoursesWidget({ onCoursesClick }: { onCoursesClick: () => void }) {
    return (
      <Widget title="Courses" onClick={onCoursesClick} className="flex flex-col gap-2">
        <GraduationCap size={32} />
        <div className="text-description-card mt-2">
          Curated learning paths to track your journey
        </div>
      </Widget>
    )
  }
  
// components/layout/widgets-container/achievements-widget/achievements-widget.tsx
import { Trophy } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function AchievementsWidget() {
  return (
    <Widget title="Achievements" className="flex flex-col gap-2">
      <Trophy size={32} />
      <div className="text-sm text-gray-600 mt-2">
        Unlock rewards as you reach new milestones
      </div>
    </Widget>
  )
}
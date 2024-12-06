import { Trophy } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function AchievementsWidget() {
  return (
    <Widget title="Badges" className="flex flex-col gap-2">
      <Trophy size={32} />
      <div className="text-sm text-gray-600 mt-6">
      Earn rewards by reaching milestones
      </div>
    </Widget>
  )
}


// components/widegets-grid/badges/BadgesWdiget.tsx

import { Widget } from '@/components/widegets-grid/widget'
import { Trophy } from 'lucide-react'

export function BadgesWidget({ onBadgesClick }: { onBadgesClick: () => void }) {
  return (
    <Widget title="Badges" onClick={onBadgesClick} className="flex flex-col gap-4 aspect-[1/1]">
    <div className="flex flex-col items-center">
      <Trophy className="w-8 h-8 text-orange-400 mt-2" />
      <span className="text-xl font-bold mb-2">85 Total</span>
      <span className="text-description-card">Earn rewards by hitting milestones</span>
    </div>
  </Widget>
  )
}
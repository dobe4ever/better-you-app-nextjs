// components2/home/widegets-grid/badges/BadgesWdiget.tsx

import { Widget } from '@/components2/ui/widget'
import { Trophy } from 'lucide-react'
  
  // BadgesWidget component
  export function BadgesWidget({ onBadgesClick }: { onBadgesClick: () => void }) {
    return (
      <Widget title="Badges" onClick={onBadgesClick} className="flex flex-col gap-2">
        <Trophy size={32} />
        <div className="text-description-card mt-2">
          Earn rewards by hitting milestones
        </div>
      </Widget>
    )
  }
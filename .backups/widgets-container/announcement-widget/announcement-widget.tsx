// components/layout/widgets-container/announcement-widget/announcement-widget.tsx
'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Widget } from '../../../common/widget'

export function AnnouncementWidget() {
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  if (!showAnnouncement) return null

  return (
    <Widget 
    className="relative overflow-hidden"
    title="Premium Upgrade"
    rightIcon={
      <button 
        className="absolute top-4 right-4 text-orange-main"
        onClick={(e) => {
          e.stopPropagation();  // Prevents triggering any parent onClick handlers
          setShowAnnouncement(false);
        }}
      >
        <X size={16} />
      </button>
    }
  >
  <p className="text-sm text-gray-500">
    50% off premium features, limited time
  </p>
  <div className="mt-4">
    <a
      href="https://vercel.com/dobe4evers-projects/vitejs-node-ts-tailwind-better-you"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gradient-orange text-sm text-orange-main px-4 py-2 rounded-full"
    >
      Claim Offer
    </a>
    </div>
  </Widget>
  )
}


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
      className=""
      title="Upgrade to Premium 50% off limited time offer!"
      rightIcon={
        <button
          className="absolute top-4 right-4 text-orange-400"
          onClick={(e) => {
            e.stopPropagation()
            setShowAnnouncement(false)
          }}
        >
          <X size={16} />
        </button>
      }
    >
      <div className="mt-4">
        <a
          href="https://example.com/premium-offer"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-orange-500 text-sm p-2 rounded-md"
        >
          Read More
        </a>
      </div>
    </Widget>
  )
}
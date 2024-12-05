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
    title="Better You Everyday"
    rightIcon={
      <button 
        className="absolute top-4 right-4 text-orange-400 hover:text-orange-600"
        onClick={(e) => {
          e.stopPropagation();  // Prevents triggering any parent onClick handlers
          setShowAnnouncement(false);
        }}
      >
        <X size={16} />
      </button>
    }
  >
  <p className="text-sm text-gray-400">
    Better you everyday | Vercel project overview
  </p>
  <div className="mt-2">
    <a
      href="https://vercel.com/dobe4evers-projects/vitejs-node-ts-tailwind-better-you"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-orange-400 text-sm text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200"
    >
      Go to Project
    </a>
    </div>
    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out" />
  </Widget>
  )
}


// components/widegets-grid/badges/BadgesFull.tsx

import React from 'react'
import { BadgesFullContent } from "./BadgesFullContent"

export const BadgesFull: React.FC = () => {
  return (
    <>
      {/* title */}
      <div className="fixed left-3 top-3 text-title-card">
      Badges
      </div>

      <>
      {/* content */}
        <div className="fixed top-12 right-0 left-0 bottom-0 rounded-t-2xl p-2 border">
          <BadgesFullContent/>
        </div>
      </>
    </>
  )
}

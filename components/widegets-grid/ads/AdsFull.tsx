// components2/widegets-grid/ads/AdsFull.tsx
import React from 'react'
import { AdsFullContent } from "./AdsFullContent"

export const AdsFull: React.FC = () => {
  return (
    <>
      {/* title */}
      <div className="fixed left-3 top-3 text-title-card">
        Habits
      </div>

      <>
      {/* content */}
        <div className="">
          <AdsFullContent/>
        </div>
      </>
    </>
  )
}
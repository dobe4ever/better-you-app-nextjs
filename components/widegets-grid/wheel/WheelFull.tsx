// components/widegets-grid/wheel/WheelFull.tsx

import React from 'react'
import { WheelFullContent } from "./WheelFullContent"

export const WheelFull: React.FC = () => {
  return (
    <>
      {/* title */}
      <div className="fixed left-3 top-3 text-title-card">
      Wheel Tool
      </div>

      <>
      {/* content */}
        <div className="fixed top-12 right-0 left-0 bottom-0 rounded-t-2xl p-2 border">
          <WheelFullContent/>
        </div>
      </>
    </>
  )
}

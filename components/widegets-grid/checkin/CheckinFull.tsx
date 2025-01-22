// components/widegets-grid/checkin/CheckinFull.tsx

import React from 'react'
import { CheckinFullContent } from "./CheckinFullContent"

export const CheckinFull: React.FC = () => {
  return (
    <>
      {/* title */}
      <div className="fixed left-3 top-3 text-title-card">
      Checkin
      </div>

      <>
      {/* content */}
        <div className="fixed top-12 right-0 left-0 bottom-0 rounded-t-2xl p-2 border">
          <CheckinFullContent/>
        </div>
      </>
    </>
  )
}

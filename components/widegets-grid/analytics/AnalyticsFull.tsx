// components/widegets-grid/analytics/AnalyticsFull.tsx

import React from 'react'
import { AnalyticsFullContent } from "./AnalyticsFullContent"

export const AnalyticsFull: React.FC = () => {
  return (
    <>
      {/* title */}
      <div className="fixed left-3 top-3 text-title-card">
      Analytics
      </div>

      <>
      {/* content */}
        <div className="fixed top-12 right-0 left-0 bottom-0 rounded-t-2xl p-2 border">
          <AnalyticsFullContent/>
        </div>
      </>
    </>
  )
}
// components/floating-btn/ChatbotFull.tsx

import React from 'react'
import { ChatbotFullContent } from "./ChatbotFullContent"

export const ChatbotFull: React.FC = () => {
  return (
    <>
      {/* title */}
      <div className="fixed left-3 top-3 text-title-card">
      AI Coach
      </div>

      <>
      {/* content */}
        <div className="fixed top-12 right-0 left-0 bottom-0 rounded-t-2xl p-2 border">
          <ChatbotFullContent/>
        </div>
      </>
    </>
  )
}
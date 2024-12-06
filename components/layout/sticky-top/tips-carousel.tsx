// components/layout/sticky-top/tips-carousel.tsx
'use client'

import { Bot } from 'lucide-react'

export function TipsCarousel() {
  const tips = [
    {
      message: "You're building a strong routine",
      detail: "3 days streak! Keep it up!",
    },
    {
      message: "Great progress on your goals",
      detail: "You've completed 80% of your weekly targets",
    },
    {
      message: "Time for a mindful break",
      detail: "You've been focused for 2 hours straight",
    },
  ]

  // Select a tip (you can modify this logic if needed)
  const currentTip = tips[1]

  return (
    <div className="bg-white p-2 m-2 border-orange-300 border-b p-4">

      <div className="flex items-center">

        <div className="flex-shrink-0 mr- pr- h-12">
        <Bot size={55} className="text-orange-400 pr-2" />
        </div>

        <blockquote className="flex flex-col italic text-sm text-gray-400 border-l-4 border-orange-400 pl-4">
          <p className="text-md text-gray-700 font-semibold">{currentTip.message}</p>
          <p className="text-sm text-gray-500 mt-1">{currentTip.detail}</p>
        </blockquote>

      </div>

    </div>
  )
}

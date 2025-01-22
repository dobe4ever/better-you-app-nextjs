// // components2/sticky-top/StickyTop.tsx
// 'use client'

// import { Bot } from 'lucide-react'

// export function StickyTop() {
//   const tips = [
//     {
//       message: "You're building a strong routine",
//       detail: "3 days streak! Keep it up!",
//     },
//     {
//       message: "Great progress on your goals",
//       detail: "You've completed 80% of your weekly targets",
//     },
//     {
//       message: "Time for a mindful break",
//       detail: "You've been focused for 2 hours straight",
//     },
//   ]

//   // Select a tip (you can modify this logic if needed)
//   const currentTip = tips[1]

//   return (
//     <div className="bg-white p-4 m-2 border-orange-main border-b">

//       <div className="flex items-center">

//         <div className="flex-shrink-0 mr- pr- h-12">
//         <Bot size={46} className="text-orange-main pr-2" />
//         </div>

//         <blockquote className="flex flex-col italic border-l-4 border-orange-main pl-4">
//           <p className="text-title-card">{currentTip.message}</p>
//           <p className="text-description-card mt-1">{currentTip.detail}</p>
//         </blockquote>

//       </div>

//     </div>
//   )
// }


// components/sticky-top-widget.tsx
'use client'

import { Bot } from 'lucide-react'

export function StickyTop() {
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
    <div className="flex items-center bg-white p-2 m-1 border-orange-main border-b">

        <div className="flex-shrink-0 h-12">
        <Bot size={46} className="text-orange-main pr-2" />
        </div>

        <blockquote className="flex flex-col italic border-l-4 border-orange-main pl-4">
          <p className="text-title-card">{currentTip.message}</p>
          <p className="text-description-card mt-1">{currentTip.detail}</p>
        </blockquote>

      </div>
  )
}
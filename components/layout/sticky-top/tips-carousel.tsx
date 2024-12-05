// 'use client'

// import { useState, useEffect } from 'react'
// import { Bot, ChevronLeft, ChevronRight } from 'lucide-react'

// export function TipsCarousel() {
//   const [activeSlide, setActiveSlide] = useState(0)
  
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

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % tips.length)
//   }

//   const prevSlide = () => {
//     setActiveSlide((prev) => (prev - 1 + tips.length) % tips.length)
//   }

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 6000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="bg-white rounded-md p-4 border shadow m-4">
//       <div className="flex items-center justify-between">
//         <button 
//           onClick={(e) => {
//             e.stopPropagation()
//             prevSlide()
//           }}
//           className="text-gray-400 hover:text-gray-600 transition-colors"
//           aria-label="Previous tip"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <div className="flex-1 overflow-hidden px-4">
//           <div
//             className="flex transition-transform duration-300 ease-out w-full"
//             style={{ transform: `translateX(-${activeSlide * 100}%)` }}
//           >
//             {tips.map((tip, index) => (
//               <div key={index} className="flex-shrink-0 w-full">
//                 <div className="flex items-center gap-4">
//                   <div className="flex-shrink-0">
//                     <Bot size={40} className="text-orange-500" />
//                   </div>
//                   <blockquote className="flex flex-col">
//                     <p className="text-lg font-semibold text-gray-900">{tip.message}</p>
//                     <p className="text-sm text-gray-500">{tip.detail}</p>
//                   </blockquote>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button 
//           onClick={(e) => {
//             e.stopPropagation()
//             nextSlide()
//           }}
//           className="text-gray-400 hover:text-gray-600 transition-colors"
//           aria-label="Next tip"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </div>
//   )
// }



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

  // Select the first tip (you can modify this logic if needed)
  const currentTip = tips[1]

  return (
    <div className="bg-white p-2 m-2 border-orange-300 border-b rounded-">

      <div className="flex items-center">

        <div className="flex-shrink-0 mr- pr- h-12">
        <Bot size={55} className="text-orange-400 pr-2" />
        </div>

        <blockquote className="flex flex-col italic text-sm text-gray-400 border-l-4 border-orange-400 pl-4">
          <p className="text-lg text-gray-700 font-semibold">{currentTip.message}</p>
          <p className="text-sm text-gray-500 mt-1">{currentTip.detail}</p>
        </blockquote>

      </div>

    </div>
  )
}

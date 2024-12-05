'use client'

import { useState, useEffect } from 'react'
import { Bot, ChevronLeft, ChevronRight } from 'lucide-react'

export function TipsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)
  
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

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % tips.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + tips.length) % tips.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white rounded-md p-4 border shadow m-4">
      <div className="flex items-center justify-between">
        <button 
          onClick={(e) => {
            e.stopPropagation()
            prevSlide()
          }}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Previous tip"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1 overflow-hidden px-4">
          <div
            className="flex transition-transform duration-300 ease-out w-full"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {tips.map((tip, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Bot size={40} className="text-orange-500" />
                  </div>
                  <blockquote className="flex flex-col">
                    <p className="text-lg font-semibold text-gray-900">{tip.message}</p>
                    <p className="text-sm text-gray-500">{tip.detail}</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation()
            nextSlide()
          }}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Next tip"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}


// components/widegets-grid/ads/AdsWidget.tsx

'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Widget } from '@/components/ui/widget'
  
// AdsCarouselWidget component
export function AdsWidget() {
    // Mock ads data
const ads = [
  { title: "Premium Membership", description: "Get 50% off annual subscription" },
  { title: "New Courses Available", description: "Learn meditation and mindfulness" },
  { title: "Join Challenge", description: "30 days to better habits" },
]
// Previous state and refs remain unchanged
const [adIndex, setAdIndex] = useState(0);
return (
  <Widget
      title="Special Offers"
      rightIcon={
          <div className="flex gap-2">
          <button
              onClick={() => setAdIndex((prev) => (prev > 0 ? prev - 1 : ads.length - 1))}
              className="p-1 hover:bg-gray-100 rounded-full"
          >
              <ChevronLeft size={16} className="text-orange-400" />
          </button>
          <button
              onClick={() => setAdIndex((prev) => (prev < ads.length - 1 ? prev + 1 : 0))}
              className="p-1 hover:bg-gray-100 rounded-full"
          >
              <ChevronRight size={16} className="text-orange-400" />
          </button>
          </div>
      }
      >
      <div className="relative overflow-hidden mt-2">
          <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${adIndex * 100}%)` }}
          >
          {ads.map((ad, index) => (
              <div key={index} className="w-full flex-shrink-0">
              <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold">{ad.title}</h3>
                  <p className="text-description-card">{ad.description}</p>
              </div>
              </div>
          ))}
          </div>
      </div>
      </Widget>
)
}
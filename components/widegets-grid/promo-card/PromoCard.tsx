// components/widegets-grid/promo-card/PromoCard.tsx

import { useState } from 'react'
import { X } from 'lucide-react'

// PromoCard component
export function PromoCard() {
  const [showWidget, setShowWidget] = useState(true)

  if (!showWidget) return null

  return (
    <div className=" flex items-center justify-between bg-gray-100 p-2 pb-6 -mb-8 rounded-2xl shadow-none border-4 border-white max-w-[100%] mx-">
      
      {/* Left side: Description */}
      <p className="text-xs"> 50% off premium plan, limited time </p>

      {/* Right side: Link and Close */}
      <div className="flex space-x-1">
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-right text-xs text-orange-main font-semibold"
        >
          Read More
        </a>

        <button
          className="text-orange-main"
          onClick={(e) => {
            e.stopPropagation() // Prevent parent handlers (if any)
            setShowWidget(false)
          }}
        >
          <X size={14} />
        </button>

      </div>

    </div>

  )
}

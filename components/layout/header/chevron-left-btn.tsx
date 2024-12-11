// components/layout/header/chevron-left-btn.tsx

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function ChevronLeftBtn() {
  return (
    <div className="[&_svg]:size-6">
      <Button variant="ghost" size="icon" className="relative text-white" onClick={() => console.log('ChevronLeft clicked')}>
        <ChevronLeft />
      </Button>
    </div>
  )
}


export function ChevronRightBtn() {
  return (
    <div className="[&_svg]:size-6">
      <Button variant="ghost" size="icon" className="rounded-full text-white">
        <ChevronRight/>
      </Button>
    </div>
  )
}


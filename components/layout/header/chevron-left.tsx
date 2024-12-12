// components/layout/header/chevron-left-btn.tsx

import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

export function ChevronLeftBtn() {
  return (
    <div className="[&_svg]:size-6">
      <Button variant="ghost" size="icon" className="text-white" onClick={() => console.log('ChevronLeft clicked')}>
        <ChevronLeft />
      </Button>
    </div>
  )
}




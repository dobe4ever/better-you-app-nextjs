// components/layout/header/chevron-left.tsx

import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

interface ChevronLeftBtnProps {
  onClick: () => void;
}

export function ChevronLeftBtn({ onClick }: ChevronLeftBtnProps) {
  return (
    <div className="[&_svg]:size-6">
      <Button variant="ghost" size="icon" className="text-white" onClick={onClick}>
        <ChevronLeft />
      </Button>
    </div>
  )
}


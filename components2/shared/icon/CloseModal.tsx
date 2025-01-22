// components2/shared/icon/CloseModal.tsx

import { Button } from '@/components/ui/button'
import { ChevronLeft, X } from 'lucide-react'

interface backBtnProps {
  onClick: () => void;
}

export function BackBtn({ onClick }: backBtnProps) {
  return (
    <div className="[&_svg]:size-6">
      <Button variant="ghost" size="icon" className="text-orange-main pt-5" onClick={onClick}>
        <ChevronLeft />
      </Button>
    </div>
  )
}

export function CrossBtn({ onClick }: backBtnProps) {
  return (
    <div className="[&_svg]:size-6">
      <Button variant="ghost" size="icon" className="text-orange-main pt-5" onClick={onClick}>
        <ChevronLeft />
      </Button>
    </div>
  )
}


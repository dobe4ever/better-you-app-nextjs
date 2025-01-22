// components2/shared/modal/ModalFull.ts

import React from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface CrossBtnProps {
  onClick: () => void;
}

export function CrossBtn({ onClick }: CrossBtnProps) {
  return (
    <div className="[&_svg]:size-6">
      <Button variant="ghost" size="icon" className="text-orange-main pt-5" onClick={onClick}>
        <X />
      </Button>
    </div>
  )
}


interface ModalFullProps {
  onClose: () => void
  children: React.ReactNode
}

export const ModalFull: React.FC<ModalFullProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-white">
        <CrossBtn onClick={onClose}/>
        Habits
        {children}
      </div>
    </div>
  )
}

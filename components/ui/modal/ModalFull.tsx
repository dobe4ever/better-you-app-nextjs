// components2/shared/modal/ModalFull.ts

import React from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface CrossBtnProps {
  onClick: () => void;
}

export function CrossBtn({ onClick }: CrossBtnProps) {
  return (
    <div className="[&_svg]:size-5">
      <Button variant="ghost" size="icon" className="text-orange-main" onClick={onClick}>
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
    <div className="fixed inset-0 items-center bg-white border z-50">

      <div className="fixed right-2 top-2" >
        <CrossBtn onClick={onClose} />
      </div>

      <div className="fixed right-0 left-0 top-10 border-b" >
      </div>

      <div className="flex flex-col justify-between p-3 items-center">
        {children}
      </div>

    </div>
  )
}


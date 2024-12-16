// components/ui/modal.tsx
import React from 'react'
import { ChevronLeftBtn } from '../layout/header/chevron-left'
import { TopNav } from '../layout/header/top-nav'

interface ModalProps {
  onClose: () => void
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-2 rounded-lg w-full h-full">
        <ChevronLeftBtn onClick={onClose}/>
        <TopNav />
        {/* {children} */}
      </div>
    </div>
  )
}

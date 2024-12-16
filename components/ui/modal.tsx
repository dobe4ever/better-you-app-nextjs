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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white pt-2 pl-1 w-full min-h-screen">
        <ChevronLeftBtn onClick={onClose}/>
        <TopNav />
        {/* {children} */}
      </div>
    </div>
  )
}

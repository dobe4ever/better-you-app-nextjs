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
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-white">
        <ChevronLeftBtn onClick={onClose}/>
        <TopNav />
        {children}
      </div>
    </div>
  )
}
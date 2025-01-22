// components2/shared/modal/ModalFull.ts

import React from 'react'
import { CrossBtn } from '@/components2/shared/icon/CloseModal'
// import { TopNav } from '../layout/header/top-nav'

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

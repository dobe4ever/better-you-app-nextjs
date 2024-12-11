// components/ui/modal.tsx
import React from 'react'

interface ModalProps {
  onClose: () => void
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg w-full max-w-md">
        <button onClick={onClose} className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

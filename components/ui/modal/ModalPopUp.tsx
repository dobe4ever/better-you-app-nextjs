// components/ui/modal2/ModalPopUp.tsx

'use client'

import React from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import ModalContent  from './ModalContent'

export default function ModalPopUp({}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show ModalPopUp
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  )
}

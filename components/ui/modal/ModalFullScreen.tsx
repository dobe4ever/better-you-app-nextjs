
// components/ui/modal/ModalFullScreen.tsx

"use client"

import React from "react"
import { useState } from "react"
import { createPortal } from "react-dom"
import { ModalContent }  from "./ModalContent"

export function ModalFullScreen({}) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show ModalFull
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  )
}

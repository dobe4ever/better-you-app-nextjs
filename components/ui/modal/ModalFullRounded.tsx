// components/ui/modal2/ModalFullRounded.tsx

"use client"

import React from "react"
import { useState } from "react"
import { createPortal } from "react-dom"
import { ModalContent }  from "./ModalContent"

export default function ModalFullRounded({}) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show ModalFullRounded
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  )
}

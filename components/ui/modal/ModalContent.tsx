// components/ui/modal/ModalContent.tsx

"use client"

import React from "react"
import { Button } from "@/components/ui/button"

export function ModalContent({ onClose }) {
  return (
    <div className="modal">
      <div>I"m a modal dialog</div>
      <Button onClick={onClose}> Close </Button>
    </div>
  )
}

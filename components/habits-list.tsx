// components/habits-list.tsx
'use client'

import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "./card"
import { AddMenu } from "./dropdown-menu"
import type { ListProps } from "../types/list"

export function HabitsList({ title, cards, onAddCard }: ListProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isAdding, setIsAdding] = useState(false)
  const [newCardTitle, setNewCardTitle] = useState("")

  const handleAddCard = () => {
    if (newCardTitle.trim()) {
      onAddCard(newCardTitle)
      setNewCardTitle("")
      setIsAdding(false)
    }
  }

  const handleMenuSelect = (option: string) => {
    setIsAdding(true)
  }

  return (
    <div className="flex flex-col w-full bg-gray-100 rounded-xl shadow">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <h3 className="font-medium text-gray-700">{title}</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(!isVisible)}
          className="p-1 hover:bg-gray-200"
        >
          {isVisible ? (
            <Eye className="h-4 w-4" />
          ) : (
            <EyeOff className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-16rem)] p-3">
        {isVisible && cards.map((card) => <Card key={card.id} title={card.title} />)}
        {isAdding && (
          <div className="mb-2">
            <input
              type="text"
              value={newCardTitle}
              onChange={(e) => setNewCardTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddCard()}
              placeholder="Enter card title..."
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-gray-200">
        <AddMenu onSelect={handleMenuSelect} />
      </div>
    </div>
  )
}


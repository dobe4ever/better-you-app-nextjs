// components/habits-list.tsx
"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HabitCard } from "./HabitCard"
import { AddMenu } from "./AddMenu"

interface HabitCard {
  id: string
  title: string
  completed: boolean
}

interface HabitsListProps {
  cards: HabitCard[]
  onAddCard: (title: string) => void
}

export function HabitsList({ cards, onAddCard }: HabitsListProps) {
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
    <div className="flex flex-col">
      
      {/* Header */}
      <div className="flex items-center justify-between p-3 mt-4 border-t">

        <h3 className="text-gray-600">Habits</h3>
        
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
        {isVisible && cards.map((card) => <HabitCard key={card.id} title={card.title} />)}

        {isAdding && (
          <div className="mb-">
            <input
              type="text"
              value={newCardTitle}
              onChange={(e) => setNewCardTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddCard()}
              placeholder="Enter card title..."
              className="w-full p- rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full bg-white border-t">
        <AddMenu onSelect={handleMenuSelect} />
      </div>
    </div>
  )
}

// components/habits-list.tsx
"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HabitCard } from "./HabitCard"
import { AddMenu } from "./AddMenu"

import { DateNavigation } from './DateNavigation'

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
  const [selectedDate, setSelectedDate] = useState(new Date())

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
    // Main list wrapper
    <div className="w-full max-h-screen rounded-3xl bg-gray-200">

    {/* wrapper for header, boddy , footer*/}
    <div className="flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col w-full p-3 border-white">
        {/* Date Navigator */}
        <DateNavigation selectedDate={selectedDate} onDateChange={setSelectedDate} />
        {/* Quick action icons */}
        <div className="flex justify-between items-center border-gray-300 border-t">
          <h1>Habits</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(!isVisible)}
            className="p-1"
          >
            {isVisible ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeOff className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto max-h-[calc(82vh-16rem)] p-3">
        {isVisible && cards.map((card) => <HabitCard key={card.id} title={card.title} />)}
        {isAdding && (
          <div className="m-2">
            <input
              type="text"
              value={newCardTitle}
              onChange={(e) => setNewCardTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddCard()}
              placeholder="Enter card title..."
              className="w-full p-2 rounded focus:ring-blue-500"
              autoFocus
            />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t rounded-b-3xl">
        <AddMenu onSelect={handleMenuSelect} />
      </div> 

    </div>

    </div> 
  )
}

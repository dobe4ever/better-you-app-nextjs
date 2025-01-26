// components/widegets-grid/habits/HabitsFullContent.tsx

"use client"

import { useState } from "react"
import { DateNavigation } from "./DateNavigation"
import { HabitsList } from "./HabitsList"
import { ChallengeCard } from "./ChallengeCard"

export function HabitsFullContent() {

  interface HabitCard {
    id: string
    title: string
    completed: boolean
  }

  const [cards, setCards] = useState<HabitCard[]>([
    { id: '1', title: 'Morning Meditation', completed: false },
    { id: '2', title: 'Read for 30 minutes', completed: true },
    { id: '3', title: 'Exercise', completed: false },
    { id: '4', title: 'Write in journal', completed: false },
    { id: '5', title: 'Drink 8 glasses of water', completed: true },
  ])

  const handleAddCard = (title: string) => {
    setCards([...cards, { id: String(Date.now()), title, completed: Boolean() }])
  }
  
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="w-full h-full border- overflow-y-auto">
      <div className="flex-1 overflow-hidden flex flex-col gap-3">
      
        <div className="
          p-3
          bg-white 
          rounded-2xl 
          border shadow-md
        ">
          <ChallengeCard />
        </div>

        <div className="
          p-3
          bg-white 
          rounded-2xl 
          border shadow-md
        ">
        <DateNavigation selectedDate={selectedDate} onDateChange={setSelectedDate} />

          <HabitsList title="Habits's" cards={cards} onAddCard={handleAddCard} />
        </div>

      </div>
    </div>
  )
}

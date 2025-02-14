// components/widegets-grid/habits/HabitsFull.tsx

"use client"

import React from 'react'
import { useState } from "react"
import { ChallengeCard } from './ChallengeCard'
import { HabitsList } from './HabitsList'

export const HabitsFull: React.FC = () => {

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
    { id: '6', title: 'Morning Meditation', completed: false },
    { id: '7', title: 'Read for 30 minutes', completed: true },
    { id: '8', title: 'Exercise', completed: false },
    { id: '9', title: 'Write in journal', completed: false },
    { id: '10', title: 'Drink 8 glasses of water', completed: true },
  ])

  const handleAddCard = (title: string) => {
    setCards([...cards, { id: String(Date.now()), title, completed: Boolean() }])
  }

  return (
    <>
      {/* title */}
      <div className="fixed left-3 top-3 text-white text-title-card">
        Habits
      </div>
        <div className="flex flex-col ">
          <div><ChallengeCard /></div>
            <div className="relative overflow-y-auto">
              <HabitsList cards={cards} onAddCard={handleAddCard} />
            </div>
        </div>
    </>
  )
}

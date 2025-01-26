// components/widegets-grid/habits/HabitsFull.tsx

"use client"

import React from 'react'
import { useState } from "react"
import { ChallengeCard } from './ChallengeCard'
import { DateNavigation } from './DateNavigation'
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
  
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <>
      {/* title */}
      <div className="fixed left-3 top-3 text-title-card">
        Habits
      </div>

      <>
        <div className="m-2 p-3 bg-white rounded-2xl border shadow-md">
          <ChallengeCard />
        </div>

        {/* <div className="w-full h-full border- overflow-y-auto">
          <div className="flex-1 overflow-hidden flex-col gap-3"> */}

            <div className="fixed right-0 left-0 bottom-0 top-24 p-3 bg-white rounded-2xl shadow-md">
              <DateNavigation selectedDate={selectedDate} onDateChange={setSelectedDate} />
              <HabitsList cards={cards} onAddCard={handleAddCard} />
            </div>

          {/* </div>
        </div> */}
      </>
    </>
  )
}


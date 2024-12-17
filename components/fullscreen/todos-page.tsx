// // components/fullscreen/todos-page.tsx
// import React from 'react'

// export const TodosPage: React.FC = () => {
//   return (
//     <div className="fixed inset-0 mt-12 bg-white">

//       <div className="flex flex-col overflow-hidden gap-3 rounded-t-3xl bg-gray-200 m-0 p-2">

//         <div className="flex-1 overflow-hidden flex flex-col gap-3 border">
//           <h1 className="text-title-orange border">Todos</h1>
//           {/* Add your todos list implementation here */}
//         </div>

//         <div className="flex-1 overflow-hidden flex flex-col gap-3 border">
//           <h1 className="text-title-orange">Header</h1>
//           {/* Add your todos list implementation here */}
//         </div>

//         <div className="flex-1 overflow-hidden flex flex-col gap-3 border">
//           <h1 className="text-title-orange">Todos chcklist</h1>
//           {/* Add your todos list implementation here */}
//         </div>

//         <div className="flex-1 overflow-hidden flex flex-col gap-3 border">
//           <h1 className="text-title-orange">Footer</h1>
//           {/* Add your todos list implementation here */}
//         </div>

//       </div>

//     </div>
//   )
// }



// // components/fullscreen/todos-page.tsx
// 'use client'

// import { useState } from "react"
// import { TrelloList } from '@/components/tello-list'
// import type { Card } from "@/types/list"

// export const TodosPage: React.FC = () => {
//   const [cards, setCards] = useState<Card[]>([
//     { id: "1", title: "Example card 1" },
//     { id: "2", title: "Example card 2" },
//   ])

//   const handleAddCard = (title: string) => {
//     setCards([...cards, { id: String(Date.now()), title }])
//   }

//   return (
//     <div className="flex flex-col w-full gap-3 rounded-xl shadow p-">

//       <h1 className="text-title-orange border">Todos</h1>

//       <div className="flex flex-col w-full bg-gray-100 rounded-xl shadow">
//         <div className="pt-4 text-title-card">
//           Challenge
//           {/* <ChallengeCard /> */}
//         </div>
//       </div>

//       <div className="pt-4 text-title-card">
//         <TrelloList title="Todo's" cards={cards} onAddCard={handleAddCard} />
//       </div>

//     </div>
//   )
// }

// components/fullscreen/todos-page.tsx
'use client'

import { useState } from "react"
import { TrelloList } from "@/components/tello-list"
import { ChallengeCard } from "@/components/challenge-card"
import type { Card } from "@/types/list"

export const TodosPage: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    { id: "1", title: "Example card 1" },
    { id: "2", title: "Example card 2" },
  ])

  const handleAddCard = (title: string) => {
    setCards([...cards, { id: String(Date.now()), title }])
  }

  return (
    <div className="flex flex-col w-full gap-3 rounded-xl shadow p-">

      <h1 className="text-title-orange">Todos</h1>

      <div className="flex flex-col w-full rounded-xl shadow">
        <div className="pt-4 text-title-card">
          <ChallengeCard />
        </div>
      </div>

      <div className="pt-4 text-title-card">
        <TrelloList title="Todo's" cards={cards} onAddCard={handleAddCard} />
      </div>

    </div>
  )
}

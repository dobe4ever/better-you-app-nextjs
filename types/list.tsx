// types/list.tsx

export interface HabitCard {
    id: string
    title: string
    completed: boolean
  }
  
  export interface HabitsListProps {
    title: string
    cards: HabitCard[]
    onAddCard: (title: string) => void
  }
  
  
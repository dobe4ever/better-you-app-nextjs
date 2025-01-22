export interface HabitCard {
    id: string
    title: string
    completed: boolean
  }
  
  export interface ListProps {
    title: string
    cards: HabitCard[]
    onAddCard: (title: string) => void
  }
  
  
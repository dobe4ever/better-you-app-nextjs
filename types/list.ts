export interface Card {
    id: string
    title: string
  }
  
  export interface ListProps {
    title: string
    cards: Card[]
    onAddCard: (title: string) => void
  }
  
  
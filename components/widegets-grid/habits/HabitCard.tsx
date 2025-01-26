// components/widegets-grid/habits/HabitCard.tsx

interface HabitCardProps {
    title: string
    key: string
  }
  
export function HabitCard({ title }: HabitCardProps) {
  return (
    <div className="
        p-6
        bg-white 
        rounded-2xl 
        border shadow-md
        mb-2
      ">
      <p className="text-sm text-gray-700">{title}</p>
    </div>
  )
}



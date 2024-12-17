interface CardProps {
    title: string
  }
  
  export function Card({ title }: CardProps) {
    return (
      <div className="p-3 mb-2 bg-white rounded-lg shadow-sm">
        <p className="text-sm text-gray-700">{title}</p>
      </div>
    )
  }
  
  
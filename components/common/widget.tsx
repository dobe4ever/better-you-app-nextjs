import { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'

interface WidgetProps {
  title: string
  children: ReactNode
  onClick?: () => void
  rightIcon?: ReactNode
  className?: string
}

export function Widget({
  title,
  children,
  onClick,
  rightIcon = <ChevronRight size={16} className="text-orange-400" />,
  className = '',
}: WidgetProps) {
  return (
    <div
      className={`bg-white rounded-md p-4 border shadow-md ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-semibold">{title}</h2>
        {rightIcon}
      </div>
      {children}
    </div>
  )
}


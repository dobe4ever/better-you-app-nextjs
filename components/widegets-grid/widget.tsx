// components/ui/widget.tsx

import { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'

interface WidgetProps {
  title: string
  children: ReactNode
  onClick?: () => void
  rightIcon?: ReactNode
  className?: string
}

// Common Widget component
export function Widget({
  title,
  children,
  onClick,
  rightIcon = <ChevronRight size={16} className="text-orange-main" />,
  className = '',
}: WidgetProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-3 border shadow-md ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-title-card">{title}</h2>
        {rightIcon}
      </div>
      {children}
    </div>
  )
}
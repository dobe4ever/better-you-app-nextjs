
// components/ShopAndCourses.tsx
import { ReactNode } from 'react'
import { GraduationCap, ChevronRight, Store } from 'lucide-react'

interface WidgetProps {
  title: string
  children: ReactNode
  onClick?: () => void
  rightIcon?: ReactNode
  className?: string
}

const Widget = ({
  title,
  children,
  onClick,
  rightIcon = (
    <ChevronRight
      size={16}
      className="text-orange-main"
    />
  ),
  className = '',
}: WidgetProps) => {
  return (
    <div
      className={`bg-white rounded-md p-4 border shadow ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
    >
      <div className="flex justify-between items-center mb-0">
        <h2 className="text-sm font-semibold">{title}</h2>
        {rightIcon}
      </div>
      {children}
    </div>
  )
}

export function ShopAndCourses() {
  return (
    <div className="grid grid-cols-2 gap-2 mt-0">
      <Widget 
        title="Shop" 
        className="flex flex-col gap-2"
      >
        <Store size={32} />
        <div className="text-sm text-gray-600 mt-2">
        Explore products and services all in one place
        </div>
      </Widget>
      <Widget 
        title="Courses" 
        className="flex flex-col gap-2"
      >
        <GraduationCap size={32} />
        <div className="text-sm text-gray-600 mt-2">
        Explore curated learning paths and track your educational journey in one place
        </div>
      </Widget>
    </div>
  )
}
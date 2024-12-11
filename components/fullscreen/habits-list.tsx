// components/fullscreen/habits-list.tsx
'use client'

import { useState } from 'react'
import { ChevronLeft, Eye, Plus, CalendarDays, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { TopNav } from '@/components/layout/header/top-nav'

export function HabitsList() {
  const [showCompleted, setShowCompleted] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = (days: number) => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + days)
    setSelectedDate(newDate)
  }

  const renderDateDots = () => {
    const dots = []
    for (let i = 0; i < 7; i++) {
      const date = new Date(selectedDate)
      date.setDate(date.getDate() - i)
      dots.push(
        <div
          key={i}
          className={`w-2 h-2 rounded-full mx-1 ${date.toDateString() === new Date().toDateString() ? 'bg-orange-500' : 'bg-gray-300'}`}
          onClick={() => setSelectedDate(date)}
        />
      )
    }
    return dots
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopNav
        username="Brotastic"
        avatarUrl="https://i.pravatar.cc/300"
        onBackClick={() => console.log('Back clicked')}
      />
      <div className="flex-1 p-4">
        <div className="text-2xl font-bold mb-4">Habits</div>
        <div className="flex justify-between items-center mb-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500"
            onClick={() => handleDateChange(-1)}
          >
            <CalendarDays />
          </Button>
          <div className="text-gray-700">{selectedDate.toDateString()}</div>
          <div className="flex space-x-1">
            {renderDateDots()}
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <Button
            variant="outline"
            className="flex items-center space-x-2"
            onClick={() => setShowCompleted(!showCompleted)}
          >
            <Eye />
            <span>{showCompleted ? 'Hide' : 'Show'} Completed</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center space-x-2">
                <Settings />
                <span>Challenge Mode</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>Set Challenge Options</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center space-x-2">
                <Plus />
                <span>Add</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>Add Habit</DropdownMenuItem>
              <DropdownMenuItem>Add Routine</DropdownMenuItem>
              <DropdownMenuItem>Ask Coach</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

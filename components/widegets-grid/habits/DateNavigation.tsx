// components/widegets-grid/habits/DateNavigation.tsx

"use client"

import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DateNavigation({ selectedDate, onDateChange }: { selectedDate: Date; onDateChange: (date: Date) => void }) {
    const [dates, setDates] = useState<Date[]>([])
  
    useEffect(() => {
      const today = new Date()
      const newDates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(today)
        date.setDate(date.getDate() - i)
        return date
      }).reverse()
      setDates(newDates)
    }, [])
  
    const navigateDate = (direction: 'prev' | 'next') => {
      const currentIndex = dates.findIndex(date => date.toDateString() === selectedDate.toDateString())
      if (direction === 'prev' && currentIndex > 0) {
        onDateChange(dates[currentIndex - 1])
      } else if (direction === 'next' && currentIndex < dates.length - 1) {
        onDateChange(dates[currentIndex + 1])
      }
    }
  
    return (
      <div className="flex flex-col items-center space-y-4 bg-gray-200 p-3 rounded-t-2xl">
        <div className="flex items-center space-x-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigateDate('prev')}
            disabled={selectedDate.toDateString() === dates[0]?.toDateString()}
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
          </Button>
          <span className="text-xl font-semibold text-black">
            {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigateDate('next')}
            disabled={selectedDate.toDateString() === dates[dates.length - 1]?.toDateString()}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex space-x-2">
          {dates.map((date) => (
            <button
              key={date.toISOString()}
              className={`size-2 rounded-full transition-colors ${
                date.toDateString() === selectedDate.toDateString()
                  ? 'bg-orange-500'
                  : 'bg-white'
              }`}
              onClick={() => onDateChange(date)}
              aria-label={date.toLocaleDateString()}
            />
          ))}
        </div>
      </div>
    )
  }
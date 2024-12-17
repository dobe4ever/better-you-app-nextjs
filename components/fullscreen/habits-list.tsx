// components/fullscreen/habits-list.tsx
'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, Eye, EyeOff, Zap, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface Habit {
  id: string;
  title: string;
  completed: boolean;
}

export function HabitsList() {
  const [showCompleted, setShowCompleted] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [habits, setHabits] = useState<Habit[]>([
    { id: '1', title: 'Morning Meditation', completed: false },
    { id: '2', title: 'Read for 30 minutes', completed: true },
    { id: '3', title: 'Exercise', completed: false },
    { id: '4', title: 'Write in journal', completed: false },
    { id: '5', title: 'Drink 8 glasses of water', completed: true },
  ]);

  return (
    <div className="fixed inset-0 m-2 mt-16 bg- flex flex-col">
      <div className="flex-1 overflow-hidden flex flex-col gap-6">
        <h1 className="text-title-orange">Habits</h1>
        <DateNavigation selectedDate={selectedDate} onDateChange={setSelectedDate} />
        <ActionButtons
          showCompleted={showCompleted}
          onToggleCompleted={() => setShowCompleted(!showCompleted)}
        />
        <HabitCardList habits={habits} setHabits={setHabits} showCompleted={showCompleted} />
      </div>
    </div>
  )
}

function DateNavigation({ selectedDate, onDateChange }: { selectedDate: Date; onDateChange: (date: Date) => void }) {
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
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
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
                : 'bg-gray-300'
            }`}
            onClick={() => onDateChange(date)}
            aria-label={date.toLocaleDateString()}
          />
        ))}
      </div>
    </div>
  )
}

function ActionButtons({ showCompleted, onToggleCompleted }: { showCompleted: boolean; onToggleCompleted: () => void }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-2 min-w-max m-2">
        {/* Show/hide completed button */}
        <Button
          variant="secondary"
          className="flex items-center whitespace-nowrap bg-gradient-orange text-white text-md h-10"
          onClick={onToggleCompleted}
        >
          {showCompleted ? <EyeOff size={18} /> : <Eye size={18} />}
          <span className="ml-2">Completed</span>
        </Button>
        {/* Challenge button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="secondary" 
              className="flex items-center whitespace-nowrap bg-gradient-orange text-white text-md h-10"
            >
              <Zap size={18} />
              <div className="">Challenge</div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>Set Options</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Add button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="secondary" 
              className="flex items-center whitespace-nowrap bg-gradient-orange text-white text-md h-10"
            >
              <Plus size={18} />
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
  )
}

function HabitCardList({ habits, setHabits, showCompleted }: { 
  habits: Habit[]; 
  setHabits: React.Dispatch<React.SetStateAction<Habit[]>>; 
  showCompleted: boolean 
}) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      setHabits((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  const filteredHabits = showCompleted ? habits : habits.filter((habit) => !habit.completed)

  return (
    <div className="flex-1 overflow-y-auto">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={filteredHabits} strategy={verticalListSortingStrategy}>
          {filteredHabits.map((habit) => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  )
}

function HabitCard({ habit }: { habit: Habit }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: habit.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="rounded-lg mb-2 cursor-move"
    >
      <CardContent className="flex items-center p-4">
        <Checkbox id={habit.id} checked={habit.completed} className="mr-4" />
        <label htmlFor={habit.id} className="flex-1 text-lg">
          {habit.title}
        </label>
      </CardContent>
    </Card>
  )
}
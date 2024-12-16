// components/fullscreen/habits-list.tsx
'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, Eye, Zap, Plus } from 'lucide-react'
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
import { TopNav } from '../../components/layout/header/top-nav'

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
  ])
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    console.log('HabitsList closed');
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-orange-500 to-orange-400 flex flex-col">
      <TopNav username="Brotastic" avatarUrl="https://i.pravatar.cc/300" onClose={handleClose} />
      <div className="flex-1 overflow-hidden flex flex-col p-4 space-y-6 mt-16">
        <h1 className="text-3xl font-bold text-white text-center">Habits</h1>
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
    const newDates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(selectedDate)
      date.setDate(date.getDate() - i)
      return date
    }).reverse()
    setDates(newDates)
  }, [selectedDate])

  const navigateDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1))
    onDateChange(newDate)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={() => navigateDate('prev')}>
          <ChevronRight className="h-4 w-4 rotate-180" />
        </Button>
        <span className="text-xl font-semibold text-white">
          {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </span>
        <Button variant="ghost" size="icon" onClick={() => navigateDate('next')}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex space-x-2">
        {dates.map((date) => (
          <button
            key={date.toISOString()}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              date.toDateString() === selectedDate.toDateString()
                ? 'bg-white text-orange-500'
                : 'bg-orange-400 text-white hover:bg-orange-300'
            }`}
            onClick={() => onDateChange(date)}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  )
}

function ActionButtons({ showCompleted, onToggleCompleted }: { showCompleted: boolean; onToggleCompleted: () => void }) {
  return (
    <div className="flex justify-between items-center">
      <Button
        variant="secondary"
        className="flex items-center space-x-2"
        onClick={onToggleCompleted}
      >
        <Eye size={18} />
        <span>{showCompleted ? 'Hide' : 'Show'} Completed</span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="flex items-center space-x-2">
            <Zap size={18} />
            <span>Challenge Mode</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem>Set Challenge Options</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="flex items-center space-x-2">
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
      className="mb-4 cursor-move"
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



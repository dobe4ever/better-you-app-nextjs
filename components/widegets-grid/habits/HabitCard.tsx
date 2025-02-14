"use client"

import { useState } from "react"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import { Switch } from "@/components/ui/switch"
import { Check, Flame, Pin, AlarmClock, Repeat, Star, ChevronDown, Pen, Trash2, Settings, X, Clock } from "lucide-react"

interface HabitCardProps {
  title: string
  key: string
}

export function HabitCard({ title }: HabitCardProps) {
  const [isCompleted, setIsCompleted] = useState(false)
  const [strikeCount, setStrikeCount] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isDaily, setIsDaily] = useState(true)
  const [selectedDays, setSelectedDays] = useState({
    mon: true,
    tue: true,
    wed: true,
    thu: true,
    fri: true,
    sat: false,
    sun: false,
  })

  const toggleCompleted = () => setIsCompleted((prev) => !prev)
  const incrementStrike = () => setStrikeCount((prev) => prev + 1)

  const handleDayToggle = (day: keyof typeof selectedDays) => {
    setSelectedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }))
  }

  return (
    <>
      <div className="w-full max-w-2xl mx-auto relative">
        <div className="bg-white border border-gray-100 p-3 mb-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex w-full">
            {/* Left Column - Checkmark */}
            <div className="flex items-center">
              <button
                onClick={toggleCompleted}
                className={`group flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 
                  ${
                    isCompleted
                      ? "border-orange-500 bg-orange-50 text-orange-500"
                      : "border-gray-200 text-gray-300 hover:border-orange-200 hover:bg-orange-50"
                  }`}
              >
                <Check
                  className={`w-6 h-6 transition-transform duration-300 ${isCompleted ? "scale-100" : "scale-0 group-hover:scale-90"}`}
                />
              </button>
            </div>

            {/* Middle Column - Content */}
            <div className="flex-grow px-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <h2
                    className={`text- font-semibold transition-all duration-300 ${isCompleted ? "text-gray-400 line-through" : "text-gray-800"}`}
                  >
                    {title}
                  </h2>
                  <div className="flex items-center space-x-1">
                    <button className="p-1.5 rounded-lg hover:bg-gray-50 transition-colors duration-200 group">
                      <Pen className="w-3 h-3 text-gray-400 group-hover:text-gray-600" />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-red-50 transition-colors duration-200 group">
                      <Trash2 className="w-3 h-3 text-gray-400 group-hover:text-red-500" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 ml-2"
                >
                  <ChevronDown
                    className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {/* Action Icons */}
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Pin className="w-3 h-3 text-gray-400 hover:text-gray-600" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <AlarmClock className="w-3 h-3 text-gray-400 hover:text-gray-600" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Repeat className="w-3 h-3 text-gray-400 hover:text-gray-600" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Star className="w-3 h-3 text-gray-400 hover:text-gray-600" />
                </button>
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Settings className="w-3 h-3 text-gray-400 hover:text-gray-600" />
                </button>
              </div>
            </div>

            {/* Right Column - Strike Counter */}
            <div className="flex items-center">
              <button
                onClick={incrementStrike}
                className="group flex items-center space-x-1 p-2 rounded-full aspect-[1/1] bg-orange-50"
              >
                <Flame className="w-3 h-3 text-orange-500 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-medium text-gray-600 group-hover:text-orange-600 transition-colors duration-300">
                  {strikeCount}
                </span>
              </button>
            </div>
          </div>

          {/* Expandable Content */}
          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 mt-6" : "max-h-0"}`}>
            <div className="border-t border-gray-100 pt-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-gray-600">
                  <span className="text-sm">Due Date</span>
                  <span className="text-sm font-medium">Tomorrow, 2:00 PM</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span className="text-sm">Priority</span>
                  <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-lg text-sm font-medium">High</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span className="text-sm">Status</span>
                  <span className="text-sm font-medium">In Progress</span>
                </div>
                <p className="text-sm text-gray-600">
                  Review the latest design changes for the dashboard interface. Prepare feedback and suggestions for
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      <AlertDialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <AlertDialogContent className="max-w-md rounded-xl p-0 overflow-hidden">
          <div className="bg-orange-50 p-4">
            <div className="flex justify-between items-center">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-xl font-semibold text-gray-900">Edit Habit</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogCancel className="border-0 hover:bg-orange-100">
                <X className="w-5 h-5" />
              </AlertDialogCancel>
            </div>
          </div>

          <div className="p-4 space-y-6">
            {/* Habit Name Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Habit Name</label>
              <input
                type="text"
                placeholder="e.g., Morning Meditation"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                defaultValue={title}
              />
            </div>

            {/* Daily Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Daily Habit</p>
                <p className="text-sm text-gray-500">Repeat this habit every day</p>
              </div>
              <Switch checked={isDaily} onCheckedChange={setIsDaily} className="data-[state=checked]:bg-orange-500" />
            </div>

            {/* Weekly Schedule */}
            {!isDaily && (
              <div className="space-y-3">
                <p className="font-medium text-gray-900">Weekly Schedule</p>
                <div className="flex gap-2">
                  {Object.entries(selectedDays).map(([day, isSelected]) => (
                    <button
                      key={day}
                      onClick={() => handleDayToggle(day as keyof typeof selectedDays)}
                      className={`w-8 h-8 rounded-full text-sm font-medium transition-colors
                        ${isSelected ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
                    >
                      {day.charAt(0).toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Time Picker */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Reminder Time</label>
              <div className="relative">
                <input
                  type="time"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  defaultValue="06:00"
                />
                <Clock className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Notes</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[100px]"
                placeholder="Add any notes or tips to help you with this habit..."
              />
            </div>
          </div>

          {/* Footer */}
          <AlertDialogFooter className="p-4 bg-gray-50">
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="w-full bg-orange-500 text-white py-2.5 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              Save Changes
            </button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

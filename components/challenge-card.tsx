'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

interface ChallengeState {
  isRunning: boolean
  timeframe: '1' | '3' | '6'
  intensity: 'Easy' | 'Medium' | 'Max'
  completedDays: number
  totalDays: number
  todayProgress: number
}

const useChallenge = () => {
  const [challenge, setChallenge] = useState<ChallengeState>({
    isRunning: false,
    timeframe: '1',
    intensity: 'Easy',
    completedDays: 0,
    totalDays: 30,
    todayProgress: 0,
  })

  const startChallenge = (timeframe: '1' | '3' | '6', intensity: 'Easy' | 'Medium' | 'Max') => {
    setChallenge({
      isRunning: true,
      timeframe,
      intensity,
      completedDays: 0,
      totalDays: parseInt(timeframe) * 30,
      todayProgress: 0,
    })
  }

  return { challenge, startChallenge }
}

export function ChallengeCard() {
  const { challenge, startChallenge } = useChallenge()
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1' | '3' | '6'>('1')
  const [selectedIntensity, setSelectedIntensity] = useState<'Easy' | 'Medium' | 'Max'>('Easy')

  return (
    <div className="w-full bg-gradient-to-r from-orange-500 to-red-600 rounded-xl shadow-lg p-4 text-white">
      {!challenge.isRunning ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Set a Challenge: Choose Duration & Intensity</h2>
          <div className="space-y-4 mb-6">
            <Select onValueChange={(value: '1' | '3' | '6') => setSelectedTimeframe(value)}>
              <SelectTrigger className="w-full bg-white/10 text-white">
                <SelectValue placeholder="Choose Timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 month</SelectItem>
                <SelectItem value="3">3 months</SelectItem>
                <SelectItem value="6">6 months</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={(value: 'Easy' | 'Medium' | 'Max') => setSelectedIntensity(value)}>
              <SelectTrigger className="w-full bg-white/10 text-white">
                <SelectValue placeholder="Choose Intensity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Easy">Easy: 50% habits completed per day</SelectItem>
                <SelectItem value="Medium">Medium: 75% habits completed per day</SelectItem>
                <SelectItem value="Max">Max: 100% habits completed per day</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            onClick={() => startChallenge(selectedTimeframe, selectedIntensity)}
            className="w-full bg-white text-orange-500 hover:bg-orange-100 transition-colors"
          >
            Start Challenge
          </Button>
          <p className="text-sm mt-4 text-center">Every journey starts with a step 🏆</p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">
            Completed {challenge.completedDays} days of {challenge.totalDays} days remaining to finish the challenge.
          </h2>
          <div className="space-y-4 mb-6">
            <div>
              <p className="mb-2">Overall Progress</p>
              <Progress value={(challenge.completedDays / challenge.totalDays) * 100} className="h-2 bg-white/20" />
            </div>
            <div>
              <p className="mb-2">Today's Progress</p>
              <Progress value={challenge.todayProgress} className="h-2 bg-white/20" />
            </div>
          </div>
          <p className="text-lg font-semibold">🔥 Keep the streak alive!</p>
        </>
      )}
    </div>
  )
}


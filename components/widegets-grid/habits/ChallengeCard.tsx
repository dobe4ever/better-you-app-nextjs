// 'use client'

// import React, { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Progress } from "@/components/ui/progress"

// interface ChallengeState {
//   isRunning: boolean
//   timeframe: '1' | '3' | '6'
//   intensity: 'Easy' | 'Medium' | 'Max'
//   completedDays: number
//   totalDays: number
//   todayProgress: number
// }

// const useChallenge = () => {
//   const [challenge, setChallenge] = useState<ChallengeState>({
//     isRunning: false,
//     timeframe: '1',
//     intensity: 'Easy',
//     completedDays: 0,
//     totalDays: 30,
//     todayProgress: 0,
//   })

//   const startChallenge = (timeframe: '1' | '3' | '6', intensity: 'Easy' | 'Medium' | 'Max') => {
//     setChallenge({
//       isRunning: true,
//       timeframe,
//       intensity,
//       completedDays: 0,
//       totalDays: parseInt(timeframe) * 30,
//       todayProgress: 0,
//     })
//   }

//   return { challenge, startChallenge }
// }

// export function ChallengeCard() {
//   const { challenge, startChallenge } = useChallenge()
//   const [selectedTimeframe, setSelectedTimeframe] = useState<'1' | '3' | '6'>('1')
//   const [selectedIntensity, setSelectedIntensity] = useState<'Easy' | 'Medium' | 'Max'>('Easy')

//   return (
//     <div className="w-full bg-gradient-to-tr from-red-600 via-orange-500 to-yellow-200 rounded-xl shadow-lg p-4 text-white">
//       {!challenge.isRunning ? (
//         <>
//           <h2 className="text-2xl font-bold mb-4">Set a Challenge: Choose Duration & Intensity</h2>
//           <div className="space-y-4 mb-6">
//             <Select onValueChange={(value: '1' | '3' | '6') => setSelectedTimeframe(value)}>
//               <SelectTrigger className="w-full bg-white/10 text-white">
//                 <SelectValue placeholder="Choose Timeframe" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="1">1 month</SelectItem>
//                 <SelectItem value="3">3 months</SelectItem>
//                 <SelectItem value="6">6 months</SelectItem>
//               </SelectContent>
//             </Select>
//             <Select onValueChange={(value: 'Easy' | 'Medium' | 'Max') => setSelectedIntensity(value)}>
//               <SelectTrigger className="w-full bg-white/10 text-white">
//                 <SelectValue placeholder="Choose Intensity" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Easy">Easy: 50% habits completed per day</SelectItem>
//                 <SelectItem value="Medium">Medium: 75% habits completed per day</SelectItem>
//                 <SelectItem value="Max">Max: 100% habits completed per day</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <Button 
//             onClick={() => startChallenge(selectedTimeframe, selectedIntensity)}
//             className="w-full bg-white text-orange-500 hover:bg-orange-100 transition-colors"
//           >
//             Start Challenge
//           </Button>
//           <p className="text-sm mt-4 text-center">Every journey starts with a step 🏆</p>
//         </>
//       ) : (
//         <>
//           <h2 className="text-2xl font-bold mb-4">
//             Completed {challenge.completedDays} days of {challenge.totalDays} days remaining to finish the challenge.
//           </h2>
//           <div className="space-y-4 mb-6">
//             <div>
//               <p className="mb-2">Overall Progress</p>
//               <Progress value={(challenge.completedDays / challenge.totalDays) * 100} className="h-2 bg-white/20" />
//             </div>
//             <div>
//               <p className="mb-2">Today's Progress</p>
//               <Progress value={challenge.todayProgress} className="h-2 bg-white/20" />
//             </div>
//           </div>
//           <p className="text-lg font-semibold">🔥 Keep the streak alive!</p>
//         </>
//       )}
//     </div>
//   )
// }


// components/challenge-card.tsx
'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Flame, ChevronDown, ChevronUp } from 'lucide-react'

interface ChallengeState {
  isRunning: boolean
  timeframe: '1' | '3' | '6'
  intensity: 'Easy' | 'Medium' | 'Max'
  completedDays: number
  totalDays: number
  todayProgress: number
}

const MOTIVATIONAL_QUOTES = [
  "Every journey starts with a step 🏆",
  "Small progress is still progress 💪",
  "Consistency beats intensity 🔥",
  "Your habits build your future 🌟"
]

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
  const [isExpanded, setIsExpanded] = useState(false)

  const motivationalQuote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]

  return (
    <div className="w-full bg-white shadow-lg p-4 space-y-3 transition-all">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-title-card flex items-center">
          <Flame className="mr-2 w-6 h-6" />
          {challenge.isRunning ? "Track Your Challenge" : "Set Your Challenge"}
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white"
        >
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </div>

      {/* Collapsible Content */}
      {isExpanded && (
        <div className="space-y-6">
          {/* State 1: No Challenge Running */}
          {!challenge.isRunning ? (
            <>
              {/* Timeframe Selection */}
              <div>
                <h3 className="text-lg font-bold">Choose Duration</h3>
                <p className="text-sm text-white/80">
                  Select how long you want your challenge to last. Options are 1, 3, or 6 months.
                </p>
                <div className="flex gap-2">
                  {['1', '3', '6'].map((timeframe) => (
                    <Button
                      key={timeframe}
                      variant={challenge.timeframe === timeframe ? "default" : "outline"}
                      onClick={() => startChallenge(timeframe as '1' | '3' | '6', challenge.intensity)}
                      className="flex-1"
                    >
                      {timeframe} {timeframe === '1' ? 'Month' : 'Months'}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Intensity Selection */}
              <div>
                <h3 className="text-lg font-bold">Select Intensity</h3>
                <p className="text-sm text-white/80">
                  How challenging do you want this to be? Pick a level: Easy, Medium, or Max.
                </p>
                <div className="flex gap-2">
                  {['Easy', 'Medium', 'Max'].map((intensity) => (
                    <Button
                      key={intensity}
                      variant={challenge.intensity === intensity ? "default" : "outline"}
                      onClick={() => startChallenge(challenge.timeframe, intensity as 'Easy' | 'Medium' | 'Max')}
                      className="flex-1"
                    >
                      {intensity}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Start Challenge Button */}
              <Button className="w-full bg-white text-orange-600 rounded-full font-bold hover:bg-orange-100 mt-4">
                Start Challenge
              </Button>

              {/* Motivational Quote */}
              <p className="text-sm text-center italic">
                {motivationalQuote}
              </p>
            </>
          ) : (
            /* State 2: Challenge Running */
            <>
              {/* Overall Progress */}
              <div>
                <h3 className="text-lg font-bold">Overall Progress</h3>
                <p className="text-sm text-white/80">
                  See how far you've come in your challenge journey.
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm">Progress:</p>
                  <p className="text-sm">{Math.round((challenge.completedDays / challenge.totalDays) * 100)}%</p>
                </div>
                <Progress value={(challenge.completedDays / challenge.totalDays) * 100} className="h-3 bg-white/30" />
              </div>

              {/* Today's Progress */}
              <div>
                <h3 className="text-lg font-bold">Today's Progress</h3>
                <p className="text-sm text-white/80">
                  Track your daily habits and stay on target!
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm">Completed:</p>
                  <p className="text-sm">{challenge.todayProgress}%</p>
                </div>
                <Progress value={challenge.todayProgress} className="h-3 bg-white/30" />
              </div>

              {/* Streak & Motivation */}
              <div className="flex items-center justify-between bg-white/20 p-3 rounded-lg mt-4">
                <span className="text-sm">🔥 Streak: {challenge.completedDays} days</span>
                <span className="text-sm font-bold">Keep the streak alive!</span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

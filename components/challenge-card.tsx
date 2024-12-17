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
import { Flame, Target, ChevronDown, ChevronUp } from 'lucide-react'

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
];

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
  const [isExpanded, setIsExpanded] = useState(false)

  const motivationalQuote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];

  const TimeframeButton = ({ value, label }: { value: '1' | '3' | '6', label: string }) => (
    <Button
      variant={selectedTimeframe === value ? "default" : "outline"}
      onClick={() => setSelectedTimeframe(value)}
      className="flex-1"
    >
      {label}
    </Button>
  )

  const IntensityButton = ({ value, label, percentage }: { value: 'Easy' | 'Medium' | 'Max', label: string, percentage: string }) => (
    <Button
      variant={selectedIntensity === value ? "default" : "outline"}
      onClick={() => setSelectedIntensity(value)}
      className="flex-1 flex flex-col items-center"
    >
      <span>{label}</span>
      <span className="text-xs">{percentage}</span>
    </Button>
  )

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-tr from-red-600 via-orange-500 to-yellow-200 rounded-3xl shadow-2xl text-white transition-all duration-300">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-bold flex items-center">
          {challenge.isRunning ? (
            <>
              <Flame className="mr-2 w-5 h-5" /> Track Challenge!
            </>
          ) : (
            <>
              <Flame className="mr-2 w-5 h-5" /> Set a Challenge
            </>
          )}
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

      {isExpanded && (
        <div className="p-4 space-y-6">
          {!challenge.isRunning ? (
            <>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Choose Timeframe</h3>
                  <div className="flex gap-2">
                    <TimeframeButton value="1" label="1 Month" />
                    <TimeframeButton value="3" label="3 Months" />
                    <TimeframeButton value="6" label="6 Months" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Choose Intensity</h3>
                  <div className="flex gap-2">
                    <IntensityButton value="Easy" label="Easy" percentage="50%" />
                    <IntensityButton value="Medium" label="Medium" percentage="75%" />
                    <IntensityButton value="Max" label="Max" percentage="100%" />
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => startChallenge(selectedTimeframe, selectedIntensity)}
                className="w-full bg-white text-orange-600 hover:bg-orange-100 transition-colors rounded-full font-bold"
              >
                Start Challenge
              </Button>

              <p className="text-sm text-center italic text-white/80">
                {motivationalQuote}
              </p>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p>Overall Progress</p>
                    <p>{Math.round((challenge.completedDays / challenge.totalDays) * 100)}%</p>
                  </div>
                  <Progress 
                    value={(challenge.completedDays / challenge.totalDays) * 100} 
                    className="h-3 bg-white/20" 
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p>Today's Progress</p>
                    <p>{challenge.todayProgress}%</p>
                  </div>
                  <Progress 
                    value={challenge.todayProgress} 
                    className="h-3 bg-white/20" 
                  />
                </div>
              </div>

              <div className="flex items-center justify-between bg-white/20 p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Flame className="w-5 h-5 text-orange-300" />
                  <span className="font-semibold">Keep the streak alive!</span>
                </div>
                <div className="font-bold">
                  🔥 Streak: {challenge.completedDays} days
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}


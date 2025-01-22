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
// 'use client'

// import React, { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Progress } from "@/components/ui/progress"
// import { Flame, ChevronDown, ChevronUp } from 'lucide-react'

// interface ChallengeState {
//   isRunning: boolean
//   timeframe: '1' | '3' | '6'
//   intensity: 'Easy' | 'Medium' | 'Max'
//   completedDays: number
//   totalDays: number
//   todayProgress: number
// }

// const MOTIVATIONAL_QUOTES = [
//   "Every journey starts with a step 🏆",
//   "Small progress is still progress 💪",
//   "Consistency beats intensity 🔥",
//   "Your habits build your future 🌟"
// ]

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
//   const [isExpanded, setIsExpanded] = useState(false)

//   const motivationalQuote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]

//   return (
//     <div className="w-full bg-white shadow-lg p-4 space-y-3 transition-all">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-title-card flex items-center">
//           <Flame className="mr-2 w-6 h-6" />
//           {challenge.isRunning ? "Track Your Challenge" : "Set Your Challenge"}
//         </h2>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="text-white"
//         >
//           {isExpanded ? <ChevronUp /> : <ChevronDown />}
//         </Button>
//       </div>

//       {/* Collapsible Content */}
//       {isExpanded && (
//         <div className="space-y-6">
//           {/* State 1: No Challenge Running */}
//           {!challenge.isRunning ? (
//             <>
//               {/* Timeframe Selection */}
//               <div>
//                 <h3 className="text-lg font-bold">Choose Duration</h3>
//                 <p className="text-sm text-white/80">
//                   Select how long you want your challenge to last. Options are 1, 3, or 6 months.
//                 </p>
//                 <div className="flex gap-2">
//                   {['1', '3', '6'].map((timeframe) => (
//                     <Button
//                       key={timeframe}
//                       variant={challenge.timeframe === timeframe ? "default" : "outline"}
//                       onClick={() => startChallenge(timeframe as '1' | '3' | '6', challenge.intensity)}
//                       className="flex-1"
//                     >
//                       {timeframe} {timeframe === '1' ? 'Month' : 'Months'}
//                     </Button>
//                   ))}
//                 </div>
//               </div>

//               {/* Intensity Selection */}
//               <div>
//                 <h3 className="text-lg font-bold">Select Intensity</h3>
//                 <p className="text-sm text-white/80">
//                   How challenging do you want this to be? Pick a level: Easy, Medium, or Max.
//                 </p>
//                 <div className="flex gap-2">
//                   {['Easy', 'Medium', 'Max'].map((intensity) => (
//                     <Button
//                       key={intensity}
//                       variant={challenge.intensity === intensity ? "default" : "outline"}
//                       onClick={() => startChallenge(challenge.timeframe, intensity as 'Easy' | 'Medium' | 'Max')}
//                       className="flex-1"
//                     >
//                       {intensity}
//                     </Button>
//                   ))}
//                 </div>
//               </div>

//               {/* Start Challenge Button */}
//               <Button className="w-full bg-white text-orange-600 rounded-full font-bold hover:bg-orange-100 mt-4">
//                 Start Challenge
//               </Button>

//               {/* Motivational Quote */}
//               <p className="text-sm text-center italic">
//                 {motivationalQuote}
//               </p>
//             </>
//           ) : (
//             /* State 2: Challenge Running */
//             <>
//               {/* Overall Progress */}
//               <div>
//                 <h3 className="text-lg font-bold">Overall Progress</h3>
//                 <p className="text-sm text-white/80">
//                   See how far you've come in your challenge journey.
//                 </p>
//                 <div className="flex justify-between items-center mt-2">
//                   <p className="text-sm">Progress:</p>
//                   <p className="text-sm">{Math.round((challenge.completedDays / challenge.totalDays) * 100)}%</p>
//                 </div>
//                 <Progress value={(challenge.completedDays / challenge.totalDays) * 100} className="h-3 bg-white/30" />
//               </div>

//               {/* Today's Progress */}
//               <div>
//                 <h3 className="text-lg font-bold">Today's Progress</h3>
//                 <p className="text-sm text-white/80">
//                   Track your daily habits and stay on target!
//                 </p>
//                 <div className="flex justify-between items-center mt-2">
//                   <p className="text-sm">Completed:</p>
//                   <p className="text-sm">{challenge.todayProgress}%</p>
//                 </div>
//                 <Progress value={challenge.todayProgress} className="h-3 bg-white/30" />
//               </div>

//               {/* Streak & Motivation */}
//               <div className="flex items-center justify-between bg-white/20 p-3 rounded-lg mt-4">
//                 <span className="text-sm">🔥 Streak: {challenge.completedDays} days</span>
//                 <span className="text-sm font-bold">Keep the streak alive!</span>
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// components/challenge/challenge-card.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Flame, Rocket } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const durations = [
  { months: 1, label: '1 Month' },
  { months: 3, label: '3 Months' },
  { months: 6, label: '6 Months' },
  { months: 12, label: '1 Year' },
]

const intensityLevels = [
  { value: 25, label: '25%' },
  { value: 50, label: '50%' },
  { value: 75, label: '75%' },
  { value: 100, label: '100%' },
]

export function ChallengeCard() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isChallengeActive, setIsChallengeActive] = useState(false)
  const [challengeProgress, setChallengeProgress] = useState({
    daysCompleted: 10,
    totalDays: 90,
    todayProgress: 65,
    intensity: 50,
  })
  const [selectedDuration, setSelectedDuration] = useState(1)

  const toggleExpansion = () => setIsExpanded(!isExpanded)

  const startChallenge = () => {
    setChallengeProgress({
      daysCompleted: 0,
      totalDays: selectedDuration * 30,
      todayProgress: 0,
      intensity: challengeProgress.intensity,
    })
    setIsChallengeActive(true)
    setIsExpanded(false)
  }

  return (
    <Card className="rounded-2xl w-full overflow-hidden bg-white shadow-md">
      <CardHeader 
        className="cursor-pointer bg-white" 
        onClick={toggleExpansion}
      >
        
        <CardTitle className="flex justify-between items-center text-lg text-orange-500">
          {isChallengeActive ? (
            <Badge variant="secondary" className="text-sm font-normal bg-white text-orange-800 border border-orange-500">
              {`${challengeProgress.daysCompleted} days completed, ${
                challengeProgress.totalDays - challengeProgress.daysCompleted
              } remaining`}
            </Badge>
          ) : (
            <motion.span
              className="flex items-center justify-center space-x-2 text-center font-bold text-lg text-orange-600"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Rocket className="text-orange-500" size={24} />
              <span>Start a challenge!</span>
            </motion.span>
          )}
        </CardTitle>
      </CardHeader>
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <CardContent className="space-y-6 p-6">
          {isChallengeActive ? (
            <>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Challenge Progress</span>
                    <span>
                      {((challengeProgress.daysCompleted / challengeProgress.totalDays) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <Progress 
                    value={(challengeProgress.daysCompleted / challengeProgress.totalDays) * 100} 
                    className="h-2"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Today's Progress</span>
                    <span>{challengeProgress.todayProgress}%</span>
                  </div>
                  <Progress value={challengeProgress.todayProgress} className="h-2" />
                </div>
              </div>
              <motion.div
                className="flex items-center justify-center space-x-2 text-center font-bold text-lg text-orange-600"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Flame className="text-orange-500" size={24} />
                <span>Keep the challenge alive!</span>
              </motion.div>
            </>
          ) : (
           
            <>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <Slider
                  min={0}
                  max={3}
                  step={1}
                  value={[durations.findIndex(d => d.months === selectedDuration)]}
                  onValueChange={(value) => setSelectedDuration(durations[value[0]].months)}
                  className="my-4"
                />
                <div className="flex justify-between text-sm font-medium">
                  {durations.map((duration) => (
                    <div 
                      key={duration.months}
                      className={`text-center ${
                        selectedDuration === duration.months 
                          ? 'text-orange-600' 
                          : 'text-gray-600'
                      }`}
                    >
                      {duration.label}
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Intensity</h3>
                <p className="text-sm text-gray-600">
                  Choose the minimum percentage of your daily habits you'll need to complete:
                </p>
                <div className="grid grid-cols-4 gap-4">
                  {intensityLevels.map((level) => (
                    <button
                      key={level.value}
                      onClick={() => setChallengeProgress(prev => ({
                        ...prev,
                        intensity: level.value
                      }))}
                      className="relative aspect-square"
                    >
                      <div className={`
                        absolute inset-0 rounded-full border-4
                        transition-colors duration-200
                        ${challengeProgress.intensity === level.value
                          ? 'border-orange-500'
                          : 'border-gray-200'
                        }
                      `}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`
                            text-lg font-bold
                            ${challengeProgress.intensity === level.value
                              ? 'text-orange-500'
                              : 'text-gray-600'
                            }
                          `}>
                            {level.label}
                          </span>
                        </div>
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={challengeProgress.intensity === level.value ? '#f97316' : '#e5e7eb'}
                            strokeWidth="3"
                            strokeDasharray={`${level.value}, 100`}
                          />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button
                  className="h-12 w-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full"
                  onClick={startChallenge}
                >
                  <Rocket className="h-6 w-6" />
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </motion.div>
    </Card>
  )
}


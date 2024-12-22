'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Flame, Trophy, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'


const intensityLevels = [
  { name: 'Easy', description: '50% of habits per day', value: 50 },
  { name: 'Medium', description: '75% of habits per day', value: 75 },
  { name: 'Max', description: '100% of habits per day', value: 100 },
]

export function ChallengeWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isChallengeActive, setIsChallengeActive] = useState(false)
  const [challengeProgress, setChallengeProgress] = useState({
    daysCompleted: 10,
    totalDays: 90,
    todayProgress: 65,
    intensity: 'Medium',
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
    <Card className="rounded-3xl w-full overflow-hidden border-2 border-orange-500">
      <CardHeader 
        className="cursor-pointer bg-white" 
        onClick={toggleExpansion}
      >
        <CardTitle className="flex justify-between items-center text-xl font-bold text-orange-500">
          {isChallengeActive ? (
            <Badge variant="secondary" className="text-sm font-normal bg-white text-orange-800 border border-orange-500">
              {`${challengeProgress.daysCompleted} days completed, ${
                challengeProgress.totalDays - challengeProgress.daysCompleted
              } remaining`}
            </Badge>
          ) : (
            <motion.span
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Challenge Mode
            </motion.span>
          )}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={24} className="text-orange-800" />
          </motion.div>
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
              <Separator />
              <motion.div
                className="flex items-center justify-center space-x-2 text-center font-bold text-lg text-orange-600"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Flame className="text-orange-500" size={24} />
                <span>Keep the streak alive!</span>
              </motion.div>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-600 font-medium">
                Set a challenge: Choose duration and intensity to get started!
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <Tabs value={selectedDuration.toString()} onValueChange={(value) => setSelectedDuration(parseInt(value))} className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="1">1 Month</TabsTrigger>
                    <TabsTrigger value="3">3 Months</TabsTrigger>
                    <TabsTrigger value="6">6 Months</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Intensity</h3>
                <p className="text-sm text-gray-600">
                  Choose the percentage of daily habits you want to complete:
                </p>
                <Slider
                  min={0}
                  max={2}
                  step={1}
                  value={[intensityLevels.findIndex(level => level.name === challengeProgress.intensity)]}
                  onValueChange={(value) => setChallengeProgress({
                    ...challengeProgress,
                    intensity: intensityLevels[value[0]].name
                  })}
                  className="my-4"
                />
                <div className="flex justify-between text-sm font-medium">
                  {intensityLevels.map((level) => (
                    <div key={level.name} className={`text-center ${challengeProgress.intensity === level.name ? 'text-orange-600' : 'text-gray-600'}`}>
                      <div>{level.name}</div>
                      <div className="text-xs">{level.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <motion.p
                className="text-center text-sm text-gray-600 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                "Every journey starts with a step 🏆"
              </motion.p>
              <div className="text-center">
                <Button
                  className="mt-3 bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={startChallenge}
                >
                  <Trophy className="mr-2 h-5 w-5" /> Start Challenge
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </motion.div>
    </Card>
  )
}


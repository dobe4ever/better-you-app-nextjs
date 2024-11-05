import { ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export function Habits() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Todays Habits</CardTitle>
        <ChevronRight className="h-5 w-5 text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">8/10</span>
            <span className="text-sm font-medium">80%</span>
          </div>
          <Progress value={80} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}
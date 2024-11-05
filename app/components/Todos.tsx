import { ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export function Todos() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Todays Todos</CardTitle>
        <ChevronRight className="h-5 w-5 text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">3/12</span>
            <span className="text-sm font-medium">29%</span>
          </div>
          <Progress value={29} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}
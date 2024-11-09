import { Calendar, Brain, Trophy, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function QuickAccess() {
  const items = [
    { icon: Calendar, label: 'Calendar' },
    { icon: TrendingUp, label: 'Analytics' },
    { icon: Brain, label: 'AI Coach' },
    { icon: Trophy, label: 'Achievements' },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, index) => (
        <Card key={index}>
          <CardContent className="p-4 text-center">
            <item.icon className="mx-auto mb-2 h-6 w-6 text-orange-500" />
            <h3 className="font-semibold">{item.label}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
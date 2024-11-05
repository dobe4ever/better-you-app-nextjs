import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function LifeScoreAndCourses() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Life Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-500">85</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-500">3</div>
        </CardContent>
      </Card>
    </div>
  )
}
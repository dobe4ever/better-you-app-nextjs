import { Tv } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function AiTipsCarousel() {
  return (
    <div className="bg-white py-2 shadow-md">
      <Carousel className="mx-auto max-w-md">
        <CarouselContent>
          {[1, 2, 3].map((_, index) => (
            <CarouselItem key={index}>
              <Card className="border-orange-100 bg-gradient-to-r from-orange-50 to-white">
                <CardContent className="flex items-center gap-3 p-4">
                  <Tv className="h-6 w-6 text-orange-500" />
                  <p className="text-sm">AI Tip #{index + 1}: Remember to take regular breaks!</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
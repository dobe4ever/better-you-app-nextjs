import { Bot } from 'lucide-react'
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
    <div className="">
      <Carousel className="mx-auto w-">
        <CarouselContent>
          {[1, 2, 3].map((_, index) => (
            <CarouselItem key={index}>
              <Card className="bg-white">
                <CardContent className="flex items-center gap-3 p-2">
                  <Bot className="h-6 w-6 text-orange-500" />
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
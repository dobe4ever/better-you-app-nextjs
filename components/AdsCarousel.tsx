import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function AdsCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        {[1, 2, 3].map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="p-4">
                <div className="aspect-video bg-gray-100 rounded-lg" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
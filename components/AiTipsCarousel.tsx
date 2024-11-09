import { Bot } from 'lucide-react'
import { motion } from 'framer-motion'
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="bg-white shadow-">
        <Carousel className="mx-auto max-w-md">
          <CarouselContent>
            {[1, 2, 3].map((_, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 bg-white">
                  <CardContent className="flex items-center gap-4 p-0">
                    <Bot size={55} className="text-orange-400 pr-" />
                      <blockquote className="flex flex-col italic text-sm text-gray-400 border-l-4 border-orange-400 pl-2">
                        <p className="text-sm text-black font-semibold">You're building a strong routine</p>
                        <p className="text-sm">3 days streak! Keep it up!</p>
                      </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </motion.div>
  )
}
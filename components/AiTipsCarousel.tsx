import { useState, useEffect } from 'react';
import { Bot, ChevronLeft, ChevronRight } from 'lucide-react';

export function AiTipsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const tips = [
    {
      message: "You're building a strong routine",
      detail: "3 days streak! Keep it up!",
    },
    {
      message: "Great progress on your goals",
      detail: "You've completed 80% of your weekly targets",
    },
    {
      message: "Time for a mindful break",
      detail: "You've been focused for 2 hours straight",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % tips.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + tips.length) % tips.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white my-4 mx-2 p-2 border-y relative">
      {/* Left Navigation */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-0 top-0 bottom-0 bg-white z-10"
        aria-label="Previous tip"
      >
        <ChevronLeft size={20} className="text-black/75 m-1.5" />
      </button>

      {/* Right Navigation */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-0 top-0 bottom-0 bg-white z-10"
        aria-label="Next tip"
      >
        <ChevronRight size={20} className="text-black/75 m-1.5"/>
      </button>

      {/* Carousel Content */}
      <div className="overflow-hidden px-6">
        <div
          className="flex transition-transform duration-300 ease-out w-full"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {tips.map((tip, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <div className="flex items-center gap-2 px-0">
                <div className="flex-shrink-0">
                  <Bot size={36} className="text-black/75" />
                </div>
                <blockquote className="flex flex-col border-l-2 pl-2 border-black/75 italic text-sm text-black/75">
                  <p className="text-md text-black font-semibold">{tip.message}</p>
                  <p className="text-xs text-gray-500">{tip.detail}</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
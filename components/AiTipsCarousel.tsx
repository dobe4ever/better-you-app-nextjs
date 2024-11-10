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
    <div className="bg-white rounded- m-2 p-2 border-y shadow- relative">
      {/* Left Navigation */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white z-10"
        aria-label="Previous tip"
      >
        <ChevronLeft size={20} className="text-orange-400" />
      </button>

      {/* Right Navigation */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white z-10"
        aria-label="Next tip"
      >
        <ChevronRight size={20} className="text-orange-400"/>
      </button>

      {/* Carousel Content */}
      <div className="overflow-hidden px-6">
        <div
          className="flex transition-transform duration-300 ease-out w-full"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {tips.map((tip, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <div className="flex items-center gap-2 px-4">
                <div className="flex-shrink-0">
                  <Bot size={36} className="text-orange-400" />
                </div>
                <blockquote className="flex flex-col border-l-4 pl-2 border-orange-400 italic text-sm text-gray-400">
                  <p className="text-xs text-black font-semibold">{tip.message}</p>
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
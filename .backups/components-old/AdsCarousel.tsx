import { useEffect, useState, ReactNode } from 'react'
import { ChevronRight } from 'lucide-react';

interface WidgetProps {
  title: string;
  children: ReactNode;
  onClick?: () => void;
  rightIcon?: ReactNode;
  className?: string;
}

const Widget = ({
  title,
  children,
  onClick,
  rightIcon = (
    <ChevronRight
      size={16}
      className="text-orange-main"
    />
  ),
  className = '',
}: WidgetProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-md p-4 border shadow ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
    >
      <div className="flex justify-between items-center mb-0">
        <h2 className="text-lg font-semibold">{title}</h2>
        {rightIcon}
      </div>
      {children}
    </div>
  );
};

export function AdsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const ads = [
    {
      message: "Learn more about our new products",
      source: "Exclusive offers for today",
    },
    {
      message: "Boost your productivity with our AI tools",
      source: "Upgrade to our premium plan",
    },
    {
      message: "Join our community and connect with others",
      source: "Find support and accountability",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % ads.length);
  };

  // Auto advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Widget 
        title="Ads" 
        className="overflow-hidden"
        onClick={nextSlide}
      >
        <div
          className="flex transition-transform duration-300 ease-out w-full"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {ads.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <blockquote className="border-l-4 pl-3 h-full border-gradient-orange italic text-sm text-gray-500">
                <p className="text-black font-bold">{item.message}</p>
                <p className="text-gray-500">{item.source}</p>
              </blockquote>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 gap-2">
          {ads.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                activeSlide === index ? 'bg-orange-main' : 'bg-gray-300'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveSlide(index);
              }}
            />
          ))}
        </div>
      </Widget>
    </div>
  );
}
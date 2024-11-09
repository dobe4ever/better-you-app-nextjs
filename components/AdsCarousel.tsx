import { useState, ReactNode } from 'react'
import { Calendar, Activity, Brain, TrendingUp, Bot, Trophy, ChevronRight } from 'lucide-react';

//import { Widget } from '../components/ui/Widget';
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
      className="text-orange-400 group-hover:transform group-hover:translate-x-1 transition-transform"
    />
  ),
  className = '',
}: WidgetProps) => {
  return (
    <div
      className={`bg-white rounded-md p-4 border shadow-md ${
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

  return (
    <div>
      {/* Calendar Widget */}
{/* Carousel Widget */}
<Widget title="Ads" className="overflow-hidden">
    <div
      className="flex transition-transform duration-300 ease-out w-full"
      // style={{ transform: `translateX(-${activeSlide * 100}%)` }}
    >
      {[
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
      ].map((item, index) => (
        <div key={index} className="flex-shrink-0 w-full">
          <blockquote className="border-l-4 pl-3 h-full border-orange-400 italic text-sm text-gray-400">
            <p className="text-black font-bold">{item.message}</p>
            <p className="text-gray-500">{item.source}</p>
          </blockquote>
        </div>
      ))}
    </div>
  </Widget>
    </div>
  );
}
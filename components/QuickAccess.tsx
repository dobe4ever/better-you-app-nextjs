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

export function QuickAccess() {

  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {/* Calendar Widget */}
      <Widget title="Calendar" onClick={() => {}}>
        <div className="flex flex-col items-center mt-2">
          <Calendar className="w-8 h-8 text-orange-400 mb-2" />
          <span className="text-2xl font-bold">12</span>
          <span className="text-sm text-gray-400">Days</span>
        </div>
      </Widget>

      {/* Analytics Widget */}
      <Widget title="Analytics" onClick={() => {}}>
        <div className="flex flex-col items-center mt-2">
          <TrendingUp className="w-8 h-8 text-orange-400 mb-2" />
          <span className="text-2xl font-bold">2.5h</span>
          <span className="text-sm text-gray-400">Today</span>
        </div>
      </Widget>

      {/* AI Coach Widget */}
      <Widget title="AI Coach" onClick={() => {}}>
        <div className="flex flex-col items-center mt-2">
          <Bot className="w-8 h-8 text-orange-400 mb-2" />
          <span className="text-2xl font-bold">8/10</span>
          <span className="text-sm text-gray-400">Completed</span>
        </div>
      </Widget>

      {/* Achievements Widget */}
      <Widget title="Achievements" onClick={() => {}}>
        <div className="flex flex-col items-center mt-2">
          <Trophy className="w-8 h-8 text-orange-400 mb-2" />
          <span className="text-2xl font-bold">85</span>
          <span className="text-sm text-gray-400">Points</span>
        </div>
      </Widget>
    </div>
  );
}
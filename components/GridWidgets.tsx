import { ReactNode } from 'react'
import { Calendar, TrendingUp, Bot, Trophy, ChevronRight } from 'lucide-react';

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
      className="text-orange-400"
    />
  ),
  className = '',
}: WidgetProps) => {
  return (
    <div
      className={`bg-white rounded-md p-4 border shadow ${
        onClick ? 'cursor-pointer' : ''
      } group ${className}`}
    >
      <div className="flex justify-between items-center mb-0">
        <h2 className="text-sm font-semibold">{title}</h2>
        {rightIcon}
      </div>
      {children}
    </div>
  );
};

export function GridWidgets() {

  return (
    <div className="grid grid-cols-2 gap-2 mt-0">
      {/* Calendar Widget */}
      <Widget 
        title="Calendar" 
        className="flex flex-col gap-2"
      >
        <Calendar size={32} />

        <div className="text-sm text-gray-600 mt-2">
        Schedule tasks, set reminders, and stay organized
        </div>

      </Widget>

      {/* Analytics Widget */}
      <Widget title="Analytics" className="flex flex-col gap-2">
        <div className="space-y-2">
          <div>
          <TrendingUp size={32} />
          <div className="text-xs text-gray-500">Trending Up</div>
        </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Last 7 Days</span>
              <span className="text-orange-500 font-bold">80%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-orange-500 rounded-full"></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Last 30 days</span>
              <span className="text-gray-900 font-bold">48%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-gray-900 rounded-full"></div>
            </div>
          </div>
        </div>
      </Widget>

      {/* AI Coach Widget */}
      <Widget 
        title="AI Coach" 
        className="flex flex-col gap-2"
      >
        <Bot size={32} />

        <div className="text-sm text-gray-600 mt-2">
        Get instant guidance and support from your 24/7 AI coach
        </div>

      </Widget>

      {/* Achievements Widget */}
      <Widget 
        title="Achievements" 
        className="flex flex-col gap-2"
      >
        <Trophy size={32} />

        <div className="text-sm text-gray-600 mt-2">
        Unlock rewards as you reach new milestones
        </div>

      </Widget>
    </div>
  );
}
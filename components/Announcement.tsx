import { useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { X, ChevronRight } from 'lucide-react'

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

export function Announcement() {
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  if (!showAnnouncement) return null

  return (
    <div>
      {/* Widgets wraper */}
      {/* <div className="flex flex-col overflow-hidden w-full bg- pt-6 space-y-2 rounded-t-xl"> */}
      {/* Announcement widget*/}
      {showAnnouncement && (
        <Widget
          className="relative overflow-hidden"
          title="Better You Everyday"
          rightIcon={
            <button
              className="absolute top-4 right-4 text-orange-400 hover:text-orange-600"
              onClick={(e) => {
                e.stopPropagation(); // Prevents triggering any parent onClick handlers
                setShowAnnouncement(false);
              }}
            >
              <X size={16} />
            </button>
          }
        >
          <p className="text-sm text-gray-400">
            Better you everyday | Vercel project overview
          </p>
          <div className="mt-2">
            <a
              href="https://vercel.com/dobe4evers-projects/vitejs-node-ts-tailwind-better-you"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-400 text-sm text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200"
            >
              Go to Project
            </a>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out" />
        </Widget>
        
      )}
      {/* </div> */}
    </div>
  )
}
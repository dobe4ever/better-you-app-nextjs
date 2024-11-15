import { useState, ReactNode } from 'react'
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
      className="text-orange-400"
    />
  ),
  className = '',
}: WidgetProps) => {
  return (
    <div
      className={`bg-white rounded-md p-4 shadow ${
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

export function Announcement() {
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  if (!showAnnouncement) return null

  return (
    <div className="bg-white rounded-md border p-">

      {/* Announcement widget*/}
      {showAnnouncement && (
        <Widget
          className="relative overflow-hidden"
          title="Upgrade to Premium 50% off limited time offer!"
          rightIcon={
            <button
              className="absolute top-4 right-4 text-orange-400"
              onClick={(e) => {
                e.stopPropagation(); // Prevents triggering any parent onClick handlers
                setShowAnnouncement(false);
              }}
            >
              <X size={16} />
            </button>
          }
        >
          <div className="mt-4">
            <a
              href="https://vercel.com/dobe4evers-projects/vitejs-node-ts-tailwind-better-you"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-orange-500 text-sm p-2 rounded-md"
            >
              Read More
            </a>
          </div>
        </Widget>
      )}
      </div>
  )
}
'use client'

import * as React from 'react';
import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Send, Smile, Meh, Frown, X, Menu, Bell, UserCircle, Bot } from 'lucide-react';
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

export default function Component() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [mood, setMood] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && activeSlide < 2) {
      setActiveSlide((prev) => prev + 1);
    }
    if (isRightSwipe && activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    // Set initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
  const fadePercentage = headerHeight
    ? Math.max(100 - (scrollPosition / headerHeight) * 100, 0)
    : 100;

  // Rendering starts here...
  return (
    // Main container
    <div className="bg-white min-h-screen w-full">
      {/* White overlay for fading effect */}
      <div
        className="absolute inset-0 bg-white transition-opacity duration-300 ease-in-out z-10"
        style={{ opacity: `${1 - fadePercentage / 100}` }}
      ></div>

      {/* Content wrapper */}
      <div
        className={`relative z-20 transition-colors duration-300 ease-in-out ${
          fadePercentage === 0 ? 'bg-white' : ''
        }`}
      >
        {/* Header component */}
        <div className="container mx-auto">
          <div
            ref={headerRef}
            className="flex flex-col items-center justify-center transition-opacity duration-300"
            style={{ opacity: `${fadePercentage / 100}` }}
          >
            {/* Skewed orange overlay */}
            <div className="h- flex justify-center items-center">
              <div className="absolute top-0 left-0 h-[24vh] w-1/2 bg-orange-400 origin-top-left transform -skew-y-12"></div>
              <div className="absolute top-0 right-0 h-[24vh] w-1/2 bg-orange-400 origin-top-right transform skew-y-12"></div>
            </div>

            {/* Top menu */}
            <div className="w-full pt-2 px-3 flex justify-between items-center text-white text-lg font-semibold z-10">
              <div className="flex items-center space-x-4">
                <Menu className="h-5 w-5" />
                <div>Hi Brotastic</div>
              </div>
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <UserCircle className="h-5 w-5" />
              </div>
            </div>

            {/* Avatar */}
            <div className="w-full py-1 flex justify-center z-10">
              <div className="rounded-full shadow-xl border-4 border-orange-300 overflow-hidden">
                <img
                  src="https://i.pravatar.cc/128"
                  alt="Avatar"
                  className="w-56 h-56 object-cover"
                />
              </div>
            </div>

            {/* Ready to crush some habits? */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="w-full pt-1 text-center z-10"
            >
              <h1 className="text-orange-400 font-bold text-xl">
                READY TO CRASH SOME HABITS?
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Sticky Top */}
        <div className="sticky top-0 z-30">
          <div className="container mx-auto w-[95%] py-3">
            {/* AI output */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
            >
              {/* Carousel implementation */}
              <div className="relative">
                {/* Messages carousel */}
                <div
                  className="overflow-hidden"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                  >
                    {[
                      {
                        message:
                          "Focus on completing your 'Morning Meditation' habit.",
                        subtext: 'Just 5 minutes can boost your daily focus',
                      },
                      {
                        message: '20% increase in productivity observed',
                        subtext: 'Based on your previous patterns',
                      },
                      {
                        message: "You're building a strong routine",
                        subtext: '3 days streak! Keep it up!',
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex-shrink-0 w-full">
                        <div className="flex flex-row">
                          <Bot size={55} className="text-orange-400 pr-2" />
                          <blockquote className="flex flex-col italic text-sm text-gray-400 border-l-4 border-orange-400 pl-2">
                            <p className="text-sm text-gray-700 font-medium">
                              {item.message}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {item.subtext}
                            </p>
                          </blockquote>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-1.5 mt-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        activeSlide === index
                          ? 'bg-orange-400 w-3'
                          : 'bg-orange-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          {/* White background that fades in */}
          <div
            className="absolute inset-0 bg-white -z-10 transition-opacity duration-300"
            style={{ opacity: scrollPosition > headerHeight * 1 ? 1 : 0 }}
          ></div>
        </div>

        {/* Widgets wraper */}
        <div className="flex flex-col overflow-hidden w-full bg- pt-6 px-3 space-y-2 rounded-t-xl">
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

          {/* Habits Widget*/}
          <Widget title="Today's Habits" onClick={() => {}}>
            <div className="flex items-end justify-between mb-2">
              <div>
                <p className="text-sm text-gray-400">Completed</p>
                <p className="text-xl font-bold">8/10</p>
              </div>
              <p className="text-4xl font-bold">80%</p>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
                style={{ width: '80%', transition: 'width 1s ease-in-out' }}
              />
            </div>
          </Widget>

          {/* Todos Widget*/}
          <Widget title="Today's Todos" onClick={() => {}}>
            <div className="flex items-end justify-between mb-2">
              <div>
                <p className="text-sm text-gray-400">Completed</p>
                <p className="text-xl font-bold">3/12</p>
              </div>
              <p className="text-4xl font-bold">29%</p>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
                style={{ width: '29%', transition: 'width 1s ease-in-out' }}
              />
            </div>
          </Widget>

          {/* Quick Input widget*/}
          <Widget title="Quick Input" onClick={() => {}}>
            <div className="mb-4">
              <p className="mb-2 text-sm text-gray-400">
                How are you feeling today?
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Smile, mood: 'happy', color: 'text-green-500' },
                  { icon: Meh, mood: 'neutral', color: 'text-yellow-500' },
                  { icon: Frown, mood: 'sad', color: 'text-red-500' },
                ].map(({ icon: Icon, mood: m, color }) => (
                  <button
                    key={m}
                    onClick={() => setMood(m)}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      mood === m ? `${color} bg-gray-100` : 'text-gray-400'
                    }`}
                  >
                    <Icon size={24} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm text-gray-400">
                Quick note or goal for today:
              </p>
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="px-2 py-2 text-sm border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="Type here..."
                />
                <button className="bg-orange-400 text-sm text-white px-2 py-2 rounded-r-full hover:bg-orange-600 transition-colors duration-200 flex items-center">
                  <Send size={14} className="mr-1" />
                  Send
                </button>
              </div>
            </div>
          </Widget>
        </div>
        {/* End of Widgets wrapper */}
      </div>
    </div>
    // End of main
  );
}

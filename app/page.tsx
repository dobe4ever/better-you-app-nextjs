'use client'

import * as React from 'react';
import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Send, Smile, Meh, Frown, X, Menu, Bell, UserCircle, Bot } from 'lucide-react';

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
      className={`bg-white rounded-md p-4 shadow-md ${
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

  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col">
      {/* White overlay for fading effect */}
      <div
        className="absolute inset-0 bg-gray-200 transition-opacity duration-300 ease-in-out -z-10"
        style={{ opacity: `${1 - fadePercentage / 100}` }}
      ></div>

      {/* HEADER */}
      <div className="w-full flex flex-col">
        <div
          ref={headerRef}
          className="flex flex-col items-center justify-center transition-opacity duration-300"
          style={{ opacity: `${fadePercentage / 100}` }}
        >
          {/* TOPBAR */}
          <div className="w-full flex justify-between items-center text-white text-xl font-bold bg-orange-400 p-2 z-10">
            {/* Left */}
            <div className="flex items-center space-x-4">
              <Menu className="h-5 w-5" />
              <div>Hi Brotastic</div>
            </div>
            {/* Right */}
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5" />
              <UserCircle className="h-5 w-5" />
            </div>
          </div>

          {/* BOX AVATAR */}
          <div className="w-full flex flex-col justify-center items-center bg-orange-400 overflow-hidden">
            <div className="flex flex-col items-center w-full">
              {/* Avatar */}
              <img className="shadow-lg border-4 border-gray-100 w-[50%] aspect-[1/1] rounded-full z-10" src="https://i.pravatar.cc/128" alt="User avatar" />

              {/* Diamond */}
              <div className="-mt-[25%] bg-gray-200 rotate-[45deg] w-full aspect-[1/1]"> </div>
            
              {/* Text */}
              <div className="-mt-[73%] w-full font-bold text-center text-2xl px-4 z-10"> 
                {/* Ready to crush some habits? */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="w-full pt-1 text-center"
                >
                  <h1 className="text-orange-400 font-bold text-xl mb-4">
                    READY TO CRASH SOME HABITS?
                  </h1>                
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STICKY TOP */}
      <div className="sticky top-0 bg-gray-200 w-full py-2 flex flex-row justify-between overflow-hidden z-20">
        {/* Left: */}
        <div className="h-full px-4 w-1/4 flex flex-col items-center bg-gray-200 z-10">
          <Bot size={20} className="text-orange-400 mb-1.5" />
          {/* Dot indicators */}
          <div className="flex gap-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? 'bg-orange-400'
                    : 'bg-white'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: */}
        <div
          className="h-full flex flex-col items-center flex-grow"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-out w-full"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {[
              {
                message: "Focus on completing your 'Morning Meditation' habit.",
                source: "Based on decreased performance & consistency",
              },
              {
                message: "15% increase in productivity observed",
                source: "Compared to your previous week",
              },
              {
                message: "You're building a strong routine",
                source: "3 days streak! Keep it up!",
              },
            ].map((item, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <blockquote className="border-l-4 pl-3 h-full border-orange-400 italic text-sm text-gray-400">
                  <p className="text-black font-bold">
                    {item.message}
                  </p>
                  <p className="text-gray-500">
                    {item.source}
                  </p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
        
      {/* CONTENT */}
      <div className="w-full flex flex-col space-y-4 mt-4 p-4 overflow-auto">
        {/* Announcement widget*/}
        {showAnnouncement && (
          <Widget
            className="relative overflow-hidden pb-5"
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
            <div className="mt-4">
              <a
                href="https://vercel.com/dobe4evers-projects/vitejs-node-ts-tailwind-better-you"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-400 text-sm text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200"
              >
                Go to Project
              </a>
            </div>
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
    </div>
  );
}
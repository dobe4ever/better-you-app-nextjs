'use client'

// ChallengeCard.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircularSlider } from './CircularSlider';

interface ChallengeCardProps {
  onStart?: (settings: { intensity: number; duration: number }) => void;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ onStart }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [intensity, setIntensity] = useState(25);
  const [duration, setDuration] = useState(1);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <motion.div
      layout
      className="w-full my-2 mx-auto bg-white rounded-3xl border shadow-md overflow-y-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Collapsed State - Challenge Button */}
      <AnimatePresence mode="wait">
        {!isExpanded && (
          <motion.div
            key="challenge-button"
            className="cursor-pointer"
            onClick={() => setIsExpanded(true)}
            exit={{ opacity: 0 }}
          >
            <div className="p-2 flex items-center justify-between">
              <div className="flex items-center space-x-4">

                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                  >
                    <span className="text-2xl">🔥</span>
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-title-orange">Start a Challenge!</h3>
                  <p className="text-gray-600">Push your limits, level up your game</p>
                </div>

                </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                  >
                    <span className="text-2xl">🔥</span>
                  </motion.div>
                </div>
          </motion.div>
        )}

        {/* Expanded State - Challenge Setup */}
        {isExpanded && (
          <motion.div
            key="challenge-setup"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-3"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Challenge Setup</h2>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ^
                </button>
              </div>

              {/* Intensity Selector */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Challenge Intensity</h3>
                <div className="flex justify-center">
                  <CircularSlider
                    value={intensity}
                    onChange={setIntensity}
                    min={25}
                    max={100}
                  />
                </div>
              </div>

              {/* Duration Selector */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Challenge Duration</h3>
                <div className="flex gap-2 flex-wrap">
                  {months.map((month) => (
                    <motion.button
                      key={month}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setDuration(month)}
                      className={`px-4 py-2 rounded-full ${
                        duration === month
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {month}M
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Challenge Summary */}
              <div className="bg-orange-50 p-4 rounded-xl">
                <h4 className="font-semibold text-orange-800">Challenge Summary</h4>
                <p className="text-orange-700">
                  Complete {intensity}% of your habits daily for {duration} month
                  {duration > 1 ? 's' : ''}
                </p>
              </div>

              {/* Start Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onStart?.({ intensity, duration });
                  setIsExpanded(false);
                }}
                className="w-full py-4 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                Start Challenge 🔥
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ChallengeCard;
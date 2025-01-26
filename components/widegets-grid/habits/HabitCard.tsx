// // components/widegets-grid/habits/HabitCard.tsx

// interface HabitCardProps {
//     title: string
//     key: string
//   }
  
//   export function HabitCard({ title }: HabitCardProps) {
//     return (
//       <div className="
//           relative 
//           p-3
//           bg-white 
//           rounded-2xl 
//           border shadow-md
//           mb-2
//         ">
//         <p className="text-sm text-gray-700">{title}</p>
//       </div>
//     )
//   }
  
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Zap, Trophy, Flame, Target } from 'lucide-react';

const HabitCard = ({ habit = {}, onComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCompletionAnim, setShowCompletionAnim] = useState(false);
  const {
    name = 'Untitled Habit',
    currentStreak = 10,
    longestStreak = 125,
    completionRate = 62,
    heatLevel = 3,
    milestoneProgress = 5,
    nextMilestone = 10,
    totalCompletions = 0,
    totalDays = 30
  } = habit;

  const handleComplete = () => {
    onComplete();
    setShowCompletionAnim(true);
    setTimeout(() => setShowCompletionAnim(false), 1500);
  };

  return (
    <motion.div 
      className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200"
      initial={false}
      animate={isExpanded ? "expanded" : "collapsed"}
    >
      <div 
        className="flex items-center justify-between p-3 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => { e.stopPropagation(); handleComplete(); }}
          >
            <CheckCircle2 className="text-orange-500" size={24} />
          </motion.div>
          <h3 className="text-s font-semibold text-gray-800">{name}</h3>
        </div>
        <div className="flex items-center space-x-4">
          <CompactStat icon={Flame} value={heatLevel} />
          <motion.div
            initial={false}
            animate={{ rotate: isExpanded ? 90 : 0 }}
          >
            <ChevronRight className="text-gray-400" size={20} />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="p-3 pt-0 bg-orange-50">
              <div className="grid grid-cols-3 gap-3 mb-3">
                <MotivationalStat 
                  icon={Zap} 
                  label="Current Streak" 
                  value={currentStreak}
                  subtext={`Longest: ${longestStreak}`}
                />
                <MotivationalStat 
                  icon={Trophy} 
                  label="Milestone" 
                  value={`${milestoneProgress}/${nextMilestone}`} 
                  subtext="Keep it up!"
                />
                <MotivationalStat 
                  icon={Target} 
                  label="Completion Rate" 
                  value={`${completionRate}%`}
                  subtext="Overall progress"
                />
              </div>
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-500">Milestone Progress</span>
                  <span className="text-xs font-medium text-gray-700">{milestoneProgress}/{nextMilestone}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-orange-500 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${(milestoneProgress/nextMilestone*100).toFixed(0)}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-500">Overall Progress</span>
                  <span className="text-xs font-medium text-gray-700">{totalCompletions}/{totalDays} days</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-green-500 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${(totalCompletions/totalDays*100).toFixed(0)}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCompletionAnim && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Flame className="text-orange-400" size={64} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CompactStat = ({ icon: Icon, value }) => (
  <div className="flex items-center space-x-1">
    <Icon className="text-orange-500" size={16} />
    <span className="text-sm font-medium text-gray-600">{value}</span>
  </div>
);

const MotivationalStat = ({ icon: Icon, label, value, subtext }) => (
  <div className="flex items-center space-x-2">
    <Icon className="text-orange-500" size={24} />
    <div>
      <div className="text-sm font-semibold text-gray-800">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-xs text-orange-600">{subtext}</div>
    </div>
  </div>
);

export default HabitCard;

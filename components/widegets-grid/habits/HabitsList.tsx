// // components/habits-list.tsx
// "use client"

// import { useState } from "react"
// import { Eye, EyeOff } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { HabitCard } from "./HabitCard"
// import { AddMenu } from "./AddMenu"
// import type { HabitsListProps } from "@/types/list"

// export function HabitsList({ title, cards, onAddCard }: HabitsListProps) {
//   const [isVisible, setIsVisible] = useState(true)
//   const [isAdding, setIsAdding] = useState(false)
//   const [newCardTitle, setNewCardTitle] = useState("")

//   const handleAddCard = () => {
//     if (newCardTitle.trim()) {
//       onAddCard(newCardTitle)
//       setNewCardTitle("")
//       setIsAdding(false)
//     }
//   }

//   const handleMenuSelect = (option: string) => {
//     setIsAdding(true)
//   }

//   return (
//     <div className="flex flex-col">
      
//       {/* Header */}
//       <div className="flex items-center justify-between p- border-b">
//         <h3 className="text-gray-600">{title}</h3>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => setIsVisible(!isVisible)}
//           className="p-1 hover:bg-gray-200"
//         >
//           {isVisible ? (
//             <Eye className="h-4 w-4" />
//           ) : (
//             <EyeOff className="h-4 w-4" />
//           )}
//         </Button>
//       </div>

//       {/* Body */}
//       <div className="flex-1 overflow-y-auto max-h-[calc(100vh-16rem)] p-3">
//         {isVisible && cards.map((card) => <HabitCard key={card.id} title={card.title} />)}

//         {isAdding && (
//           <div className="mb-">
//             <input
//               type="text"
//               value={newCardTitle}
//               onChange={(e) => setNewCardTitle(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleAddCard()}
//               placeholder="Enter card title..."
//               className="w-full p- rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               autoFocus
//             />
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <div className="border-t">
//         <AddMenu onSelect={handleMenuSelect} />
//       </div>
//     </div>
//   )
// }

import React, { useState, useCallback } from 'react';
import List from '../List';
import HabitCard from './HabitCard';
import HabitCardBack from './HabitCardBack';
import ContextualMenu from '../../ui/ContextualMenu';
import AddHabitBox from './AddHabitBox';
import { AlarmClock, Palette, Lock, Calendar, Repeat, Flag, Star, Trash } from 'lucide-react';

const HabitsList = ({ habits, onToggle, onUpdate, onDelete }) => {
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedHabitId, setSelectedHabitId] = useState(null);

  const handleCardClick = useCallback((habitId) => {
    const habit = habits.find(h => h.id === habitId);
    setSelectedHabit(habit);
  }, [habits]);

  const handleOpenMenu = useCallback((event, habitId) => {
    event.stopPropagation();
    const habit = habits.find(h => h.id === habitId);
    if (!habit) return;

    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      x: rect.right,
      y: rect.bottom
    });

    setSelectedHabitId(habitId);
    setMenuOpen(true);
  }, [habits]);

  const handleCloseMenu = useCallback(() => {
    setMenuOpen(false);
    setSelectedHabitId(null);
  }, []);

  const handleMenuItemClick = useCallback((action) => {
    const habit = habits.find(h => h.id === selectedHabitId);
    if (!habit) return;

    let updatedHabit;
    switch (action) {
      case 'Highlight':
        updatedHabit = { ...habit, isHighlighted: !habit.isHighlighted };
        break;
      case 'Recurring':
        updatedHabit = { ...habit, isRecurring: !habit.isRecurring };
        break;
      case 'Priority':
        updatedHabit = { ...habit, priority: !habit.priority };
        break;
      case 'Set Deadline':
        updatedHabit = { ...habit, deadline: new Date().toISOString() };
        break;
      case 'Set Reminder':
        updatedHabit = { ...habit, reminder: new Date().toISOString() };
        break;
      case 'Delete':
        onDelete(selectedHabitId);
        break;
      default:
        console.log(`Action ${action} not implemented`);
        return;
    }

    if (updatedHabit) {
      onUpdate(updatedHabit);
    }

    handleCloseMenu();
  }, [selectedHabitId, habits, onUpdate, onDelete, handleCloseMenu]);

  const menuItems = [
    { icon: Star, label: 'Highlight', onClick: () => handleMenuItemClick('Highlight') },
    { icon: Repeat, label: 'Recurring', onClick: () => handleMenuItemClick('Recurring') },
    { icon: Flag, label: 'Priority', onClick: () => handleMenuItemClick('Priority') },
    { icon: Calendar, label: 'Set Deadline', onClick: () => handleMenuItemClick('Set Deadline') },
    { icon: Lock, label: 'Private/Public', onClick: () => handleMenuItemClick('Private/Public') },
    { icon: Palette, label: 'Color', onClick: () => handleMenuItemClick('Color') },
    { icon: AlarmClock, label: 'Set Reminder', onClick: () => handleMenuItemClick('Set Reminder') },
    { icon: Trash, label: 'Delete', onClick: () => handleMenuItemClick('Delete') },
  ];

  return (
    <>
      <List
        title="Habits"
        items={habits}
        renderItem={(habit) => (
          <div id={`habit-${habit.id}`} key={habit.id}>
            <HabitCard
              habit={habit}
              onToggle={onToggle}
              onOpenMenu={(event) => handleOpenMenu(event, habit.id)}
              onCardClick={handleCardClick}
            />
          </div>
        )}
      />
      {selectedHabit && (
        <HabitCardBack
          habit={selectedHabit}
          onClose={() => setSelectedHabit(null)}
        />
      )}
      <ContextualMenu
        isOpen={menuOpen}
        onClose={handleCloseMenu}
        position={menuPosition}
        items={menuItems}
      />
      <AddHabitBox
        onToggle={onToggle}
        onOpenMenu={(event) => handleOpenMenu(event)}
        onCardClick={handleCardClick}
      />
    </>
  );
};

export default HabitsList;

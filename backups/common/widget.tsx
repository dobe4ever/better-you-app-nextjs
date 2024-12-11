// components/common/widget.tsx
'use client'

import React from 'react'
import { useState } from 'react'
import { ReactNode} from 'react'
import { ChevronRight, Bot, Store, GraduationCap, LoaderPinwheel, Trophy, X, TrendingUp } from 'lucide-react'
import { Home, HabitsPage, AnalyticsPage } from '../../components/pages'

interface WidgetProps {
    title: string
    page: React.ComponentType
    children: ReactNode
    onClick: () => void
  }
  
// commmon Widget component
export function Widget({ title, children, onClick }: WidgetProps) {
    return (
      <div 
        className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
        {children}
      </div>
    )
  }
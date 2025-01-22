// components2/widegets-grid/WidgetsGrid.tsx
'use client'

import { PromoCard } from './promo-card/PromoCard'
import { HabitsWidget } from './habits/HabitsWidget'
import { TodosWidget } from './todos/TodosWdiget'
import { CheckinWidget } from './checkin/CheckinWidget'
import { AnalyticsWidget } from './analytics/AnalyticsWdiget'
import { WheelWidget } from './wheel/WheelWdiget'
import { BadgesWidget } from './badges/BadgesWdiget'
import { AdsWidget } from './ads/AdsWidget'
import { ShopWidget } from './shop/ShopWdiget'
import { CoursesWidget } from './courses/CoursesWdiget'

interface WidgetsGridProps {
  onHabitsClick: () => void
  onTodosClick: () => void
  onCheckinClick: () => void
  onAnalyticsClick: () => void
  onWheelClick: () => void
  onBadgesClick: () => void
  onAdsClick: () => void
  onShopClick: () => void
  onCoursesClick: () => void
}

export function WidgetsGrid({ onHabitsClick, onTodosClick, onCheckinClick, onAnalyticsClick, onWheelClick, onBadgesClick, onAdsClick, onShopClick, onCoursesClick }: WidgetsGridProps) {
  return (
    <div className="flex flex-col overflow-hidden w-full bg-white p-2 gap-2 rounded-t-xl">
      <PromoCard />
      <HabitsWidget onHabitsClick={onHabitsClick} />
      <TodosWidget onTodosClick={onTodosClick} />
      <div className="grid grid-cols-2 gap-2">
        <div><CheckinWidget onCheckinClick={onCheckinClick} /></div>
        <div><AnalyticsWidget onAnalyticsClick={onAnalyticsClick} /></div>
        <div><WheelWidget onWheelClick={onWheelClick} /></div>
        <div><BadgesWidget onBadgesClick={onBadgesClick} /></div>
      </div>
      <AdsWidget />
      <div className="grid grid-cols-2 gap-2">
        <div><ShopWidget onShopClick={onShopClick} /></div>
        <div><CoursesWidget onCoursesClick={onCoursesClick} /></div>
      </div>
    </div>
  )
}

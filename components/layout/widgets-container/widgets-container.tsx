import { AnnouncementWidget } from './announcement-widget/announcement-widget'
import { HabitsWidget } from './habits-widget/habits-widget'
import { TodosWidget } from './todos-widget/todos-widget'
import { SuccessCoachWidget } from './success-coach-widget/success-coach-widget'
import { AnalyticsWidget } from './analytics-widget/analytics-widget'
import { LifeScoreWidget } from './life-score-widget/life-score-widget'
import { BadgesWidget } from './badges-widget/badges-widget'
import { AdsCarouselWidget } from './ads-widget/ads-carousel-widget'
import { ShopCoursesWidget } from './shop-courses-widget/shop-courses-widget'
import { TwoColumnWidget } from '../../common/two-column-widget'

export function WidgetsContainer() {
  return (
    // <div className="bg-gray-200 rounded-t-2xl mt-4 p-4 space-y-4 flex-grow">
    <div className="flex flex-col overflow-hidden w-full bg-white pt- p-4 space-y-2 rounded-t-xl">
      <AnnouncementWidget />
      <HabitsWidget />
      <TodosWidget />
      <TwoColumnWidget
        leftWidget={<SuccessCoachWidget />}
        rightWidget={<AnalyticsWidget />}
      />
      <TwoColumnWidget
        leftWidget={<LifeScoreWidget />}
        rightWidget={<BadgesWidget />}
      />
      <AdsCarouselWidget />
      <ShopCoursesWidget />
    </div>
  )
}


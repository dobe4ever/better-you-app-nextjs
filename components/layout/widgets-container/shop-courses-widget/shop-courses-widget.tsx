// components/layout/widgets-container/shop-courses-widget/shop-courses-widget.tsx
import { Store, GraduationCap } from 'lucide-react'
import { Widget } from '../../../common/widget'
import { TwoColumnWidget } from '../../../common/two-column-widget'

function ShopWidget() {
  return (
    <Widget title="Shop" className="flex flex-col gap-2">
      <Store size={32} />
      <div className="text-sm text-gray-600 mt-2">
        Explore products and services all in one place
      </div>
    </Widget>
  )
}

function CoursesWidget() {
  return (
    <Widget title="Courses" className="flex flex-col gap-2">
      <GraduationCap size={32} />
      <div className="text-sm text-gray-600 mt-2">
        Explore curated learning paths and track your educational journey in one place
      </div>
    </Widget>
  )
}

export function ShopCoursesWidget() {
  return (
    <TwoColumnWidget
      leftWidget={<ShopWidget />}
      rightWidget={<CoursesWidget />}
    />
  )
}
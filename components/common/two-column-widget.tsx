// components/common/two-column-widget.tsx
import { ReactNode } from 'react'

interface TwoColumnWidgetProps {
  leftWidget: ReactNode
  rightWidget: ReactNode
}

export function TwoColumnWidget({ leftWidget, rightWidget }: TwoColumnWidgetProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>{leftWidget}</div>
      <div>{rightWidget}</div>
    </div>
  )
}
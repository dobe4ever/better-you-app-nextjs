// components2/home/widegets-grid/shop/ShopWdiget.tsx

import { Widget } from '@/components2/ui/widget'
import { Store } from 'lucide-react'

// ShopWidget component
export function ShopWidget({ onShopClick }: { onShopClick: () => void }) {
    return (
        <Widget title="Shop" onClick={onShopClick} className="flex flex-col gap-2">
        <Store size={32} />
        <div className="text-description-card mt-2">
            Explore products and services all in one place
        </div>
        </Widget>
    )
}
  
// components2/home/widegets-grid/shop/ShopWdiget.tsx

import { Widget } from '@/components/ui/widget'
import { Store } from 'lucide-react'

// ShopWidget component
// export function ShopWidget({ onShopClick }: { onShopClick: () => void }) {
//     return (
//         <Widget title="Shop" onClick={onShopClick} className="flex flex-col gap-2">
//         <Store size={32} />
//         <div className="text-description-card mt-2">
//             Explore products and services all in one place
//         </div>
//         </Widget>
//     )
// }


export function ShopWidget({ onShopClick }: { onShopClick: () => void }) {
    return (
      <Widget title="Shop" onClick={onShopClick} className="flex flex-col gap-4 aspect-[1/1]">
          <div className="flex flex-col items-center">
          <Store className="w-8 h-8 text-orange-400 mt-2" />
          <span className="text-2xl font-bold mb-2">98 Items</span>
          <span className="text-description-card">Explore products and services all in one place</span>
          </div>
      </Widget>
    )
  }
  
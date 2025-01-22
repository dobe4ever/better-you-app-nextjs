// components/layout/header/search-btn.tsx
import { Button } from '@/old/components/ui/button'
import { Search } from 'lucide-react'

export function SearchBtn() {
  return (
    <div className="[&_svg]:size-6">
      <Button variant="ghost" size="icon" className="relative text-white" onClick={() => console.log('Search clicked')}>
        <Search />
      </Button>
    </div>
  )
}

// components/layout/top-bar/search-btn.tsx
'use client'

import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SearchBtn() {
  return (
    <Button variant="ghost" size="icon" className="relative text-white" onClick={() => console.log('Search clicked')}>
      <Search />
    </Button>
  )
}


import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function Announcement() {
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  if (!showAnnouncement) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card className="border-orange-100 bg-gradient-to-r from-orange-50 to-white">
        <CardContent className="flex items-center justify-between p-4">
          <p className="text-sm">Ready to crash some habits?</p>
          <Button variant="ghost" size="icon" onClick={() => setShowAnnouncement(false)}>
            <X className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
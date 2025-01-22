// components/dropdown-menu.tsx
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Plus } from 'lucide-react'
  import { Button } from "@/components/ui/button"
  
  interface AddMenuProps {
    onSelect: (option: string) => void
  }
  
  export function AddMenu({ onSelect }: AddMenuProps) {
    return (
      // <div className="text-title-card">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="lg" className="w-full justify-start border">
            <Plus className="h-4 w-4 mr-2" />
            Add a card
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onSelect("task")}>
            Add Task
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelect("note")}>
            Add Note
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelect("reminder")}>
            Add Reminder
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      // </div>
    )
  }
  
  
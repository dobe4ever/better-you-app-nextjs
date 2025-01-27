// components/widegets-grid/habits/AddMenu.tsx
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
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="lg" className="rounded-3xl w-full justify-start">
        <Plus className="h-4 w-4 mr-2" />
        Add Habit
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem onClick={() => onSelect("task")}>
        Add Habit
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onSelect("note")}>
        Add Routine
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onSelect("reminder")}>
        Ask Your Coach
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)
}

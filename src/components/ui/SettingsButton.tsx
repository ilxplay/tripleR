import { Button } from "@/components/ui/Button"
import { Settings } from "lucide-react"

export default function Component() {
  return (
    <Button variant="outline" className="flex items-center space-x-2">
      <Settings className="h-4 w-4" />
      <span className="hidden sm:inline">Settings</span>
    </Button>
  )
}
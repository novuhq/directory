"use client"

import { Button } from "@/components/ui/button"
import { getNotificationCount } from "@/hooks/novuHooks"
import {
  ChevronDown,
  Search,
  ExternalLink,
  Inbox,
  LayoutGrid,
  Box,
  Layers,
  MoreHorizontal,
  Rocket,
  Settings
} from "lucide-react"
import Link from "next/link"



export function Sidebar() {
  return (
    <div className="w-56 border-r border-zinc-200 bg-[lch(96.667%_0_282.863/1)] flex flex-col h-full overflow-y-auto">
      <div className="p-3 flex items-center gap-2">
        <div className="h-6 w-6 rounded bg-zinc-100 flex items-center justify-center">
          <Box className="h-4 w-4 text-zinc-900" />
        </div>
        <span className="font-medium text-zinc-900">Vast.craft</span>
        <ChevronDown className="h-4 w-4 ml-auto text-zinc-500" />
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-zinc-900">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-zinc-900">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="px-2 mt-2 space-y-1">
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm h-10 bg-zinc-100 text-zinc-900">
            <Inbox className="h-4 w-4" />
            <span>Inbox</span>
          </Button>
        </Link>

        <Button variant="ghost" className="w-full justify-start gap-2 text-sm h-10 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 blur-[2px]">
          <LayoutGrid className="h-4 w-4" />
          <span>My issues</span>
        </Button>
      </div>

      <div className="mt-6 px-3">
        <div className="flex items-center">
          <span className="text-sm text-zinc-500">Workspace</span>
          <ChevronDown className="h-4 w-4 ml-1 text-zinc-400" />
        </div>
        
        <div className="mt-2 space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm h-10 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 blur-[2px]">
            <Rocket className="h-4 w-4" />
            <span>Initiatives</span>
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-2 text-sm h-10 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 blur-[2px]">
            <Box className="h-4 w-4" />
            <span>Projects</span>
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-2 text-sm h-10 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 blur-[2px]">
            <Layers className="h-4 w-4" />
            <span>Views</span>
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-2 text-sm h-10 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 blur-[2px]">
            <MoreHorizontal className="h-4 w-4" />
            <span>More</span>
          </Button>
        </div>
      </div>

      <div className="mt-auto px-3 pb-3">
        <Link href="/preferences">
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm h-10 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100">
            <Settings className="h-4 w-4" />
            <span>Preferences</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}

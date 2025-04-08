"use client"

import { Sidebar } from "@/components/sidebar"
import { IssueDetailSkeleton } from "@/components/issue-detail-skeleton"
import { NovuInbox } from "@/components/novuInbox"

export function LinearApp() {

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar/>

      {/* Middle Panel - Inbox List */}
      <div className="w-[400px] border-r flex flex-col overflow-hidden">
        <NovuInbox />
      </div>

      {/* Right Panel - Issue Details or Skeleton */}
      <div className="flex-1 overflow-auto">
        <IssueDetailSkeleton />
      </div>
    </div>
  )
}

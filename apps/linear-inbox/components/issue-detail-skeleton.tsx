import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  showAnimation?: boolean
}

export function IssueDetailSkeleton({ className, showAnimation = true, ...props }: SkeletonProps) {
  return (
    <div 
      className={cn("h-full flex flex-col bg-background", className)} 
      role="status"
      aria-label="Loading issue details"
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-5 w-16 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-24 rounded" />
          <Skeleton className="h-8 w-20 rounded" />
          <Skeleton className="h-8 w-32 rounded" />
        </div>
      </div>

      {/* Main content area with side panel */}
      <div className="flex-1 flex">
        {/* Main content */}
        <div className="flex-1 overflow-auto p-4 pl-8 space-y-6">
          {/* Description Block */}
          <div className="space-y-4 bg-background rounded-lg">
            <div className="space-y-2">
              <Skeleton className="h-8 w-3/4 rounded" />
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-5/6 rounded" />
            </div>

            {/* Requirements and Technical Design */}
            <div className="space-y-4">
              <div>
                <Skeleton className="h-5 w-24 mb-2 rounded" />
                <div className="space-y-1">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-4 w-full rounded" />
                  ))}
                </div>
              </div>

              <div>
                <Skeleton className="h-5 w-32 mb-2 rounded" />
                <div className="space-y-1">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-4 w-full rounded" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-border" />

          {/* Activity */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-16 rounded" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-24 rounded" />
                <div className="flex items-center -space-x-4">
                  <Skeleton className="h-7 w-7 rounded-full" />
                  <Skeleton className="h-7 w-7 rounded-full" />
                  <Skeleton className="h-7 w-7 rounded-full" />
                </div>
              </div>
            </div>

            <div className="space-y-4 pl-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-3 w-3/4 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comment Box */}
          <div className="relative mt-6">
            <Skeleton className="h-[100px] w-full rounded" />
            <div className="absolute bottom-2 right-2 flex gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="w-64 border-l p-4 space-y-3">
          {/* Properties Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-16" />
              <div className="flex items-center gap-1">
                <Skeleton className="h-6 w-6 rounded" />
                <Skeleton className="h-6 w-6 rounded" />
                <Skeleton className="h-6 w-6 rounded" />
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-24 rounded" />
          </div>

          {/* Priority */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-28 rounded" />
          </div>

          {/* Assignee */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-20 rounded" />
          </div>

          {/* Estimate */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-28 rounded" />
          </div>

          {/* Labels Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="h-8 w-24 rounded" />
          </div>

          {/* Cycle Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-10" />
            </div>
            <Skeleton className="h-8 w-28 rounded" />
          </div>

          {/* Project Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-14" />
            </div>
            <Skeleton className="h-8 w-32 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

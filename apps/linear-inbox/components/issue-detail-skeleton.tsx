import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  showAnimation?: boolean
}

export function IssueDetailSkeleton({ className, showAnimation = true, ...props }: SkeletonProps) {
  return (
    <div 
      className={cn("h-full flex flex-col", className)} 
      role="status"
      aria-label="Loading issue details"
      {...props}
    >
      {/* Header */}
      <div className="flex items-center p-3 border-b">
        <Skeleton className="h-6 w-32 bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <Skeleton className="h-8 w-3/4 rounded" />
          <Skeleton className="h-4 w-1/2 rounded" />
        </div>

        {/* Status bar */}
        <div className="flex items-center gap-2 flex-wrap">
          <Skeleton className="h-7 w-20 rounded" />
          <Skeleton className="h-7 w-20 rounded" />
          <Skeleton className="h-7 w-24 rounded" />
        </div>

        {/* Main content */}
        <div className="space-y-4">
          <Skeleton className="h-24 w-full rounded" />
          <Skeleton className="h-24 w-full rounded" />
        </div>

        {/* Activity */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-24 rounded" />
            <Skeleton className="h-6 w-20 rounded" />
          </div>
          <div className="space-y-2">
            {[1, 2].map((i) => (
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
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <Skeleton className="h-9 w-full rounded" />
      </div>
    </div>
  )
}

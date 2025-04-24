"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import type { LucideIcon } from "lucide-react"
import { Check, Calendar, X, MessageSquare, Download, CreditCard, RefreshCw, Eye, Pill, Clock, FileText, DollarSign, Stethoscope } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface NotificationItemProps {
  notification: {
    id: string
    title: string
    description: string
    time: string
    read: boolean
    priority: "high" | "medium" | "low"
    iconName: string
    link: string
    type?: string
  }
}

export function NotificationItem({ notification }: NotificationItemProps) {
  const { title, description, time, read, priority, iconName, link, type } = notification
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isRead, setIsRead] = useState(read)

  // Get the icon component based on the iconName
  const getIconComponent = (name: string): LucideIcon => {
    switch (name) {
      case "MessageSquare":
        return MessageSquare
      case "FileText":
        return FileText
      case "DollarSign":
        return DollarSign
      case "Pill":
        return Pill
      case "Calendar":
        return Calendar
      case "Stethoscope":
        return Stethoscope
      default:
        return MessageSquare // Default fallback
    }
  }

  const Icon = getIconComponent(iconName)

  // Determine notification type if not explicitly provided
  const notificationType =
    type || link.includes("messages")
      ? "message"
      : link.includes("appointments")
        ? "appointment"
        : link.includes("prescriptions")
          ? "prescription"
          : link.includes("medical-records")
            ? "record"
            : link.includes("billing")
              ? "billing"
              : link.includes("preventive-care")
                ? "checkup"
                : "other"

  // Determine background color based on read status and priority
  const getBgColor = () => {
    if (!isRead) {
      return "bg-sky-50"
    }
    return ""
  }

  // Determine priority indicator color
  const getPriorityColor = () => {
    switch (priority) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-amber-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-sky-500"
    }
  }

  // Handle marking as read
  const handleMarkAsRead = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsRead(true)
    // In a real app, this would call an API to update the read status
    console.log(`Marked notification ${notification.id} as read`)
  }

  // Render quick action buttons based on notification type
  const renderQuickActions = () => {
    switch (notificationType) {
      case "appointment":
        return (
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:text-green-800"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log(`Confirmed appointment ${notification.id}`)
                    }}
                  >
                    <Check className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Confirm</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Confirm appointment</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log(`Reschedule appointment ${notification.id}`)
                    }}
                  >
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Reschedule</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reschedule appointment</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 bg-red-50 text-red-700 border-red-200 hover:bg-red-100 hover:text-red-800"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log(`Canceled appointment ${notification.id}`)
                    }}
                  >
                    <X className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Cancel</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Cancel appointment</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )

      case "message":
        return (
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log(`Reply to message ${notification.id}`)
                    }}
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Reply</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reply to message</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {!isRead && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant="outline" className="h-8" onClick={handleMarkAsRead}>
                      <Check className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">Mark as read</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mark as read</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        )

      case "record":
        return (
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log(`View record ${notification.id}`)
                    }}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">View</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View record</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log(`Download record ${notification.id}`)
                    }}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Download</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download record</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )

      case "billing":
        return (
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100 hover:text-sky-800"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log(`Pay invoice ${notification.id}`)
                    }}
                  >
                    <CreditCard className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Pay now</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Pay invoice</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log(`View invoice ${notification.id}`)
                    }}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">View</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View invoice</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )

      case "prescription":
        return (
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log(`Refill prescription ${notification.id}`)
                    }}
                  >
                    <RefreshCw className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Refill</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Request refill</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log(`View prescription ${notification.id}`)
                    }}
                  >
                    <Pill className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Details</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View prescription details</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )

      case "checkup":
        return (
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100 hover:text-sky-800"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log(`Schedule checkup ${notification.id}`)
                    }}
                  >
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Schedule</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Schedule appointment</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log(`Remind later for checkup ${notification.id}`)
                    }}
                  >
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Remind later</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Remind me later</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )

      default:
        return (
          <div className="flex gap-2">
            {!isRead && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant="outline" className="h-8" onClick={handleMarkAsRead}>
                      <Check className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">Mark as read</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mark as read</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        )
    }
  }

  return (
    <Link href={link} className="block">
      <div
        className={cn("flex flex-col gap-4 p-4 hover:bg-gray-50 transition-colors border-0", getBgColor())}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          if (!isRead) {
            setIsRead(true)
            // In a real app, this would call an API to update the read status
          }
        }}
      >
        <div className="flex items-start gap-4">
          <div className="relative">
            <div className={cn("p-2 rounded-full bg-sky-100", !isRead && "bg-sky-200")}>
              <Icon className="h-5 w-5 text-sky-600" />
            </div>
            {!isRead && (
              <div
                className={cn(
                  "absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-white",
                  getPriorityColor(),
                )}
              />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h4 className={cn("font-medium text-sm", !isRead && "text-sky-700")}>{title}</h4>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{time}</span>
            </div>
            <p
              className={cn(
                "text-sm mt-1",
                isExpanded ? "" : "line-clamp-2",
                isRead ? "text-muted-foreground" : "text-gray-700",
              )}
            >
              {description}
            </p>
            {description.length > 120 && (
              <button
                className="text-xs text-sky-600 mt-1 hover:underline"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIsExpanded(!isExpanded)
                }}
              >
                {isExpanded ? "Show less" : "Show more"}
              </button>
            )}
          </div>
        </div>

        {/* Quick action buttons */}
        <div
          className={cn(
            "ml-9 transition-opacity duration-200",
            isHovered || isExpanded ? "opacity-100" : "opacity-0 sm:opacity-0",
          )}
        >
          {renderQuickActions()}
        </div>
      </div>
    </Link>
  )
}





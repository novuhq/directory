"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageSquare, FileText, Bell, DollarSign, Pill, Calendar, Stethoscope, ChevronRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { NotificationItem } from "@/components/notification-item"

// Mock notification data
const notifications = {
  messages: [
    {
      id: "msg-1",
      title: "Message from Dr. Emily Johnson",
      description: "Your lab results are in. Everything looks good, but I'd like to discuss your vitamin D levels.",
      time: "2 hours ago",
      read: false,
      priority: "high",
      icon: MessageSquare,
      link: "/dashboard/messages",
      type: "message",
    },
    {
      id: "msg-2",
      title: "Message from Lab Results",
      description: "Your recent blood work results are now available.",
      time: "Yesterday",
      read: false,
      priority: "medium",
      icon: MessageSquare,
      link: "/dashboard/messages",
      type: "message",
    },
  ],
  billing: [
    {
      id: "bill-1",
      title: "May Invoice Available",
      description: "Your monthly membership invoice is ready to view.",
      time: "1 day ago",
      read: false,
      priority: "medium",
      icon: DollarSign,
      link: "/dashboard/billing",
      type: "billing",
    },
    {
      id: "bill-2",
      title: "Payment Confirmation",
      description: "Your payment of $39.00 for Family Plan was processed successfully.",
      time: "1 week ago",
      read: true,
      priority: "low",
      icon: DollarSign,
      link: "/dashboard/billing",
      type: "billing",
    },
  ],
  prescriptions: [
    {
      id: "rx-1",
      title: "Prescription Refill Reminder",
      description: "Your Lisinopril prescription needs to be refilled in 5 days.",
      time: "Today",
      read: false,
      priority: "high",
      icon: Pill,
      link: "/dashboard/prescriptions",
      type: "prescription",
    },
    {
      id: "rx-2",
      title: "Prescription Ready for Pickup",
      description: "Your prescription for Metformin is ready at Downtown Pharmacy.",
      time: "3 days ago",
      read: true,
      priority: "medium",
      icon: Pill,
      link: "/dashboard/prescriptions",
      type: "prescription",
    },
  ],
  records: [
    {
      id: "rec-1",
      title: "New Lab Results Available",
      description: "Your blood test results from April 10 are now available to view.",
      time: "2 days ago",
      read: false,
      priority: "medium",
      icon: FileText,
      link: "/dashboard/medical-records",
      type: "record",
    },
    {
      id: "rec-2",
      title: "X-Ray Report Available",
      description: "Your chest X-ray report from Dr. Robert Chen is ready to view.",
      time: "1 week ago",
      read: true,
      priority: "medium",
      icon: FileText,
      link: "/dashboard/medical-records",
      type: "record",
    },
  ],
  appointments: [
    {
      id: "apt-1",
      title: "Appointment Tomorrow",
      description: "Reminder: You have a virtual appointment with Dr. Emily Johnson at 10:00 AM tomorrow.",
      time: "Today",
      read: false,
      priority: "high",
      icon: Calendar,
      link: "/dashboard/appointments",
      type: "appointment",
    },
    {
      id: "apt-2",
      title: "Appointment Confirmation",
      description: "Your appointment with Dr. Michael Chen on May 15 at 2:30 PM has been confirmed.",
      time: "2 days ago",
      read: true,
      priority: "medium",
      icon: Calendar,
      link: "/dashboard/appointments",
      type: "appointment",
    },
  ],
  checkups: [
    {
      id: "chk-1",
      title: "Annual Physical Due Soon",
      description: "It's time to schedule your annual physical exam. Your last one was 9 months ago.",
      time: "1 week ago",
      read: false,
      priority: "medium",
      icon: Stethoscope,
      link: "/dashboard/preventive-care",
      type: "checkup",
    },
    {
      id: "chk-2",
      title: "Dental Cleaning Overdue",
      description: "Your dental cleaning is overdue by 1 month. Please schedule an appointment soon.",
      time: "2 weeks ago",
      read: true,
      priority: "high",
      icon: Stethoscope,
      link: "/dashboard/preventive-care",
      type: "checkup",
    },
  ],
}

export function NotificationInbox() {
  const [activeTab, setActiveTab] = useState("all")

  // Count unread notifications
  const unreadCounts = {
    all: Object.values(notifications)
      .flat()
      .filter((n) => !n.read).length,
    messages: notifications.messages.filter((n) => !n.read).length,
    billing: notifications.billing.filter((n) => !n.read).length,
    prescriptions: notifications.prescriptions.filter((n) => !n.read).length,
    records: notifications.records.filter((n) => !n.read).length,
    appointments: notifications.appointments.filter((n) => !n.read).length,
    checkups: notifications.checkups.filter((n) => !n.read).length,
  }

  // Get all notifications for "all" tab
  const allNotifications = Object.values(notifications)
    .flat()
    .sort((a, b) => {
      // Sort by read status first (unread first)
      if (a.read !== b.read) return a.read ? 1 : -1

      // Then sort by priority
      const priorityOrder = { high: 0, medium: 1, low: 2 }
      return priorityOrder[a.priority] - priorityOrder[b.priority]
    })

  return (
    <Card className="border-sky-100">
      <CardHeader className="bg-gradient-to-r from-sky-50 to-white pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-sky-600" />
            <CardTitle>Your Inbox</CardTitle>
            {unreadCounts.all > 0 && <Badge className="bg-sky-600 hover:bg-sky-700">{unreadCounts.all} new</Badge>}
          </div>
          <Link href="/dashboard/notifications/preferences">
            <Button variant="ghost" size="sm" className="text-sky-600">
              Manage preferences
            </Button>
          </Link>
        </div>
        <CardDescription>Stay updated with your healthcare communications</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="border-b overflow-x-auto">
            <TabsList className="w-full justify-start h-auto p-0 bg-transparent">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
              >
                All
                {unreadCounts.all > 0 && (
                  <Badge className="ml-2 bg-sky-100 text-sky-700 hover:bg-sky-100">{unreadCounts.all}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="messages"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
              >
                Messages
                {unreadCounts.messages > 0 && (
                  <Badge className="ml-2 bg-sky-100 text-sky-700 hover:bg-sky-100">{unreadCounts.messages}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="billing"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
              >
                Billing
                {unreadCounts.billing > 0 && (
                  <Badge className="ml-2 bg-sky-100 text-sky-700 hover:bg-sky-100">{unreadCounts.billing}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="prescriptions"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
              >
                Prescriptions
                {unreadCounts.prescriptions > 0 && (
                  <Badge className="ml-2 bg-sky-100 text-sky-700 hover:bg-sky-100">{unreadCounts.prescriptions}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="records"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
              >
                Records
                {unreadCounts.records > 0 && (
                  <Badge className="ml-2 bg-sky-100 text-sky-700 hover:bg-sky-100">{unreadCounts.records}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="appointments"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
              >
                Appointments
                {unreadCounts.appointments > 0 && (
                  <Badge className="ml-2 bg-sky-100 text-sky-700 hover:bg-sky-100">{unreadCounts.appointments}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="checkups"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
              >
                Checkups
                {unreadCounts.checkups > 0 && (
                  <Badge className="ml-2 bg-sky-100 text-sky-700 hover:bg-sky-100">{unreadCounts.checkups}</Badge>
                )}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="m-0">
            <div className="divide-y">
              {allNotifications.slice(0, 5).map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="m-0">
            <div className="divide-y">
              {notifications.messages.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="billing" className="m-0">
            <div className="divide-y">
              {notifications.billing.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="prescriptions" className="m-0">
            <div className="divide-y">
              {notifications.prescriptions.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="records" className="m-0">
            <div className="divide-y">
              {notifications.records.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="appointments" className="m-0">
            <div className="divide-y">
              {notifications.appointments.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="checkups" className="m-0">
            <div className="divide-y">
              {notifications.checkups.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="border-t px-6 py-4 flex justify-between">
        <Button variant="outline" size="sm">
          Mark all as read
        </Button>
        <Link href="/dashboard/notifications">
          <Button variant="ghost" size="sm" className="text-sky-600 gap-1">
            View all notifications
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

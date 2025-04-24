import type { Metadata } from "next"
import Link from "next/link"
import { Filter, Search, Settings, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PatientDashboardLayout } from "@/components/patient-dashboard-layout"
import { NotificationItem } from "@/components/notification-item"

// Replace this line:
// import { notifications } from "@/lib/notification-data"

// With this:
import { MessageSquare, FileText, DollarSign, Pill, Calendar, Stethoscope } from "lucide-react"

// Mock notification data
const notifications = {
  messages: [
    {
      id: "msg-1",
      title: "Message from Dr. Emily Johnson",
      description: "Your lab results are in. Everything looks good, but I'd like to discuss your vitamin D levels.",
      time: "2 hours ago",
      read: false,
      priority: "high" as const,
      iconName: "MessageSquare",
      link: "/dashboard/messages",
      type: "message",
    },
    {
      id: "msg-2",
      title: "Message from Lab Results",
      description: "Your recent blood work results are now available.",
      time: "Yesterday",
      read: false,
      priority: "medium" as const,
      iconName: "MessageSquare",
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
      priority: "medium" as const,
      iconName: "DollarSign",
      link: "/dashboard/billing",
      type: "billing",
    },
    {
      id: "bill-2",
      title: "Payment Confirmation",
      description: "Your payment of $39.00 for Family Plan was processed successfully.",
      time: "1 week ago",
      read: true,
      priority: "low" as const,
      iconName: "DollarSign",
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
      priority: "high" as const,
      iconName: "Pill",
      link: "/dashboard/prescriptions",
      type: "prescription",
    },
    {
      id: "rx-2",
      title: "Prescription Ready for Pickup",
      description: "Your prescription for Metformin is ready at Downtown Pharmacy.",
      time: "3 days ago",
      read: true,
      priority: "medium" as const,
      iconName: "Pill",
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
      priority: "medium" as const,
      iconName: "FileText",
      link: "/dashboard/medical-records",
      type: "record",
    },
    {
      id: "rec-2",
      title: "X-Ray Report Available",
      description: "Your chest X-ray report from Dr. Robert Chen is ready to view.",
      time: "1 week ago",
      read: true,
      priority: "medium" as const,
      iconName: "FileText",
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
      priority: "high" as const,
      iconName: "Calendar",
      link: "/dashboard/appointments",
      type: "appointment",
    },
    {
      id: "apt-2",
      title: "Appointment Confirmation",
      description: "Your appointment with Dr. Michael Chen on May 15 at 2:30 PM has been confirmed.",
      time: "2 days ago",
      read: true,
      priority: "medium" as const,
      iconName: "Calendar",
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
      priority: "medium" as const,
      iconName: "Stethoscope",
      link: "/dashboard/preventive-care",
      type: "checkup",
    },
    {
      id: "chk-2",
      title: "Dental Cleaning Overdue",
      description: "Your dental cleaning is overdue by 1 month. Please schedule an appointment soon.",
      time: "2 weeks ago",
      read: true,
      priority: "high" as const,
      iconName: "Stethoscope",
      link: "/dashboard/preventive-care",
      type: "checkup",
    },
  ],
}

export const metadata: Metadata = {
  title: "Notifications | OneHealth",
  description: "View and manage your healthcare notifications",
}

export default function NotificationsPage() {
  // Get all notifications for "all" tab
  const allNotifications = Object.values(notifications)
    .flat()
    .sort((a, b) => {
      // Sort by read status first (unread first)
      if (a.read !== b.read) return a.read ? 1 : -1

      // Then sort by priority
      const priorityOrder = { high: 0, medium: 1, low: 2 }
      return priorityOrder[a.priority as keyof typeof priorityOrder] - priorityOrder[b.priority as keyof typeof priorityOrder]
    })

  return (
    <PatientDashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
            <p className="text-muted-foreground">View and manage your healthcare notifications</p>
          </div>
          <div className="flex gap-2">
            <Link href="/dashboard/notifications/preferences">
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Preferences
              </Button>
            </Link>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Mark all as read
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="border-0">
              <CardContent className="pt-5">
                <Tabs defaultValue="all" className="w-full">
                  <div className="border-b overflow-x-auto">
                    <TabsList className="w-full justify-start h-auto bg-transparent p-0">
                      <TabsTrigger
                        value="all"
                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
                      >
                        All
                      </TabsTrigger>
                      <TabsTrigger
                        value="unread"
                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
                      >
                        Unread
                      </TabsTrigger>
                      <TabsTrigger
                        value="messages"
                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
                      >
                        Messages
                      </TabsTrigger>
                      <TabsTrigger
                        value="billing"
                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
                      >
                        Billing
                      </TabsTrigger>
                      <TabsTrigger
                        value="prescriptions"
                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
                      >
                        Prescriptions
                      </TabsTrigger>
                      <TabsTrigger
                        value="records"
                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
                      >
                        Records
                      </TabsTrigger>
                      <TabsTrigger
                        value="appointments"
                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
                      >
                        Appointments
                      </TabsTrigger>
                      <TabsTrigger
                        value="checkups"
                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-sky-600 data-[state=active]:text-sky-700 rounded-none px-4 py-3"
                      >
                        Checkups
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="all" className="m-0">
                    <div>
                      {allNotifications.map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="unread" className="m-0">
                    <div>
                      {allNotifications
                        .filter((n) => !n.read)
                        .map((notification) => (
                          <NotificationItem key={notification.id} notification={notification} />
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="messages" className="m-0">
                    <div>
                      {notifications.messages.map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="billing" className="m-0">
                    <div>
                      {notifications.billing.map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="prescriptions" className="m-0">
                    <div>
                      {notifications.prescriptions.map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="records" className="m-0">
                    <div>
                      {notifications.records.map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="appointments" className="m-0">
                    <div>
                      {notifications.appointments.map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="checkups" className="m-0">
                    <div>
                      {notifications.checkups.map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PatientDashboardLayout>
  )
}

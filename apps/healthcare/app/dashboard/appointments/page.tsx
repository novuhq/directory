import type { Metadata } from "next"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PatientDashboardLayout } from "@/components/patient-dashboard-layout"
import { AppointmentCard } from "@/components/appointment-card"

export const metadata: Metadata = {
  title: "Appointments | OneHealth",
  description: "Manage your healthcare appointments",
}

export default function AppointmentsPage() {
  return (
    <PatientDashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
            <p className="text-muted-foreground">Schedule and manage your healthcare appointments</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Book appointment
          </Button>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="canceled">Canceled</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="text-sm font-medium">May 2025</div>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>You have 3 upcoming appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <AppointmentCard
                    type="virtual"
                    doctor="Dr. Emily Johnson"
                    specialty="Primary Care"
                    date="Tomorrow, 10:00 AM"
                    duration="30 min"
                  />
                  <AppointmentCard
                    type="in-person"
                    doctor="Dr. Michael Chen"
                    specialty="Dermatology"
                    date="May 15, 2:30 PM"
                    duration="45 min"
                    location="Downtown Clinic"
                  />
                  <AppointmentCard
                    type="virtual"
                    doctor="Dr. Sarah Williams"
                    specialty="Nutrition Consultation"
                    date="May 22, 11:15 AM"
                    duration="60 min"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="past">
            <Card>
              <CardHeader>
                <CardTitle>Past Appointments</CardTitle>
                <CardDescription>Your appointment history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <AppointmentCard
                    type="virtual"
                    doctor="Dr. Emily Johnson"
                    specialty="Primary Care"
                    date="Apr 10, 10:00 AM"
                    duration="30 min"
                  />
                  <AppointmentCard
                    type="in-person"
                    doctor="Dr. Robert Chen"
                    specialty="Orthopedics"
                    date="Mar 22, 3:00 PM"
                    duration="45 min"
                    location="Uptown Clinic"
                  />
                  <AppointmentCard
                    type="in-person"
                    doctor="Dr. Lisa Wong"
                    specialty="Cardiology"
                    date="Feb 15, 9:30 AM"
                    duration="60 min"
                    location="Downtown Clinic"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="canceled">
            <Card>
              <CardHeader>
                <CardTitle>Canceled Appointments</CardTitle>
                <CardDescription>Appointments that were canceled</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <AppointmentCard
                    type="virtual"
                    doctor="Dr. James Wilson"
                    specialty="Mental Health"
                    date="Apr 5, 2:00 PM"
                    duration="45 min"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PatientDashboardLayout>
  )
}

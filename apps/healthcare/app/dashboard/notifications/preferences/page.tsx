import type { Metadata } from "next"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PatientDashboardLayout } from "@/components/patient-dashboard-layout"

export const metadata: Metadata = {
  title: "Notification Preferences | OneHealth",
  description: "Customize your notification settings",
}

export default function NotificationPreferencesPage() {
  return (
    <PatientDashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Notification Preferences</h1>
            <p className="text-muted-foreground">Customize how you receive notifications from OneHealth</p>
          </div>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save preferences
          </Button>
        </div>

        <Tabs defaultValue="notification-types" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="notification-types">Notification Types</TabsTrigger>
            <TabsTrigger value="delivery-methods">Delivery Methods</TabsTrigger>
          </TabsList>

          <TabsContent value="notification-types">
            <Card>
              <CardHeader>
                <CardTitle>Notification Types</CardTitle>
                <CardDescription>Choose which types of notifications you want to receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Messages</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="messages-from-providers" className="font-medium">
                          Messages from providers
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when your healthcare providers send you messages
                        </p>
                      </div>
                      <Switch id="messages-from-providers" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="messages-from-staff" className="font-medium">
                          Messages from staff
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when clinic staff send you messages
                        </p>
                      </div>
                      <Switch id="messages-from-staff" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Billing</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="new-invoices" className="font-medium">
                          New invoices
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when new invoices are available
                        </p>
                      </div>
                      <Switch id="new-invoices" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="payment-confirmations" className="font-medium">
                          Payment confirmations
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when payments are processed
                        </p>
                      </div>
                      <Switch id="payment-confirmations" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="payment-reminders" className="font-medium">
                          Payment reminders
                        </Label>
                        <p className="text-sm text-muted-foreground">Receive reminders when payments are due</p>
                      </div>
                      <Switch id="payment-reminders" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Prescriptions</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="prescription-refills" className="font-medium">
                          Prescription refills
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when prescriptions need to be refilled
                        </p>
                      </div>
                      <Switch id="prescription-refills" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="prescription-ready" className="font-medium">
                          Prescription ready for pickup
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when prescriptions are ready at the pharmacy
                        </p>
                      </div>
                      <Switch id="prescription-ready" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Medical Records</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="new-lab-results" className="font-medium">
                          New lab results
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when new lab results are available
                        </p>
                      </div>
                      <Switch id="new-lab-results" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="new-medical-reports" className="font-medium">
                          New medical reports
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when new medical reports are available
                        </p>
                      </div>
                      <Switch id="new-medical-reports" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Appointments</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="appointment-reminders" className="font-medium">
                          Appointment reminders
                        </Label>
                        <p className="text-sm text-muted-foreground">Receive reminders about upcoming appointments</p>
                      </div>
                      <Switch id="appointment-reminders" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="appointment-confirmations" className="font-medium">
                          Appointment confirmations
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive confirmations when appointments are scheduled
                        </p>
                      </div>
                      <Switch id="appointment-confirmations" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="appointment-changes" className="font-medium">
                          Appointment changes
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when appointments are rescheduled or canceled
                        </p>
                      </div>
                      <Switch id="appointment-changes" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Preventive Care</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="checkup-reminders" className="font-medium">
                          Checkup reminders
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive reminders about recommended checkups and screenings
                        </p>
                      </div>
                      <Switch id="checkup-reminders" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="health-tips" className="font-medium">
                          Health tips and recommendations
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive personalized health tips and recommendations
                        </p>
                      </div>
                      <Switch id="health-tips" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="delivery-methods">
            <Card>
              <CardHeader>
                <CardTitle>Delivery Methods</CardTitle>
                <CardDescription>Choose how you want to receive each type of notification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Default Delivery Method</h3>
                  <RadioGroup defaultValue="all">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="all" />
                      <Label htmlFor="all">All methods (Email, SMS, and In-app)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email-app" id="email-app" />
                      <Label htmlFor="email-app">Email and In-app only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="app-only" id="app-only" />
                      <Label htmlFor="app-only">In-app only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom">Custom (set individually below)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Custom Delivery Methods</h3>
                  <p className="text-sm text-muted-foreground">Customize how you receive each type of notification</p>

                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center py-4 border-b">
                      <div className="font-medium">Messages</div>
                      <div className="flex items-center space-x-2">
                        <Switch id="messages-email" defaultChecked />
                        <Label htmlFor="messages-email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="messages-sms" defaultChecked />
                        <Label htmlFor="messages-sms">SMS</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="messages-app" defaultChecked />
                        <Label htmlFor="messages-app">In-app</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center py-4 border-b">
                      <div className="font-medium">Billing</div>
                      <div className="flex items-center space-x-2">
                        <Switch id="billing-email" defaultChecked />
                        <Label htmlFor="billing-email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="billing-sms" />
                        <Label htmlFor="billing-sms">SMS</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="billing-app" defaultChecked />
                        <Label htmlFor="billing-app">In-app</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center py-4 border-b">
                      <div className="font-medium">Prescriptions</div>
                      <div className="flex items-center space-x-2">
                        <Switch id="prescriptions-email" defaultChecked />
                        <Label htmlFor="prescriptions-email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="prescriptions-sms" defaultChecked />
                        <Label htmlFor="prescriptions-sms">SMS</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="prescriptions-app" defaultChecked />
                        <Label htmlFor="prescriptions-app">In-app</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center py-4 border-b">
                      <div className="font-medium">Medical Records</div>
                      <div className="flex items-center space-x-2">
                        <Switch id="records-email" defaultChecked />
                        <Label htmlFor="records-email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="records-sms" />
                        <Label htmlFor="records-sms">SMS</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="records-app" defaultChecked />
                        <Label htmlFor="records-app">In-app</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center py-4 border-b">
                      <div className="font-medium">Appointments</div>
                      <div className="flex items-center space-x-2">
                        <Switch id="appointments-email" defaultChecked />
                        <Label htmlFor="appointments-email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="appointments-sms" defaultChecked />
                        <Label htmlFor="appointments-sms">SMS</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="appointments-app" defaultChecked />
                        <Label htmlFor="appointments-app">In-app</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center py-4">
                      <div className="font-medium">Preventive Care</div>
                      <div className="flex items-center space-x-2">
                        <Switch id="preventive-email" defaultChecked />
                        <Label htmlFor="preventive-email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="preventive-sms" />
                        <Label htmlFor="preventive-sms">SMS</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="preventive-app" defaultChecked />
                        <Label htmlFor="preventive-app">In-app</Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notification Frequency</h3>
                  <div className="grid gap-4">
                    <div className="flex flex-col space-y-2">
                      <Label htmlFor="reminder-timing">Appointment Reminder Timing</Label>
                      <Select defaultValue="24">
                        <SelectTrigger id="reminder-timing">
                          <SelectValue placeholder="Select timing" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 hour before</SelectItem>
                          <SelectItem value="3">3 hours before</SelectItem>
                          <SelectItem value="24">24 hours before</SelectItem>
                          <SelectItem value="48">48 hours before</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Label htmlFor="digest-frequency">Email Digest Frequency</Label>
                      <Select defaultValue="daily">
                        <SelectTrigger id="digest-frequency">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="realtime">Real-time (individual emails)</SelectItem>
                          <SelectItem value="daily">Daily digest</SelectItem>
                          <SelectItem value="weekly">Weekly digest</SelectItem>
                          <SelectItem value="never">Never (in-app only)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Reset to defaults</Button>
                <Button>Save preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PatientDashboardLayout>
  )
}

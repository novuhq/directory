'use client';

import Link from 'next/link';
import {
  Calendar,
  MessageSquare,
  Pill,
  FileText,
  Plus,
  Heart,
  Activity,
  ChevronRight,
  Clock,
  ArrowUpRight,
  Search,
} from 'lucide-react';
import { DashboardInbox } from '@/components/dashboard-inbox';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PatientDashboardLayout } from '@/components/patient-dashboard-layout';
import { HealthMetricsChart } from '@/components/health-metrics-chart';
import { Input } from '@/components/ui/input';
import { useUnreadCount } from '@/app/notifications/hooks/unreadCount';

export function DashboardContent() {
  return (
    <PatientDashboardLayout>
      <div className="flex flex-col gap-6">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-sky-100">
              <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Sarah Johnson" />
              <AvatarFallback className="text-lg">SJ</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Welcome, Sarah</h1>
              <p className="text-muted-foreground">Tuesday, April 24, 2025</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-8 focus-visible:ring-sky-500"
              />
            </div>
            <Button className="whitespace-nowrap">
              <Plus className="mr-2 h-4 w-4" />
              Book appointment
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="block">
            <Card className="h-full hover:border-sky-200 hover:shadow-md transition-all">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center mb-3">
                  <Calendar className="h-5 w-5 text-sky-600" />
                </div>
                <h3 className="font-medium mb-1">Appointments</h3>
                <p className="text-xs text-muted-foreground">Schedule or manage visits</p>
              </CardContent>
            </Card>
          </div>
          <Card className="h-full hover:border-sky-200 hover:shadow-md transition-all">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center mb-3 relative">
                <MessageSquare className="h-5 w-5 text-sky-600" />
              </div>
              <h3 className="font-medium mb-1">Messages</h3>
              <p className="text-xs text-muted-foreground">Communicate with your care team</p>
            </CardContent>
          </Card>
          <div className="block">
            <Card className="h-full hover:border-sky-200 hover:shadow-md transition-all">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center mb-3">
                  <Pill className="h-5 w-5 text-sky-600" />
                </div>
                <h3 className="font-medium mb-1">Medications</h3>
                <p className="text-xs text-muted-foreground">View and refill prescriptions</p>
              </CardContent>
            </Card>
          </div>
          <div className="block">
            <Card className="h-full hover:border-sky-200 hover:shadow-md transition-all">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center mb-3">
                  <FileText className="h-5 w-5 text-sky-600" />
                </div>
                <h3 className="font-medium mb-1">Records</h3>
                <p className="text-xs text-muted-foreground">Access your medical records</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Upcoming Appointments and Notifications */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Upcoming Appointments */}
          <Card>
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Upcoming Appointments</CardTitle>
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sky-600 h-8 px-2 -mr-2 opacity-50 cursor-not-allowed"
                  disabled
                >
                  View all
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {/* Next appointment */}
                <div className="bg-sky-50 border border-sky-100 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-md border border-sky-100 text-center min-w-[60px]">
                      <div className="text-xs text-sky-600 font-medium">APR</div>
                      <div className="text-xl font-bold">25</div>
                      <div className="text-xs text-muted-foreground">Thu</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">Dr. Emily Johnson</h4>
                        <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200">Virtual</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Primary Care</p>
                      <div className="flex items-center gap-2 mt-2 text-sm">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-muted-foreground">10:00 AM (30 min)</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" className="whitespace-nowrap">
                        Join now
                      </Button>
                      <Button variant="outline" size="sm" className="whitespace-nowrap">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Other upcoming appointments */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-gray-50 p-2 rounded-md border text-center min-w-[60px]">
                      <div className="text-xs text-gray-500 font-medium">MAY</div>
                      <div className="text-xl font-bold">15</div>
                      <div className="text-xs text-muted-foreground">Wed</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">Dr. Michael Chen</h4>
                        <Badge variant="outline">In-person</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Dermatology</p>
                      <div className="flex items-center gap-2 mt-2 text-sm">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-muted-foreground">2:30 PM (45 min)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-gray-50 p-2 rounded-md border text-center min-w-[60px]">
                      <div className="text-xs text-gray-500 font-medium">MAY</div>
                      <div className="text-xl font-bold">22</div>
                      <div className="text-xs text-muted-foreground">Wed</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">Dr. Sarah Williams</h4>
                        <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200">Virtual</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Nutrition Consultation</p>
                      <div className="flex items-center gap-2 mt-2 text-sm">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-muted-foreground">11:15 AM (60 min)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="ring-2 ring-sky-500 ring-offset-2">
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg font-semibold">Notifications</CardTitle>
                <Badge className="bg-red-100 text-red-700 hover:bg-red-200">
                  {useUnreadCount()} new
                </Badge>
              </div>
              <Link href="/notifications">
                <Button variant="ghost" size="sm" className="text-sky-600 h-8 px-2 -mr-2">
                  View all
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <DashboardInbox />
          </Card>
        </div>

        {/* Health Metrics */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Health Metrics</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="text-sky-600 h-8 px-2 -mr-2 opacity-50 cursor-not-allowed"
                disabled
              >
                View all
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <Tabs defaultValue="heart-rate">
              <TabsList className="grid grid-cols-3 mb-4 bg-gray-100">
                <TabsTrigger
                  value="heart-rate"
                  className="flex items-center gap-2 data-[state=active]:bg-white"
                >
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Heart Rate</span>
                </TabsTrigger>
                <TabsTrigger
                  value="blood-pressure"
                  className="flex items-center gap-2 data-[state=active]:bg-white"
                >
                  <Activity className="h-4 w-4" />
                  <span className="hidden sm:inline">Blood Pressure</span>
                </TabsTrigger>
                <TabsTrigger
                  value="temperature"
                  className="flex items-center gap-2 data-[state=active]:bg-white"
                >
                  <Activity className="h-4 w-4" />
                  <span className="hidden sm:inline">Weight</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="heart-rate">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-1 flex flex-col justify-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Current</div>
                      <div className="text-4xl font-bold text-sky-600">72</div>
                      <div className="text-sm text-muted-foreground">bpm</div>
                      <div className="mt-4 text-sm">
                        <span className="text-green-600 font-medium flex items-center justify-center">
                          Normal range
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <HealthMetricsChart metric="heart-rate" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="blood-pressure">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-1 flex flex-col justify-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Current</div>
                      <div className="text-4xl font-bold text-sky-600">120/80</div>
                      <div className="text-sm text-muted-foreground">mmHg</div>
                      <div className="mt-4 text-sm">
                        <span className="text-green-600 font-medium flex items-center justify-center">
                          Normal range
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <HealthMetricsChart metric="blood-pressure" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="temperature">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-1 flex flex-col justify-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Current</div>
                      <div className="text-4xl font-bold text-sky-600">165</div>
                      <div className="text-sm text-muted-foreground">lbs</div>
                      <div className="mt-4 text-sm">
                        <span className="text-amber-600 font-medium flex items-center justify-center">
                          -2 lbs from last visit
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <HealthMetricsChart metric="temperature" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Medications and Preventive Care */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Medications */}
          <Card>
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Current Medications</CardTitle>

              <Button
                variant="ghost"
                size="sm"
                className="text-sky-600 h-8 px-2 -mr-2 opacity-50 cursor-not-allowed"
                disabled
              >
                View all
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <Pill className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Lisinopril</h4>
                      <p className="text-sm text-muted-foreground">10mg, once daily</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    Refill soon
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Pill className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Metformin</h4>
                      <p className="text-sm text-muted-foreground">500mg, twice daily</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Refilled recently
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Pill className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Vitamin D</h4>
                      <p className="text-sm text-muted-foreground">1000 IU, once daily</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Refilled recently
                  </Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Plus className="mr-2 h-4 w-4" />
                Request refill
              </Button>
            </CardContent>
          </Card>

          {/* Preventive Care */}
          <Card>
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Preventive Care</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="text-sky-600 h-8 px-2 -mr-2 opacity-50 cursor-not-allowed"
                disabled
              >
                View all
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Annual Physical</span>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        On track
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">Due in 3 months</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Dental Cleaning</span>
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        Overdue
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">Overdue by 1 month</span>
                  </div>
                  <Progress value={0} className="h-2 bg-red-100" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Eye Exam</span>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        Completed
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">Completed 1 month ago</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Flu Vaccine</span>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        On track
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">Due in 5 months</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule preventive care
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Medical Records */}
        <Card>
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Medical Records</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              className="text-sky-600 h-8 px-2 -mr-2 opacity-50 cursor-not-allowed"
              disabled
            >
              View all
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-sky-100 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Blood Test Results</h4>
                    <p className="text-sm text-muted-foreground">
                      Apr 10, 2025 • Dr. Emily Johnson
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="gap-1">
                  View
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-sky-100 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">X-Ray Report</h4>
                    <p className="text-sm text-muted-foreground">Mar 22, 2025 • Dr. Robert Chen</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="gap-1">
                  View
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-sky-100 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Allergy Test</h4>
                    <p className="text-sm text-muted-foreground">
                      Feb 15, 2025 • Dr. Sarah Williams
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  Processing
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PatientDashboardLayout>
  );
}

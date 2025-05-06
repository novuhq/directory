import type { Metadata } from 'next';
import { Search, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PatientDashboardLayout } from '@/components/patient-dashboard-layout';
import { MessagePreview } from '@/components/message-preview';

export const metadata: Metadata = {
  title: 'Messages | OneHealth',
  description: 'Communicate with your healthcare providers',
};

export default function MessagesPage() {
  return (
    <PatientDashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
            <p className="text-muted-foreground">Communicate with your healthcare providers</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New message
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="px-4 py-3">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search messages..."
                    className="w-full pl-8 focus-visible:ring-sky-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <MessagePreview
                    sender="Dr. Emily Johnson"
                    avatar="/placeholder.svg?height=40&width=40"
                    preview="Your lab results are in. Everything looks good, but I&apos;d like to discuss your vitamin D levels during our appointment tomorrow."
                    time="2 hours ago"
                    unread
                  />
                  <MessagePreview
                    sender="Lab Results"
                    avatar="/placeholder.svg?height=40&width=40"
                    preview="Your recent blood work results are now available. Please log in to view the detailed report."
                    time="Yesterday"
                    unread
                  />
                  <MessagePreview
                    sender="Dr. Emily Johnson"
                    avatar="/placeholder.svg?height=40&width=40"
                    preview="I&apos;ve sent over the prescription refill to your pharmacy. It should be ready for pickup by tomorrow afternoon."
                    time="3 days ago"
                    unread
                  />
                  <MessagePreview
                    sender="Dr. Michael Chen"
                    avatar="/placeholder.svg?height=40&width=40"
                    preview="Following up on your dermatology appointment. How is the new treatment working for you? Please let me know if you have any concerns."
                    time="1 week ago"
                  />
                  <MessagePreview
                    sender="Appointment Reminder"
                    avatar="/placeholder.svg?height=40&width=40"
                    preview="This is a reminder for your upcoming appointment with Dr. Sarah Williams on May 22 at 11:15 AM."
                    time="1 week ago"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card className="h-full flex flex-col">
              <CardHeader className="border-b px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <CardTitle>Dr. Emily Johnson</CardTitle>
                    <p className="text-sm text-muted-foreground">Primary Care</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6 overflow-auto">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium">EJ</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-sm">
                          Hi Sarah, I&apos;ve reviewed your recent lab results. Everything looks good
                          overall, but I noticed your vitamin D levels are a bit low. This is
                          common, especially during winter months, but I&apos;d like to discuss this
                          during our appointment tomorrow.
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 text-right">
                      <div className="bg-sky-100 rounded-lg p-4 inline-block text-left">
                        <p className="text-sm">
                          Thanks for letting me know, Dr. Johnson. I&apos;ll make sure to discuss this
                          tomorrow. Is there anything I should do in the meantime?
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Just now</p>
                    </div>
                    <div className="flex-shrink-0 pt-1">
                      <div className="h-8 w-8 rounded-full bg-sky-200 flex items-center justify-center">
                        <span className="text-sm font-medium">SJ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="border-t p-4">
                <div className="flex gap-4">
                  <Input placeholder="Type your message..." className="flex-1" />
                  <Button>Send</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PatientDashboardLayout>
  );
}

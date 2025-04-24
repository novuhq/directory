import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"
import { ChevronRight, Monitor, Smartphone, Mail, Slack } from "lucide-react"

export default function PreferencesPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl font-bold mb-2">Notifications</h1>
          <p className="text-zinc-500 mb-6">Choose how to be notified for workspace activity. Notifications will always go to your Linear inbox.</p>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification channels</CardTitle>
                <CardDescription>Choose how to be notified for workspace activity</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Link href="/preferences/desktop" className="flex items-center justify-between p-4 hover:bg-zinc-50 border-b border-zinc-200">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md bg-zinc-100 flex items-center justify-center">
                      <Monitor className="h-4 w-4 text-zinc-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Desktop</h3>
                      <p className="text-sm text-zinc-500">Enabled for assignments, status changes, 9 others</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-zinc-400" />
                </Link>

                <Link href="/preferences/mobile" className="flex items-center justify-between p-4 hover:bg-zinc-50 border-b border-zinc-200">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md bg-zinc-100 flex items-center justify-center">
                      <Smartphone className="h-4 w-4 text-zinc-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Mobile</h3>
                      <p className="text-sm text-zinc-500">Enabled for all notifications</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-zinc-400" />
                </Link>

                <Link href="/preferences/email" className="flex items-center justify-between p-4 hover:bg-zinc-50 border-b border-zinc-200">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md bg-zinc-100 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-zinc-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-zinc-500">Enabled for document changes, updates, 2 others</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-zinc-400" />
                </Link>

                <Link href="/preferences/slack" className="flex items-center justify-between p-4 hover:bg-zinc-50">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md bg-zinc-100 flex items-center justify-center">
                      <Slack className="h-4 w-4 text-zinc-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Slack</h3>
                      <p className="text-sm text-zinc-500">Disabled</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-zinc-400" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Updates from Linear</CardTitle>
                <CardDescription>Subscribe to product announcements and important changes from the Linear team</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Show updates in sidebar</h3>
                      <p className="text-sm text-zinc-500">Highlight new features and improvements in the app sidebar</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="sidebar-updates" className="h-4 w-4" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Changelog newsletter</h3>
                      <p className="text-sm text-zinc-500">Twice a month email highlighting new features and improvements</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="changelog-newsletter" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other updates</CardTitle>
                <CardDescription>Control other notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Invite accepted</h3>
                      <p className="text-sm text-zinc-500">Email when invitees accept an invite</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="invite-accepted" className="h-4 w-4" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Privacy and legal updates</h3>
                      <p className="text-sm text-zinc-500">Email when privacy policies or terms of service change</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="privacy-updates" className="h-4 w-4" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Data processing agreement (DPA)</h3>
                      <p className="text-sm text-zinc-500">Email when our DPA changes</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="dpa-updates" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 
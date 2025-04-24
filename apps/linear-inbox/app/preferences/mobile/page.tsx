import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function MobileNotificationsPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex justify-center overflow-auto">
        <div className="w-full max-w-4xl px-6 py-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/preferences" className="text-zinc-500 hover:text-zinc-900">
              <ChevronLeft className="h-4 w-4" />
            </Link>
            <h1 className="text-2xl font-bold">Mobile Notifications</h1>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mobile push notifications</CardTitle>
                <CardDescription>Choose which notifications appear on your mobile device</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Enable all notifications</h3>
                      <p className="text-sm text-zinc-500">Receive all notifications on your mobile device</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="mobile-all" className="h-4 w-4" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Assignments</h3>
                      <p className="text-sm text-zinc-500">When you are assigned to an issue</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="mobile-assignments" className="h-4 w-4" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Status changes</h3>
                      <p className="text-sm text-zinc-500">When an issue's status changes</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="mobile-status" className="h-4 w-4" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Comments</h3>
                      <p className="text-sm text-zinc-500">When someone comments on an issue</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="mobile-comments" className="h-4 w-4" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Mentions</h3>
                      <p className="text-sm text-zinc-500">When you are mentioned in a comment</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="mobile-mentions" className="h-4 w-4" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quiet hours</CardTitle>
                <CardDescription>Set times when you don't want to receive mobile notifications</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Enable quiet hours</h3>
                      <p className="text-sm text-zinc-500">Mute notifications during specific times</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="quiet-hours" className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Quiet hours schedule</h3>
                      <p className="text-sm text-zinc-500">Set your quiet hours time range</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="time" className="h-9 rounded-md border border-zinc-200 px-3" defaultValue="22:00" />
                      <span className="text-zinc-500">to</span>
                      <input type="time" className="h-9 rounded-md border border-zinc-200 px-3" defaultValue="07:00" />
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
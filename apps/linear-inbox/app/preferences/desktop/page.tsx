import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function DesktopNotificationsPage() {
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
            <h1 className="text-2xl font-bold">Desktop Notifications</h1>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Desktop notification settings</CardTitle>
                <CardDescription>Choose which notifications appear on your desktop</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Assignments</h3>
                      <p className="text-sm text-zinc-500">When you are assigned to an issue</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="desktop-assignments" className="h-4 w-4" defaultChecked />
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
                      <input type="checkbox" id="desktop-status" className="h-4 w-4" defaultChecked />
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
                      <input type="checkbox" id="desktop-comments" className="h-4 w-4" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Mentions</h3>
                      <p className="text-sm text-zinc-500">When you are mentioned in a comment</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="desktop-mentions" className="h-4 w-4" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Due dates</h3>
                      <p className="text-sm text-zinc-500">When an issue is due or overdue</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="desktop-due-dates" className="h-4 w-4" defaultChecked />
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
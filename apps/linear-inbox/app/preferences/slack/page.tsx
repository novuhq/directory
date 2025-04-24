import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"
import { ChevronLeft, Slack } from "lucide-react"

export default function SlackNotificationsPage() {
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
            <h1 className="text-2xl font-bold">Slack Integration</h1>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Connect Slack</CardTitle>
                <CardDescription>Receive notifications in your Slack workspace</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-md bg-zinc-100 flex items-center justify-center">
                        <Slack className="h-4 w-4 text-zinc-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Connect to Slack</h3>
                        <p className="text-sm text-zinc-500">Not connected</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors">
                      Connect
                    </button>
                  </div>
                </div>

                <div className="p-4 text-sm text-zinc-500">
                  Connect your Slack workspace to receive notifications directly in Slack. You'll be able to customize which notifications you receive after connecting.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification settings</CardTitle>
                <CardDescription>These settings will be available after connecting to Slack</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-4 border-b border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Assignments</h3>
                      <p className="text-sm text-zinc-500">When you are assigned to an issue</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="slack-assignments" className="h-4 w-4" disabled />
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
                      <input type="checkbox" id="slack-status" className="h-4 w-4" disabled />
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
                      <input type="checkbox" id="slack-mentions" className="h-4 w-4" disabled />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Channel settings</CardTitle>
                <CardDescription>Configure which Slack channels receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-4 text-sm text-zinc-500">
                  Channel settings will be available after connecting to Slack. You'll be able to choose which channels receive specific types of notifications.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 
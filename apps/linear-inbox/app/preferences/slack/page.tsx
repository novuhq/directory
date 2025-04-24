// pages/preferences/slack.tsx
import { NotificationCard } from "@/components/preferences/notifications/NotificationCard"
import { NotificationToggle } from "@/components/preferences/notifications/NotificationToggle"
import { PreferencesLayout } from "@/components/preferences/layout/PreferencesLayout"
import { Slack } from "lucide-react"

export default function SlackNotificationsPage() {
  return (
    <PreferencesLayout title="Slack Integration">
      <NotificationCard
        title="Connect Slack"
        description="Receive notifications in your Slack workspace"
      >
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
      </NotificationCard>

      <NotificationCard
        title="Notification settings"
        description="These settings will be available after connecting to Slack"
      >
        <NotificationToggle
          id="slack-assignments"
          title="Assignments"
          description="When you are assigned to an issue"
          disabled
        />
        
        <NotificationToggle
          id="slack-status"
          title="Status changes"
          description="When an issue's status changes"
          disabled
        />
        
        <NotificationToggle
          id="slack-mentions"
          title="Mentions"
          description="When you are mentioned in a comment"
          disabled
          hasBorder={false}
        />
      </NotificationCard>

      <NotificationCard
        title="Channel settings"
        description="Configure which Slack channels receive notifications"
      >
        <div className="p-4 text-sm text-zinc-500">
          Channel settings will be available after connecting to Slack. You'll be able to choose which channels receive specific types of notifications.
        </div>
      </NotificationCard>
    </PreferencesLayout>
  )
}
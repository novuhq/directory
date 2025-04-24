// pages/preferences/desktop.tsx
import { NotificationCard } from "@/components/preferences/notifications/NotificationCard"
import { NotificationToggle } from "@/components/preferences/notifications/NotificationToggle"
import { PreferencesLayout } from "@/components/preferences/layout/PreferencesLayout"

export default function DesktopNotificationsPage() {
  return (
    <PreferencesLayout title="Desktop Notifications">
      <NotificationCard
        title="Desktop notification settings"
        description="Choose which notifications appear on your desktop"
      >
        <NotificationToggle
          id="desktop-assignments"
          title="Assignments"
          description="When you are assigned to an issue"
          defaultChecked
        />
        
        <NotificationToggle
          id="desktop-status"
          title="Status changes"
          description="When an issue's status changes"
          defaultChecked
        />
        
        <NotificationToggle
          id="desktop-comments"
          title="Comments"
          description="When someone comments on an issue"
          defaultChecked
        />
        
        <NotificationToggle
          id="desktop-mentions"
          title="Mentions"
          description="When you are mentioned in a comment"
          defaultChecked
        />
        
        <NotificationToggle
          id="desktop-due-dates"
          title="Due dates"
          description="When an issue is due or overdue"
          defaultChecked
          hasBorder={false}
        />
      </NotificationCard>
    </PreferencesLayout>
  )
}
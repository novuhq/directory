// pages/preferences/mobile.tsx
"use client"

import { NotificationCard } from "@/components/preferences/notifications/NotificationCard"
import { NotificationToggle } from "@/components/preferences/notifications/NotificationToggle"
import { TimeRangeInput } from "@/components/preferences/ui/TimeRangeInput"
import { PreferencesLayout } from "@/components/preferences/layout/PreferencesLayout"

export default function MobileNotificationsPage() {
  return (
    <PreferencesLayout title="Mobile Notifications">
      <NotificationCard 
        title="Mobile push notifications"
        description="Choose which notifications appear on your mobile device"
      >
        <NotificationToggle
          id="mobile-all"
          title="Enable all notifications"
          description="Receive all notifications on your mobile device"
          defaultChecked
        />
        
        <NotificationToggle
          id="mobile-assignments"
          title="Assignments"
          description="When you are assigned to an issue"
          defaultChecked
        />
        
        <NotificationToggle
          id="mobile-status"
          title="Status changes"
          description="When an issue's status changes"
          defaultChecked
        />
        
        <NotificationToggle
          id="mobile-comments"
          title="Comments"
          description="When someone comments on an issue"
          defaultChecked
        />
        
        <NotificationToggle
          id="mobile-mentions"
          title="Mentions"
          description="When you are mentioned in a comment"
          defaultChecked
          hasBorder={false}
        />
      </NotificationCard>

      <NotificationCard
        title="Quiet hours"
        description="Set times when you don't want to receive mobile notifications"
      >
        <NotificationToggle
          id="quiet-hours"
          title="Enable quiet hours"
          description="Mute notifications during specific times"
        />
        
        <TimeRangeInput
          label="Quiet hours schedule"
          description="Set your quiet hours time range"
          defaultStartTime="22:00"
          defaultEndTime="07:00"
          onChange={(start, end) => console.log(`Quiet hours: ${start} to ${end}`)}
          hasBorder={false}
        />
      </NotificationCard>
    </PreferencesLayout>
  )
}
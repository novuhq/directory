"use client"

import { Monitor, Smartphone, Mail, Slack } from "lucide-react"
import { NotificationChannelLink } from "./NotificationChannelLink"

export function NotificationChannels() {
  return (
    <>
      <NotificationChannelLink
        href="/preferences/desktop"
        icon={Monitor}
        title="Desktop"
        description="Enabled for assignments, status changes, 9 others"
      />
      
      <NotificationChannelLink
        href="/preferences/mobile"
        icon={Smartphone}
        title="Mobile"
        description="Enabled for all notifications"
      />
      
      <NotificationChannelLink
        href="/preferences/email"
        icon={Mail}
        title="Email"
        description="Enabled for document changes, updates, 2 others"
      />
      
      <NotificationChannelLink
        href="/preferences/slack"
        icon={Slack}
        title="Slack"
        description="Disabled"
        isLast
      />
    </>
  )
} 
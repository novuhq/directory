import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notifications | OneHealth",
  description: "View and manage your healthcare notifications",
}

export default function NotificationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 
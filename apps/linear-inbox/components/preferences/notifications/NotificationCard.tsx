// components/notifications/NotificationCard.tsx
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface NotificationCardProps {
  title: string
  description: string
  children: React.ReactNode
  contentClassName?: string
}

export function NotificationCard({
  title,
  description,
  children,
  contentClassName = "p-0"
}: NotificationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className={contentClassName}>
        {children}
      </CardContent>
    </Card>
  )
}
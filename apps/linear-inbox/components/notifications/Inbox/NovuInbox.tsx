"use client";

import React, { useCallback } from "react";
import { Inbox, Notification } from "@novu/react";
import { useTheme } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { NovuInboxProps } from "./types";
import { NotificationItem } from "./NotificationItem";
import { useInboxConfig } from "./hooks/useInboxConfig";

/**
 * NovuInbox - A customizable notification inbox component
 *
 * This component integrates with Novu's notification system to display
 * notifications in a styled inbox with support for various actions.
 */

export function NovuInbox({
  applicationId = process.env.NEXT_PUBLIC_NOVU_APPLICATION_ID,
  subscriberId = process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID,
  onNotificationClick,
  onPrimaryActionClick,
  onSecondaryActionClick,
}: NovuInboxProps) {
  const { resolvedTheme } = useTheme();

  const handleNotificationUpdated = useCallback(
    (notificationId: string, isRead: boolean) => {
      // TODO: Implement with actual notification API
      console.log(
        `Notification ${notificationId} ${isRead ? "read" : "unread"}`,
      );
    },
    [],
  );

  const handleNotificationDeleted = useCallback((notificationId: string) => {
    // TODO: Implement with actual notification API
    console.log(`Notification ${notificationId} deleted`);
  }, []);

  /**
   * Render notification function
   */
  const renderNotification = useCallback(
    (notification: Notification) => {
      // Skip rendering if notification is deleted
      if (notification.isArchived) {
        return <div style={{ display: "none" }} />;
      }
      return (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onNotificationUpdated={handleNotificationUpdated}
          onNotificationDeleted={handleNotificationDeleted}
          onNotificationClick={onNotificationClick}
        />
      );
    },
    [onNotificationClick],
  );

  // Get inbox configuration
  const inboxConfig = useInboxConfig({
    applicationId: (process.env.NEXT_PUBLIC_NOVU_APPLICATION_ID ||
      applicationId)!,
    subscriberId: (process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID || subscriberId)!,
    resolvedTheme,
    renderNotification,
    handleNotificationClick: onNotificationClick,
    handlePrimaryActionClick: onPrimaryActionClick,
    handleSecondaryActionClick: onSecondaryActionClick,
  });

  return (
    <div
      className="novu-inbox-wrapper"
      role="region"
      aria-label="Notifications"
    >
      <Inbox {...inboxConfig} />
      <Toaster />
    </div>
  );
}

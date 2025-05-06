"use client";

import { Inbox, InboxContent, Notification } from "@novu/nextjs";
import { NotificationItem } from "./notificationItem";
import { InboxHeader } from "./inboxHeader";

export interface LinearInboxProps {
  handleNotificationClick: (notification: Notification) => void;
}

const applicationIdentifier = process.env
  .NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER as string;
const subscriberId = process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID as string;

if (!applicationIdentifier || !subscriberId) {
  throw new Error("Novu environment variables are not properly configured");
}

export function LinearInbox({
  handleNotificationClick,
}: LinearInboxProps) {
  const renderNotification = (notification: Notification) => {
    return (
      <NotificationItem
        notification={notification}
        onClick={() => handleNotificationClick(notification)}
      />
    );
  };

  const inboxContent = {
    renderNotification,
  };

  const inboxConfig = {
    applicationIdentifier,
    subscriberId,
    appearance: {
      elements: {
        inboxHeader: {
          display: "none",
        },
      },
    },
  };

  return (
    <Inbox {...inboxConfig}>
      <InboxHeader />
      <InboxContent {...inboxContent} />
    </Inbox>
  );
}

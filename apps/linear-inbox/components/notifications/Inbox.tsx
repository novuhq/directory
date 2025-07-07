"use client";

import { Inbox, InboxContent, Notification } from "@novu/nextjs";
import { getSubscriberId } from "@/lib/subscriberUtils";
import { InboxHeader } from "./inboxHeader";
import { NotificationItem } from "./notificationItem";
import { useState } from "react";

export default function CustomInbox() {
  const subscriberId = getSubscriberId();
  const [refreshKey, setRefreshKey] = useState(0);

  const renderNotification = (notification: Notification) => {
    return (
      <NotificationItem notification={notification} onRefresh={refreshInbox} />
    );
  };

  const inboxConfig = {
    applicationIdentifier:
      process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER || "",
    subscriberId: subscriberId!,
    appearance: {
      elements: {
        inboxHeader: {
          display: "none",
        },
      },
    },
  };

  // Function to trigger re-render
  const refreshInbox = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col h-full">
      <InboxHeader onRefresh={refreshInbox} />

      <div className="flex-1 overflow-hidden">
        <Inbox {...inboxConfig} key={refreshKey}>
          <InboxContent renderNotification={renderNotification} />
        </Inbox>
      </div>
    </div>
  );
}

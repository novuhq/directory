"use client";

import { Inbox, InboxContent, Notification } from "@novu/nextjs";
import { NotificationItem } from "./notificationItem";
import { InboxHeader } from "./inboxHeader";

export interface NovuInboxProps {
  handleNotificationClick: (notification: Notification) => void;
}

const applicationIdentifier = process.env
  .NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER as string;
const subscriberId = process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID as string;

export function NovuInbox({
  handleNotificationClick,
}: NovuInboxProps) {
  // Debug logging
  console.log("NovuInbox render - applicationIdentifier:", applicationIdentifier);
  console.log("NovuInbox render - subscriberId:", subscriberId);

  // Check if environment variables are available
  if (!applicationIdentifier || !subscriberId) {
    console.log("NovuInbox - Environment variables missing, showing fallback");
    return (
      <div className="flex flex-col h-full">
        <InboxHeader />
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Novu Configuration Required</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Please configure the Novu environment variables to view notifications.
              </p>
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 p-3 rounded">
              <p>Required variables:</p>
              <p>• NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER: {applicationIdentifier || 'NOT SET'}</p>
              <p>• NEXT_PUBLIC_NOVU_SUBSCRIBER_ID: {subscriberId || 'NOT SET'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  console.log("NovuInbox - Environment variables found, rendering Novu component");

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

'use client';

import React, { useCallback } from 'react';
import { Inbox, Notification } from '@novu/react';
import { useTheme } from 'next-themes';
import { Toaster } from "@/components/ui/toaster";
import { 
  DEFAULT_APPLICATION_ID, 
  DEFAULT_SUBSCRIBER_ID 
} from './constants';
import { NovuInboxProps } from './types';
import { NotificationItem } from './NotificationItem';
import { useNotificationState } from './hooks/useNotificationState';
import { useInboxConfig } from './hooks/useInboxConfig';

/**
 * NovuInbox - A customizable notification inbox component
 * 
 * This component integrates with Novu's notification system to display
 * notifications in a styled inbox with support for various actions.
 */
export function NovuInbox({
  applicationId = DEFAULT_APPLICATION_ID,
  subscriberId = DEFAULT_SUBSCRIBER_ID,
  onNotificationClick,
  onPrimaryActionClick,
  onSecondaryActionClick
}: NovuInboxProps) {
  const { resolvedTheme } = useTheme();
  const { 
    getNotificationReadState, 
    isNotificationDeleted, 
    markAsRead, 
    markAsUnread,
    deleteNotification 
  } = useNotificationState();

  /**
   * Handle notification updates
   */
  const handleNotificationUpdated = useCallback((notificationId: string, isRead: boolean) => {
    if (isRead) {
      markAsRead(notificationId);
    } else {
      markAsUnread(notificationId);
    }
  }, [markAsRead, markAsUnread]);

  /**
   * Handle notification deletion
   */
  const handleNotificationDeleted = useCallback((notificationId: string) => {
    deleteNotification(notificationId);
  }, [deleteNotification]);

  /**
   * Render notification function
   */
  const renderNotification = useCallback((notification: Notification) => {
    // Skip rendering if notification is deleted
    if (isNotificationDeleted(notification.id)) {
      return <div style={{ display: 'none' }} />;
    }

    // Use the updated read state if available, otherwise use the original
    const isRead = getNotificationReadState(notification.id, notification.isRead);

    return (
      <NotificationItem 
        key={notification.id}
        notification={notification} 
        onNotificationUpdated={handleNotificationUpdated}
        onNotificationDeleted={handleNotificationDeleted}
        isReadOverride={isRead}
        onNotificationClick={onNotificationClick}
      />
    );
  }, [
    isNotificationDeleted, 
    getNotificationReadState, 
    handleNotificationUpdated, 
    handleNotificationDeleted,
    onNotificationClick
  ]);

  // Get inbox configuration
  const inboxConfig = useInboxConfig({
    applicationId,
    subscriberId,
    resolvedTheme,
    renderNotification,
    handleNotificationClick: onNotificationClick,
    handlePrimaryActionClick: onPrimaryActionClick,
    handleSecondaryActionClick: onSecondaryActionClick
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
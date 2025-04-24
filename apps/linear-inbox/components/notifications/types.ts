import { Notification } from '@novu/react';

export interface NotificationData {
  status?: string;
  participantAvatar?: string;
  participant?: string;
  [key: string]: any;
}

export interface NovuInboxProps {
  applicationId?: string;
  subscriberId?: string;
  onNotificationClick?: (notification: Notification) => void;
  onPrimaryActionClick?: (notification: Notification) => void;
  onSecondaryActionClick?: (notification: Notification) => void;
}

export interface NotificationItemProps {
  notification: Notification;
  onNotificationUpdated: (notificationId: string, isRead: boolean) => void;
  onNotificationDeleted: (notificationId: string) => void;
  isReadOverride?: boolean;
  onNotificationClick?: (notification: Notification) => void;
}

export interface NotificationContextMenuProps {
  notification: Notification;
  onMarkAsRead: () => void;
  onMarkAsUnread: () => void;
  onDelete: () => void;
  onSnooze: () => void;
  onUnsubscribe: () => void;
  onFavorite: () => void;
  onCopy: () => void;
  onOpenInDesktop: () => void;
  isReadOverride?: boolean;
}

export interface InboxConfigProps {
  applicationId: string;
  subscriberId: string;
  resolvedTheme: string | undefined;
  renderNotification: (notification: Notification) => React.ReactElement;
  handleNotificationClick?: (notification: Notification) => void;
  handlePrimaryActionClick?: (notification: Notification) => void;
  handleSecondaryActionClick?: (notification: Notification) => void;
}
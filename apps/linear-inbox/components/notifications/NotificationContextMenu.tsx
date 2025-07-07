import { useState, useCallback } from "react";
import { Notification } from "@novu/nextjs";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "@/components/ui/context-menu";
import { Mail, Trash2, Clock } from "lucide-react";
import {
  readNotification,
  unreadNotification,
  archiveNotification,
  snoozeNotificationWithOptions,
  snoozeNotificationWithCustomDuration,
} from "./hooks/novuHooks";

interface NotificationContextMenuProps {
  notification: Notification;
  children: React.ReactNode;
  isRead: boolean;
  onStateChange?: (notification: Notification, isRead: boolean) => void;
  onDelete?: (notification: Notification) => void;
  onRefresh?: () => void;
  subscriberId?: string;
}

export const NotificationContextMenu = ({
  notification,
  children,
  isRead,
  onStateChange,
  onDelete,
  onRefresh,
  subscriberId,
}: NotificationContextMenuProps) => {
  const handleMarkAsRead = useCallback(async () => {
    try {
      const result = await readNotification(notification);
      if (result.success) {
        onStateChange?.(notification, true);
        onRefresh?.();
      } else {
        console.error("Failed to mark as read:", result.error);
      }
    } catch (error) {
      console.error("Failed to mark as read:", error);
    }
  }, [notification, onStateChange, onRefresh, subscriberId]);

  const handleMarkAsUnread = useCallback(async () => {
    try {
      const result = await unreadNotification(notification);
      if (result.success) {
        onStateChange?.(notification, false);
        onRefresh?.();
      } else {
        console.error("Failed to mark as unread:", result.error);
      }
    } catch (error) {
      console.error("Failed to mark as unread:", error);
    }
  }, [notification, onStateChange, onRefresh, subscriberId]);

  const handleArchive = useCallback(async () => {
    try {
      const result = await archiveNotification(notification);
      if (result.success) {
        onDelete?.(notification);
        onRefresh?.();
      } else {
        console.error("Failed to archive:", result.error);
      }
    } catch (error) {
      console.error("Failed to archive:", error);
    }
  }, [notification, onDelete, onRefresh, subscriberId]);

  const handleSnooze = useCallback(
    async (minutes: number) => {
      try {
        const result = await snoozeNotificationWithCustomDuration(
          notification,
          minutes
        );
        if (result.success) {
          onDelete?.(notification);
          onRefresh?.();
        } else {
          console.error("Failed to snooze notification:", result.error);
        }
      } catch (error) {
        console.error("Failed to snooze notification:", error);
      }
    },
    [notification, onDelete, onRefresh, subscriberId]
  );

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        {isRead ? (
          <ContextMenuItem className="gap-3" onClick={handleMarkAsUnread}>
            <Mail className="h-4 w-4" />
            Mark as unread
          </ContextMenuItem>
        ) : (
          <ContextMenuItem className="gap-3" onClick={handleMarkAsRead}>
            <div className="relative">
              <Mail className="h-4 w-4" />
              {!isRead && (
                <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
              )}
            </div>
            Mark as read
          </ContextMenuItem>
        )}

        <ContextMenuItem className="gap-3" onClick={handleArchive}>
          <Trash2 className="h-4 w-4" />
          Delete notification
        </ContextMenuItem>

        <ContextMenuSub>
          <ContextMenuSubTrigger className="gap-3">
            <Clock className="h-4 w-4" />
            Snooze
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem onClick={() => handleSnooze(15)}>
              Snooze for 15 minutes
            </ContextMenuItem>
            <ContextMenuItem onClick={() => handleSnooze(30)}>
              Snooze for 30 minutes
            </ContextMenuItem>
            <ContextMenuItem onClick={() => handleSnooze(60)}>
              Snooze for 1 hour
            </ContextMenuItem>
            <ContextMenuItem onClick={() => handleSnooze(240)}>
              Snooze for 4 hours
            </ContextMenuItem>
            <ContextMenuItem onClick={() => handleSnooze(1440)}>
              Snooze for 1 day
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
};

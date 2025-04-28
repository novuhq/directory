import React, { useCallback } from "react";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { useToast } from "./hooks/useToast";
import { CheckCircle } from "lucide-react";
import { DEFAULT_AVATAR } from "./constants";
import { NotificationItemProps, NotificationData } from "./types";
import { NotificationActionIcon } from "./NotificationActionIcon";
import { NotificationStatusIcon } from "./NotificationStatusIcon";
import { NotificationTime } from "./NotificationTime";
import { NotificationContextMenu } from "./NotificationContextMenu";
import {
  readNotification,
  unreadNotification,
  archiveNotification,
} from "./hooks/notificationHooks";

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onNotificationUpdated,
  onNotificationDeleted,
  onNotificationClick,
}) => {
  const { toast } = useToast();
  const data = notification.data as NotificationData | undefined;

  // Get avatar with fallback
  const avatarSrc = data?.participantAvatar || DEFAULT_AVATAR;
  const actorName = data?.participant || "User";
  const notificationId = notification.id;
  const isRead = notification.isRead;

  // Context menu handlers
  const handleNotificationClick = useCallback(() => {
    console.log("Notification clicked:", notification);

    // Call the parent's onNotificationClick function
    onNotificationClick?.(notification);

    // Read the notification
    readNotification(notification);
  }, [notification, onNotificationClick]);

  const handleMarkAsRead = useCallback(async () => {
    try {
      // Read the notification
      readNotification(notification);
    } catch (error) {
      console.error("Error marking as read:", error);
    }
  }, [notificationId, onNotificationUpdated]);

  const handleMarkAsUnread = useCallback(async () => {
    try {
      // Unread the notification
      unreadNotification(notification);
    } catch (error) {
      console.error("Error marking as unread:", error);
    }
  }, [notificationId, onNotificationUpdated]);

  const handleDelete = useCallback(async () => {
    try {
      // Archive the notification
      archiveNotification(notification);
    } catch (error) {
      console.error("Failed to archive:", error);
      toast({
        title: "Error",
        description: "Failed to archive the notification.",
        variant: "destructive",
      });
    }
  }, [notificationId, onNotificationDeleted, toast]);

  const handleSnooze = useCallback(() => {
    // TODO: Implement snooze functionality
    console.log("Snoozing notification:", notification);
  }, [notification]);

  const handleUnsubscribe = useCallback(() => {
    // TODO: Implement unsubscribe functionality
    toast({
      variant: "success",
      description: (
        <div className="flex items-center gap-2 text-green-900 dark:text-green-100">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span className="font-medium">Unsubscribed from issue updates</span>
        </div>
      ),
      duration: 3000,
    });
  }, [toast]);

  const handleFavorite = useCallback(() => {
    // TODO: Implement favorite functionality
    console.log("Toggling favorite:", notification);
  }, [notification]);

  const handleCopy = useCallback(() => {
    // TODO: Implement copy functionality
    console.log("Copying notification:", notification);
  }, [notification]);

  const handleOpenInDesktop = useCallback(() => {
    // TODO: Implement open in desktop functionality
    console.log("Opening in desktop app:", notification);
  }, [notification]);

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          className={`py-3 px-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors border-b border-zinc-200 dark:border-zinc-800 ${!isRead ? "bg-blue-50 dark:bg-blue-900/10" : ""}`}
          role="button"
          aria-label={`Notification: ${notification.subject}`}
          tabIndex={0}
          onClick={handleNotificationClick}
        >
          <div className="flex items-center gap-3">
            {/* Avatar with action icon badge */}
            <div className="relative flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden flex items-center justify-center">
                {avatarSrc ? (
                  <img
                    src={avatarSrc}
                    alt={`${actorName}'s avatar`}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      // Fallback to initial on image load error
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <span className="text-sm font-medium">
                    {actorName.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>

              {/* Action icon badge */}
              <div className="absolute -bottom-1 -right-1 rounded-full bg-white dark:bg-zinc-900 p-0.5 border border-zinc-200 dark:border-zinc-700">
                <NotificationActionIcon notification={notification} />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center w-full">
                <div className="flex-1 min-w-0 overflow-hidden pr-3">
                  <div className="flex items-center gap-2">
                    {!isRead && (
                      <div
                        className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                      {notification.subject || "Notification"}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5 truncate">
                    {notification.body || "No description available"}
                  </p>
                </div>

                {/* Status and time */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div className="flex-shrink-0">
                    <NotificationStatusIcon notification={notification} />
                  </div>
                  <NotificationTime timestamp={notification.createdAt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContextMenuTrigger>

      <NotificationContextMenu
        notification={notification}
        onMarkAsRead={handleMarkAsRead}
        onMarkAsUnread={handleMarkAsUnread}
        onDelete={handleDelete}
        onSnooze={handleSnooze}
        onUnsubscribe={handleUnsubscribe}
        onFavorite={handleFavorite}
        onCopy={handleCopy}
        onOpenInDesktop={handleOpenInDesktop}
        isReadOverride={isRead}
      />
    </ContextMenu>
  );
};

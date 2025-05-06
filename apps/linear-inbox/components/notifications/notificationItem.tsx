import { useState, useCallback } from "react";
import { Notification } from "@novu/js";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "@/components/ui/context-menu";
import {
  Mail,
  Trash2,
  Clock,
  BellOff,
  Star,
  Copy,
  ExternalLink,
} from "lucide-react";
import {
  readNotification,
  unreadNotification,
  archiveNotification,
} from "./hooks/novuHooks";
import { NotificationActionIcon } from "./actionIcons";
import { NotificationStatusIcon } from "./statusIcons";
import { NotificationTime } from "./timeFormater";
import Image from "next/image";

interface NotificationItemProps {
  notification: Notification;
  onClick?: (notification: Notification) => void;
  onStateChange?: (notification: Notification, isRead: boolean) => void;
  onDelete?: (notification: Notification) => void;
}

interface NotificationData {
  participantAvatar?: string;
  participant?: string;
  [key: string]: unknown;
}

export const NotificationItem = ({
  notification,
  onClick,
  onStateChange,
  onDelete,
}: NotificationItemProps) => {
  const [isRead, setIsRead] = useState(notification.isRead);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const data = notification.data as NotificationData;

  const avatarSrc =
    data?.participantAvatar || "https://dashboard.novu.co/images/avatar.svg";
  const actorName = data?.participant || "User";

  const handleMarkAsRead = useCallback(async () => {
    try {
      await readNotification(notification);
      setIsRead(true);
      onStateChange?.(notification, true);
    } catch (error) {
      console.error("Failed to mark as read:", error);
    }
  }, [notification, onStateChange]);

  const handleMarkAsUnread = useCallback(async () => {
    try {
      await unreadNotification(notification);
      setIsRead(false);
      onStateChange?.(notification, false);
    } catch (error) {
      console.error("Failed to mark as unread:", error);
    }
  }, [notification, onStateChange]);

  const handleArchive = useCallback(async () => {
    try {
      setIsDeleting(true);

      setIsDeleted(true);

      onDelete?.(notification);

      await archiveNotification(notification);
    } catch (error) {
      console.error("Failed to archive:", error);

      setIsDeleting(false);
      setIsDeleted(false);
    }
  }, [notification, onDelete]);

  const handleUnsubscribe = useCallback(() => {}, []);

  const handleNotificationClick = useCallback(async () => {
    onClick?.(notification);

    if (!isRead) {
      try {
        await readNotification(notification);
        setIsRead(true);
        onStateChange?.(notification, true);
      } catch (error) {
        console.error("Failed to mark as read on click:", error);
      }
    }
  }, [notification, onClick, isRead, onStateChange]);

  if (isDeleted) {
    return null;
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          className={`py-3 px-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors border-b border-zinc-200 dark:border-zinc-800 ${!isRead ? "bg-blue-50 dark:bg-blue-900/10" : ""} ${isDeleting ? "opacity-50 pointer-events-none" : ""}`}
          role="button"
          aria-label={`Notification: ${notification.subject}`}
          onClick={handleNotificationClick}
        >
          <div className="flex items-center gap-3">
            {/* Avatar with action icon badge */}
            <div className="relative flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden flex items-center justify-center">
                {avatarSrc ? (
                  <Image
                    src={avatarSrc}
                    alt={`${actorName}'s avatar`}
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                    onError={(e) => {
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
                      <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                    )}
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                      {notification.subject}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5 truncate">
                    {notification.body || "No description available"}
                  </p>
                </div>

                {/* Status and time */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <NotificationStatusIcon notification={notification} />
                  <NotificationTime timestamp={notification.createdAt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContextMenuTrigger>

      {/* Context Menu Content */}
      <ContextMenuContent className="w-64">
        {isRead ? (
          <ContextMenuItem className="gap-3" onClick={handleMarkAsUnread}>
            <Mail className="h-4 w-4" />
            Mark as unread
            <ContextMenuShortcut>U</ContextMenuShortcut>
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
            <ContextMenuShortcut>U</ContextMenuShortcut>
          </ContextMenuItem>
        )}

        <ContextMenuItem
          className="gap-3"
          onClick={handleArchive}
          disabled={isDeleting}
        >
          <Trash2 className="h-4 w-4" />
          {isDeleting ? "Deleting..." : "Delete notification"}
        </ContextMenuItem>

        <ContextMenuItem className="gap-3" disabled>
          <Clock className="h-4 w-4" />
          Snooze
          <ContextMenuShortcut>H</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuItem className="gap-3" onClick={handleUnsubscribe}>
          <BellOff className="h-4 w-4" />
          Unsubscribe
          <ContextMenuShortcut>⇧S</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuItem className="gap-3" disabled>
          <Star className="h-4 w-4" />
          Favorite
          <ContextMenuShortcut>F</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem className="gap-3" disabled>
          <Copy className="h-4 w-4" />
          Copy
        </ContextMenuItem>

        <ContextMenuItem className="gap-3" disabled>
          <ExternalLink className="h-4 w-4" />
          Open in desktop app
          <ContextMenuShortcut>⌃⌘</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

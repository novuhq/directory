import React from "react";
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "@/components/ui/context-menu";

import { Notification } from "@novu/js";
import {
  unreadNotification,
  readNotification,
  archiveNotification,
} from "./hooks/novuHooks";

import { useToast } from "@/components/ui/use-toast";
import {
  Mail,
  Trash2,
  Clock,
  BellOff,
  Star,
  Copy,
  ExternalLink,
} from "lucide-react";

interface NotificationContextMenuProps {
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

// Component for notification context menu
export const NotificationContextMenu = ({
  notification,
  isReadOverride,
  onMarkAsRead,
  onMarkAsUnread,
  onDelete,
  onSnooze,
  onUnsubscribe,
  onFavorite,
  onCopy,
  onOpenInDesktop,
}: NotificationContextMenuProps) => {
  const { toast } = useToast();

  const handleUnread = async () => {
    await unreadNotification(notification);
    onMarkAsUnread();
    toast({
      title: "Notification marked as unread",
      description: "The notification has been successfully marked as unread.",
    });
  };

  const handleRead = async () => {
    await readNotification(notification);
    onMarkAsRead();
    toast({
      title: "Notification marked as read",
      description: "The notification has been successfully marked as read.",
    });
  };

  const handleArchive = async () => {
    try {
      await archiveNotification(notification);
      onDelete();
      toast({
        title: "Notification archived",
        description: "The notification has been successfully archived.",
      });
    } catch (error) {
      console.error("Failed to archive:", error);
      toast({
        title: "Error",
        description: "Failed to archive the notification.",
      });
    }
  };

  return (
    <ContextMenuContent className="w-64">
      {!isReadOverride ? (
        <ContextMenuItem className="gap-3" onClick={handleRead}>
          <div className="relative">
            <Mail className="h-4 w-4" />
            {!isReadOverride && (
              <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
            )}
          </div>
          Mark as read
          <ContextMenuShortcut>U</ContextMenuShortcut>
        </ContextMenuItem>
      ) : (
        <ContextMenuItem className="gap-3" onClick={handleUnread}>
          <Mail className="h-4 w-4" />
          Mark as unread
          <ContextMenuShortcut>U</ContextMenuShortcut>
        </ContextMenuItem>
      )}

      <ContextMenuItem className="gap-3" onClick={handleArchive}>
        <Trash2 className="h-4 w-4" />
        Delete notification
      </ContextMenuItem>

      <ContextMenuItem className="gap-3" onClick={onSnooze} disabled>
        <Clock className="h-4 w-4" />
        Snooze
        <ContextMenuShortcut>H</ContextMenuShortcut>
      </ContextMenuItem>

      <ContextMenuItem className="gap-3" onClick={onUnsubscribe} disabled>
        <BellOff className="h-4 w-4" />
        Unsubscribe
        <ContextMenuShortcut>⇧S</ContextMenuShortcut>
      </ContextMenuItem>

      <ContextMenuItem className="gap-3" onClick={onFavorite} disabled>
        <Star className="h-4 w-4" />
        Favorite
        <ContextMenuShortcut>F</ContextMenuShortcut>
      </ContextMenuItem>

      <ContextMenuSeparator />

      <ContextMenuItem className="gap-3" onClick={onCopy} disabled>
        <Copy className="h-4 w-4" />
        Copy
      </ContextMenuItem>

      <ContextMenuItem className="gap-3" onClick={onOpenInDesktop} disabled>
        <ExternalLink className="h-4 w-4" />
        Open in desktop app
        <ContextMenuShortcut>⌃⌘</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  );
};

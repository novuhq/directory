import React from "react";
import {
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
import { NotificationContextMenuProps } from "./types";

export const NotificationContextMenu: React.FC<
  NotificationContextMenuProps
> = ({
  notification,
  onMarkAsRead,
  onMarkAsUnread,
  onDelete,
  onSnooze,
  onUnsubscribe,
  onFavorite,
  onCopy,
  onOpenInDesktop,
}) => {
  // Use the override value if provided, otherwise use the notification's isRead property
  const isRead = notification.isRead;

  return (
    <ContextMenuContent className="w-64">
      {isRead ? (
        <ContextMenuItem className="gap-3" onClick={onMarkAsUnread}>
          <div className="relative">
            <Mail className="h-4 w-4" />
            <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-blue-500" />
          </div>
          Mark as unread
          <ContextMenuShortcut>U</ContextMenuShortcut>
        </ContextMenuItem>
      ) : (
        <ContextMenuItem className="gap-3" onClick={onMarkAsRead}>
          <Mail className="h-4 w-4" />
          Mark as read
          <ContextMenuShortcut>U</ContextMenuShortcut>
        </ContextMenuItem>
      )}

      <ContextMenuItem className="gap-3" onClick={onDelete}>
        <Trash2 className="h-4 w-4" />
        Delete notification
      </ContextMenuItem>

      <ContextMenuItem className="gap-3" onClick={onSnooze}>
        <Clock className="h-4 w-4" />
        Snooze
        <ContextMenuShortcut>H</ContextMenuShortcut>
      </ContextMenuItem>

      <ContextMenuItem className="gap-3" onClick={onUnsubscribe}>
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

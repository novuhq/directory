import { Notification } from "@novu/nextjs";
import { Circle } from "lucide-react";
import { NotificationActionIcon } from "./actionIcons";
import { NotificationTime } from "./timeFormater";
import { NotificationContextMenu } from "./NotificationContextMenu";
import Image from "next/image";
import { getSubscriberId } from "@/lib/subscriberUtils";
import { readNotification } from "./hooks/novuHooks";

interface NotificationItemProps {
  notification: Notification;
  onRefresh?: () => void;
}

export const NotificationItem = ({
  notification,
  onRefresh,
}: NotificationItemProps) => {
  const isRead = Boolean(notification.isRead);
  const avatarSrc = String(notification.avatar || '');
  const identifier =
    String(notification.data?.identifier || 
    notification.subject || 
    'Unknown');
  const title = String(notification.data?.title || 'No title');
  const description = String(notification.body || '');
  const eventTime = String(notification.createdAt || new Date().toISOString());
  const action = String(notification.data?.action || '');
  const actorName = String((notification.data?.performedBy as { name?: string })?.name || '');

  const handleNotificationClick = async () => {
    // Mark as read if notification is not already read
    if (!isRead) {
      try {
        const result = await readNotification(notification);
        if (result.success) {
          // Trigger refresh to update the UI
          onRefresh?.();
        } else {
          console.error("Failed to mark notification as read:", result.error);
        }
      } catch (error) {
        console.error("Failed to mark notification as read:", error);
      }
    }
  };

  return (
    <NotificationContextMenu
      notification={notification}
      isRead={isRead}
      subscriberId={getSubscriberId()}
      onRefresh={onRefresh}
    >
      <div
        className={`py-3 px-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors border-b border-zinc-200 dark:border-zinc-800 ${!isRead ? "bg-blue-50 dark:bg-blue-900/10" : ""}`}
        role="button"
        aria-label={`Notification: ${identifier} - ${title}`}
        onClick={handleNotificationClick}
      >
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden flex items-center justify-center">
              {avatarSrc ? (
                <Image
                  src={avatarSrc}
                  alt={`${actorName}'s avatar`}
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden flex items-center justify-center">
                  <span className="text-sm font-medium">
                    {actorName ? actorName.charAt(0).toUpperCase() : '?'}
                  </span>
                </div>
              )}
            </div>

            <div className="absolute -bottom-1 -right-1 rounded-full bg-white dark:bg-zinc-900 p-0.5 border border-zinc-200 dark:border-zinc-700">
              <NotificationActionIcon action={action} />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center w-full">
              <div className="flex-1 min-w-0 overflow-hidden pr-3">
                <div className="flex items-center gap-2">
                  {!isRead && (
                    <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                  )}
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">
                    {identifier && (
                      <span className="text-zinc-500 dark:text-zinc-400 mr-2">
                        {identifier}
                      </span>
                    )}
                    {title}
                  </h3>
                </div>

                {description && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5 truncate">
                    {description}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <Circle
                  className="w-3.5 h-3.5 text-gray-400"
                  aria-label="Default state"
                />
                <NotificationTime timestamp={eventTime} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NotificationContextMenu>
  );
};

import { Novu, Notification } from "@novu/js";

const subscriberId = process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID;
const applicationIdentifier =
  process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER;

// Only create Novu instance if environment variables are available
const novu = subscriberId && applicationIdentifier 
  ? new Novu({
      subscriberId: subscriberId,
      applicationIdentifier: applicationIdentifier,
    })
  : null;

export const readNotification = async (notification: Notification) => {
  if (!novu) {
    console.warn("Novu not configured - cannot read notification");
    return;
  }
  await novu.notifications.read({ notificationId: notification.id });
};

export const archiveNotification = async (notification: Notification) => {
  if (!novu) {
    console.warn("Novu not configured - cannot archive notification");
    return;
  }
  await novu.notifications.archive({ notificationId: notification.id });
};

export const unreadNotification = async (notification: Notification) => {
  if (!novu) {
    console.warn("Novu not configured - cannot mark notification as unread");
    return;
  }
  await novu.notifications.unread({ notificationId: notification.id });
};

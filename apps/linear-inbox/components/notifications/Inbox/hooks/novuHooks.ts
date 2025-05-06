import { Novu, Notification } from "@novu/js";

const subscriberId = process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID;
const applicationIdentifier =
  process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER;

if (!subscriberId || !applicationIdentifier) {
  throw new Error("Novu environment variables are not properly configured");
}

const novu = new Novu({
  subscriberId: subscriberId,
  applicationIdentifier: applicationIdentifier,
});

export const readNotification = async (notification: Notification) => {
  await novu.notifications.read({ notificationId: notification.id });
};

export const archiveNotification = async (notification: Notification) => {
  await novu.notifications.archive({ notificationId: notification.id });
};

export const unreadNotification = async (notification: Notification) => {
  await novu.notifications.unread({ notificationId: notification.id });
};

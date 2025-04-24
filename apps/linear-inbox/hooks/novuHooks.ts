import { Novu } from "@novu/js";

const novu = new Novu({
    subscriberId: "625f3fe55a55980017dd63fd",
    applicationIdentifier: "_EYlz4GL3-nL",
  });

  export async function readNotification(notificationId: string) {
    await novu.notifications.read({ notificationId: notificationId });
  }

  export async function unreadNotifications(notificationId: string) {
    await novu.notifications.unread({ notificationId: notificationId });

  }

  export async function archiveNotification(notificationId: string) {
    await novu.notifications.archive({ notificationId: notificationId });
  }

  export async function getNotificationCount() {
    const notificationCount = await novu.notifications.count();
    return notificationCount;
  }
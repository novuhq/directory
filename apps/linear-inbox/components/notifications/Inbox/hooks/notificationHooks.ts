import { Notification } from "@novu/react";

export const readNotification = async (notification: Notification) => {
  await notification.read();
};

export const unreadNotification = async (notification: Notification) => {
  await notification.unread();
};

export const archiveNotification = async (notification: Notification) => {
  await notification.archive();
};

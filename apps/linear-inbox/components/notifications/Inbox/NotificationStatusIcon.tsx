import React from "react";
import { Notification } from "@novu/react";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  Circle,
} from "lucide-react";
import { NotificationData } from "./types";

interface NotificationStatusIconProps {
  notification: Notification;
}

export const NotificationStatusIcon: React.FC<NotificationStatusIconProps> = ({
  notification,
}) => {
  const data = notification.data as NotificationData | undefined;
  const status = data?.status;

  switch (status) {
    case "completed":
      return (
        <CheckCircle2
          className="w-3.5 h-3.5 text-green-500"
          aria-label="Completed status"
        />
      );
    case "canceled":
      return (
        <XCircle
          className="w-3.5 h-3.5 text-red-500"
          aria-label="Canceled status"
        />
      );
    case "overdue":
      return (
        <AlertCircle
          className="w-3.5 h-3.5 text-red-500"
          aria-label="Overdue status"
        />
      );
    case "in-progress":
      return (
        <Clock
          className="w-3.5 h-3.5 text-blue-500"
          aria-label="In progress status"
        />
      );
    default:
      return (
        <Circle
          className="w-3.5 h-3.5 text-gray-400"
          aria-label="Pending status"
        />
      );
  }
};

import React, { useMemo } from "react";
import { Notification } from "@novu/react";
import {
  CheckCircle,
  AtSign,
  ArrowRight,
  CornerUpLeft,
  MessageSquare,
  XCircle,
  Circle,
  Clock,
} from "lucide-react";
import { ACTION_TYPES } from "./constants";

interface NotificationActionIconProps {
  notification: Notification;
}

export const NotificationActionIcon: React.FC<NotificationActionIconProps> = ({
  notification,
}) => {
  const iconType = useMemo(() => {
    const subject = notification.subject?.toLowerCase() || "";
    const body = notification.body?.toLowerCase() || "";
    const content = `${subject} ${body}`;

    // Check for action types
    if (ACTION_TYPES.COMPLETED.some((term) => content.includes(term))) {
      return "completed";
    }
    if (ACTION_TYPES.MENTIONED.some((term) => content.includes(term))) {
      return "mentioned";
    }
    if (ACTION_TYPES.ASSIGNED.some((term) => content.includes(term))) {
      return "assigned";
    }
    if (ACTION_TYPES.REPLIED.some((term) => content.includes(term))) {
      return "replied";
    }
    if (ACTION_TYPES.COMMENTED.some((term) => content.includes(term))) {
      return "commented";
    }
    if (ACTION_TYPES.CANCELED.some((term) => content.includes(term))) {
      return "canceled";
    }
    if (ACTION_TYPES.OVERDUE.some((term) => content.includes(term))) {
      return "overdue";
    }

    return "default";
  }, [notification.subject, notification.body]);

  // Render the appropriate icon based on the action type
  switch (iconType) {
    case "completed":
      return (
        <CheckCircle
          className="w-3.5 h-3.5 text-green-500"
          aria-label="Completed"
        />
      );
    case "mentioned":
      return (
        <AtSign className="w-3.5 h-3.5 text-blue-500" aria-label="Mentioned" />
      );
    case "assigned":
      return (
        <ArrowRight
          className="w-3.5 h-3.5 text-purple-500"
          aria-label="Assigned"
        />
      );
    case "replied":
      return (
        <CornerUpLeft
          className="w-3.5 h-3.5 text-cyan-500"
          aria-label="Replied"
        />
      );
    case "commented":
      return (
        <MessageSquare
          className="w-3.5 h-3.5 text-blue-400"
          aria-label="Commented"
        />
      );
    case "canceled":
      return (
        <XCircle className="w-3.5 h-3.5 text-red-500" aria-label="Canceled" />
      );
    case "overdue":
      return (
        <Clock className="w-3.5 h-3.5 text-red-500" aria-label="Overdue" />
      );
    default:
      return (
        <Circle className="w-3.5 h-3.5 text-gray-400" aria-label="Default" />
      );
  }
};

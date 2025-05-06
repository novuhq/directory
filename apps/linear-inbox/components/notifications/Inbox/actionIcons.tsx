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

import { Notification } from "@novu/js";

const ACTION_TYPES = {
  COMPLETED: ["completed", "marked as completed"],
  MENTIONED: ["mentioned"],
  ASSIGNED: ["assigned"],
  REPLIED: ["replied"],
  COMMENTED: ["commented"],
  CANCELED: ["canceled", "marked as canceled"],
  OVERDUE: ["past due date"],
};

const contentContains = (content: string, terms: string[]) => {
  return terms.some((term) => content.includes(term));
};

export const NotificationActionIcon = ({
  notification,
}: {
  notification: Notification;
}) => {
  const subject = notification.subject?.toLowerCase() || "";
  const body = notification.body?.toLowerCase() || "";
  const content = `${subject} ${body}`;

  if (contentContains(content, ACTION_TYPES.COMPLETED)) {
    return (
      <CheckCircle
        className="w-3.5 h-3.5 text-green-500"
        aria-label="Completed"
      />
    );
  }
  if (contentContains(content, ACTION_TYPES.MENTIONED)) {
    return (
      <AtSign className="w-3.5 h-3.5 text-blue-500" aria-label="Mentioned" />
    );
  }
  if (contentContains(content, ACTION_TYPES.ASSIGNED)) {
    return (
      <ArrowRight
        className="w-3.5 h-3.5 text-purple-500"
        aria-label="Assigned"
      />
    );
  }
  if (contentContains(content, ACTION_TYPES.REPLIED)) {
    return (
      <CornerUpLeft
        className="w-3.5 h-3.5 text-cyan-500"
        aria-label="Replied"
      />
    );
  }
  if (contentContains(content, ACTION_TYPES.COMMENTED)) {
    return (
      <MessageSquare
        className="w-3.5 h-3.5 text-blue-400"
        aria-label="Commented"
      />
    );
  }
  if (contentContains(content, ACTION_TYPES.CANCELED)) {
    return (
      <XCircle className="w-3.5 h-3.5 text-red-500" aria-label="Canceled" />
    );
  }
  if (contentContains(content, ACTION_TYPES.OVERDUE)) {
    return <Clock className="w-3.5 h-3.5 text-red-500" aria-label="Overdue" />;
  }

  return <Circle className="w-3.5 h-3.5 text-gray-400" aria-label="Default" />;
};

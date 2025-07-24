import {
  CheckCircle,
  AtSign,
  UserPlus,
  Reply,
  MessageSquare,
  XCircle,
  Circle,
  Clock,
  Plus,
  GitBranch,
  Tag,
  Archive,
} from "lucide-react";

const ACTION_TYPES = {
  COMPLETED: ["completed", "marked as completed"],
  MENTIONED: ["mentioned"],
  ASSIGNED: ["assigned"],
  REPLIED: ["replied"],
  COMMENTED: ["commented"],
  CANCELED: ["canceled", "marked as canceled"],
  OVERDUE: ["past due date", "past due"],
  TRIAGED: ["triaged"],
  CREATED: ["created"],
  STATUS_CHANGED: ["statuschanged"],
  CLOSED: ["closed"],
};

export const NotificationActionIcon  = ({ action }: { action: string }) => {
  const actionLower = action.toLowerCase();

    if (ACTION_TYPES.COMPLETED.includes(actionLower)) {
      return (
        <CheckCircle
          className="w-3.5 h-3.5 text-green-500"
          aria-label="Completed"
        />
      );
    }
    if (ACTION_TYPES.MENTIONED.includes(actionLower)) {
      return (
        <AtSign className="w-3.5 h-3.5 text-blue-500" aria-label="Mentioned" />
      );
    }
    if (ACTION_TYPES.ASSIGNED.includes(actionLower)) {
      return (
        <UserPlus
          className="w-3.5 h-3.5 text-purple-500"
          aria-label="Assigned"
        />
      );
    }
    if (ACTION_TYPES.REPLIED.includes(actionLower)) {
      return (
        <Reply
          className="w-3.5 h-3.5 text-cyan-500"
          aria-label="Replied"
        />
      );
    }
    if (ACTION_TYPES.COMMENTED.includes(actionLower)) {
      return (
        <MessageSquare
          className="w-3.5 h-3.5 text-blue-400"
          aria-label="Commented"
        />
      );
    }
    if (ACTION_TYPES.CANCELED.includes(actionLower)) {
      return (
        <XCircle className="w-3.5 h-3.5 text-red-500" aria-label="Canceled" />
      );
    }
    if (ACTION_TYPES.OVERDUE.includes(actionLower)) {
      return <Clock className="w-3.5 h-3.5 text-red-500" aria-label="Overdue" />;
    }
    if (ACTION_TYPES.TRIAGED.includes(actionLower)) {
      return (
        <Tag
          className="w-3.5 h-3.5 text-orange-500"
          aria-label="Triaged"
        />
      );
    }
    if (ACTION_TYPES.CREATED.includes(actionLower)) {
      return (
        <Plus
          className="w-3.5 h-3.5 text-green-600"
          aria-label="Created"
        />
      );
    }
    if (ACTION_TYPES.STATUS_CHANGED.includes(actionLower)) {
      return (
        <GitBranch
          className="w-3.5 h-3.5 text-indigo-500"
          aria-label="Status Changed"
        />
      );
    }
    if (ACTION_TYPES.CLOSED.includes(actionLower)) {
      return (
        <Archive
          className="w-3.5 h-3.5 text-gray-500"
          aria-label="Closed"
        />
      );
    }

  return <Circle className="w-3.5 h-3.5 text-gray-400" aria-label="Default" />;
};

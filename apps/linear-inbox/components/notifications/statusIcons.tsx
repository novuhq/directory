import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Circle,
  Inbox,
  Play,
  Archive,
} from "lucide-react";

import { Notification } from "@novu/nextjs";

interface NotificationData {
  stateId?: string;
  stateLabel?: string;
  [key: string]: unknown;
}

// Component for rendering state icons based on Linear issue states
export const NotificationStateIcon = ({
  notification,
}: {
  notification: Notification;
}) => {
  const data = notification.data as NotificationData;
  const stateId = data?.stateId;
  const stateLabel = data?.stateLabel;

  // Map Linear state IDs to appropriate icons
  switch (stateId) {
    case "triage":
      return (
        <AlertCircle
          className="w-3.5 h-3.5 text-orange-500"
          aria-label="Triage state"
        />
      );
    case "backlog":
      return (
        <Inbox
          className="w-3.5 h-3.5 text-gray-500"
          aria-label="Backlog state"
        />
      );
    case "in-progress":
    case "in_progress":
      return (
        <Play
          className="w-3.5 h-3.5 text-blue-500"
          aria-label="In progress state"
        />
      );
    case "completed":
    case "done":
      return (
        <CheckCircle2
          className="w-3.5 h-3.5 text-green-500"
          aria-label="Completed state"
        />
      );
    case "canceled":
    case "cancelled":
      return (
        <XCircle
          className="w-3.5 h-3.5 text-red-500"
          aria-label="Canceled state"
        />
      );
    case "archived":
      return (
        <Archive
          className="w-3.5 h-3.5 text-gray-400"
          aria-label="Archived state"
        />
      );
    default:
      // Fallback to state label parsing if stateId is not available
      const label = stateLabel?.toLowerCase() || "";

      if (label.includes("triage")) {
        return (
          <AlertCircle
            className="w-3.5 h-3.5 text-orange-500"
            aria-label="Triage state"
          />
        );
      }
      if (label.includes("backlog")) {
        return (
          <Inbox
            className="w-3.5 h-3.5 text-gray-500"
            aria-label="Backlog state"
          />
        );
      }
      if (label.includes("progress") || label.includes("in progress")) {
        return (
          <Play
            className="w-3.5 h-3.5 text-blue-500"
            aria-label="In progress state"
          />
        );
      }
      if (label.includes("complete") || label.includes("done")) {
        return (
          <CheckCircle2
            className="w-3.5 h-3.5 text-green-500"
            aria-label="Completed state"
          />
        );
      }
      if (label.includes("cancel")) {
        return (
          <XCircle
            className="w-3.5 h-3.5 text-red-500"
            aria-label="Canceled state"
          />
        );
      }
      if (label.includes("archive")) {
        return (
          <Archive
            className="w-3.5 h-3.5 text-gray-400"
            aria-label="Archived state"
          />
        );
      }

      // Default fallback
      return (
        <Circle
          className="w-3.5 h-3.5 text-gray-400"
          aria-label="Default state"
        />
      );
  }
};

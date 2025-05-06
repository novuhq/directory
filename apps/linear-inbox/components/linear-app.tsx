"use client";

import { useState, useCallback } from "react";
import { Sidebar } from "@/components/sidebar";
import { IssueDetailSkeleton } from "@/components/issue-detail-skeleton";
import { IssueDetail } from "@/components/issue-detail";
import { LinearInbox } from "./notifications/inbox/NovuInbox";
import { Notification } from "@novu/js";

interface IssueDetail {
  issueId: string;
  issueTitle: string;
}

export function LinearApp() {
  const [selectedIssue, setSelectedIssue] = useState<IssueDetail | null>(null);
  const [selectedNotification, setSelectedNotification] = useState<
    Notification | undefined
  >(undefined);

  // Handle notification click to show issue details
  const handleNotificationClick = (notification: Notification) => {
    // Extract issue ID from notification payload
    const issueId = (notification.data?.issueId as string) || "";
    const issueTitle = (notification.data?.issueTitle as string) || "";

    setSelectedIssue({ issueId, issueTitle });
    setSelectedNotification(notification);
  };

  // Handle notification deletion
  const handleDelete = useCallback(() => {
    setSelectedIssue(null);
    setSelectedNotification(undefined);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Middle Panel - Inbox List */}
      <div className="w-[400px] border-r flex flex-col overflow-hidden">
        <LinearInbox handleNotificationClick={handleNotificationClick} />
      </div>

      {/* Right Panel - Issue Details or Skeleton */}
      <div className="flex-1 overflow-auto">
        {selectedIssue ? (
          <IssueDetail
            issueId={selectedIssue.issueId}
            issueTitle={selectedIssue.issueTitle}
            notification={selectedNotification}
            onDelete={handleDelete}
          />
        ) : (
          <IssueDetailSkeleton />
        )}
      </div>
    </div>
  );
}

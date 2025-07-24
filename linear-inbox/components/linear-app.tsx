"use client";

import { Sidebar } from "@/components/sidebar";
import { IssueDetail } from "@/components/issue-detail";
import CustomInbox from "./notifications/Inbox";

export function LinearApp() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Middle Panel - Notifications Inbox */}
      <div className="w-[400px] border-r flex flex-col overflow-hidden bg-background">
        <CustomInbox />
      </div>

      {/* Right Panel - Issue Details */}
      <div className="flex-1 overflow-auto bg-background">
        <IssueDetail />
      </div>
    </div>
  );
}
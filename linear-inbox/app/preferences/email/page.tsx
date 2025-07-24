// pages/preferences/email.tsx
"use client";

import { NotificationCard } from "@/components/notifications/preferences/notifications/NotificationCard";
import { NotificationToggle } from "@/components/notifications/preferences/notifications/NotificationToggle";
import { FormSelect } from "@/components/notifications/preferences/ui/FormSelect";
import { PreferencesLayout } from "@/components/notifications/preferences/layout/PreferencesLayout";
import { useState, useEffect } from "react";
import { useWorkflowChannelPreferences } from "@/components/notifications/preferences/hooks/updatePreferences";

const WORKFLOW_IDS = {
  documentChanges: "document-changes-workflow-id",
  projectUpdates: "project-updates-workflow-id",
  teamMemberChanges: "team-member-changes-workflow-id",
  weeklySummary: "weekly-summary-workflow-id",
};

export default function EmailNotificationsPage() {
  // Get preferences using custom hook
  const { isLoading, error, isChannelEnabled, updateChannelPreference } =
    useWorkflowChannelPreferences();

  // Check if email is enabled for each workflow
  const isDocumentEmailEnabled = isChannelEnabled(
    WORKFLOW_IDS.documentChanges,
    "email",
  );
  const isProjectUpdatesEmailEnabled = isChannelEnabled(
    WORKFLOW_IDS.projectUpdates,
    "email",
  );
  const isTeamMemberChangesEmailEnabled = isChannelEnabled(
    WORKFLOW_IDS.teamMemberChanges,
    "email",
  );
  const isWeeklySummaryEmailEnabled = isChannelEnabled(
    WORKFLOW_IDS.weeklySummary,
    "email",
  );

  // State for each checkbox (fallback values in case API fails)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [documentChanges, setDocumentChanges] = useState<boolean>(isDocumentEmailEnabled || true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [projectUpdates, setProjectUpdates] = useState<boolean>(isProjectUpdatesEmailEnabled || true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [teamMemberChanges, setTeamMemberChanges] = useState<boolean>(isTeamMemberChangesEmailEnabled || true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [weeklySummary, setWeeklySummary] = useState<boolean>(isWeeklySummaryEmailEnabled || true);

  // Update preferences functions for each workflow
  const updateDocumentEmailPreference = (enabled: boolean) => {
    updateChannelPreference(WORKFLOW_IDS.documentChanges, "email", enabled);
  };

  const updateProjectUpdatesEmailPreference = (enabled: boolean) => {
    updateChannelPreference(WORKFLOW_IDS.projectUpdates, "email", enabled);
  };

  const updateTeamMemberChangesEmailPreference = (enabled: boolean) => {
    updateChannelPreference(WORKFLOW_IDS.teamMemberChanges, "email", enabled);
  };

  const updateWeeklySummaryEmailPreference = (enabled: boolean) => {
    updateChannelPreference(WORKFLOW_IDS.weeklySummary, "email", enabled);
  };

  // Sync local state with API preferences when they load
  useEffect(() => {
    if (!isLoading) {
      setDocumentChanges(isDocumentEmailEnabled || true);
      setProjectUpdates(isProjectUpdatesEmailEnabled || true);
      setTeamMemberChanges(isTeamMemberChangesEmailEnabled || true);
      setWeeklySummary(isWeeklySummaryEmailEnabled || true);
    }
  }, [
    isLoading,
    isDocumentEmailEnabled,
    isProjectUpdatesEmailEnabled,
    isTeamMemberChangesEmailEnabled,
    isWeeklySummaryEmailEnabled,
  ]);

  // Logging function
  const logChange = () => {
    // Empty function as it's not currently used
  };

  // Show loading state
  if (isLoading) {
    return (
      <PreferencesLayout title="Email Notifications">
        <div>Loading your notification preferences...</div>
      </PreferencesLayout>
    );
  }

  // Show error state
  if (error) {
    return (
      <PreferencesLayout title="Email Notifications">
        <div>Error loading preferences: {error.message}</div>
      </PreferencesLayout>
    );
  }

  return (
    <PreferencesLayout title="Email Notifications">
      <NotificationCard
        title="Email notification settings"
        description="Choose which notifications you receive via email"
      >
        <NotificationToggle
          id="email-documents"
          title="Document changes"
          description="When documents are created or updated"
          defaultChecked={isDocumentEmailEnabled}
          onChange={(checked) => {
            setDocumentChanges(checked);
            updateDocumentEmailPreference(checked);
            logChange();
          }}
        />

        <NotificationToggle
          id="email-projects"
          title="Project updates"
          description="When project details or settings change"
          defaultChecked={isProjectUpdatesEmailEnabled}
          onChange={(checked) => {
            setProjectUpdates(checked);
            updateProjectUpdatesEmailPreference(checked);
            logChange();
          }}
        />

        <NotificationToggle
          id="email-team"
          title="Team member changes"
          description="When team members are added or removed"
          defaultChecked={isTeamMemberChangesEmailEnabled}
          onChange={(checked) => {
            setTeamMemberChanges(checked);
            updateTeamMemberChangesEmailPreference(checked);
            logChange();
          }}
        />

        <NotificationToggle
          id="email-summary"
          title="Weekly summary"
          description="Weekly digest of workspace activity"
          defaultChecked={isWeeklySummaryEmailEnabled}
          onChange={(checked) => {
            setWeeklySummary(checked);
            updateWeeklySummaryEmailPreference(checked);
            logChange();
          }}
          hasBorder={false}
        />
      </NotificationCard>

      <NotificationCard
        title="Email preferences"
        description="Configure how you receive email notifications"
      >
        <FormSelect
          label="Notification frequency"
          description="How often you receive notification emails"
          options={["Immediately", "Daily digest", "Weekly digest"]}
          defaultValue="Immediately"
          onChange={(value) => {
            // Handle frequency change
          }}
        />

        <FormSelect
          label="Email format"
          description="Choose your preferred email format"
          options={["HTML", "Plain text"]}
          defaultValue="HTML"
          onChange={(value) => {
            // Handle format change
          }}
          hasBorder={false}
        />
      </NotificationCard>
    </PreferencesLayout>
  );
}

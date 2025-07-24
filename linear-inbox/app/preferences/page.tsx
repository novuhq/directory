"use client";

// pages/preferences/index.tsx
import { useState, useEffect } from "react";
import { NotificationCard } from "@/components/notifications/preferences/notifications/NotificationCard";
import { NotificationToggle } from "@/components/notifications/preferences/notifications/NotificationToggle";
import { NotificationChannels } from "@/components/notifications/preferences/notifications/NotificationChannels";
import { PreferencesLayout } from "@/components/notifications/preferences/layout/PreferencesLayout";
import { useWorkflowChannelPreferences } from "@/components/notifications/preferences/hooks/updatePreferences";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { DemoModal } from "@/components/notifications/preferences/DemoModal";

export default function PreferencesPage() {
  const { updateChannelPreference, isLoading, error } = useWorkflowChannelPreferences();
  const [updateStatus, setUpdateStatus] = useState<{ success?: string; error?: string }>({});
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Show modal on first visit
  useEffect(() => {
    const hasSeenModal = localStorage.getItem("preferences-demo-modal-seen");
    
    if (hasSeenModal !== "true") {
      // Small delay to ensure the page is loaded
      const timer = setTimeout(() => {
        setShowDemoModal(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleToggleChange = async (id: string, checked: boolean) => {
    try {
      setUpdateStatus({});
      // Map the toggle IDs to workflow IDs and channel types
      const preferenceMap: Record<string, { workflowId: string; channelType: string }> = {
        "sidebar-updates": { workflowId: "linear-updates", channelType: "inApp" },
        "changelog-newsletter": { workflowId: "linear-updates", channelType: "email" },
        "invite-accepted": { workflowId: "invite-notifications", channelType: "email" },
        "privacy-updates": { workflowId: "legal-updates", channelType: "email" },
        "dpa-updates": { workflowId: "legal-updates", channelType: "email" },
      };

      const preference = preferenceMap[id];
      if (preference) {
        await updateChannelPreference(preference.workflowId, preference.channelType, checked);
        setUpdateStatus({ success: `Updated ${id} preference successfully` });
      }
    } catch (err) {
      setUpdateStatus({ error: `Failed to update ${id} preference` });
    }
  };

  return (
    <>
      <DemoModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />
      
      <PreferencesLayout title="Notifications" backLink={undefined}>
        {error && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertDescription className="text-red-800">
              Error loading preferences: {error.message}
            </AlertDescription>
          </Alert>
        )}

        {updateStatus.error && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertDescription className="text-red-800">
              {updateStatus.error}
            </AlertDescription>
          </Alert>
        )}

        {updateStatus.success && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <AlertDescription className="text-green-800">
              {updateStatus.success}
            </AlertDescription>
          </Alert>
        )}

        <div className="mb-6">
          <p className="text-zinc-500">
            Choose how to be notified for workspace activity. Notifications will
            always go to your Linear inbox.
          </p>
        </div>

        <NotificationCard
          title="Notification channels"
          description="Choose how to be notified for workspace activity"
        >
          <NotificationChannels />
        </NotificationCard>

        <NotificationCard
          title="Updates from Linear"
          description="Subscribe to product announcements and important changes from the Linear team"
        >
          <NotificationToggle
            id="sidebar-updates"
            title="Show updates in sidebar"
            description="Highlight new features and improvements in the app sidebar"
            defaultChecked
            disabled={isLoading}
            onChange={(checked) => handleToggleChange("sidebar-updates", checked)}
          />

          <NotificationToggle
            id="changelog-newsletter"
            title="Changelog newsletter"
            description="Twice a month email highlighting new features and improvements"
            hasBorder={false}
            disabled={isLoading}
            onChange={(checked) => handleToggleChange("changelog-newsletter", checked)}
          />
        </NotificationCard>

        <NotificationCard
          title="Other updates"
          description="Control other notification preferences"
        >
          <NotificationToggle
            id="invite-accepted"
            title="Invite accepted"
            description="Email when invitees accept an invite"
            defaultChecked
            disabled={isLoading}
            onChange={(checked) => handleToggleChange("invite-accepted", checked)}
          />

          <NotificationToggle
            id="privacy-updates"
            title="Privacy and legal updates"
            description="Email when privacy policies or terms of service change"
            defaultChecked
            disabled={isLoading}
            onChange={(checked) => handleToggleChange("privacy-updates", checked)}
          />

          <NotificationToggle
            id="dpa-updates"
            title="Data processing agreement (DPA)"
            description="Email when our DPA changes"
            hasBorder={false}
            disabled={isLoading}
            onChange={(checked) => handleToggleChange("dpa-updates", checked)}
          />
        </NotificationCard>

        {/* Subtle demo notice at the bottom */}
        <div className="mt-8 pt-4 border-t border-zinc-100">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Info className="h-3 w-3" />
            <span>Demo UI - placeholder workflows, not connected to actual Novu instance</span>
          </div>
        </div>
      </PreferencesLayout>
    </>
  );
}

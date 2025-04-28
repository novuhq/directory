// pages/preferences/index.tsx
import { NotificationCard } from "@/components/notifications/preferences/notifications/NotificationCard";
import { NotificationToggle } from "@/components/notifications/preferences/notifications/NotificationToggle";
import { NotificationChannels } from "@/components/notifications/preferences/notifications/NotificationChannels";
import { PreferencesLayout } from "@/components/notifications/preferences/layout/PreferencesLayout";

export default function PreferencesPage() {
  return (
    <PreferencesLayout title="Notifications" backLink={undefined}>
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
        />

        <NotificationToggle
          id="changelog-newsletter"
          title="Changelog newsletter"
          description="Twice a month email highlighting new features and improvements"
          hasBorder={false}
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
        />

        <NotificationToggle
          id="privacy-updates"
          title="Privacy and legal updates"
          description="Email when privacy policies or terms of service change"
          defaultChecked
        />

        <NotificationToggle
          id="dpa-updates"
          title="Data processing agreement (DPA)"
          description="Email when our DPA changes"
          hasBorder={false}
        />
      </NotificationCard>
    </PreferencesLayout>
  );
}

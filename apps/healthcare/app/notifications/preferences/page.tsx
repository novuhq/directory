'use client';

import { NovuPreferences } from '@/app/notifications/preferences/components/NovuPreferances';
import { NotificationsHeader } from '@/app/notifications/components/NotificationHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { PatientDashboardLayout } from '@/components/patient-dashboard-layout';

export default function NotificationsPage() {
  return (
    <PatientDashboardLayout>
      <div className="flex flex-col gap-6 w-full max-w-[1800px] mx-auto px-4">
        <Breadcrumb
          items={[
            { label: 'Dashboard', href: '/' },
            { label: 'Notifications', href: '/notifications' },
            { label: 'Preferences', href: '/notifications/preferences', active: true },
          ]}
        />
        <NotificationsHeader variant="preferences" />
        <NovuPreferences />
        {/* <NotificationsList /> */}
      </div>
    </PatientDashboardLayout>
  );
}

'use client';

import { NovuInbox } from '@/app/notifications/components/NovuInbox';
import { NotificationsHeader } from '@/app/notifications/components/NotificationHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { PatientDashboardLayout } from '@/components/patient-dashboard-layout';
import { useState } from 'react';

export default function NotificationsPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <PatientDashboardLayout>
      <div className="flex flex-col gap-6 w-full max-w-[1800px] mx-auto px-4">
        <Breadcrumb
          items={[
            { label: 'Dashboard', href: '/', active: false },
            { label: 'Notifications', href: '/notifications', active: true },
          ]}
        />
        <NotificationsHeader 
          variant="default" 
          onMarkAllAsRead={() => setRefreshKey(prev => prev + 1)} 
        />
        <NovuInbox key={refreshKey} />
      </div>
    </PatientDashboardLayout>
  );
}

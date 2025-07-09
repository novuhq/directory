'use client';

import { NovuPreferences } from '@/app/notifications/preferences/components/NovuPreferences';
import { NotificationsHeader } from '@/app/notifications/components/NotificationHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { PatientDashboardLayout } from '@/components/patient-dashboard-layout';
import { useEffect } from 'react';

export default function NotificationsPage() {
  useEffect(() => {
    console.log('Preferences page mounted');
    console.log('Environment check:', {
      hasApplicationIdentifier: !!process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER,
      applicationIdentifier: process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER,
      hasSubscriberId: typeof window !== 'undefined' ? !!localStorage.getItem('healthcare-subscriber-id') : false,
      subscriberId: typeof window !== 'undefined' ? localStorage.getItem('healthcare-subscriber-id') : null
    });
  }, []);

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
        
        {/* Debug info */}
        <div className="p-4 bg-yellow-100 border border-yellow-300 rounded">
          <h3 className="font-semibold text-yellow-800">Debug Information:</h3>
          <p className="text-sm text-yellow-700">
            Application Identifier: {process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER || 'Not set'}
          </p>
          <p className="text-sm text-yellow-700">
            Subscriber ID: {typeof window !== 'undefined' ? localStorage.getItem('healthcare-subscriber-id') || 'Not set' : 'Server side'}
          </p>
        </div>
        
        <NovuPreferences />
        {/* <NotificationsList /> */}
      </div>
    </PatientDashboardLayout>
  );
}

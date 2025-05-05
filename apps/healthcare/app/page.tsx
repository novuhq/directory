'use client';
import { useUnreadCount } from '@/app/notifications/hooks/unreadCount';
import { PatientDashboardLayout } from '@/components/patient-dashboard-layout';
import { WelcomeHeader } from '@/app/components/WelcomeHeader';
import { QuickActions } from '@/app/components/QuickActions';
import { AppointmentsCard } from '@/app/components/AppointmentsCard';
import { NotificationsCard } from '@/app/components/NotificationsCard';
import { HealthMetricsCard } from '@/app/components/HealthMetricsCard';
import { MedicationsCard } from '@/app/components/MedicationsCard';
import { PreventiveCareCard } from '@/app/components/PreventiveCareCard';
import { RecentMedicalRecordsCard } from '@/app/components/RecentMedicalRecordsCard';

export default function DashboardPage() {
  const unreadCount = useUnreadCount();

  return (
    <PatientDashboardLayout>
      <div className="flex flex-col gap-6">
        <WelcomeHeader />
        <QuickActions />

        <div className="grid gap-6 md:grid-cols-2">
          <AppointmentsCard />
          <NotificationsCard unreadCount={unreadCount} />
        </div>

        <HealthMetricsCard />

        <div className="grid gap-6 md:grid-cols-2">
          <MedicationsCard />
          <PreventiveCareCard />
        </div>

        <RecentMedicalRecordsCard />
      </div>
    </PatientDashboardLayout>
  );
}

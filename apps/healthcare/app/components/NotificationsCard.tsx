'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import { DashboardInbox } from '@/components/dashboard-inbox';

export function NotificationsCard({ unreadCount }: { unreadCount: number }) {
  return (
    <Card className="ring-2 ring-sky-500 ring-offset-2">
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg font-semibold">Notifications</CardTitle>
          {unreadCount > 0 && (
            <Badge className="bg-red-100 text-red-700 hover:bg-red-200">{unreadCount} new</Badge>
          )}
        </div>
        <Link href="/notifications">
          <Button variant="ghost" size="sm" className="text-sky-600 h-8 px-2 -mr-2">
            View all
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <DashboardInbox />
    </Card>
  );
}

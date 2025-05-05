'use client';

import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, FileText, ArrowUpRight } from 'lucide-react';

export function RecentMedicalRecordsCard() {
  const records = [
    {
      title: 'Blood Test Results',
      date: 'Apr 10, 2025',
      doctor: 'Dr. Emily Johnson',
      status: 'viewable',
    },
    {
      title: 'X-Ray Report',
      date: 'Mar 22, 2025',
      doctor: 'Dr. Robert Chen',
      status: 'viewable',
    },
    {
      title: 'Allergy Test',
      date: 'Feb 15, 2025',
      doctor: 'Dr. Sarah Williams',
      status: 'processing',
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Medical Records</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="text-sky-600 h-8 px-2 -mr-2 opacity-50 cursor-not-allowed"
          disabled
        >
          View all
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {records.map((record, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-sky-100 rounded-full flex items-center justify-center">
                  <FileText className="h-5 w-5 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-medium">{record.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {record.date} • {record.doctor}
                  </p>
                </div>
              </div>
              {record.status === 'viewable' ? (
                <Button variant="ghost" size="sm" className="gap-1">
                  View
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              ) : (
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  Processing
                </Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

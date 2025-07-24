'use client';

import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ChevronRight, Calendar } from 'lucide-react';

export function PreventiveCareCard() {
  const preventiveCare = [
    {
      name: 'Annual Physical',
      status: { text: 'On track', color: 'green' },
      dueText: 'Due in 3 months',
      progress: 75,
    },
    {
      name: 'Dental Cleaning',
      status: { text: 'Overdue', color: 'red' },
      dueText: 'Overdue by 1 month',
      progress: 0,
      isOverdue: true,
    },
    {
      name: 'Eye Exam',
      status: { text: 'Completed', color: 'green' },
      dueText: 'Completed 1 month ago',
      progress: 100,
    },
    {
      name: 'Flu Vaccine',
      status: { text: 'On track', color: 'green' },
      dueText: 'Due in 5 months',
      progress: 60,
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Preventive Care</CardTitle>
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
        <div className="space-y-4">
          {preventiveCare.map((care, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{care.name}</span>
                  <Badge
                    variant="outline"
                    className={`bg-${care.status.color}-50 text-${care.status.color}-700 border-${care.status.color}-200`}
                  >
                    {care.status.text}
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">{care.dueText}</span>
              </div>
              <Progress
                value={care.progress}
                className={`h-2 ${care.isOverdue ? 'bg-red-100' : ''}`}
              />
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          <Calendar className="mr-2 h-4 w-4" />
          Schedule preventive care
        </Button>
      </CardContent>
    </Card>
  );
}

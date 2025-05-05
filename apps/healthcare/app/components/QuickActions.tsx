'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MessageSquare, Pill, FileText } from 'lucide-react';

export function QuickActions() {
  const actions = [
    {
      icon: <Calendar className="h-5 w-5 text-sky-600" />,
      title: 'Appointments',
      description: 'Schedule or manage visits',
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-sky-600" />,
      title: 'Messages',
      description: 'Communicate with your care team',
    },
    {
      icon: <Pill className="h-5 w-5 text-sky-600" />,
      title: 'Medications',
      description: 'View and refill prescriptions',
    },
    {
      icon: <FileText className="h-5 w-5 text-sky-600" />,
      title: 'Records',
      description: 'Access your medical records',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <div key={index} className="block">
          <Card className="h-full hover:border-sky-200 hover:shadow-md transition-all">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center mb-3">
                {action.icon}
              </div>
              <h3 className="font-medium mb-1">{action.title}</h3>
              <p className="text-xs text-muted-foreground">{action.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

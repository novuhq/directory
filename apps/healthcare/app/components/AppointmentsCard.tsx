'use client';

import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Clock } from 'lucide-react';

interface Appointment {
  isNext: boolean;
  date: { month: string; day: number; weekday: string };
  doctor: string;
  specialty: string;
  type: string;
  time: string;
}

export function AppointmentsCard() {
  const appointments = [
    {
      isNext: true,
      date: { month: 'APR', day: 25, weekday: 'Thu' },
      doctor: 'Dr. Emily Johnson',
      specialty: 'Primary Care',
      type: 'Virtual',
      time: '10:00 AM (30 min)',
    },
    {
      isNext: false,
      date: { month: 'MAY', day: 15, weekday: 'Wed' },
      doctor: 'Dr. Michael Chen',
      specialty: 'Dermatology',
      type: 'In-person',
      time: '2:30 PM (45 min)',
    },
    {
      isNext: false,
      date: { month: 'MAY', day: 22, weekday: 'Wed' },
      doctor: 'Dr. Sarah Williams',
      specialty: 'Nutrition Consultation',
      type: 'Virtual',
      time: '11:15 AM (60 min)',
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Upcoming Appointments</CardTitle>
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="text-sky-600 h-8 px-2 -mr-2 opacity-50 cursor-not-allowed"
            disabled
          >
            View all
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <AppointmentItem key={index} appointment={appointment} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function AppointmentItem({ appointment }: { appointment: Appointment }) {
  const { isNext, date, doctor, specialty, type, time } = appointment;

  return (
    <div className={`${isNext ? 'bg-sky-50 border border-sky-100' : 'border'} rounded-lg p-4`}>
      <div className="flex items-start gap-3">
        <div
          className={`${isNext ? 'bg-white border-sky-100' : 'bg-gray-50'} p-2 rounded-md border text-center min-w-[60px]`}
        >
          <div className={`text-xs ${isNext ? 'text-sky-600' : 'text-gray-500'} font-medium`}>
            {date.month}
          </div>
          <div className="text-xl font-bold">{date.day}</div>
          <div className="text-xs text-muted-foreground">{date.weekday}</div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-medium">{doctor}</h4>
            {type === 'Virtual' ? (
              <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200">Virtual</Badge>
            ) : (
              <Badge variant="outline">In-person</Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{specialty}</p>
          <div className="flex items-center gap-2 mt-2 text-sm">
            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-muted-foreground">{time}</span>
          </div>
        </div>
        {isNext && (
          <div className="flex flex-col gap-2">
            <Button size="sm" className="whitespace-nowrap">
              Join now
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              Reschedule
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

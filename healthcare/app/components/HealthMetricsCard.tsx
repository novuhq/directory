'use client';

import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRight, Heart, Activity } from 'lucide-react';
import { HealthMetricsChart } from '@/components/health-metrics-chart';

export function HealthMetricsCard() {
  const metrics = [
    {
      id: 'heart-rate',
      icon: <Heart className="h-4 w-4" />,
      name: 'Heart Rate',
      current: '72',
      unit: 'bpm',
      status: { text: 'Normal range', color: 'green' },
    },
    {
      id: 'blood-pressure',
      icon: <Activity className="h-4 w-4" />,
      name: 'Blood Pressure',
      current: '120/80',
      unit: 'mmHg',
      status: { text: 'Normal range', color: 'green' },
    },
    {
      id: 'temperature',
      icon: <Activity className="h-4 w-4" />,
      name: 'Weight',
      current: '165',
      unit: 'lbs',
      status: { text: '-2 lbs from last visit', color: 'amber' },
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Health Metrics</CardTitle>
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
        <Tabs defaultValue="heart-rate">
          <TabsList className="grid grid-cols-3 mb-4 bg-gray-100">
            {metrics.map((metric) => (
              <TabsTrigger
                key={metric.id}
                value={metric.id}
                className="flex items-center gap-2 data-[state=active]:bg-white"
              >
                {metric.icon}
                <span className="hidden sm:inline">{metric.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {metrics.map((metric) => (
            <TabsContent key={metric.id} value={metric.id}>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-1 flex flex-col justify-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Current</div>
                    <div className="text-4xl font-bold text-sky-600">{metric.current}</div>
                    <div className="text-sm text-muted-foreground">{metric.unit}</div>
                    <div className="mt-4 text-sm">
                      <span
                        className={`text-${metric.status.color}-600 font-medium flex items-center justify-center`}
                      >
                        {metric.status.text}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <HealthMetricsChart
                    metric={metric.id as 'heart-rate' | 'blood-pressure' | 'temperature'}
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}

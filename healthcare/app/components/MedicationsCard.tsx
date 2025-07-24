'use client';

import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Pill, Plus } from 'lucide-react';

export function MedicationsCard() {
  const medications = [
    {
      name: 'Lisinopril',
      dosage: '10mg, once daily',
      color: 'amber',
      status: { text: 'Refill soon', color: 'red' },
    },
    {
      name: 'Metformin',
      dosage: '500mg, twice daily',
      color: 'blue',
      status: { text: 'Refilled recently', color: 'green' },
    },
    {
      name: 'Vitamin D',
      dosage: '1000 IU, once daily',
      color: 'purple',
      status: { text: 'Refilled recently', color: 'green' },
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Current Medications</CardTitle>
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
          {medications.map((medication, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div
                  className={`h-10 w-10 bg-${medication.color}-100 rounded-full flex items-center justify-center`}
                >
                  <Pill className={`h-5 w-5 text-${medication.color}-600`} />
                </div>
                <div>
                  <h4 className="font-medium">{medication.name}</h4>
                  <p className="text-sm text-muted-foreground">{medication.dosage}</p>
                </div>
              </div>
              <Badge
                variant="outline"
                className={`bg-${medication.status.color}-50 text-${medication.status.color}-700 border-${medication.status.color}-200`}
              >
                {medication.status.text}
              </Badge>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          <Plus className="mr-2 h-4 w-4" />
          Request refill
        </Button>
      </CardContent>
    </Card>
  );
}

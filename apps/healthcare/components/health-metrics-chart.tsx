'use client';

import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

// Mock data for health metrics
const heartRateData = [
  { month: 'Jan', value: 72 },
  { month: 'Feb', value: 75 },
  { month: 'Mar', value: 73 },
  { month: 'Apr', value: 70 },
  { month: 'May', value: 74 },
  { month: 'Jun', value: 71 },
];

const bloodPressureData = [
  { month: 'Jan', systolic: 120, diastolic: 80 },
  { month: 'Feb', systolic: 122, diastolic: 82 },
  { month: 'Mar', systolic: 118, diastolic: 79 },
  { month: 'Apr', systolic: 121, diastolic: 80 },
  { month: 'May', systolic: 119, diastolic: 78 },
  { month: 'Jun', systolic: 120, diastolic: 80 },
];

const temperatureData = [
  { month: 'Jan', value: 98.6 },
  { month: 'Feb', value: 98.4 },
  { month: 'Mar', value: 98.7 },
  { month: 'Apr', value: 98.5 },
  { month: 'May', value: 98.6 },
  { month: 'Jun', value: 98.4 },
];

interface HealthMetricsChartProps {
  metric: 'heart-rate' | 'blood-pressure' | 'temperature';
}

export function HealthMetricsChart({ metric }: HealthMetricsChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[300px] flex items-center justify-center">Loading chart...</div>;
  }

  if (metric === 'heart-rate') {
    return (
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={heartRateData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[60, 80]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#0ea5e9"
              name="Heart Rate (bpm)"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (metric === 'blood-pressure') {
    return (
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={bloodPressureData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[70, 130]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="systolic"
              stroke="#0ea5e9"
              name="Systolic"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="diastolic"
              stroke="#6366f1"
              name="Diastolic"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (metric === 'temperature') {
    return (
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={temperatureData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[98, 99]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#0ea5e9"
              name="Temperature (°F)"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return null;
}

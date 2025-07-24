// components/ui/TimeRangeInput.tsx
"use client";

import { useState } from "react";

interface TimeRangeInputProps {
  label: string;
  description: string;
  defaultStartTime?: string;
  defaultEndTime?: string;
  onChange?: (startTime: string, endTime: string) => void;
  hasBorder?: boolean;
}

export function TimeRangeInput({
  label,
  description,
  defaultStartTime = "22:00",
  defaultEndTime = "07:00",
  onChange,
  hasBorder = true,
}: TimeRangeInputProps) {
  const [startTime, setStartTime] = useState(defaultStartTime);
  const [endTime, setEndTime] = useState(defaultEndTime);

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
    onChange?.(e.target.value, endTime);
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value);
    onChange?.(startTime, e.target.value);
  };

  return (
    <div className={`p-4 ${hasBorder ? "border-b border-zinc-200" : ""}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">{label}</h3>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="time"
            className="h-9 rounded-md border border-zinc-200 px-3"
            value={startTime}
            onChange={handleStartTimeChange}
          />
          <span className="text-zinc-500">to</span>
          <input
            type="time"
            className="h-9 rounded-md border border-zinc-200 px-3"
            value={endTime}
            onChange={handleEndTimeChange}
          />
        </div>
      </div>
    </div>
  );
}

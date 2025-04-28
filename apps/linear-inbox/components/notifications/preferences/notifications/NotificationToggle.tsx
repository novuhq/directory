// components/preferences/notifications/NotificationToggle.tsx
"use client";

import { useState, useEffect } from "react";

interface NotificationToggleProps {
  id: string;
  title: string;
  description: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  hasBorder?: boolean;
}

export function NotificationToggle({
  id,
  title,
  description,
  defaultChecked = false,
  disabled = false,
  onChange,
  hasBorder = true,
}: NotificationToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  // Update internal state if defaultChecked prop changes
  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange?.(e.target.checked);
  };

  return (
    <div className={`p-4 ${hasBorder ? "border-b border-zinc-200" : ""}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={id}
            className="h-4 w-4"
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

// components/preferences/notifications/NotificationToggle.tsx
"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

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
  const [isUpdating, setIsUpdating] = useState(false);

  // Update internal state if defaultChecked prop changes
  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setChecked(newValue);
    
    if (onChange) {
      setIsUpdating(true);
      try {
        await onChange(newValue);
      } catch (error) {
        // Revert the change if it failed
        setChecked(!newValue);
        console.error("Failed to update preference:", error);
      } finally {
        setIsUpdating(false);
      }
    }
  };

  const isDisabled = disabled || isUpdating;

  return (
    <div className={`p-4 ${hasBorder ? "border-b border-zinc-200" : ""}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
        <div className="flex items-center space-x-2">
          {isUpdating && (
            <Loader2 className="h-4 w-4 animate-spin text-zinc-400" />
          )}
          <input
            type="checkbox"
            id={id}
            className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
            checked={checked}
            disabled={isDisabled}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

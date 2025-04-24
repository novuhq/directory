// components/ui/FormSelect.tsx
"use client"

import { useState } from "react"

interface FormSelectProps {
  label: string
  description: string
  options: string[]
  defaultValue?: string
  onChange?: (value: string) => void
  hasBorder?: boolean
}

export function FormSelect({
  label,
  description,
  options,
  defaultValue,
  onChange,
  hasBorder = true
}: FormSelectProps) {
  const [value, setValue] = useState(defaultValue || options[0])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
    onChange?.(e.target.value)
  }

  return (
    <div className={`p-4 ${hasBorder ? "border-b border-zinc-200" : ""}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">{label}</h3>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
        <select 
          className="h-9 rounded-md border border-zinc-200 px-3"
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
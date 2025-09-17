"use client";

import * as React from "react";
import { CheckIcon } from "lucide-react";

import { cn } from "./utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

function Checkbox({
  className,
  onCheckedChange,
  checked,
  onChange,
  ...props
}: CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (onCheckedChange) {
      onCheckedChange(isChecked);
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="relative">
      <input
        type="checkbox"
        data-slot="checkbox"
        className={cn(
          "peer border bg-white data-checked:bg-primary data-checked:text-primary-foreground data-checked:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive size-4 shrink-0 rounded border-gray-300 shadow-xs transition-shadow outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        checked={checked}
        onChange={handleChange}
        {...props}
      />
      {checked && (
        <CheckIcon className="absolute top-0 left-0 size-4 text-white pointer-events-none" />
      )}
    </div>
  );
}

export { Checkbox };
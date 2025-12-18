import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({
  label,
  error,
  helperText,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s/g, "-");

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "w-full px-4 py-2.5 rounded-lg border bg-[var(--input)] text-[var(--foreground)] placeholder-[var(--foreground-secondary)] transition-all duration-200 input-focus",
          error
            ? "border-[var(--error)] focus:border-[var(--error)] focus:ring-red-100"
            : "border-[var(--input-border)]",
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-sm text-[var(--error)]">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-[var(--foreground-secondary)]">
          {helperText}
        </p>
      )}
    </div>
  );
}

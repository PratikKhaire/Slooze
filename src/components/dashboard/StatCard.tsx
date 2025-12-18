"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  changeLabel = "vs last month",
  icon,
  trend = "up",
  className,
}: StatCardProps) {
  const formattedValue =
    typeof value === "number"
      ? value >= 1000
        ? `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        : value.toLocaleString()
      : value;

  return (
    <div
      className={cn(
        "bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 card-hover",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-[var(--foreground-secondary)] mb-1">
            {title}
          </p>
          <p className="text-2xl font-bold text-[var(--foreground)]">
            {formattedValue}
          </p>
        </div>
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
            {icon}
          </div>
        )}
      </div>

      {change !== undefined && (
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "flex items-center gap-1 text-sm font-medium",
              trend === "up" && "text-[var(--success)]",
              trend === "down" && "text-[var(--error)]",
              trend === "neutral" && "text-[var(--foreground-secondary)]"
            )}
          >
            {trend === "up" && <TrendingUp className="w-4 h-4" />}
            {trend === "down" && <TrendingDown className="w-4 h-4" />}
            {change > 0 ? "+" : ""}
            {change}%
          </span>
          <span className="text-sm text-[var(--foreground-secondary)]">
            {changeLabel}
          </span>
        </div>
      )}
    </div>
  );
}

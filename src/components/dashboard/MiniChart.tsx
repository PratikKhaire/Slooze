"use client";

import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
} from "recharts";

interface MiniChartProps {
  data: Array<{ day: string; value: number; value2?: number }>;
  color?: string;
  title: string;
  value: string;
  change?: number;
}

export function MiniChart({
  data,
  color = "var(--primary)",
  title,
  value,
  change,
}: MiniChartProps) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
      <div className="mb-4">
        <p className="text-sm text-[var(--foreground-secondary)] mb-1">
          {title}
        </p>
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-bold text-[var(--foreground)]">{value}</p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-[var(--foreground-secondary)]">trend title</span>
          <span
            className="w-2 h-2 rounded-sm"
            style={{ backgroundColor: color }}
          />
          <span
            className="text-xs font-medium"
            style={{ color: color }}
          >
            {change !== undefined ? `${change >= 0 ? "" : ""}${change}%` : "70.5%"}
          </span>
        </div>
      </div>

      <div className="h-20">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--foreground-secondary)", fontSize: 10 }}
              interval="preserveStartEnd"
            />
            {/* Primary colored line */}
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={{ fill: color, strokeWidth: 0, r: 3 }}
            />
            {/* Secondary gray line */}
            <Line
              type="monotone"
              dataKey="value2"
              stroke="#9CA3AF"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

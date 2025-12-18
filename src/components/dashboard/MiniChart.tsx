"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface MiniChartProps {
  data: Array<{ day: string; value: number }>;
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
          {change !== undefined && (
            <span
              className={`text-sm font-medium ${
                change >= 0 ? "text-[var(--success)]" : "text-[var(--error)]"
              }`}
            >
              {change >= 0 ? "+" : ""}
              {change}%
            </span>
          )}
        </div>
      </div>

      <div className="h-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

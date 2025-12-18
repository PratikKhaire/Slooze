"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp } from "lucide-react";

interface SalesChartProps {
  data?: Array<{ day: string; value: number }>;
}

const defaultData = [
  { day: "Mon", value: 4000 },
  { day: "Tue", value: 3000 },
  { day: "Wed", value: 5000 },
  { day: "Thu", value: 4500 },
  { day: "Fri", value: 6000 },
  { day: "Sat", value: 5500 },
  { day: "Sun", value: 7000 },
];

export function SalesChart({ data = defaultData }: SalesChartProps) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          Resale Data
        </h3>
      </div>

      {/* Stats Section */}
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-sm text-[var(--foreground-secondary)]">Views</p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-[var(--foreground)]">
              +112,893
            </p>
            <span className="flex items-center text-xs text-[var(--success)]">
              <TrendingUp className="w-3 h-3 mr-1" />
              12%
            </span>
          </div>
        </div>
        <div>
          <p className="text-sm text-[var(--foreground-secondary)]">Sales</p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-[var(--foreground)]">
              +12,893
            </p>
            <span className="flex items-center text-xs text-[var(--success)]">
              <TrendingUp className="w-3 h-3 mr-1" />
              8%
            </span>
          </div>
        </div>
        <div>
          <p className="text-sm text-[var(--foreground-secondary)]">Orders</p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-[var(--foreground)]">
              +12,893
            </p>
            <span className="flex items-center text-xs text-[var(--success)]">
              <TrendingUp className="w-3 h-3 mr-1" />
              15%
            </span>
          </div>
        </div>
        <div>
          <p className="text-sm text-[var(--foreground-secondary)]">Earning</p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-[var(--foreground)]">
              +12,893
            </p>
            <span className="flex items-center text-xs text-[var(--success)]">
              <TrendingUp className="w-3 h-3 mr-1" />
              22%
            </span>
          </div>
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--foreground-secondary)", fontSize: 10 }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--primary)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

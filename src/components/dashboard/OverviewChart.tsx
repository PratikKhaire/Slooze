"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", thisYear: 1500, lastYear: 800 },
  { month: "Feb", thisYear: 4800, lastYear: 1200 },
  { month: "Mar", thisYear: 900, lastYear: 600 },
  { month: "Apr", thisYear: 5000, lastYear: 1800 },
  { month: "May", thisYear: 3000, lastYear: 1200 },
  { month: "Jun", thisYear: 3500, lastYear: 1000 },
  { month: "Jul", thisYear: 4500, lastYear: 1500 },
  { month: "Aug", thisYear: 3000, lastYear: 1800 },
  { month: "Sep", thisYear: 600, lastYear: 400 },
  { month: "Oct", thisYear: 3200, lastYear: 1200 },
  { month: "Nov", thisYear: 2000, lastYear: 1500 },
  { month: "Dec", thisYear: 3200, lastYear: 1000 },
];

export function OverviewChart() {
  return (
    <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)] h-full">
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">
        Overview
      </h3>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={2}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--foreground-secondary)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--foreground-secondary)", fontSize: 12 }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
              }}
              formatter={(value) => [`$${value ?? 0}`, ""]}
            />
            <Bar
              dataKey="thisYear"
              fill="#3B82F6"
              radius={[4, 4, 0, 0]}
              barSize={16}
            />
            <Bar
              dataKey="lastYear"
              fill="#E5E7EB"
              radius={[4, 4, 0, 0]}
              barSize={16}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

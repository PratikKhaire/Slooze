"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Line chart data (monthly)
const lineData = [
  { month: "Jan", value: 80, value2: 40 },
  { month: "Feb", value: 50, value2: 30 },
  { month: "Mar", value: 40, value2: 25 },
  { month: "Apr", value: 300, value2: 60 },
  { month: "May", value: 120, value2: 100 },
  { month: "Jun", value: 100, value2: 80 },
  { month: "Jul", value: 90, value2: 75 },
  { month: "Aug", value: 110, value2: 90 },
  { month: "Sep", value: 70, value2: 60 },
  { month: "Oct", value: 130, value2: 80 },
  { month: "Nov", value: 90, value2: 70 },
  { month: "Dec", value: 100, value2: 80 },
];

// Bar chart data with stacking (for fade effect)
const MAX_BAR = 500;
const barRawData = [
  { name: "1", value: 90 },
  { name: "2", value: 180 },
  { name: "3", value: 80 },
  { name: "4", value: 150 },
  { name: "5", value: 300 },
  { name: "6", value: 220 },
  { name: "7", value: 180 },
  { name: "8", value: 260 },
];
const barData = barRawData.map((item) => ({
  ...item,
  remaining: MAX_BAR - item.value,
}));

// Weekly bar chart data
const weeklyData = [
  { day: "Mo", thisWeek: 220, lastWeek: 180 },
  { day: "Tu", thisWeek: 250, lastWeek: 160 },
  { day: "We", thisWeek: 350, lastWeek: 280 },
  { day: "Th", thisWeek: 480, lastWeek: 350 },
  { day: "Fr", thisWeek: 380, lastWeek: 280 },
  { day: "Sa", thisWeek: 300, lastWeek: 250 },
  { day: "Su", thisWeek: 280, lastWeek: 220 },
];

interface TotalEarningCardProps {
  type: "line" | "bar" | "bar-weekly";
}

export function TotalEarningCard({ type }: TotalEarningCardProps) {
  return (
    <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-[var(--foreground)] mb-1">
            Total Earning
          </h3>
          <p className="text-2xl font-bold text-[var(--foreground)] mb-2">
            $ 112,893.00
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[var(--foreground-secondary)]">trend title</span>
            <span className="w-2 h-2 rounded-sm bg-[#10B981]"></span>
            <span className="text-xs text-[#10B981] font-medium">70.5%</span>
          </div>
          {(type === "line" || type === "bar-weekly") && (
            <select className="mt-3 px-3 py-1.5 text-xs bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground-secondary)]">
              <option>This Week</option>
            </select>
          )}
        </div>
      </div>

      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          {type === "line" ? (
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--foreground-secondary)", fontSize: 11 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--foreground-secondary)", fontSize: 11 }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="value2"
                stroke="#86EFAC"
                strokeWidth={2}
                dot={{ fill: "#86EFAC", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          ) : type === "bar" ? (
            <BarChart data={barData} barGap={2}>
              <defs>
                <linearGradient id="barFadeGradient" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#D1D5DB" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#D1D5DB" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" hide />
              <YAxis hide domain={[0, MAX_BAR]} />
              <Bar
                dataKey="value"
                stackId="stack"
                fill="#10B981"
                radius={[4, 4, 4, 4]}
                barSize={30}
              />
              <Bar
                dataKey="remaining"
                stackId="stack"
                fill="url(#barFadeGradient)"
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
            </BarChart>
          ) : (
            <BarChart data={weeklyData} barGap={4}>
              <defs>
                <linearGradient id="weeklyFadeGradient" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#86EFAC" stopOpacity={1} />
                  <stop offset="70%" stopColor="#86EFAC" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#86EFAC" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--foreground-secondary)", fontSize: 11 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--foreground-secondary)", fontSize: 11 }}
                domain={[0, 500]}
                ticks={[100, 200, 300, 400, 500]}
              />
              <Bar dataKey="thisWeek" fill="#10B981" radius={[6, 6, 0, 0]} barSize={24} />
              <Bar dataKey="lastWeek" fill="url(#weeklyFadeGradient)" radius={[6, 6, 0, 0]} barSize={24} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

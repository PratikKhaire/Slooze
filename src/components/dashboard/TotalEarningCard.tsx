"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const lineData = [
  { month: "Jan", value: 50, value2: 30 },
  { month: "Feb", value: 30, value2: 60 },
  { month: "Mar", value: 20, value2: 40 },
  { month: "Apr", value: 280, value2: 200 },
  { month: "May", value: 200, value2: 100 },
  { month: "Jun", value: 150, value2: 120 },
  { month: "Jul", value: 130, value2: 100 },
  { month: "Aug", value: 100, value2: 50 },
  { month: "Sep", value: 80, value2: 90 },
  { month: "Oct", value: 100, value2: 70 },
  { month: "Nov", value: 80, value2: 60 },
  { month: "Dec", value: 120, value2: 90 },
];

const barData = [
  { month: "Jan", value: 200 },
  { month: "Feb", value: 250 },
  { month: "Mar", value: 300 },
  { month: "Apr", value: 350 },
  { month: "May", value: 320 },
  { month: "Jun", value: 380 },
  { month: "Jul", value: 400 },
  { month: "Aug", value: 420 },
  { month: "Sep", value: 380 },
  { month: "Oct", value: 350 },
  { month: "Nov", value: 300 },
  { month: "Dec", value: 320 },
];

const weeklyData = [
  { day: "Mo", value: 220, value2: 180 },
  { day: "Tu", value: 280, value2: 160 },
  { day: "We", value: 320, value2: 280 },
  { day: "Th", value: 480, value2: 350 },
  { day: "Fr", value: 380, value2: 280 },
  { day: "Sa", value: 350, value2: 250 },
  { day: "Su", value: 180, value2: 150 },
];

interface TotalEarningCardProps {
  type: "line" | "bar" | "bar-weekly";
}

export function TotalEarningCard({ type }: TotalEarningCardProps) {
  return (
    <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-[var(--foreground-secondary)] mb-1">
            Total Earning
          </h3>
          <p className="text-2xl font-bold text-[var(--foreground)]">
            $ 112,893.00
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-[var(--foreground-secondary)]">trend title</span>
            <span className="text-xs text-[var(--success)] bg-green-100 dark:bg-green-900/20 px-1.5 py-0.5 rounded">
              70.5%
            </span>
          </div>
        </div>
        {type === "line" && (
          <select className="px-2 py-1 text-xs bg-[var(--background)] border border-[var(--border)] rounded text-[var(--foreground-secondary)]">
            <option>This Week</option>
          </select>
        )}
      </div>

      <div style={{ width: '100%', height: 192 }}>
        <ResponsiveContainer width="100%" height="100%">
          {type === "line" ? (
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
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
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
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
                stroke="#10B98150"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          ) : type === "bar" ? (
            <BarChart data={barData}>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--foreground-secondary)", fontSize: 10 }}
              />
              <Tooltip />
              <Bar dataKey="value" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--foreground-secondary)", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--foreground-secondary)", fontSize: 12 }}
              />
              <Tooltip />
              <Bar dataKey="value" fill="#10B981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="value2" fill="#10B98150" radius={[4, 4, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

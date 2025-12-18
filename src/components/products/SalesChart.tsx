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
  { month: "Jan", value: 50 },
  { month: "Feb", value: 80 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 120 },
  { month: "May", value: 90 },
  { month: "Jun", value: 180 },
  { month: "Jul", value: 130 },
  { month: "Aug", value: 160 },
  { month: "Sep", value: 120 },
  { month: "Oct", value: 140 },
  { month: "Nov", value: 180 },
  { month: "Dec", value: 200 },
];

const barData = [
  { month: "Jan", value: 200 },
  { month: "Feb", value: 350 },
  { month: "Mar", value: 180 },
  { month: "Apr", value: 450 },
  { month: "May", value: 320 },
  { month: "Jun", value: 380 },
  { month: "Jul", value: 420 },
  { month: "Aug", value: 480 },
  { month: "Sep", value: 360 },
  { month: "Oct", value: 400 },
  { month: "Nov", value: 520 },
  { month: "Dec", value: 480 },
];

export function SalesChart() {
  return (
    <div className="space-y-6">
      {/* Total Product Sales - Line Chart */}
      <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-sm font-medium text-[var(--foreground-secondary)] mb-1">
              Total Product Sales
            </h3>
            <p className="text-2xl font-bold text-[var(--foreground)]">
              $2,129.00
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-[var(--foreground-secondary)]">trend title</span>
              <span className="text-xs text-[var(--success)] bg-green-100 dark:bg-green-900/20 px-1.5 py-0.5 rounded">
                70.5%
              </span>
            </div>
          </div>
          <select className="px-2 py-1 text-xs bg-[var(--background)] border border-[var(--border)] rounded text-[var(--foreground-secondary)]">
            <option>This Week</option>
          </select>
        </div>

        <div style={{ width: '100%', height: 180 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--foreground-secondary)", fontSize: 10 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--foreground-secondary)", fontSize: 10 }}
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
                dot={{ fill: "#10B981", strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Second Sales Chart - Bar Chart */}
      <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-sm font-medium text-[var(--foreground-secondary)] mb-1">
              Total Revenue
            </h3>
            <p className="text-2xl font-bold text-[var(--foreground)]">
              $2,129.00
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-[var(--foreground-secondary)]">trend title</span>
              <span className="text-xs text-[var(--success)] bg-green-100 dark:bg-green-900/20 px-1.5 py-0.5 rounded">
                70.5%
              </span>
            </div>
          </div>
          <select className="px-2 py-1 text-xs bg-[var(--background)] border border-[var(--border)] rounded text-[var(--foreground-secondary)]">
            <option>This Week</option>
          </select>
        </div>

        <div style={{ width: '100%', height: 180 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--foreground-secondary)", fontSize: 10 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--foreground-secondary)", fontSize: 10 }}
              />
              <Tooltip />
              <Bar dataKey="value" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTheme } from "@/context/ThemeContext";

const MAX_VALUE = 6000;

const rawData = [
  { month: "Jan", value: 1500 },
  { month: "Feb", value: 4800 },
  { month: "Mar", value: 1000 },
  { month: "Apr", value: 5200 },
  { month: "May", value: 3000 },
  { month: "Jun", value: 3500 },
  { month: "Jul", value: 4800 },
  { month: "Aug", value: 2800 },
  { month: "Sep", value: 700 },
  { month: "Oct", value: 3200 },
  { month: "Nov", value: 1800 },
  { month: "Dec", value: 3200 },
];

// Calculate remaining value for stacked effect
const data = rawData.map((item) => ({
  ...item,
  remaining: MAX_VALUE - item.value,
}));

export function OverviewChart() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Unique gradient IDs based on theme
  const fadeGradientId = isDark ? "fadeGradientDark" : "fadeGradientLight";
  const barGradientId = isDark ? "barGradientDark" : "barGradientLight";

  return (
    <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)] h-full">
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">
        Overview
      </h3>

      <div style={{ width: '100%', height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4} barCategoryGap="20%">
            <defs>
              {/* Orange bar gradient for dark mode - lighter at top, darker at bottom */}
              {isDark && (
                <linearGradient id={barGradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFA962" stopOpacity={1} />
                  <stop offset="50%" stopColor="#FF7600" stopOpacity={1} />
                  <stop offset="100%" stopColor="#FF7600" stopOpacity={1} />
                </linearGradient>
              )}
              {/* Blue bar gradient for light mode */}
              {!isDark && (
                <linearGradient id={barGradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#93C5FD" stopOpacity={1} />
                  <stop offset="100%" stopColor="#5B8DEF" stopOpacity={1} />
                </linearGradient>
              )}
              {/* Fade gradient for the remaining portion */}
              {isDark ? (
                <linearGradient id={fadeGradientId} x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#2D2D2D" stopOpacity={0.95} />
                  <stop offset="40%" stopColor="#252525" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#1A1A1A" stopOpacity={0.4} />
                </linearGradient>
              ) : (
                <linearGradient id={fadeGradientId} x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#D1D5DB" stopOpacity={0.7} />
                  <stop offset="100%" stopColor="#D1D5DB" stopOpacity={0} />
                </linearGradient>
              )}
            </defs>
            <CartesianGrid
              strokeDasharray="0"
              stroke="var(--border)"
              horizontal={false}
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--foreground-secondary)", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--foreground-secondary)", fontSize: 12 }}
              tickFormatter={(value) => `$${value}`}
              domain={[0, MAX_VALUE]}
              ticks={[0, 1500, 3000, 4500, 6000]}
            />
            {/* Colored bar with gradient - Orange gradient in dark, Blue gradient in light */}
            <Bar
              dataKey="value"
              stackId="stack"
              fill={`url(#${barGradientId})`}
              radius={[4, 4, 0, 0]}
              barSize={45}
            />
            {/* Faded bar for remaining portion (above colored bar) */}
            <Bar
              dataKey="remaining"
              stackId="stack"
              fill={`url(#${fadeGradientId})`}
              radius={[4, 4, 0, 0]}
              barSize={45}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

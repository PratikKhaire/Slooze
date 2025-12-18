"use client";

import { useTheme } from "@/context/ThemeContext";

export function SubscriptionsPerformers() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Bar heights for the chart - more bars for light mode design
  const barHeights = isDark
    ? [75, 45, 35, 55, 60, 25, 50, 55, 70]
    : [70, 50, 45, 55, 40, 50, 55, 35, 60, 45, 55];

  // Generate unique gradient ID
  const gradientId = isDark ? "subscriptionBarGradientDark" : "subscriptionBarGradientLight";

  return (
    <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)] flex flex-col h-full">
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
        Subscriptions Performers
      </h3>
      <p className="text-sm text-[var(--foreground-secondary)] mb-4">
        Follower This Years
      </p>

      {/* Big number with trend */}
      <div className="flex items-center justify-center gap-1 mb-6">
        <span className="text-5xl font-extrabold text-[var(--foreground)]">+500</span>
        <span className="text-[var(--foreground-secondary)] text-xl">▲</span>
      </div>

      {/* Gradient bar chart - Cyan for dark, Orange for light */}
      <div className="flex-1 flex items-end gap-1.5 mb-6 min-h-[120px]">
        <svg width="100%" height="100%" className="overflow-visible">
          <defs>
            {/* Dark mode: Cyan/Teal gradient */}
            {/* Light mode: Orange/Yellow gradient */}
            <linearGradient id={gradientId} x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor={isDark ? "#009FB5" : "#F59E0B"} />
              <stop offset="50%" stopColor={isDark ? "#14B8A6" : "#FBBF24"} />
              <stop offset="100%" stopColor={isDark ? "#00F3BF" : "#FCD34D"} />
            </linearGradient>
          </defs>
          {barHeights.map((height, i) => {
            const barWidth = 100 / barHeights.length - 1.5;
            const x = i * (100 / barHeights.length) + 0.75;
            const barHeight = height;
            const y = 100 - barHeight;
            return (
              <rect
                key={i}
                x={`${x}%`}
                y={`${y}%`}
                width={`${barWidth}%`}
                height={`${barHeight}%`}
                rx="4"
                ry="4"
                fill={`url(#${gradientId})`}
              />
            );
          })}
        </svg>
      </div>

      {/* Get Started button - Dark for dark mode, Green for light mode */}
      <button
        className="w-full py-3 text-white font-medium rounded-full transition-all"
        style={{
          backgroundColor: isDark ? "#1F1F1F" : "#10B981",
          border: isDark ? "1px solid #333" : "none"
        }}
      >
        Get Started
      </button>
    </div>
  );
}

"use client";

interface MiniStatCardProps {
  title: string;
  value: string;
  color: "green" | "cyan" | "purple";
}

export function MiniStatCard({ title, value, color }: MiniStatCardProps) {
  const colorMap = {
    green: "#10B981",
    cyan: "#06B6D4",
    purple: "#8B5CF6",
  };

  const lineColor = colorMap[color];

  // Primary line points (colored)
  const primaryPoints = "0,40 30,35 60,30 90,25 120,30 150,22 180,28 210,18 240,25 270,15";

  // Secondary line points (gray) - slightly different pattern
  const secondaryPoints = "0,50 30,48 60,42 90,45 110,38 150,40 180,28 210,32 240,30 270,28";

  return (
    <div className="bg-[var(--card)] rounded-xl p-5 border border-[var(--border)]">
      <h3 className="text-base font-semibold text-[var(--foreground)] mb-1">
        {title}
      </h3>
      <p className="text-2xl font-bold text-[var(--foreground)] mb-2">
        {value}
      </p>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs text-[var(--foreground-secondary)]">trend title</span>
        <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: lineColor }}></span>
        <span className="text-xs font-medium" style={{ color: lineColor }}>70.5%</span>
      </div>

      {/* Line chart with TWO lines */}
      <div className="h-16 relative">
        <svg viewBox="0 0 280 60" className="w-full h-full" preserveAspectRatio="none">
          {/* Secondary gray line (behind) */}
          <polyline
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
            points={secondaryPoints}
          />
          {/* Primary colored line (front) */}
          <polyline
            fill="none"
            stroke={lineColor}
            strokeWidth="2"
            points={primaryPoints}
          />
          {/* Dots on the primary line */}
          <g fill={lineColor}>
            <circle cx="0" cy="40" r="3" />
            <circle cx="90" cy="25" r="3" />
            <circle cx="180" cy="28" r="3" />
            <circle cx="270" cy="15" r="3" />
          </g>
        </svg>
        {/* X-axis labels */}
        <div className="flex justify-between text-xs text-[var(--foreground-secondary)] mt-1">
          <span>Nov 20th</span>
          <span>Dec 20th</span>
        </div>
      </div>
    </div>
  );
}

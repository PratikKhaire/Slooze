"use client";

interface MiniStatCardProps {
  title: string;
  value: string;
  color: "green" | "cyan" | "purple";
}

export function MiniStatCard({ title, value, color }: MiniStatCardProps) {
  const colorClasses = {
    green: {
      line: "#10B981",
      bg: "bg-green-100 dark:bg-green-900/20",
    },
    cyan: {
      line: "#06B6D4",
      bg: "bg-cyan-100 dark:bg-cyan-900/20",
    },
    purple: {
      line: "#8B5CF6",
      bg: "bg-purple-100 dark:bg-purple-900/20",
    },
  };

  const { line } = colorClasses[color];

  // Generate random sparkline points
  const points = "10,40 30,35 50,45 70,30 90,35 110,25 130,30 150,20 170,28 190,22";

  return (
    <div className="bg-[var(--card)] rounded-xl p-5 border border-[var(--border)]">
      <h3 className="text-sm font-medium text-[var(--foreground-secondary)] mb-1">
        {title}
      </h3>
      <p className="text-xl font-bold text-[var(--foreground)] mb-1">
        {value}
      </p>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs text-[var(--foreground-secondary)]">trend title</span>
        <span className="text-xs text-[var(--success)] bg-green-100 dark:bg-green-900/20 px-1.5 py-0.5 rounded">
          70.5%
        </span>
      </div>

      {/* Mini Line Chart */}
      <div className="h-12 mt-2">
        <svg viewBox="0 0 200 50" className="w-full h-full">
          <polyline
            fill="none"
            stroke={line}
            strokeWidth="2"
            points={points}
          />
        </svg>
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between mt-1">
        <span className="text-[10px] text-[var(--foreground-secondary)]">Nov 20th</span>
        <span className="text-[10px] text-[var(--foreground-secondary)]">Dec 20th</span>
      </div>
    </div>
  );
}

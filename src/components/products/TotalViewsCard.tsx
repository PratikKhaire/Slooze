"use client";

export function TotalViewsCard() {
  return (
    <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
      <h3 className="text-base font-semibold text-[var(--foreground)] mb-1">
        Total Views
      </h3>
      <p className="text-2xl font-bold text-[var(--foreground)] mb-2">
        + 112,893
      </p>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs text-[var(--foreground-secondary)]">trend title</span>
        <span className="w-2 h-2 rounded-sm bg-[#10B981]"></span>
        <span className="text-xs text-[#10B981] font-medium">70.5%</span>
      </div>

      {/* Line chart with TWO lines */}
      <div className="h-24 relative">
        <svg viewBox="0 0 280 80" className="w-full h-full" preserveAspectRatio="none">
          {/* Secondary gray line (behind) */}
          <polyline
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
            points="0,60 40,55 80,50 120,55 160,45 200,50 240,40 280,45"
          />
          {/* Primary colored line (front) */}
          <polyline
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
            points="0,50 40,45 80,35 120,40 160,30 200,35 240,20 280,25"
          />
          {/* Dots on the primary line */}
          <g fill="#F59E0B">
            <circle cx="0" cy="50" r="3" />
            <circle cx="120" cy="40" r="3" />
            <circle cx="240" cy="20" r="3" />
            <circle cx="280" cy="25" r="3" />
          </g>
        </svg>
        {/* X-axis labels */}
        <div className="flex justify-between text-xs text-[var(--foreground-secondary)] mt-2">
          <span>Nov 20th</span>
          <span>Dec 20th</span>
        </div>
      </div>
    </div>
  );
}

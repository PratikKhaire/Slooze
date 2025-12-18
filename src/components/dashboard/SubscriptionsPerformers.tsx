"use client";

export function SubscriptionsPerformers() {
  return (
    <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)] flex flex-col h-full">
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
        Subscriptions Performers
      </h3>
      <p className="text-sm text-[var(--foreground-secondary)] mb-4">
        Follower This Years
      </p>

      {/* Big number with trend */}
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-5xl font-extrabold text-[var(--foreground)]">+500</span>
        <span className="text-[var(--foreground-secondary)]">▲</span>
      </div>

      {/* Yellow bar chart */}
      <div className="flex-1 flex items-end gap-1 mb-6">
        {[60, 30, 20, 40, 45, 15, 35, 41, 55].map((height, i) => (
          <div
            key={i}
            className="flex-1 bg-[#F59E0B] rounded-xl"
            style={{ height: `${height}%`, minHeight: 20 }}
          />
        ))}
      </div>

      {/* Get Started button */}
      <button className="w-full py-3 bg-[#10B981] text-white font-medium rounded-full hover:bg-[#059669] transition-colors">
        Get Started
      </button>
    </div>
  );
}

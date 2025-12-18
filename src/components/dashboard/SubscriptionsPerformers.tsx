"use client";

export function SubscriptionsPerformers() {
  const bars = [180, 200, 220, 240, 200, 250, 280, 260, 300, 320, 280];

  return (
    <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
        Subscriptions Performers
      </h3>
      <p className="text-sm text-[var(--foreground-secondary)] mb-6">
        Follower This Years
      </p>

      {/* Big Number */}
      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-5xl font-bold text-[var(--foreground)]">+500</span>
        <span className="text-lg text-[var(--foreground-secondary)]">▲</span>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end gap-1 h-24 mb-6">
        {bars.map((height, index) => (
          <div
            key={index}
            className="flex-1 bg-[#F59E0B] rounded-t"
            style={{ height: `${(height / 320) * 100}%` }}
          />
        ))}
      </div>

      {/* Get Started Button */}
      <button className="w-full py-3 bg-[#10B981] text-white rounded-full font-medium hover:bg-[#059669] transition-colors">
        Get Started
      </button>
    </div>
  );
}

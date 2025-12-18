"use client";

export function StatsSection() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">Stats</h2>

        {/* Year Dropdown */}
        <select className="px-3 py-1.5 text-sm bg-[var(--card)] border border-[var(--border)] rounded-lg text-[var(--foreground)]">
          <option>Years</option>
          <option>2024</option>
          <option>2023</option>
        </select>

        {/* Date Range */}
        <select className="px-3 py-1.5 text-sm bg-[var(--card)] border border-[var(--border)] rounded-lg text-[var(--foreground)]">
          <option>Aug 20th - Dec 4th</option>
        </select>

        <span className="text-sm text-[var(--foreground-secondary)]">compared to</span>

        <select className="px-3 py-1.5 text-sm bg-[var(--card)] border border-[var(--border)] rounded-lg text-[var(--foreground)]">
          <option>Previous</option>
        </select>

        <select className="px-3 py-1.5 text-sm bg-[var(--card)] border border-[var(--border)] rounded-lg text-[var(--foreground)]">
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-[var(--card)] border border-[var(--border)] rounded-lg text-[var(--foreground)] hover:bg-[var(--card-hover)]">
          <span>+ Add</span>
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-[var(--card)] border border-[var(--border)] rounded-lg text-[var(--foreground)] hover:bg-[var(--card-hover)]">
          <span>✎ Edit</span>
        </button>
      </div>
    </div>
  );
}

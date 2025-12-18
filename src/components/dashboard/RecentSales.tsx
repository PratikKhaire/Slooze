"use client";

const sales = [
  { name: "Indra Maulana", email: "Indramaulana@gmail.com", amount: "+$1500.00" },
  { name: "Indra Maulana", email: "Indramaulana@gmail.com", amount: "+$1500.00" },
  { name: "Indra Maulana", email: "Indramaulana@gmail.com", amount: "+$1500.00" },
  { name: "Indra Maulana", email: "Indramaulana@gmail.com", amount: "+$1500.00" },
  { name: "Indra Maulana", email: "Indramaulana@gmail.com", amount: "+$1500.00" },
  { name: "Indra Maulana", email: "Indramaulana@gmail.com", amount: "+$1500.00" },
];

export function RecentSales() {
  return (
    <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)] h-full">
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
        Recent Sales
      </h3>
      <p className="text-sm text-[var(--foreground-secondary)] mb-6">
        You made 350 sales this mount
      </p>

      <div className="space-y-5">
        {sales.map((sale, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">
                  {sale.name}
                </p>
                <p className="text-xs text-[var(--foreground-secondary)]">
                  {sale.email}
                </p>
              </div>
            </div>
            <span className="text-sm font-semibold text-[var(--foreground)]">
              {sale.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

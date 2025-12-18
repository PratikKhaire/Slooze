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

      <div className="space-y-4">
        {sales.map((sale, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--background-secondary)] flex items-center justify-center overflow-hidden">
                <span className="text-[var(--foreground-secondary)] text-lg">👤</span>
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

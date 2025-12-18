"use client";

const products = [
  { id: 1, email: "Youremail@email.com", date: "02/10/2024", amount: "$100" },
  { id: 2, email: "Youremail@email.com", date: "02/10/2024", amount: "$100" },
  { id: 3, email: "Youremail@email.com", date: "02/10/2024", amount: "$100" },
  { id: 4, email: "Youremail@email.com", date: "02/10/2024", amount: "$100" },
  { id: 5, email: "Youremail@email.com", date: "02/10/2024", amount: "$100" },
  { id: 6, email: "Youremail@email.com", date: "02/10/2024", amount: "$100" },
];

export function TopSalesProduct() {
  return (
    <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
        Top Sales Product
      </h3>
      <p className="text-sm text-[var(--foreground-secondary)] mb-4">
        Manage your payments.
      </p>

      {/* Table Header */}
      <div className="grid grid-cols-3 gap-4 pb-2 border-b border-[var(--border)] text-xs text-[var(--foreground-secondary)]">
        <span>Product</span>
        <span className="text-right">Amount</span>
        <span></span>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-[var(--border)]">
        {products.map((product) => (
          <div key={product.id} className="grid grid-cols-3 gap-4 py-3 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[var(--background-secondary)] flex items-center justify-center">
                <span className="text-xs">📦</span>
              </div>
              <div>
                <p className="text-sm text-[var(--foreground)]">{product.email}</p>
                <p className="text-xs text-[var(--foreground-secondary)]">{product.date}</p>
              </div>
            </div>
            <span className="text-sm font-medium text-[var(--foreground)] text-right">
              {product.amount}
            </span>
            <span></span>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end gap-2 mt-4">
        <button className="px-4 py-1.5 text-sm bg-[#06B6D4] text-white rounded hover:bg-[#0891B2] transition-colors">
          Previous
        </button>
        <button className="px-4 py-1.5 text-sm bg-[#06B6D4] text-white rounded hover:bg-[#0891B2] transition-colors">
          Next
        </button>
      </div>
    </div>
  );
}

"use client";

const products = [
  { image: "📱", email: "Youremail@email.com", date: "02/10/2024", amount: "$100" },
  { image: "📱", email: "Youremail@email.com", date: "02/10/2024", amount: "$100" },
  { image: "📱", email: "Youremail@email.com", date: "02/10/2024", amount: "$100" },
  { image: "📱", email: "Youremail@email.com", date: "02/10/2024", amount: "$100" },
  { image: "📱", email: "Youremail@email.com", date: "02/10/2024", amount: "$100" },
  { image: "📱", email: "Youremail@email.com", date: "02/10/2024", amount: "$100" },
];

export function TopSalesProduct() {
  return (
    <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)] flex flex-col h-full">
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
        Top Sales Product
      </h3>
      <p className="text-sm text-[var(--foreground-secondary)] mb-4">
        Manage your payments.
      </p>

      {/* Table */}
      <div className="flex-1 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left py-2 text-xs font-medium text-[var(--foreground-secondary)]">Product</th>
              <th className="text-right py-2 text-xs font-medium text-[var(--foreground-secondary)]">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b border-[var(--border)] last:border-b-0">
                <td className="py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center text-sm">
                      {product.image}
                    </div>
                    <div>
                      <p className="text-xs text-[var(--foreground)]">{product.email}</p>
                      <p className="text-xs text-[var(--foreground-secondary)]">{product.date}</p>
                    </div>
                  </div>
                </td>
                <td className="text-right py-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">{product.amount}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end gap-2 mt-4">
        <button className="px-4 py-1.5 text-xs font-medium bg-[#10B981] text-white rounded hover:bg-[#059669] transition-colors">
          Previous
        </button>
        <button className="px-4 py-1.5 text-xs font-medium bg-[#10B981] text-white rounded hover:bg-[#059669] transition-colors">
          Next
        </button>
      </div>
    </div>
  );
}

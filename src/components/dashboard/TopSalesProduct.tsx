"use client";

import { useTheme } from "@/context/ThemeContext";

const products = [
  { name: "Macbook Pro", date: "02/10/2024", amount: "$100", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=50&h=50&fit=crop" },
  { name: "Iphone 12 Pro", date: "02/10/2024", amount: "$100", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=50&h=50&fit=crop" },
  { name: "Macbook m3 pro", date: "02/10/2024", amount: "$100", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=50&h=50&fit=crop" },
  { name: "Youremail@email.com", date: "02/10/2024", amount: "$100", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=50&h=50&fit=crop" },
  { name: "Youremail@email.com", date: "02/10/2024", amount: "$100", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=50&h=50&fit=crop" },
  { name: "Youremail@email.com", date: "02/10/2024", amount: "$100", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=50&h=50&fit=crop" },
];

export function TopSalesProduct() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
                    <div className="w-8 h-8 rounded bg-[var(--background-secondary)] overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--foreground)]">{product.name}</p>
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

      {/* Pagination - Green in light mode, neutral in dark mode */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          className={`px-4 py-1.5 text-xs font-medium border rounded transition-colors ${
            isDark
              ? "border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--card-hover)]"
              : "border-[#10B981] text-[#10B981] bg-white hover:bg-[#10B981] hover:text-white"
          }`}
        >
          Previous
        </button>
        <button
          className={`px-4 py-1.5 text-xs font-medium rounded transition-colors ${
            isDark
              ? "bg-[var(--foreground)] text-[var(--background)] hover:opacity-90"
              : "bg-[#10B981] text-white hover:bg-[#059669]"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

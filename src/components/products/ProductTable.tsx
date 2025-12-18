"use client";

import { useState } from "react";
import { Edit, Trash2, MoreVertical, Package } from "lucide-react";
import { Product } from "@/data/mockData";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

interface ProductTableProps {
  products: Product[];
  onEdit?: (product: Product) => void;
  onDelete?: (productId: string) => void;
}

export function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
  const { user } = useAuth();
  const isManager = user?.role === "manager";
  const [selectedTab, setSelectedTab] = useState<"published" | "draft">("published");

  const filteredProducts = products.filter((p) => p.status === selectedTab);

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl">
      {/* Header */}
      <div className="p-6 border-b border-[var(--border)]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            Product
          </h2>
          <span className="text-sm text-[var(--foreground-secondary)]">
            Total: +112,893
          </span>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSelectedTab("published")}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              selectedTab === "published"
                ? "bg-[var(--primary)] text-white"
                : "text-[var(--foreground-secondary)] hover:bg-[var(--card-hover)]"
            )}
          >
            Published
          </button>
          <button
            onClick={() => setSelectedTab("draft")}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              selectedTab === "draft"
                ? "bg-[var(--primary)] text-white"
                : "text-[var(--foreground-secondary)] hover:bg-[var(--card-hover)]"
            )}
          >
            Draft
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left py-4 px-6 text-sm font-medium text-[var(--foreground-secondary)]">
                <input type="checkbox" className="rounded border-[var(--border)]" />
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-[var(--foreground-secondary)]">
                Product Name
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-[var(--foreground-secondary)]">
                Qty
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-[var(--foreground-secondary)]">
                Price
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-[var(--foreground-secondary)]">
                Status
              </th>
              {isManager && (
                <th className="text-left py-4 px-6 text-sm font-medium text-[var(--foreground-secondary)]">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b border-[var(--border)] table-row-hover"
              >
                <td className="py-4 px-6">
                  <input type="checkbox" className="rounded border-[var(--border)]" />
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--background-secondary)] flex items-center justify-center">
                      <Package className="w-5 h-5 text-[var(--foreground-secondary)]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--foreground)]">
                        {product.name}
                      </p>
                      <p className="text-xs text-[var(--foreground-secondary)]">
                        {product.category}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-[var(--foreground)]">
                  {product.quantity.toLocaleString()}
                </td>
                <td className="py-4 px-6 text-sm text-[var(--foreground)]">
                  ${product.price.toFixed(2)}
                </td>
                <td className="py-4 px-6">
                  <span
                    className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-medium",
                      product.status === "published"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    )}
                  >
                    {product.status === "published" ? "Published" : "Draft"}
                  </span>
                </td>
                {isManager && (
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onEdit?.(product)}
                        className="p-2 rounded-lg hover:bg-[var(--card-hover)] text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onDelete?.(product.id)}
                        className="p-2 rounded-lg hover:bg-[var(--card-hover)] text-[var(--foreground-secondary)] hover:text-[var(--error)] transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-[var(--card-hover)] text-[var(--foreground-secondary)] transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="p-12 text-center">
          <Package className="w-12 h-12 mx-auto text-[var(--foreground-secondary)] mb-4" />
          <p className="text-[var(--foreground-secondary)]">
            No {selectedTab} products found
          </p>
        </div>
      )}
    </div>
  );
}

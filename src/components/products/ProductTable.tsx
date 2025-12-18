"use client";

import { useState } from "react";
import { MoreHorizontal, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  email?: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "inactive" | "low_stock";
  image?: string;
  published?: boolean;
}

interface ProductTableProps {
  products: Product[];
  onEdit?: (product: Product) => void;
  onDelete?: (productId: string) => void;
}

const tabs = [
  { id: "all", label: "All Product" },
  { id: "published", label: "Published" },
  { id: "lowstock", label: "Low Stock" },
];

export function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [publishedStates, setPublishedStates] = useState<Record<string, boolean>>(
    products.reduce((acc, product) => ({ ...acc, [product.id]: product.published ?? true }), {})
  );

  const togglePublish = (productId: string) => {
    setPublishedStates((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const filteredProducts = products.filter((product) => {
    if (activeTab === "published") return publishedStates[product.id];
    if (activeTab === "lowstock") return product.stock < 10;
    return true;
  });

  return (
    <div className="bg-[var(--card)] rounded-xl border border-[var(--border)]">
      {/* Tabs */}
      <div className="flex items-center border-b border-[var(--border)]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-6 py-4 text-sm font-medium transition-colors relative",
              activeTab === tab.id
                ? "text-[var(--primary)]"
                : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]" />
            )}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left px-6 py-4 text-sm font-medium text-[var(--foreground-secondary)]">
                Products
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-[var(--foreground-secondary)]">
                Stocks
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-[var(--foreground-secondary)]">
                Price
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-[var(--foreground-secondary)]">
                Publish
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-[var(--foreground-secondary)]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--card-hover)] transition-colors"
              >
                {/* Product Cell */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--background-secondary)] flex items-center justify-center overflow-hidden">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-lg">📦</span>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--foreground)]">
                        {product.name}
                      </p>
                      <p className="text-xs text-[var(--foreground-secondary)]">
                        {product.email || `${product.name.toLowerCase().replace(/\s/g, '')}@email.com`}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Stocks Cell */}
                <td className="px-6 py-4">
                  <span
                    className={cn(
                      "text-sm font-medium",
                      product.stock < 10
                        ? "text-[var(--error)]"
                        : "text-[var(--foreground)]"
                    )}
                  >
                    {product.stock}
                  </span>
                </td>

                {/* Price Cell */}
                <td className="px-6 py-4">
                  <span className="text-sm text-[var(--foreground)]">
                    ${product.price.toFixed(2)}
                  </span>
                </td>

                {/* Publish Toggle */}
                <td className="px-6 py-4">
                  <button
                    onClick={() => togglePublish(product.id)}
                    className={cn(
                      "w-10 h-5 rounded-full transition-colors relative",
                      publishedStates[product.id]
                        ? "bg-[#10B981]"
                        : "bg-[var(--border)]"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform",
                        publishedStates[product.id] ? "right-0.5" : "left-0.5"
                      )}
                    />
                  </button>
                </td>

                {/* Action Cell */}
                <td className="px-6 py-4">
                  <div className="relative group">
                    <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-[var(--foreground-secondary)] bg-[var(--background)] border border-[var(--border)] rounded-lg hover:bg-[var(--card-hover)]">
                      <MoreHorizontal className="w-4 h-4" />
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute right-0 top-full mt-1 w-32 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                      <button
                        onClick={() => onEdit?.(product)}
                        className="w-full px-4 py-2 text-left text-sm text-[var(--foreground)] hover:bg-[var(--card-hover)]"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete?.(product.id)}
                        className="w-full px-4 py-2 text-left text-sm text-[var(--error)] hover:bg-[var(--card-hover)]"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

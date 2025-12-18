"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  image?: string;
  views: number;
  pricing: number;
  revenue: number;
}

interface ProductTableProps {
  products: Product[];
  onEdit?: (product: Product) => void;
  onDelete?: (productId: string) => void;
}

const tabs = [
  { id: "published", label: "Published" },
  { id: "draft", label: "Darft" },
];

// Product image URLs for variety
const productImages = [
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=100&h=100&fit=crop",
];

// Mock products data
const mockProducts: Product[] = Array(14).fill(null).map((_, i) => ({
  id: `product-${i + 1}`,
  name: "Product Name Place Here",
  image: productImages[i % productImages.length],
  views: 14000,
  pricing: 1000,
  revenue: 164000,
}));

export function ProductTable({ onEdit, onDelete }: ProductTableProps) {
  const [activeTab, setActiveTab] = useState("published");
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set(["product-1"]));
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const toggleProduct = (productId: string) => {
    const newSelected = new Set(selectedProducts);
    if (newSelected.has(productId)) {
      newSelected.delete(productId);
    } else {
      newSelected.add(productId);
    }
    setSelectedProducts(newSelected);
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const SortIcon = ({ field }: { field: string }) => (
    <span className="inline-flex flex-col ml-1">
      <ChevronUp className={cn("w-3 h-3 -mb-1", sortField === field && sortOrder === "asc" ? "text-[var(--foreground)]" : "text-[var(--foreground-secondary)]")} />
      <ChevronDown className={cn("w-3 h-3 -mt-1", sortField === field && sortOrder === "desc" ? "text-[var(--foreground)]" : "text-[var(--foreground-secondary)]")} />
    </span>
  );

  return (
    <div className="bg-[var(--card)] rounded-xl border border-[var(--border)]">
      {/* Header with Tabs and Actions */}
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
        {/* Tabs */}
        <div className="flex items-center gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "text-sm font-medium pb-2 transition-colors relative",
                activeTab === tab.id
                  ? "text-[var(--foreground)]"
                  : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--foreground)]" />
              )}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm border border-[var(--border)] rounded-lg text-[var(--foreground-secondary)] hover:bg-[var(--card-hover)] transition-colors">
            Filter <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm border border-[var(--border)] rounded-lg text-[var(--foreground-secondary)] hover:bg-[var(--card-hover)] transition-colors">
            Download <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="w-12 px-4 py-3"></th>
              <th className="text-left px-4 py-3 text-sm font-medium text-[var(--foreground)]">
                Product Name
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-[var(--foreground)] cursor-pointer" onClick={() => handleSort("views")}>
                <span className="flex items-center">
                  Views <SortIcon field="views" />
                </span>
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-[var(--foreground)] cursor-pointer" onClick={() => handleSort("pricing")}>
                <span className="flex items-center">
                  Pricing <SortIcon field="pricing" />
                </span>
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-[var(--foreground)] cursor-pointer" onClick={() => handleSort("revenue")}>
                <span className="flex items-center">
                  Revenue <SortIcon field="revenue" />
                </span>
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-[var(--foreground)] cursor-pointer" onClick={() => handleSort("manage")}>
                <span className="flex items-center">
                  Manage <SortIcon field="manage" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {mockProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--card-hover)] transition-colors"
              >
                {/* Checkbox */}
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedProducts.has(product.id)}
                    onChange={() => toggleProduct(product.id)}
                    className="w-4 h-4 rounded border-[var(--border)] accent-[#6366F1]"
                  />
                </td>

                {/* Product Name */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <span className="text-sm text-[var(--foreground)]">{product.name}</span>
                  </div>
                </td>

                {/* Views */}
                <td className="px-4 py-3">
                  <span className="text-sm text-[var(--foreground-secondary)]">
                    {product.views.toLocaleString()}
                  </span>
                </td>

                {/* Pricing */}
                <td className="px-4 py-3">
                  <span className="text-sm text-[var(--foreground-secondary)]">
                    ${product.pricing.toLocaleString()}
                  </span>
                </td>

                {/* Revenue */}
                <td className="px-4 py-3">
                  <span className="text-sm text-[var(--foreground-secondary)]">
                    ${product.revenue.toLocaleString()}
                  </span>
                </td>

                {/* Manage */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onEdit?.(product)}
                      className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete?.(product.id)}
                      className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--error)] transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 p-4 border-t border-[var(--border)]">
        <button className="p-1 text-[var(--foreground-secondary)] hover:text-[var(--foreground)]">
          <ChevronLeft className="w-4 h-4" />
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={cn(
              "w-8 h-8 text-sm rounded transition-colors",
              currentPage === page
                ? "bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)]"
                : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
            )}
          >
            {page}
          </button>
        ))}
        <button className="p-1 text-[var(--foreground-secondary)] hover:text-[var(--foreground)]">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

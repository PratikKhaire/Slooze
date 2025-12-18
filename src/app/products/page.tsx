"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductTable } from "@/components/products/ProductTable";
import { SalesChart } from "@/components/products/SalesChart";
import { mockProducts } from "@/data/mockData";

export default function ProductsPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="w-8 h-8 border-4 border-[var(--primary)] border-t-transparent rounded-full spinner" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const isManager = user?.role === "manager";

  const handleEdit = (product: typeof mockProducts[0]) => {
    router.push(`/products/add?edit=${product.id}`);
  };

  const handleDelete = (productId: string) => {
    // In a real app, this would call an API
    alert(`Delete product ${productId}`);
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Sidebar />

      <div className="ml-64">
        <Header />

        <main className="p-6">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-[var(--foreground)]">
                Product
              </h1>
              <p className="text-sm text-[var(--foreground-secondary)]">
                Manage your product inventory
              </p>
            </div>
            {isManager && (
              <Link
                href="/products/add"
                className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-lg text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Product
              </Link>
            )}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Product Table */}
            <div className="lg:col-span-2">
              <ProductTable
                products={mockProducts}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>

            {/* Sales Chart Sidebar */}
            <div>
              <SalesChart />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

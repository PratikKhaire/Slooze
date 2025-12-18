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
import { TotalViewsCard } from "@/components/products/TotalViewsCard";

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

  const handleEdit = (product: any) => {
    router.push(`/products/add?edit=${product.id}`);
  };

  const handleDelete = (productId: string) => {
    alert(`Delete product ${productId}`);
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Sidebar />
      <Header />

      <main className="ml-64 pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6 mt-6">
            <h1 className="text-2xl font-bold text-[var(--foreground)]">
              Product
            </h1>
            {isManager && (
              <Link
                href="/products/add"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white rounded-lg text-sm font-medium hover:from-[#7C3AED] hover:to-[#6D28D9] transition-all shadow-sm"
              >
                <Plus className="w-4 h-4" />
                Add New Product
              </Link>
            )}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Product Table - Takes 3/4 of the space */}
            <div className="lg:col-span-3">
              <ProductTable
                products={[]}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>

            {/* Total Views Sidebar */}
            <div className="lg:col-span-1">
              <TotalViewsCard />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

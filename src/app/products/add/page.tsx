"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Upload, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function AddProductPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    vendor: "",
    description: "",
    price: "",
    currency: "USD",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    } else if (!isLoading && user?.role !== "manager") {
      router.push("/products");
    }
  }, [isLoading, isAuthenticated, user, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="w-8 h-8 border-4 border-[var(--primary)] border-t-transparent rounded-full spinner" />
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== "manager") {
    return null;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, this would save to the database
    alert("Product saved successfully!");
    router.push("/products");
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Sidebar />

      <div className="ml-64">
        <Header />

        <main className="p-6">
          {/* Back Button */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-[var(--foreground)]">
                Add Product
              </h1>
              <p className="text-sm text-[var(--foreground-secondary)]">
                Create a new product listing
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => router.push("/products")}>
                Cancel
              </Button>
              <Button onClick={handleSubmit} isLoading={isSubmitting}>
                Save Product
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Form Fields */}
              <div className="lg:col-span-2 space-y-6">
                {/* Add New Product Card */}
                <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-[var(--foreground)] mb-6">
                    Add New Product
                  </h2>

                  {/* General Information */}
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-4">
                      General Information
                    </h3>
                    <div className="space-y-4">
                      <Input
                        label="Product Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter product name"
                        required
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                            Product Category
                          </label>
                          <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-[var(--input-border)] bg-[var(--input)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                          >
                            <option value="">Select category</option>
                            <option value="Precious Metals">Precious Metals</option>
                            <option value="Energy">Energy</option>
                            <option value="Industrial Metals">Industrial Metals</option>
                            <option value="Agriculture">Agriculture</option>
                          </select>
                        </div>

                        <Input
                          label="Vendor"
                          name="vendor"
                          value={formData.vendor}
                          onChange={handleChange}
                          placeholder="Enter vendor name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Enter product description..."
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--input-border)] bg-[var(--input)] text-[var(--foreground)] placeholder-[var(--foreground-secondary)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                    />
                  </div>

                  {/* Pricing */}
                  <div>
                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-4">
                      Pricing
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Amount"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="0.00"
                      />
                      <div>
                        <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                          Currency
                        </label>
                        <select
                          name="currency"
                          value={formData.currency}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-[var(--input-border)] bg-[var(--input)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                        >
                          <option value="USD">$ USA Dollars</option>
                          <option value="EUR">€ Euro</option>
                          <option value="GBP">£ British Pound</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image Upload */}
              <div className="space-y-6">
                {/* Preview Product */}
                <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
                  <h3 className="text-sm font-medium text-[var(--foreground)] mb-4">
                    Preview Product
                  </h3>
                  <p className="text-xs text-[var(--foreground-secondary)] mb-4">
                    Require from Figma File
                  </p>
                  <div className="border-2 border-dashed border-[var(--border)] rounded-lg p-8 text-center hover:border-[var(--primary)] transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto text-[var(--foreground-secondary)] mb-3" />
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Drop your image here, or{" "}
                      <span className="text-[var(--primary)]">browse</span>
                    </p>
                    <p className="text-xs text-[var(--foreground-secondary)] mt-1">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>

                {/* Thumbnail Product */}
                <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
                  <h3 className="text-sm font-medium text-[var(--foreground)] mb-4">
                    Thumbnail Product
                  </h3>
                  <div className="border-2 border-dashed border-[var(--border)] rounded-lg p-8 text-center hover:border-[var(--primary)] transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto text-[var(--foreground-secondary)] mb-3" />
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Drop your image here, or{" "}
                      <span className="text-[var(--primary)]">browse</span>
                    </p>
                    <p className="text-xs text-[var(--foreground-secondary)] mt-1">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>

        <Footer />
      </div>
    </div>
  );
}

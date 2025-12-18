"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, ImageIcon, ChevronDown } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AddProductPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    description: "",
    tagKeywords: "",
    price: "",
    discount: "",
    discountCategory: "",
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [thumbnailImage, setThumbnailImage] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="w-8 h-8 border-4 border-[var(--primary)] border-t-transparent rounded-full spinner" />
      </div>
    );
  }

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageDrop = (type: "preview" | "thumbnail") => (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        if (type === "preview") {
          setPreviewImage(reader.result as string);
        } else {
          setThumbnailImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log("Save product:", formData);
    router.push("/products");
  };

  const handleDiscard = () => {
    router.push("/products");
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Sidebar />
      <Header />

      <main className="ml-64 pt-16 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Title Row */}
          <div className="flex items-center justify-between mb-6 mt-6">
            <h1 className="text-2xl font-bold text-[var(--foreground)]">
              Add Product
            </h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white text-sm font-medium rounded-lg hover:from-[#7C3AED] hover:to-[#6D28D9] transition-all shadow-sm">
              <span className="text-lg leading-none">+</span>
              <span>Add New Product</span>
            </button>
          </div>

          {/* Section Header Card */}
          <div className="bg-[var(--card)] rounded-xl p-4 border border-[var(--border)] mb-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[var(--foreground)]">
                Add New Product
              </h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDiscard}
                  className="px-4 py-2 border border-[#EC4899] text-[#EC4899] rounded-lg text-sm font-medium hover:bg-[#EC4899]/10 transition-colors"
                >
                  Discard Change
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-[#8B5CF6] text-white rounded-lg text-sm font-medium hover:bg-[#7C3AED] transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* General Information */}
              <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
                <h2 className="text-lg font-semibold text-[var(--foreground)] mb-6">
                  Generar Information
                </h2>

                {/* Product Name */}
                <div className="mb-5">
                  <label className="block text-sm text-[var(--foreground)] mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    placeholder="Product Name"
                    className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder-[var(--foreground-secondary)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                  />
                </div>

                {/* Product Category */}
                <div className="mb-5">
                  <label className="block text-sm text-[var(--foreground)] mb-2">
                    Product Category
                  </label>
                  <div className="relative">
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground-secondary)] appearance-none focus:outline-none focus:border-[var(--primary)] transition-colors"
                    >
                      <option value="">Product Category</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      <option value="accessories">Accessories</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--foreground-secondary)] pointer-events-none" />
                  </div>
                </div>

                {/* Descriptions */}
                <div className="mb-5">
                  <label className="block text-sm text-[var(--foreground)] mb-2">
                    Descriptions
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder-[var(--foreground-secondary)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                  />
                </div>

                {/* Tag Keywords */}
                <div>
                  <label className="block text-sm text-[var(--foreground)] mb-2">
                    Tag Keywoder
                  </label>
                  <textarea
                    name="tagKeywords"
                    value={formData.tagKeywords}
                    onChange={handleInputChange}
                    placeholder="Tag Keywoder"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder-[var(--foreground-secondary)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
                <h2 className="text-lg font-semibold text-[var(--foreground)] mb-6">
                  Pricing
                </h2>

                {/* Price */}
                <div className="mb-5">
                  <label className="block text-sm text-[var(--foreground)] mb-2">
                    Proce
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Pricing"
                    className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder-[var(--foreground-secondary)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                  />
                </div>

                {/* Discount and Discount Category */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[var(--foreground)] mb-2">
                      Discount
                    </label>
                    <input
                      type="text"
                      name="discount"
                      value={formData.discount}
                      onChange={handleInputChange}
                      placeholder="Discount"
                      className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder-[var(--foreground-secondary)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--foreground)] mb-2">
                      Discount Category
                    </label>
                    <div className="relative">
                      <select
                        name="discountCategory"
                        value={formData.discountCategory}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground-secondary)] appearance-none focus:outline-none focus:border-[var(--primary)] transition-colors"
                      >
                        <option value="">Discount Category</option>
                        <option value="percentage">Percentage</option>
                        <option value="fixed">Fixed Amount</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--foreground-secondary)] pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image Uploads */}
            <div className="lg:col-span-1 space-y-8">
              {/* Previews Product */}
              <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
                <h2 className="text-base font-semibold text-[var(--foreground)] mb-1">
                  Previews Product
                </h2>
                <p className="text-sm text-[var(--foreground-secondary)] mb-4">
                  Drag And Your Image Here
                </p>
                <div
                  onDrop={handleImageDrop("preview")}
                  onDragOver={(e) => e.preventDefault()}
                  className="border-2 border-dashed border-[var(--border)] rounded-xl p-8 flex flex-col items-center justify-center min-h-[180px] cursor-pointer hover:border-[var(--primary)] transition-colors"
                >
                  {previewImage ? (
                    <img src={previewImage} alt="Preview" className="max-h-32 rounded-lg" />
                  ) : (
                    <>
                      <ImageIcon className="w-10 h-10 text-[var(--foreground-secondary)] mb-3" />
                      <p className="text-sm text-[var(--foreground-secondary)]">
                        Drag and drop here
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Thumbnail Product */}
              <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
                <h2 className="text-base font-semibold text-[var(--foreground)] mb-1">
                  Thumnail Product
                </h2>
                <p className="text-sm text-[var(--foreground-secondary)] mb-4">
                  Drag And Your Image Here
                </p>
                <div
                  onDrop={handleImageDrop("thumbnail")}
                  onDragOver={(e) => e.preventDefault()}
                  className="border-2 border-dashed border-[var(--border)] rounded-xl p-8 flex flex-col items-center justify-center min-h-[180px] cursor-pointer hover:border-[var(--primary)] transition-colors"
                >
                  {thumbnailImage ? (
                    <img src={thumbnailImage} alt="Thumbnail" className="max-h-32 rounded-lg" />
                  ) : (
                    <>
                      <ImageIcon className="w-10 h-10 text-[var(--foreground-secondary)] mb-3" />
                      <p className="text-sm text-[var(--foreground-secondary)]">
                        Drag and drop here
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

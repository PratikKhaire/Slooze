"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OverviewChart } from "@/components/dashboard/OverviewChart";
import { RecentSales } from "@/components/dashboard/RecentSales";
import { StatsSection } from "@/components/dashboard/StatsSection";
import { TotalEarningCard } from "@/components/dashboard/TotalEarningCard";
import { MiniStatCard } from "@/components/dashboard/MiniStatCard";
import { SubscriptionsPerformers } from "@/components/dashboard/SubscriptionsPerformers";
import { TopSalesProduct } from "@/components/dashboard/TopSalesProduct";
import { PaymentHistory } from "@/components/dashboard/PaymentHistory";

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
    if (!isLoading && isAuthenticated && user?.role !== "manager") {
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

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Sidebar />
      <Header />

      <main className="ml-64 pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
         <div className="flex items-center justify-between">

          <h1 className="text-2xl font-bold text-[var(--foreground)] mb-6 mt-6">
            Dashboard
          </h1>
          <Link
            href="/products/add"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white text-sm font-medium rounded-lg hover:from-[#7C3AED] hover:to-[#6D28D9] transition-all shadow-sm"
          >
            <span className="text-lg leading-none">+</span>
            <span>Add New Product</span>
          </Link>
         </div>


          {/* Top Stat Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Total Earning */}
            <div className="bg-[var(--card)] rounded-xl p-5 border border-[var(--border)] relative">
              <div className="absolute top-4 right-4">
                <svg className="w-5 h-5 text-[var(--foreground-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <p className="text-sm text-[var(--foreground-secondary)] mb-1">Total Earning</p>
              <p className="text-2xl font-bold text-[var(--foreground)] mb-2">$ 112,893.00</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[var(--foreground-secondary)]">trend title</span>
                <span className="text-xs text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full font-medium">▲ 70.5%</span>
              </div>
            </div>

            {/* Views */}
            <div className="bg-[var(--card)] rounded-xl p-5 border border-[var(--border)] relative">
              <div className="absolute top-4 right-4">
                <svg className="w-5 h-5 text-[var(--foreground-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <p className="text-sm text-[var(--foreground-secondary)] mb-1">Views</p>
              <p className="text-2xl font-bold text-[var(--foreground)] mb-2">+ 112,893</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[var(--foreground-secondary)]">trend title</span>
                <span className="text-xs text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full font-medium">▲ 70.5%</span>
              </div>
            </div>

            {/* Total Sales */}
            <div className="bg-[var(--card)] rounded-xl p-5 border border-[var(--border)] relative">
              <div className="absolute top-4 right-4">
                <svg className="w-5 h-5 text-[var(--foreground-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <p className="text-sm text-[var(--foreground-secondary)] mb-1">Total Sales</p>
              <p className="text-2xl font-bold text-[var(--foreground)] mb-2">+ 112,893</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[var(--foreground-secondary)]">trend title</span>
                <span className="text-xs text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full font-medium">▲ 70.5%</span>
              </div>
            </div>

            {/* Subscriptions */}
            <div className="bg-[var(--card)] rounded-xl p-5 border border-[var(--border)] relative">
              <div className="absolute top-4 right-4">
                <svg className="w-5 h-5 text-[var(--foreground-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <p className="text-sm text-[var(--foreground-secondary)] mb-1">Subscriptions</p>
              <p className="text-2xl font-bold text-[var(--foreground)] mb-2">+ 112,893</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[var(--foreground-secondary)]">trend title</span>
                <span className="text-xs text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full font-medium">▲ 70.5%</span>
              </div>
            </div>
          </div>

          {/* Overview and Recent Sales Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <OverviewChart />
            </div>
            <div className="lg:col-span-1">
              <RecentSales />
            </div>
          </div>

          {/* Stats Section Header */}
          <StatsSection />

          {/* Total Earning Cards - Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <TotalEarningCard type="line" />
            </div>
            <div className="lg:col-span-1">
              <TotalEarningCard type="bar" />
            </div>
          </div>

          {/* Total Earning Cards - Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <TotalEarningCard type="bar-weekly" />

            {/* Subscriptions Card */}
            <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
              <h3 className="text-base font-semibold text-[var(--foreground)] mb-1">Subscriptions</h3>
              <p className="text-2xl font-bold text-[var(--foreground)] mb-2">+ 112,893</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[var(--foreground-secondary)]">trend title</span>
                <span className="w-2 h-2 rounded-sm bg-[#10B981]"></span>
                <span className="text-xs text-[#10B981] font-medium">70.5%</span>
              </div>

              {/* Yellow line chart with dots */}
              <div className="mt-6" style={{ height: 120 }}>
                <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
                  {/* Line path */}
                  <polyline
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    points="15,80 45,75 75,70 105,60 135,65 165,50 195,55 225,40 255,45 285,25"
                  />
                  {/* Dots */}
                  <g fill="#F59E0B">
                    <circle cx="15" cy="80" r="4" />
                    <circle cx="75" cy="70" r="4" />
                    <circle cx="135" cy="65" r="4" />
                    <circle cx="195" cy="55" r="4" />
                    <circle cx="255" cy="45" r="4" />
                    <circle cx="285" cy="25" r="4" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Stats Section Header 2 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Stats</h2>
          </div>

          {/* Mini Stat Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <MiniStatCard title="Total Earning" value="+112,893" color="green" />
            <MiniStatCard title="Total Sales" value="+112,893" color="cyan" />
            <MiniStatCard title="Total Views" value="+112,893" color="orange" />
          </div>

          {/* Bottom Row - Subscriptions, Top Sales, Payment History */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <SubscriptionsPerformers />
            <TopSalesProduct />
            <PaymentHistory />
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
          <h1 className="text-2xl font-bold text-[var(--foreground)] mb-6">
            Dashboard
          </h1>

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

          {/* Total Earning Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <TotalEarningCard type="line" />
            </div>
            <div className="lg:col-span-1">
              <TotalEarningCard type="bar" />
            </div>
          </div>

          {/* Second Row - Total Earning & Subscriptions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <TotalEarningCard type="bar-weekly" />
            <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
              <h3 className="text-sm font-medium text-[var(--foreground-secondary)] mb-1">Subscriptions</h3>
              <p className="text-2xl font-bold text-[var(--foreground)]">+112,893</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-[var(--foreground-secondary)]">trend title</span>
                <span className="text-xs text-[var(--success)] bg-green-100 dark:bg-green-900/20 px-1.5 py-0.5 rounded">70.5%</span>
              </div>
              {/* Yellow line chart placeholder */}
              <div className="mt-4 h-16 flex items-end gap-1">
                <svg viewBox="0 0 200 60" className="w-full h-full">
                  <polyline
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    points="10,50 30,45 50,40 70,30 90,35 110,25 130,30 150,20 170,25 190,15"
                  />
                  <g fill="#F59E0B">
                    <circle cx="10" cy="50" r="3" />
                    <circle cx="50" cy="40" r="3" />
                    <circle cx="90" cy="35" r="3" />
                    <circle cx="130" cy="30" r="3" />
                    <circle cx="170" cy="25" r="3" />
                    <circle cx="190" cy="15" r="3" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Mini Stat Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <MiniStatCard title="Total Earning" value="+112,893" color="green" />
            <MiniStatCard title="Total Sales" value="+112,893" color="cyan" />
            <MiniStatCard title="Total Views" value="+112,893" color="purple" />
          </div>

          {/* Bottom Row */}
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

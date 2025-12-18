"use client";

import { Bell, Search, Menu, Grid3X3, User } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onMenuClick?: () => void;
  className?: string;
}

export function Header({ onMenuClick, className }: HeaderProps) {
  const { user } = useAuth();

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-64 h-16 bg-[var(--card)] border-b border-[var(--border)] flex items-center justify-between px-6 z-40",
        className
      )}
    >
      {/* Left side - Menu button and Search */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-[var(--card-hover)] transition-colors lg:hidden"
        >
          <Menu className="w-5 h-5 text-[var(--foreground)]" />
        </button>

        {/* Search bar matching Figma */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-48 md:w-64 px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder-[var(--foreground-secondary)] focus:outline-none focus:border-[#6366F1] transition-colors"
            />
          </div>
          <button className="px-4 py-2 bg-[#6366F1] text-white text-sm font-medium rounded-lg hover:bg-[#4F46E5] transition-colors">
            Search
          </button>
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-3">
        {/* Admin dropdown */}
        <div className="flex items-center gap-2 px-3 py-1.5 border border-[var(--border)] rounded-lg text-sm text-[var(--foreground-secondary)]">
          <span>Admin</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Grid icon */}
        <button className="p-2 rounded-lg hover:bg-[var(--card-hover)] transition-colors">
          <Grid3X3 className="w-5 h-5 text-[var(--foreground-secondary)]" />
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notification bell */}
        <button className="relative p-2 rounded-lg hover:bg-[var(--card-hover)] transition-colors">
          <Bell className="w-5 h-5 text-[var(--foreground-secondary)]" />
        </button>

        {/* User avatar */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Add New Product button - Purple/Violet gradient matching Figma */}
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white text-sm font-medium rounded-lg hover:from-[#7C3AED] hover:to-[#6D28D9] transition-all shadow-sm">
          <span className="text-lg leading-none">+</span>
          <span>Add New Product</span>
        </button>
      </div>
    </header>
  );
}

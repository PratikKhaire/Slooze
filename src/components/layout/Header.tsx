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
              className="w-48 md:w-64 px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder-[var(--foreground-secondary)] focus:outline-none focus:border-[var(--primary)] transition-colors"
            />
          </div>
          <button className="px-4 py-2 bg-[var(--primary)] text-white text-sm font-medium rounded-lg hover:bg-[var(--primary-hover)] transition-colors">
            Search
          </button>
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-3">
        {/* Admin dropdown */}
        <div className="flex items-center gap-2 text-sm text-[var(--foreground-secondary)]">
          <span>Admin</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Grid icon */}
        <button className="p-2 rounded-lg hover:bg-[var(--card-hover)] transition-colors">
          <Grid3X3 className="w-5 h-5 text-[var(--foreground-secondary)]" />
        </button>

        <ThemeToggle />

        {/* Notification bell */}
        <button className="relative p-2 rounded-lg hover:bg-[var(--card-hover)] transition-colors">
          <Bell className="w-5 h-5 text-[var(--foreground)]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--error)] rounded-full" />
        </button>

        {/* User avatar */}
        <div className="flex items-center gap-2 ml-2">
          <div className="w-9 h-9 rounded-full bg-[var(--primary)] flex items-center justify-center overflow-hidden">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Add New Product button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-[#10B981] text-white text-sm font-medium rounded-lg hover:bg-[#059669] transition-colors">
          <span className="text-lg">+</span>
          <span>Add New Product</span>
        </button>
      </div>
    </header>
  );
}

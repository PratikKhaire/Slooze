"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, Search, Menu, Grid3X3, User, LogOut, Settings, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onMenuClick?: () => void;
  className?: string;
}

export function Header({ onMenuClick, className }: HeaderProps) {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        {/* User avatar with dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-transparent hover:border-[#8B5CF6] transition-colors">
              <img
                src={user?.role === "manager"
                  ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                  : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                }
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-lg overflow-hidden z-50">
              {/* User Info */}
              <div className="p-4 border-b border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: user?.role === "manager" ? "#8B5CF6" : "#10B981" }}
                  >
                    <span className="text-white font-semibold text-base">
                      {user?.name?.charAt(0) || "U"}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {user?.name || "User"}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: user?.role === "manager" ? "#8B5CF6" : "#10B981" }}
                    >
                      {user?.role === "manager" ? "Manager" : "Store Keeper"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-2">
                <button
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[var(--foreground-secondary)] hover:bg-[var(--card-hover)] hover:text-[var(--foreground)] transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>My Profile</span>
                </button>
                <button
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[var(--foreground-secondary)] hover:bg-[var(--card-hover)] hover:text-[var(--foreground)] transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  <span>Account Settings</span>
                </button>
              </div>

              {/* Logout */}
              <div className="p-2 border-t border-[var(--border)]">
                <button
                  onClick={() => {
                    logout();
                    setIsDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#EC4899] hover:bg-[#EC4899]/10 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

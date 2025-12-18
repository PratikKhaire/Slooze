"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutDashboard,
  Store,
  Package,
  PlusCircle,
  BarChart3,
  TrendingUp,
  DollarSign,
  CreditCard,
  Wallet,
  Settings,
  User,
  Shield,
  HelpCircle,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isCollapsed?: boolean;
}

interface NavItem {
  label: string;
  icon: React.ElementType;
  href?: string;
  children?: { label: string; href: string }[];
  managerOnly?: boolean;
}

export function Sidebar({ isCollapsed = false }: SidebarProps) {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [expandedItems, setExpandedItems] = useState<string[]>(["Store"]);

  const isManager = user?.role === "manager";

  const navItems: NavItem[] = [
    {
      label: "Home",
      icon: Home,
      href: "/dashboard",
      managerOnly: true,
    },
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      managerOnly: true,
    },
    {
      label: "Store",
      icon: Store,
      children: [
        { label: "Product", href: "/products" },
        ...(isManager ? [{ label: "Add Product", href: "/products/add" }] : []),
      ],
    },
    {
      label: "Analytic",
      icon: BarChart3,
      managerOnly: true,
      children: [
        { label: "Traffic", href: "#" },
        { label: "Earning", href: "#" },
      ],
    },
    {
      label: "Finances",
      icon: CreditCard,
      managerOnly: true,
      children: [
        { label: "Payment", href: "#" },
        { label: "Payout", href: "#" },
      ],
    },
    {
      label: "Account Setting",
      icon: Settings,
      children: [
        { label: "My Profile", href: "#" },
        { label: "Security", href: "#" },
      ],
    },
    {
      label: "Help And Support",
      icon: HelpCircle,
      href: "#",
    },
  ];

  const filteredNavItems = navItems.filter(
    (item) => !item.managerOnly || isManager
  );

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const isItemActive = (item: NavItem) => {
    if (item.href && pathname === item.href) return true;
    if (item.children) {
      return item.children.some((child) => pathname === child.href);
    }
    return false;
  };

  const isChildActive = (href: string) => pathname === href;

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-full bg-[var(--sidebar)] border-r border-[var(--border)] flex flex-col transition-all duration-300 z-40",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* User Profile Header */}
      <div className="p-6 border-b border-[var(--border)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--background-secondary)] border border-[var(--border)] flex items-center justify-center">
            <User className="w-5 h-5 text-[var(--foreground-secondary)]" />
          </div>
          {!isCollapsed && (
            <span className="text-base font-semibold text-[var(--foreground)]">
              Bitstore
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {filteredNavItems.map((item) => {
            const Icon = item.icon;
            const isExpanded = expandedItems.includes(item.label);
            const hasChildren = item.children && item.children.length > 0;
            const isActive = isItemActive(item);

            return (
              <li key={item.label}>
                {/* Main Item */}
                {hasChildren ? (
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "text-[var(--foreground)] bg-[var(--card-hover)]"
                        : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--card-hover)]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      {!isCollapsed && <span>{item.label}</span>}
                    </div>
                    {!isCollapsed && (
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isExpanded && "rotate-180"
                        )}
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "text-[var(--foreground)] bg-[var(--card-hover)]"
                        : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--card-hover)]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      {!isCollapsed && <span>{item.label}</span>}
                    </div>
                    {!isCollapsed && hasChildren && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Link>
                )}

                {/* Child Items */}
                {hasChildren && isExpanded && !isCollapsed && (
                  <ul className="ml-8 mt-1 space-y-1">
                    {item.children?.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className={cn(
                            "block px-4 py-2 rounded-lg text-sm transition-colors",
                            isChildActive(child.href)
                              ? "text-[var(--foreground)] bg-[var(--background-secondary)] font-medium"
                              : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Footer */}
      <div className="p-4 border-t border-[var(--border)]">
        <div className="flex items-center gap-3 mb-4 px-4">
          <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center">
            <span className="text-white font-medium text-sm">
              {user?.name?.charAt(0) || "U"}
            </span>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--foreground)] truncate">
                {user?.name}
              </p>
              <p className="text-xs text-[var(--foreground-secondary)] truncate">
                {user?.role === "manager" ? "Manager" : "Store Keeper"}
              </p>
            </div>
          )}
        </div>
        <button
          onClick={logout}
          className={cn(
            "flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-[var(--error)] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors",
            isCollapsed && "justify-center"
          )}
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span>Log out</span>}
        </button>
      </div>
    </aside>
  );
}

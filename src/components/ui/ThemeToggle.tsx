"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative p-2 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--card-hover)] transition-all duration-200",
        className
      )}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Sun
        className={cn(
          "w-5 h-5 text-[#F59E0B] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
          theme === "light" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
        )}
      />
      <Moon
        className={cn(
          "w-5 h-5 text-[var(--primary)] transition-all duration-300",
          theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
        )}
      />
    </button>
  );
}

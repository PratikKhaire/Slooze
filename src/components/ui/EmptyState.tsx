"use client";

import { Package, FolderOpen } from "lucide-react";
import { Button } from "./Button";
import Link from "next/link";

interface EmptyStateProps {
  title?: string;
  message?: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
  icon?: "products" | "folder";
}

export function EmptyState({
  title = "No data found",
  message = "There's nothing here yet.",
  actionLabel,
  actionHref,
  onAction,
  icon = "products",
}: EmptyStateProps) {
  const Icon = icon === "products" ? Package : FolderOpen;

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="w-16 h-16 rounded-full bg-[var(--background-secondary)] flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-[var(--foreground-secondary)]" />
      </div>
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[var(--foreground-secondary)] text-center max-w-md mb-4">
        {message}
      </p>
      {actionLabel && actionHref && (
        <Link href={actionHref}>
          <Button>{actionLabel}</Button>
        </Link>
      )}
      {actionLabel && onAction && !actionHref && (
        <Button onClick={onAction}>{actionLabel}</Button>
      )}
    </div>
  );
}

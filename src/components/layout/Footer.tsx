"use client";

import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 bg-[var(--card)] border-t border-border rounded-xl">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path
                    d="M12 2L2 12l10 10 10-10L12 2z"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-[var(--foreground)]">Opion</span>
            </div>

            {/* Description */}
            <p className="text-sm text-[var(--foreground-secondary)] mb-6 max-w-sm">
              Ease of shopping is our main focus. With powerful search features and customizable filters, you can easily find the products you are looking for.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-medium text-[var(--foreground)] mb-3">Subscribe to Newsletter</p>
              <div className="flex items-center gap-2 bg-[var(--background)] border border-border rounded-full px-4 py-2 max-w-xs">
                <Mail className="w-4 h-4 text-[var(--foreground-secondary)]" />
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  className="flex-1 bg-transparent text-sm text-[var(--foreground)] placeholder-[var(--foreground-secondary)] outline-none"
                />
              </div>
            </div>
          </div>

          {/* Get Started Column 1 */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4">Get Started</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors">Service</a></li>
              <li><a href="#" className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Get Started Column 2 */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4">Get Started</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors">Platform</a></li>
              <li><a href="#" className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors">Workout Library</a></li>
              <li><a href="#" className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors">App Design</a></li>
            </ul>
          </div>

          {/* Get Started Column 3 */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4">Get Started</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="text-sm text-[var(--foreground-secondary)]">2024 MaxFit</p>
          <div className="flex items-center gap-2 text-sm text-[var(--primary)]">
            <a href="#" className="hover:underline">Twitter</a>
            <span className="text-[var(--foreground-secondary)]">—</span>
            <a href="#" className="hover:underline">Instagram</a>
            <span className="text-[var(--foreground-secondary)]">—</span>
            <a href="#" className="hover:underline">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

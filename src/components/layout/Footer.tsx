import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const footerLinks = {
    getStarted: [
      { label: "Service", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Affiliate Program", href: "#" },
      { label: "About Us", href: "#" },
    ],
    dashboard: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Platform", href: "#" },
      { label: "Member Library", href: "#" },
      { label: "App Design", href: "#" },
    ],
    resources: [
      { label: "About Us", href: "#" },
      { label: "Manifesto", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Flywheel.com", href: "#" },
      { label: "Help Support", href: "#" },
    ],
  };

  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)] flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold text-[var(--foreground)]">
                Opion
              </span>
            </div>
            <p className="text-sm text-[var(--foreground-secondary)] mb-6 max-w-sm">
              Best of integration, our web Macro. With powerful instant features and customizable items, you can quickly that evolve you can saving to.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[var(--background-secondary)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors text-[var(--foreground)]"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[var(--background-secondary)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors text-[var(--foreground)]"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[var(--background-secondary)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors text-[var(--foreground)]"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-medium text-[var(--foreground)] mb-2">
                Subscribe to Newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  className="flex-1 px-4 py-2 rounded-lg bg-[var(--background-secondary)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder-[var(--foreground-secondary)] focus:outline-none focus:border-[var(--primary)]"
                />
                <button className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">
              Get Started
            </h4>
            <ul className="space-y-3">
              {footerLinks.getStarted.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started (Dashboard links) */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">
              Get Started
            </h4>
            <ul className="space-y-3">
              {footerLinks.dashboard.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started (Resources) */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">
              Get Started
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--foreground-secondary)]">
            ©2024 WebFly
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";

export default function LoginPage() {
  const router = useRouter();
  const { login, user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Redirect if already logged in
  if (user) {
    router.push(user.role === "manager" ? "/dashboard" : "/products");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!agreeTerms) {
      setError("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);

    const result = await login(email, password);

    if (result.success) {
      const storedUser = localStorage.getItem("slooze_user");
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        router.push(userData.role === "manager" ? "/dashboard" : "/products");
      }
    } else {
      setError(result.error || "Login failed");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className={`flex-1 flex items-center justify-center p-8 relative ${isDark ? 'bg-[#0D0B21]' : 'bg-white'}`}>
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`absolute top-6 right-6 p-2 rounded-lg border transition-colors ${
            isDark
              ? 'bg-[#1a1833] border-purple-500/30 text-yellow-400 hover:bg-[#252040]'
              : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
          }`}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>

        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Welcome Back
            </h1>
            <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
              Sign Up For Free
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 ${
                  isDark
                    ? 'bg-[#0D0B21] border-purple-500/30 text-white placeholder-gray-500'
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>

            {/* Password Input */}
            <div>
              <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 ${
                  isDark
                    ? 'bg-[#0D0B21] border-purple-500/30 text-white placeholder-gray-500'
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 rounded border-purple-500 text-purple-600 focus:ring-purple-500 bg-transparent"
              />
              <label htmlFor="terms" className={`text-sm cursor-pointer ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I agree to all Term, Privacy Policy and fees
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className={`p-3 rounded-lg border ${isDark ? 'bg-red-900/20 border-red-800' : 'bg-red-50 border-red-200'}`}>
                <p className={`text-sm ${isDark ? 'text-red-400' : 'text-red-600'}`}>{error}</p>
              </div>
            )}

            {/* Get Started Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-full hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Get Started"}
            </button>

            {/* Divider */}
            <div className="text-center">
              <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>OR</span>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              {/* Google Button */}
              <button
                type="button"
                className={`w-full flex items-center justify-center gap-3 px-4 py-3 border rounded-full transition-colors ${
                  isDark
                    ? 'bg-white border-white text-gray-700 hover:bg-gray-100'
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Sign in with Google
                </span>
              </button>

              {/* Facebook Button */}
              <button
                type="button"
                className={`w-full flex items-center justify-center gap-3 px-4 py-3 border rounded-full transition-colors ${
                  isDark
                    ? 'bg-white border-white text-gray-700 hover:bg-gray-100'
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-sm font-medium">
                  Sign in with Google
                </span>
              </button>
            </div>

            {/* Login Link */}
            <p className={`text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Already have an account?{" "}
              <Link
                href="#"
                className="text-purple-500 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </form>

          {/* Demo Credentials */}
          <div className={`mt-8 p-4 rounded-lg border ${isDark ? 'bg-[#1a1833] border-purple-500/20' : 'bg-gray-50 border-gray-200'}`}>
            <p className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Demo Credentials:
            </p>
            <div className={`space-y-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <p>
                <strong>Manager:</strong> manager@slooze.com / password123
              </p>
              <p>
                <strong>Store Keeper:</strong> keeper@slooze.com / password123
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Abstract Background Image */}
      <div className="hidden lg:block flex-1 relative overflow-hidden">
        <img
          src={isDark
            ? "https://images.unsplash.com/photo-1633259584604-afdc243122ea?w=1200&h=1600&fit=crop"
            : "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=1600&fit=crop"
          }
          alt="Abstract background"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-blue-600/10 to-orange-500/10' : 'bg-gradient-to-br from-purple-600/20 to-pink-500/20'}`} />
      </div>
    </div>
  );
}

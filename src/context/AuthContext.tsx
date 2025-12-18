"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type UserRole = "manager" | "store_keeper";

export interface User {
  userId: string;
  email: string;
  role: UserRole;
  name: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users database
const MOCK_USERS: Record<string, { password: string; user: Omit<User, "token"> }> = {
  "manager@slooze.com": {
    password: "password123",
    user: {
      userId: "1",
      email: "manager@slooze.com",
      role: "manager",
      name: "John Manager",
    },
  },
  "keeper@slooze.com": {
    password: "password123",
    user: {
      userId: "2",
      email: "keeper@slooze.com",
      role: "store_keeper",
      name: "Jane Keeper",
    },
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("slooze_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("slooze_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const mockUser = MOCK_USERS[email.toLowerCase()];

    if (!mockUser) {
      return { success: false, error: "User not found" };
    }

    if (mockUser.password !== password) {
      return { success: false, error: "Invalid password" };
    }

    const authenticatedUser: User = {
      ...mockUser.user,
      token: `mock_token_${Date.now()}`,
    };

    setUser(authenticatedUser);
    localStorage.setItem("slooze_user", JSON.stringify(authenticatedUser));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("slooze_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

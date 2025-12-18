import axios, { AxiosError, AxiosInstance } from "axios";

// Create axios instance with base configuration
const api: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const storedUser = localStorage.getItem("slooze_user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Clear session and redirect to login
      localStorage.removeItem("slooze_user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: async (email: string, password: string) => {
    // Mock API call - in production, this would hit the real backend
    // Simulating: POST /auth/login
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Mock validation
    const mockUsers: Record<string, { password: string; role: string; name: string }> = {
      "manager@slooze.com": { password: "password123", role: "manager", name: "John Manager" },
      "keeper@slooze.com": { password: "password123", role: "store_keeper", name: "Jane Keeper" },
    };

    const user = mockUsers[email.toLowerCase()];
    if (!user || user.password !== password) {
      throw new Error("Invalid credentials");
    }

    return {
      userId: email === "manager@slooze.com" ? "1" : "2",
      email: email.toLowerCase(),
      role: user.role,
      name: user.name,
      token: `mock_token_${Date.now()}`,
    };
  },

  logout: async () => {
    localStorage.removeItem("slooze_user");
  },
};

// Products API
export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  vendor: string;
  quantity: number;
  price: number;
  status: "published" | "draft";
  createdAt: string;
}

export const productsAPI = {
  // GET /products
  getProducts: async (): Promise<Product[]> => {
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return mock data - in production: return api.get("/products").then(res => res.data)
    const { mockProducts } = await import("@/data/mockData");
    return mockProducts;
  },

  // GET /products/:id
  getProduct: async (id: string): Promise<Product | null> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const { mockProducts } = await import("@/data/mockData");
    return mockProducts.find((p) => p.id === id) || null;
  },

  // POST /products
  createProduct: async (product: Omit<Product, "id" | "createdAt">): Promise<Product> => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      ...product,
      id: `${Date.now()}`,
      createdAt: new Date().toISOString().split("T")[0],
    };
  },

  // PUT /products/:id
  updateProduct: async (id: string, product: Partial<Product>): Promise<Product> => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const { mockProducts } = await import("@/data/mockData");
    const existing = mockProducts.find((p) => p.id === id);
    if (!existing) throw new Error("Product not found");
    return { ...existing, ...product };
  },

  // DELETE /products/:id
  deleteProduct: async (id: string): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    // Mock delete - in production: return api.delete(`/products/${id}`)
  },
};

// Dashboard API
export const dashboardAPI = {
  getStats: async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    const { dashboardStats, overviewData, recentSales, salesChartData } = await import(
      "@/data/mockData"
    );
    return {
      stats: dashboardStats,
      overviewData,
      recentSales,
      salesChartData,
    };
  },
};

export default api;

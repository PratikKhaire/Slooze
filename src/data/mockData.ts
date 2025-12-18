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

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Gold Reserve",
    image: "/products/gold.jpg",
    category: "Precious Metals",
    vendor: "MetalCore Inc",
    quantity: 150,
    price: 2450.00,
    status: "published",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Crude Oil Barrel",
    image: "/products/oil.jpg",
    category: "Energy",
    vendor: "PetroGlobal",
    quantity: 500,
    price: 78.50,
    status: "published",
    createdAt: "2024-01-14",
  },
  {
    id: "3",
    name: "Copper Wire Bundle",
    image: "/products/copper.jpg",
    category: "Industrial Metals",
    vendor: "CopperTech",
    quantity: 1200,
    price: 4.25,
    status: "published",
    createdAt: "2024-01-13",
  },
  {
    id: "4",
    name: "Organic Coffee Beans",
    image: "/products/coffee.jpg",
    category: "Agriculture",
    vendor: "BeanWorks",
    quantity: 800,
    price: 12.99,
    status: "published",
    createdAt: "2024-01-12",
  },
  {
    id: "5",
    name: "Natural Gas Reserves",
    image: "/products/gas.jpg",
    category: "Energy",
    vendor: "GasFlow Ltd",
    quantity: 2500,
    price: 3.45,
    status: "published",
    createdAt: "2024-01-11",
  },
  {
    id: "6",
    name: "Silver Bullion",
    image: "/products/silver.jpg",
    category: "Precious Metals",
    vendor: "SilverMine Co",
    quantity: 300,
    price: 28.50,
    status: "published",
    createdAt: "2024-01-10",
  },
  {
    id: "7",
    name: "Premium Wheat Grain",
    image: "/products/wheat.jpg",
    category: "Agriculture",
    vendor: "GrainMaster",
    quantity: 5000,
    price: 7.25,
    status: "published",
    createdAt: "2024-01-09",
  },
  {
    id: "8",
    name: "Aluminum Sheets",
    image: "/products/aluminum.jpg",
    category: "Industrial Metals",
    vendor: "AluWorks",
    quantity: 750,
    price: 2.85,
    status: "draft",
    createdAt: "2024-01-08",
  },
  {
    id: "9",
    name: "Soybean Futures",
    image: "/products/soybean.jpg",
    category: "Agriculture",
    vendor: "SoyFarms Inc",
    quantity: 3200,
    price: 13.45,
    status: "published",
    createdAt: "2024-01-07",
  },
  {
    id: "10",
    name: "Platinum Reserve",
    image: "/products/platinum.jpg",
    category: "Precious Metals",
    vendor: "PlatinumElite",
    quantity: 50,
    price: 985.00,
    status: "draft",
    createdAt: "2024-01-06",
  },
  {
    id: "11",
    name: "Cotton Bales",
    image: "/products/cotton.jpg",
    category: "Agriculture",
    vendor: "CottonKing",
    quantity: 1500,
    price: 0.85,
    status: "published",
    createdAt: "2024-01-05",
  },
  {
    id: "12",
    name: "Iron Ore Pellets",
    image: "/products/iron.jpg",
    category: "Industrial Metals",
    vendor: "IronWorks",
    quantity: 8000,
    price: 125.00,
    status: "published",
    createdAt: "2024-01-04",
  },
];

export const dashboardStats = {
  totalEarning: 112893.0,
  views: 112893,
  totalSales: 12893,
  subscriptions: 112893,
};

export const overviewData = [
  { month: "Jan", thisYear: 5000, lastYear: 4000 },
  { month: "Feb", thisYear: 12000, lastYear: 8000 },
  { month: "Mar", thisYear: 8000, lastYear: 7000 },
  { month: "Apr", thisYear: 15000, lastYear: 10000 },
  { month: "May", thisYear: 10000, lastYear: 9000 },
  { month: "Jun", thisYear: 18000, lastYear: 12000 },
];

export const recentSales = [
  { id: "1", name: "John Walker", email: "john@example.com", amount: 5500.0, avatar: "/avatars/1.jpg" },
  { id: "2", name: "Sarah Smith", email: "sarah@example.com", amount: 3200.0, avatar: "/avatars/2.jpg" },
  { id: "3", name: "Mike Johnson", email: "mike@example.com", amount: 4100.0, avatar: "/avatars/3.jpg" },
  { id: "4", name: "Emily Davis", email: "emily@example.com", amount: 2800.0, avatar: "/avatars/4.jpg" },
  { id: "5", name: "Chris Brown", email: "chris@example.com", amount: 6200.0, avatar: "/avatars/5.jpg" },
];

export const salesChartData = [
  { day: "Mon", value: 120 },
  { day: "Tue", value: 180 },
  { day: "Wed", value: 150 },
  { day: "Thu", value: 220 },
  { day: "Fri", value: 190 },
  { day: "Sat", value: 280 },
  { day: "Sun", value: 240 },
];

# Slooze Commodities Management System

A role-based Commodities Management System with enhanced UI features, including Light/Dark mode and dynamic menu restrictions.

## 🚀 Features

### Core Features (MVP)

- ✅ **Authentication & Access** - Email/password login with role-based access
- ✅ **Dashboard** - Manager-only dashboard with statistics, charts, and insights
- ✅ **View Products** - Product listings accessible to both Manager and Store Keeper
- ✅ **Add/Edit Products** - Manager-only product management forms

### UI Enhancements

- ✅ **Light/Dark Mode** - Theme toggle with localStorage persistence
- ✅ **Role-Based Menu Restrictions** - Dynamic UI based on user role
- ✅ **Router Guards** - Protected routes with role-based access control
- ✅ **Loading States** - Spinners while fetching data
- ✅ **Error States** - Error messages with retry options
- ✅ **Empty States** - Messages when no data is available

---

## 📐 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                   Front-End Application                     │
│                     (Next.js + TypeScript)                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Login Page                                          │  │
│  │  - Email/Password Input                              │  │
│  │  - API Request to /auth/login                        │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Dashboard (Manager Only)                            │  │
│  │  - Statistics & Insights (Charts)                    │  │
│  │  - Role-Based Access Guards                          │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Product Management                                  │  │
│  │  - Fetch Products via /products                      │  │
│  │  - Add/Edit Products Forms (Manager Only)            │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  UI Enhancements                                     │  │
│  │  - Light/Dark Mode Toggle                            │  │
│  │  - Role-Based Menu Restrictions                      │  │
│  │  - Loading/Error/Empty States                        │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Context   │     │   Mock API  │     │ localStorage│
│    (Auth)   │     │  Handlers   │     │   (Theme)   │
└─────────────┘     └─────────────┘     └─────────────┘
```

---

## 👥 Role Access Matrix

| Feature             | Manager | Store Keeper |
| ------------------- | :-----: | :----------: |
| Login               |   ✅    |      ✅      |
| Dashboard           |   ✅    |      ❌      |
| View Products       |   ✅    |      ✅      |
| Add Product         |   ✅    |      ❌      |
| Edit/Delete Product |   ✅    |      ❌      |
| Theme Toggle        |   ✅    |      ✅      |

---

## 🔐 Demo Credentials

| Role         | Email              | Password    |
| ------------ | ------------------ | ----------- |
| Manager      | manager@slooze.com | password123 |
| Store Keeper | keeper@slooze.com  | password123 |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios (for API calls)
- **Charts**: Recharts
- **Icons**: Lucide React
- **State**: React Context API

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── login/             # Login page
│   ├── dashboard/         # Dashboard (Manager only)
│   ├── products/          # Products list
│   └── products/add/      # Add product form
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Loading.tsx    # Loading spinner
│   │   ├── ErrorMessage.tsx # Error state
│   │   ├── EmptyState.tsx # Empty state
│   │   └── ThemeToggle.tsx
│   ├── layout/            # Layout components
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── dashboard/         # Dashboard components
│   └── products/          # Product components
├── context/               # React Context providers
│   ├── AuthContext.tsx    # Authentication state
│   └── ThemeContext.tsx   # Theme state
├── data/                  # Mock data
├── lib/
│   ├── utils.ts           # Utility functions
│   └── api.ts             # API client (Axios)
└── styles/
    └── globals.css        # Global styles
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Navigate to project directory
cd slooze-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📋 Assumptions Made

1. **No Real Backend** - All API calls are mocked locally
2. **Image Uploads** - Visual only, no actual file upload functionality
3. **Charts Data** - Using hardcoded mock data for demonstration
4. **Responsive Design** - Desktop-first based on Figma

---

## 🎨 UI/UX States Implemented

| State       | Implementation                        |
| ----------- | ------------------------------------- |
| **Loading** | Spinner component while fetching data |
| **Error**   | Error message with retry option       |
| **Empty**   | Message when no data available        |
| **Success** | Data displayed successfully           |

---

## 📝 Demo Script (2-3 Minutes)

1. **Introduction** (30s): Show login page, explain the problem
2. **Manager Flow** (60s): Login → Dashboard → Products → Add Product
3. **Store Keeper Flow** (30s): Login → Products only (no Dashboard)
4. **UI Enhancements** (30s): Toggle Light/Dark mode
5. **Summary** (30s): Highlight role-based access and UI features

---

## 📝 License

This project was created for the Slooze Take Home Challenge.

---

Built with ❤️ using Next.js and TypeScript

# Slooze

A dashboard for managing commodities with role-based access.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Login

| Role         | Email              | Password    |
| ------------ | ------------------ | ----------- |
| Manager      | manager@slooze.com | password123 |
| Store Keeper | keeper@slooze.com  | password123 |

## Features

- Dashboard with charts and stats (Manager only)
- Product management
- Light/Dark theme
- Role-based access control

## Tech

- Next.js 14
- TypeScript
- Tailwind CSS
- Recharts

## Project Structure

```
src/
├── app/           # Pages
├── components/    # UI components
├── context/       # Auth & Theme
├── lib/           # Utils & API
└── data/          # Mock data
```

## Notes

- Mock API (no real backend)
- Demo data for charts
- Desktop-first design

---

Built for Slooze Take Home Challenge

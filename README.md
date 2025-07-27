# 🧠 Personalized Content Dashboard

A responsive web dashboard built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Redux Toolkit**, designed to show personalized content including news, movies, and social media posts.

## 🚀 Github link

https://github.com/tsujit74/personalized-dashboard

## 🚀 Live Demo

👉 [https://personalized-dashboard-eight.vercel.app/](https://personalized-dashboard-eight.vercel.app/)

---

## ✅ Features Implemented

### 1. 🔧 Core Features

- **User Preferences** stored via Redux and `localStorage`
- **News Feed** using NewsAPI by category
- **Movie Recommendations** via TMDB API
- **Mock Social Media Posts**
- **Favorites Section** to save liked content

### 2. 🖥️ Dashboard Layout

- Sidebar navigation with section anchors
- Top header with Search, Category selection, and Dark Mode toggle
- Responsive layout (mobile + desktop)

### 3. 🔍 Search

- Global search across all content
- Uses `lodash.debounce` for performance

### 4. 🌙 Dark/Light Mode

- Fully styled with Tailwind CSS (`darkMode: 'class'`)
- Preference saved to `localStorage`

### 5. 🧩 Drag-and-Drop Support

- Reorderable content cards using `@hello-pangea/dnd`

### 6. 💾 State & Persistence

- Managed via **Redux Toolkit** and **RTK Query**
- User preferences persist using `redux-persist` + localStorage

---

## 🧪 Technologies Used

- **Next.js 15 (App Router)**
- **React 19 + TypeScript**
- **Tailwind CSS v4**
- **Redux Toolkit**
- **RTK Query**
- **Framer Motion (optional)**
- **@hello-pangea/dnd**

---

## 🛠 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/tsujit74/personalized-dashboard.git

# Navigate to project
cd personalized-dashboard

# Install dependencies
npm install

# Run locally
npm run dev

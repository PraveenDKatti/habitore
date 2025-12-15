# Habitore | Modern E-Commerce Frontend

> "Elevate your everyday."

Habitore is a modern, responsive, and aesthetically driven e-commerce application built to demonstrate a professional frontend architecture. It simulates a high-end department store experience with a focus on "Quiet Luxury" design principles, seamless navigation, and robust state management.

![Project Banner](https://drive.google.com/uc?id=1DhXyBr4NMd8eFBXTkhOSLT1ENxf1_FiN)

## 🚀 Live Demo
habitore.vercel.app

## 🛠️ Tech Stack
* **Core:** React (Vite), JavaScript (ES6+)
* **Styling:** Tailwind CSS (Custom Theme Configuration)
* **Routing:** React Router v6 (Dynamic Routes, Search Params)
* **State Management:** React Context API (Cart)
* **Icons:** Lucide React

## ✨ Key Features

### 🛍️ Browsing & Discovery
* **Dynamic Catalog:** Filter products by Category, Price Range, and Sort Order.
* **URL-Based State:** Shareable URLs for search results and filters (e.g., `/shop?category=Fashion&q=hoodie`).
* **Smart Search:** Navbar search redirects to the catalog with applied filters.

### 🛒 Shopping Experience
* **Persistent Cart:** Cart state persists via LocalStorage (refresh-proof).
* **Slide-out Drawer:** Access cart contents from anywhere without leaving the current page.
* **Optimized UX:** Custom `ScrollToTop` behavior ensures users land at the top of the page on route changes.

### 💳 Checkout Flow
* **Multi-Step Process:** Distraction-free checkout layout.
* **Dynamic Forms:** Payment methods (Credit Card, UPI, COD) toggle via accordion UI.
* **Order Validation:** Stock limits and form validation logic.

### 👤 User Dashboard
* **Profile Management:** Tabbed interface for Orders, Addresses, and Settings.
* **Order History:** visual order summaries with status badges.

## 📂 Project Structure

```bash
src/
├── components/      # Reusable UI components (Navbar, ProductCard, etc.)
├── context/         # Global State (CartContext, WishlistContext)
├── data/            # Centralized Mock Database
├── layouts/         # Layout wrappers (MainLayout, AuthLayout)
├── pages/           # Route views (Home, Shop, Checkout, Profile)
├── utility/         # Helper functions (ScrollToTop)
└── main.jsx         # Entry point
```

Clone the repository

```Bash
git clone [https://github.com/your-username/habitore.git](https://github.com/your-username/habitore.git)
Install dependencies
```

```Bash
cd habitore
npm install
```

```Bash
npm run dev
```
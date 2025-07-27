"use client";

import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 p-6">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
        📊 Dashboard
      </h2>

        <nav className="space-y-4">
          <a href="#news" className="block text-lg hover:text-blue-500">
            📰 News
          </a>
          <a href="#movies" className="block text-lg hover:text-blue-500">
            🎬 Movies
          </a>
          <a href="#social" className="block text-lg hover:text-blue-500">
            📱 Social
          </a>
          <a href="#trending" className="block text-lg hover:text-blue-500">
            🔥 Trending
          </a>
          <a href="#favorites" className="block text-lg hover:text-blue-500">
            ⭐ Favorites
          </a>
        </nav>
      
      <div className="mt-10 text-xs text-gray-400 dark:text-gray-500">
        © 2025 PGAGI Internship
      </div>
    </aside>
  );
}

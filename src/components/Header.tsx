'use client';

import React from 'react';
import SearchBar from './SearchBar';
import CategorySelector from './CategorySelector';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 dark:text-white shadow p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 max-w-xl">
          <SearchBar />
        </div>

        <div className="flex items-center gap-4 ml-4">
          <CategorySelector />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}

'use client';
import React from 'react';
import SearchBar from './SearchBar';
import CategorySelector from './CategorySelector';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 dark:text-white shadow p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <SearchBar />
        <CategorySelector />
        <DarkModeToggle/>
      </div>
    </header>
  );
}

'use client';

import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useAppDispatch } from '@/hooks';
import { setSearchQuery } from '@/features/search/searchBarSlice';

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState('');

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      dispatch(setSearchQuery(value.trim()));
    }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    debouncedSearch(value);
  };

  return (
    <div className="w-full max-w-xl">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search news, movies, or posts..."
        className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white"
      />
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCategories } from "@/features/preferences/preferencesSlice";

const AVAILABLE_CATEGORIES = [
  "general",
  "technology",
  "sports",
  "business",
  "entertainment",
  "science",
  "health",
];

export default function CategorySelector() {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.preferences.categories);
  const [tempSelected, setTempSelected] = useState<string[]>(selected);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTempSelected(selected);
  }, [selected]);

  const handleToggle = (category: string) => {
    setTempSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSave = () => {
    dispatch(setCategories(tempSelected));
    setOpen(false);
  };

  return (
    <div className="relative z-20">
      <button
        onClick={() => setOpen(true)}
        className="text-sm bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        ⚙️ Preferences
      </button>

      {open && (
        <div className="absolute top-10 right-0 bg-white dark:bg-gray-900 shadow-lg border dark:border-gray-700 p-4 rounded w-64 z-50">
          <h3 className="text-md font-semibold mb-2">Select Categories</h3>
          <div className="space-y-2">
            {AVAILABLE_CATEGORIES.map((category) => (
              <label key={category} className="flex items-center text-sm">
                <input
                  type="checkbox"
                  checked={tempSelected.includes(category)}
                  onChange={() => handleToggle(category)}
                  className="mr-2"
                />
                {category}
              </label>
            ))}
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={() => setOpen(false)}
              className="text-sm text-gray-500 hover:text-red-500"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

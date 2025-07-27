'use client';

import React from 'react';
import { useAppDispatch } from '@/hooks';
import { addFavorite } from '@/features/favorites/favoritesSlice';

interface NewsCardProps {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, url, urlToImage }) => {
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    dispatch(
      addFavorite({
        id: url,
        type: 'news',
        data: { title, description, url, urlToImage },
      })
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 w-full max-w-md">
      {urlToImage && (
        <img
          src={urlToImage}
          alt={title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h2 className="text-lg font-bold mt-2 text-gray-900 dark:text-white">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-blue-500 hover:underline text-sm"
      >
        Read more →
      </a>
      <button
        onClick={handleFavorite}
        className="block mt-2 text-sm text-blue-500 hover:underline"
      >
        ❤️ Add to Favorites
      </button>
    </div>
  );
};

export default NewsCard;

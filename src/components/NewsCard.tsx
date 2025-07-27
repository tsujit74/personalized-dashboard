'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/hooks';
import { addFavorite } from '@/features/favorites/favoritesSlice';

interface NewsCardProps {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  url,
  urlToImage,
}) => {
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
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 w-full max-w-md flex flex-col justify-between"
      data-cy="news-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top Content */}
      <div>
        {urlToImage && (
          <img
            src={urlToImage}
            alt={title}
            className="w-full h-48 object-cover rounded"
          />
        )}
        <h2 className="text-lg font-bold mt-2 text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm">
          {description}
        </p>
      </div>

      {/* Bottom Buttons */}
      <div className="mt-4 flex flex-col gap-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm"
          data-cy="read-more"
        >
          Read more →
        </a>
        <button
          onClick={handleFavorite}
          className="text-sm text-blue-500 hover:underline"
          data-cy="add-favorite"
        >
          ❤️ Add to Favorites
        </button>
      </div>
    </motion.div>
  );
};

export default NewsCard;

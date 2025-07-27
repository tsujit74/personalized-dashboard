'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/hooks';
import { addFavorite } from '@/features/favorites/favoritesSlice';

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    dispatch(
      addFavorite({
        id: movie.id.toString(),
        type: 'movie',
        data: movie,
      })
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-60 flex flex-col justify-between"
      data-cy="movie-card"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />
      <div className="flex flex-col justify-between flex-grow p-3">
        <div>
          <h3 className="font-semibold text-md text-gray-900 dark:text-white truncate">
            {movie.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
            {movie.overview}
          </p>
        </div>
        <button
          onClick={handleFavorite}
          className="mt-3 text-sm text-blue-500 hover:underline"
          data-cy="add-favorite-movie"
        >
          ❤️ Add to Favorites
        </button>
      </div>
    </motion.div>
  );
}

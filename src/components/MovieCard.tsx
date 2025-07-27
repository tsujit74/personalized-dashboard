'use client';

import React from 'react';
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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-60">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />
      <div className="p-3">
        <h3 className="font-semibold text-md truncate">{movie.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{movie.overview}</p>
        <button
          onClick={handleFavorite}
          className="mt-2 text-sm text-blue-500 hover:underline"
        >
          ❤️ Add to Favorites
        </button>
      </div>
    </div>
  );
}

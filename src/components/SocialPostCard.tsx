'use client';

import React from 'react';
import { useAppDispatch } from '@/hooks';
import { addFavorite } from '@/features/favorites/favoritesSlice';

type Post = {
  id: string;
  user: string;
  platform: string;
  content: string;
  image?: string;
};

export default function SocialPostCard({ post }: { post: Post }) {
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    dispatch(
      addFavorite({
        id: post.id,
        type: 'social',
        data: post,
      })
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 w-full sm:max-w-md flex flex-col justify-between self-start">
      <div className="mb-3">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
          <span>@{post.user}</span>
          <span>{post.platform}</span>
        </div>
        <p className="text-gray-800 dark:text-gray-200 mb-2">{post.content}</p>
        {post.image && (
          <img
            src={post.image}
            alt="post"
            className="w-full h-48 object-cover rounded-md mb-3"
          />
        )}
      </div>
      <button
        onClick={handleFavorite}
        className="text-sm text-blue-500 hover:underline self-start"
      >
        ❤️ Add to Favorites
      </button>
    </div>
  );
}

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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 max-w-xl w-full">
      <div className="flex justify-between mb-2 text-sm text-gray-500">
        <span>@{post.user}</span>
        <span>{post.platform}</span>
      </div>
      <p className="mb-2">{post.content}</p>
      {post.image && (
        <img src={post.image} alt="post" className="rounded-lg max-h-60 object-cover" />
      )}
      <button
        onClick={handleFavorite}
        className="mt-2 text-sm text-blue-500 hover:underline"
      >
        ❤️ Add to Favorites
      </button>
    </div>
  );
}

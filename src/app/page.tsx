"use client";

import React from "react";
import { useAppSelector } from "@/hooks";
import { useGetTopHeadlinesQuery } from "@/features/news/newapi";
import { useGetPopularMoviesQuery } from "@/features/movies/tmdbApi";
import { useGetSocialPostsQuery } from "@/features/social/socialApi";

import NewsCard from "@/components/NewsCard";
import MovieCard from "@/components/MovieCard";
import SocialPostCard from "@/components/SocialPostCard";
import FavoritesSection from "@/components/FavoritesSection";

export default function Home() {
  const searchQuery =
    useAppSelector((state) => state.searchBar.query)?.toLowerCase() || "";

  const categories = useAppSelector((state) => state.preferences.categories);
  const category = categories[0] || "general";

  const {
    data: newsData,
    isLoading: newsLoading,
    isError: newsError,
  } = useGetTopHeadlinesQuery(category);

  const {
    data: movieData,
    isLoading: movieLoading,
    isError: movieError,
  } = useGetPopularMoviesQuery(undefined);

  const {
    data: socialData,
    isLoading: socialLoading,
    isError: socialError,
  } = useGetSocialPostsQuery(undefined);

  return (
    <div className="space-y-12 px-4 sm:px-8 md:px-12 py-8">
      {/* News Feed */}
      <section id="news">
        <h2 className="text-2xl font-bold mb-4">📰 Personalized News Feed</h2>
        {newsLoading ? (
          <p>Loading news...</p>
        ) : newsError ? (
          <p className="text-red-500">Error fetching news. Try again later.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData?.articles
              ?.filter(
                (article: any) =>
                  article.title?.toLowerCase().includes(searchQuery) ||
                  article.description?.toLowerCase().includes(searchQuery)
              )

              .map((article: any) => (
                <NewsCard key={article.url} {...article} />
              ))}
          </div>
        )}
      </section>

      {/* Movie Recommendations */}
      <section id="movies">
        <h2 className="text-2xl font-bold mb-4">🎬 Movie Recommendations</h2>
        {movieLoading ? (
          <p>Loading movies...</p>
        ) : movieError ? (
          <p className="text-red-500">Error fetching movies.</p>
        ) : (
          <div className="flex flex-wrap gap-4 justify-start">
            {movieData?.results
              ?.slice(0, 10)
              ?.filter((movie: any) =>
                (movie.title || movie.name)?.toLowerCase().includes(searchQuery)
              )
              .map((movie: any) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </div>
        )}
      </section>

      {/* Social Media Posts */}
      <section id="social">
        <h2 className="text-2xl font-bold mb-4">📱 Social Media Posts</h2>
        {socialLoading ? (
          <p>Loading posts...</p>
        ) : socialError ? (
          <p className="text-red-500">Error fetching social posts.</p>
        ) : (
          <div className="flex flex-col gap-4 items-center">
            {socialData
              ?.filter((post: any) =>
                post.content?.toLowerCase().includes(searchQuery)
              )
              .map((post: any) => (
                <SocialPostCard key={post.id} post={post} />
              ))}
          </div>
        )}
      </section>

      {/* Favorites */}
      <section id="favorites">
        <FavoritesSection />
      </section>
    </div>
  );
}

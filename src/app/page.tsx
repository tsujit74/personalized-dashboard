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
        {newsError ? (
          <p className="text-red-500">Error fetching news. Try again later.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsLoading
              ? Array(6)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="h-60 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-md"
                    ></div>
                  ))
              : newsData?.articles
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
        {movieError ? (
          <p className="text-red-500">Error fetching movies.</p>
        ) : (
          <div className="flex flex-wrap gap-4 justify-start">
            {movieLoading
              ? Array(6)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="w-60 h-80 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-md"
                    ></div>
                  ))
              : movieData?.results
                  ?.slice(0, 10)
                  ?.filter((movie: any) =>
                    (movie.title || movie.name)
                      ?.toLowerCase()
                      .includes(searchQuery)
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
        {socialError ? (
          <p className="text-red-500">Error fetching social posts.</p>
        ) : (
          <div className="flex flex-wrap gap-4 items-center">
            {socialLoading
              ? Array(3)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="w-full max-w-xl h-40 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-md"
                    ></div>
                  ))
              : socialData
                  ?.filter((post: any) =>
                    post.content?.toLowerCase().includes(searchQuery)
                  )
                  .map((post: any) => (
                    <SocialPostCard key={post.id} post={post} />
                  ))}
          </div>
        )}
      </section>

      {/* Trending Section */}
      <section id="trending">
        <h2 className="text-2xl font-bold mb-4">🔥 Trending</h2>
        <div className="space-y-8">
          {/* Trending News */}
          {newsData?.articles?.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Top News</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {newsData.articles.slice(0, 3).map((article: any) => (
                  <NewsCard key={article.url} {...article} />
                ))}
              </div>
            </div>
          )}

          {/* Trending Movies */}
          {movieData?.results?.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Top Movies</h3>
              <div className="flex flex-wrap gap-4">
                {movieData.results.slice(0, 3).map((movie: any) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          )}

          {/* Trending Social Posts */}
          {Array.isArray(socialData) && socialData.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Top Social Posts</h3>
              <div className="flex flex-col gap-4 items-center">
                {socialData.slice(0, 3).map((post: any) => (
                  <SocialPostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Favorites */}
      <section id="favorites">
        <FavoritesSection />
      </section>
    </div>
  );
}

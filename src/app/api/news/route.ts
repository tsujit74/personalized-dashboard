import { NextResponse } from 'next/server';

const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'general';

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${NEWS_API_KEY}`
  );

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}

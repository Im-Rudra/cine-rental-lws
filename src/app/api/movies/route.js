import { getAllMovies } from '@/db/operations';
import { NextResponse } from 'next/server';

export async function GET() {
  const movies = await getAllMovies();
  return NextResponse.json(movies);
}

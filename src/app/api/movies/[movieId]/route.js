import { getMovieById } from '@/db/operations';
import { NextResponse } from 'next/server';

export async function GET(_request, { params }) {
  const movieId = params?.movieId;
  const data = await getMovieById(Number(movieId));
  return NextResponse.json(data);
}

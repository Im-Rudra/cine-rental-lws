'use client';
import { useParams } from 'next/navigation';

export default function NotFoundMovieId() {
  const params = useParams();
  return (
    <div className="text-center mt-48 text-3xl font-semibold">
      The movie you are looking for with id {params.movieId}. Doesn&apos;t exist.
    </div>
  );
}

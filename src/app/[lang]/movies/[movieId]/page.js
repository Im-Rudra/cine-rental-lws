import MovieDetails from '@/components/MovieDetails';
import { getMovieById } from '@/db/operations';

export default async function MovieDetailsPage({ params: { lang, movieId } }) {
  const movie = await getMovieById(movieId);
  return <MovieDetails movieId={movieId} movie={movie} lang={lang} />;
}

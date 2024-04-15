import Modal from '@/components/Modal';
import MovieDetails from '@/components/MovieDetails';
import { getMovieById } from '@/db/operations';

export default async function MoviePage({ params: { lang, movieId } }) {
  const movie = await getMovieById(movieId);
  return (
    <Modal>
      <MovieDetails movieId={movieId} movie={movie} lang={lang} />
    </Modal>
  );
}

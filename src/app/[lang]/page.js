import MovieCard from '@/components/MovieCard';
import { getAllMovies } from '@/db/operations';

export default async function Home({ params: { lang } }) {
  const movies = await getAllMovies();
  return (
    <div className="content">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} lang={lang} />
        ))}
      </div>
    </div>
  );
}

import { getDictionary } from '@/dictionaries/dictionary';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function MovieDetails({ movieId, movie, lang }) {
  if (!movie) {
    return notFound();
  }
  const dict = await getDictionary(lang);
  return (
    <section>
      <div>
        <Image
          className="w-full object-cover max-h-[300px] lg:max-h-[500px] rounded-lg mb-4"
          src={movie.backdrop_path}
          alt=""
          width={1280}
          height={720}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full mb-4">
        <div className="w-full md:w-2/6 xl:w-1/4">
          <Image
            src={movie.poster_path}
            alt=""
            width={200}
            height={300}
            className="max-w-xs md:max-w-full w-full object-cover rounded block mx-auto"
          />
        </div>
        <div className="w-full md:w-4/6 xl:w-3/4">
          <h2 className="font-bold text-slate-300 text-2xl">{movie.original_title}</h2>
          <p className="my-2 text-slate-400 italic text-justify">{movie.overview}</p>
          <ul className="text-slate-300 space-y-2">
            <li>
              {dict.releaseDate}: {movie.release_date}
            </li>
            <li>
              {dict.averageVote}: {movie.vote_average.toFixed(1)}
            </li>
            <li>
              {dict.voteCount}: {movie.vote_count}
            </li>
            <li>
              {dict.popularity}: {movie.popularity}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
          {dict.streamHD}
        </button>
        <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
          {dict.downloadHD}
        </button>
      </div>
    </section>
  );
}

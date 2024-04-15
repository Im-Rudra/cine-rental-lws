import { getDictionary } from '@/dictionaries/dictionary';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa6';
import { IoTicketOutline } from 'react-icons/io5';

export default async function MovieCard({ movie, lang }) {
  const dict = await getDictionary(lang);
  return (
    <figure className="p-4 md:p-3 lg:p-2 border border-black/10 shadow-sm dark:border-white/10 rounded-lg md:rounded-md lg:rounded">
      <div className="">
        <Image
          className="w-full object-cover rounded-lg md:rounded-md lg:rounded"
          src={movie.poster_path}
          height={300}
          width={200}
          alt=""
        />
      </div>
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div className="flex items-center justify-between space-x-1 mb-5">
          {Array(10)
            .fill(null)
            .map((_, i) => {
              const currentStar = i + 1;
              if (currentStar <= Math.round(movie.vote_average))
                return (
                  <FaStar
                    className="w-4 h-4 hover:scale-125 transition-all text-green-500"
                    key={currentStar + 'rating'}
                  />
                );
              else
                return (
                  <FaStar
                    className="w-4 h-4 hover:scale-125 transition-all"
                    key={currentStar + 'rating'}
                  />
                );
            })}
        </div>
        <Link
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm hover:scale-[1.02] transition-all"
          href={`/${lang}/movies/${movie.id}`}
        >
          <IoTicketOutline className="w-5 h-5" />
          <span>{dict.details}</span>
        </Link>
      </figcaption>
    </figure>
  );
}

import { getDictionary } from '@/dictionaries/dictionary';
import Image from 'next/image';
import Link from 'next/link';

export default async function Sidebar({ lang }) {
  const dict = await getDictionary(lang);
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href={`/${lang}`}
          >
            <Image src="/icons/trending.svg" width="24" height="24" alt="" />
            <span>{dict.trending}</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href={`/${lang}`}>
            <Image src="/icons/newRelease.svg" width="24" height="24" alt="" />
            <span>{dict.newReleases}</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href={`/${lang}`}>
            <Image src="/icons/commingSoon.svg" width="24" height="24" alt="" />
            <span>{dict.comingSoon}</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href={`/${lang}`}>
            <Image src="/icons/favourite.svg" width="24" height="24" alt="" />
            <span>{dict.favorites}</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href={`/${lang}`}>
            <Image src="/icons/watchLater.svg" width="24" height="24" alt="" />
            <span>{dict.watchLater}</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

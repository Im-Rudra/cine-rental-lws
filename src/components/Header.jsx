import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';
import { IoLanguage } from 'react-icons/io5';
import LangButton from './LangButton';

export default function Header({ lang }) {
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Logo lang={lang} />

        <ul className="flex items-center space-x-5">
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/ring.svg" width="24" height="24" alt="" />
            </Link>
          </li>
          <li>
            <LangButton />
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/shopping-cart.svg" width="24" height="24" alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

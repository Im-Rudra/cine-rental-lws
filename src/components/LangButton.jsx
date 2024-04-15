'use client';
import { usePathname } from 'next/navigation';
import { IoLanguage } from 'react-icons/io5';

const alterLangUrl = (url) => {
  const parsedUrl = url.split('/');
  const lang = parsedUrl[1];
  if (lang === 'bn') {
    parsedUrl[1] = 'en';
  } else if (lang === 'en') {
    parsedUrl[1] = 'bn';
  }
  return parsedUrl.join('/');
};

export default function LangButton() {
  const pathName = usePathname();
  return (
    <a
      className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
      href={alterLangUrl(pathName)}
    >
      <IoLanguage className="w-6 h-6 text-green-300" />
    </a>
  );
}

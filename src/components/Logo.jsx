import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ lang }) {
  return (
    <Link href={`/${lang}`}>
      <Image src="/logo.svg" width={140} height={32} alt="logo" />
    </Link>
  );
}

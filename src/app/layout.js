import localFont from 'next/font/local';
import './globals.css';

const hindSiliguri = localFont({
  src: '../assets/fonts/HindSiliguri/HindSiliguri-Regular.ttf',
  display: 'swap'
});

export const metadata = {
  title: 'Cine Rental',
  description: 'A movie streaming platform'
};

export default function Layout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
      dark:bg-body 
      dark:text-white 
      text-dark 
      ${hindSiliguri.className}
    `}
      >
        {children}
      </body>
    </html>
  );
}

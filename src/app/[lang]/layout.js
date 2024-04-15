import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({ modal, children, params: { lang } }) {
  return (
    <>
      {modal}
      <Header lang={lang} />
      <main className="block">
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar lang={lang} />
          {children}
          <div id="modal-root-content" className="sticky left-0 top-0"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}

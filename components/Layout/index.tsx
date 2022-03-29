import Footer from './Footer';
import Header from './Header';

type LayoutPops = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutPops) => {
  return (
    <>
      <Header />
      <main>{children}Main Section</main>
      <Footer />
    </>
  );
};

export default Layout;

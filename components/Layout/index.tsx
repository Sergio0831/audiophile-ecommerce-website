import Footer from './Footer';
import Header from './Header';
import MobileNav from './MobileNav';
import Overlay from './Overlay';

type LayoutPops = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutPops) => {
  return (
    <>
      <Header />
      <Overlay />
      <MobileNav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

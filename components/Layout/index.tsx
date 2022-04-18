import { useAppSelector } from '../../app/hooks';
import Cart from '../../features/cart/Cart';
import Footer from './Footer';
import Header from './Header';
import MobileNav from './MobileNav';

type LayoutPops = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutPops) => {
  const cartOpen = useAppSelector((state) => state.cart.cartOpen);
  const navOpen = useAppSelector((state) => state.mobileNav.open);

  return (
    <>
      <Header />
      {navOpen && <MobileNav />}
      {cartOpen && <Cart />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

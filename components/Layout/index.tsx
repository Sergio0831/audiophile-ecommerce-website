import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Cart from '../../features/cart/Cart';
import { cartTotal } from '../../features/cart/cartSlice';
import Footer from './Footer';
import Header from './Header';
import MobileNav from './MobileNav';

type LayoutPops = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutPops) => {
  const navOpen = useAppSelector((state) => state.mobileNav.open);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(cartTotal());
  }, [dispatch, cart]);

  return (
    <>
      <Header />
      {navOpen && <MobileNav />}
      {cart.cartOpen && <Cart />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

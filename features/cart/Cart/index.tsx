import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Overlay from '../../../components/Layout/Overlay';
import Button from '../../../components/ui/Button';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import CartProducts from '../CartProducts';
import { clearCart, closeCart } from '../cartSlice';
import CartTotal from '../CartTotal';
import classes from './Cart.module.scss';

const Cart = () => {
  const cartOpen = useAppSelector((state) => state.cart.cartOpen);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cartRef = useRef<HTMLDivElement>(null);

  const cartClasses = clsx({
    [classes.cart]: true,
    [classes.cart__home]: router.pathname === '/'
  });

  const closeOutsideClick = () => {
    dispatch(closeCart());
  };

  useOnClickOutside(cartRef, closeOutsideClick);

  return (
    <>
      {cartOpen && <Overlay />}
      <section className={`${classes.wrapper} section-center`}>
        <div className={cartClasses} ref={cartRef}>
          <div className={classes.cart__qty}>
            <h6 className='heading-6'>cart ({cart.cartTotalQuantity})</h6>
            {cart.cartItems.length > 0 && (
              <Button
                className={`${classes.cart__remove} btn`}
                onClick={(e) => {
                  dispatch(clearCart());
                  e.stopPropagation();
                }}
              >
                remove all
              </Button>
            )}
          </div>
          <CartProducts
            cartItems={cart.cartItems}
            cartTotal={cart.cartTotalAmount}
            cart
          />
          <CartTotal cartTotalAmount={cart.cartTotalAmount} />
          {cart.cartTotalQuantity > 0 && (
            <Button
              className={`${classes.cart__link} btn-default-1`}
              link='/checkout'
              onClick={() => dispatch(closeCart())}
            >
              checkout
            </Button>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;

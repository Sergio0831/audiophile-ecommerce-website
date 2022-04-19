import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Overlay from '../../../components/Layout/Overlay';
import Button from '../../../components/ui/Button';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import CartProduct from '../CartProduct';
import { clearCart, closeCart } from '../cartSlice';
import classes from './Cart.module.scss';

const Cart = () => {
  const cartOpen = useAppSelector((state) => state.cart.cartOpen);
  const { cartItems, cartTotalQuantity } = useAppSelector(
    (state) => state.cart
  );
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
      {cartOpen && <Overlay showOverlay={cartOpen ? true : false} />}
      <section className={`${classes.wrapper} section-center`}>
        <div className={cartClasses} ref={cartRef}>
          <div className={classes.cart__qty}>
            <h6 className='heading-6'>cart ({cartTotalQuantity})</h6>
            {cartItems.length > 0 && (
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
          <div className={classes.cart__products}>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartProduct key={item.id} product={item} />
              ))
            ) : (
              <h6 className='heading-6'>your cart is empty!</h6>
            )}
          </div>
          <div className={classes.cart__total}>
            <p>total</p>
            <h6 className='heading-6'>$ 0</h6>
          </div>
          {cartItems.length > 0 && (
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

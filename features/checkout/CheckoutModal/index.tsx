import clsx from 'clsx';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Overlay from '../../../components/Layout/Overlay';
import Button from '../../../components/ui/Button';
import CartProducts from '../../../features/cart/CartProducts';
import { clearCart } from '../../../features/cart/cartSlice';
import { formatPrice } from '../../../helpers/formatPrice';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import CheckoutIcon from '../CheckoutIcon';
import { modalClose } from '../checkoutModalSlice';
import classes from './ChekoutModal.module.scss';

const CheckoutModal = () => {
  const [viewLess, setViewLess] = useState<boolean>(false);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  useLockBodyScroll();

  const modalRightClasses = clsx({
    [classes.modal__productsRight]: true,
    [classes.modal__productsRightCenter]: cart.cartTotalQuantity === 1
  });

  return (
    <>
      <Overlay checkout />
      <div className={classes.modal}>
        <div className={classes.modal__icon}>
          <CheckoutIcon />
        </div>
        <h3 className='heading-3'>
          thank you <br /> for your order
        </h3>
        <p className='opacity-text'>
          You will receive an email confirmation shortly.
        </p>
        <div>
          <div className={classes.modal__products}>
            <div className={classes.modal__productsLeft}>
              <CartProducts
                checkoutProducts
                cartItems={cart.cartItems}
                viewLess={viewLess}
                cartTotal={cart.cartTotalAmount}
              />
              {cart.cartTotalQuantity > 1 && (
                <div className={classes.modal__btn}>
                  <Button
                    className='opacity-text'
                    onClick={() => setViewLess(!viewLess)}
                  >
                    {viewLess
                      ? `and ${cart.cartItems.length - 1} other item(s)`
                      : 'View less'}
                  </Button>
                </div>
              )}
            </div>
            <div className={modalRightClasses}>
              <div className={classes.modal__total}>
                <p>grand total</p>
                <span>$ {formatPrice(cart.cartTotalAmount)}</span>
              </div>
            </div>
          </div>
        </div>
        <Button
          link='/'
          className='btn-default-1'
          onClick={() => {
            dispatch(clearCart());
            dispatch(modalClose());
          }}
        >
          back to home
        </Button>
      </div>
    </>
  );
};

export default CheckoutModal;

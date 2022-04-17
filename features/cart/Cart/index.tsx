import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../../app/hooks';
import Overlay from '../../../components/Layout/Overlay';
import Button from '../../../components/ui/Button';
import CartProduct from '../CartProduct';
import classes from './Cart.module.scss';

const Cart = () => {
  const cartOpen = useAppSelector((state) => state.cart.cartOpen);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const router = useRouter();

  const cartClasses = clsx({
    [classes.cart]: true,
    [classes.cart__home]: router.pathname === '/'
  });

  return (
    <>
      {cartOpen && <Overlay showOverlay={cartOpen ? true : false} />}
      <section className={`${classes.wrapper} section-center`}>
        <div className={cartClasses} onClick={(e) => e.stopPropagation()}>
          <div className={classes.cart__qty}>
            <h6 className='heading-6'>cart ({cartItems.length})</h6>
            {cartItems.length > 0 && (
              <Button className={`${classes.cart__remove} btn`}>
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

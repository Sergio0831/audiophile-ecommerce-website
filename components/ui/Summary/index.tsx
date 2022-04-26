import { useAppSelector } from '../../../app/hooks';
import CartProducts from '../../../features/cart/CartProducts';
import CartTotal from '../../../features/cart/CartTotal';
import { useFormSubmit } from '../../../hooks/useFormSubmit';
import Button from '../Button';
import classes from './Summary.module.scss';

const CartCheckout = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <aside className={classes.summary}>
      <div className={classes.summary__cart}>
        <h6 className='heading-6'>summary</h6>
        <CartProducts
          cartItems={cart.cartItems}
          cartTotal={cart.cartTotalAmount}
        />
        <CartTotal cartTotalAmount={cart.cartTotalAmount} summary />
        <Button
          type='submit'
          name='continue&pay'
          className='btn-default-1'
          onClick={useFormSubmit}
        >
          continue & pay
        </Button>
      </div>
    </aside>
  );
};

export default CartCheckout;

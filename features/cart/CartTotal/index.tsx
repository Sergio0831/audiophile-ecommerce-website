import { formatPrice } from '../../../helpers/formatPrice';
import classes from './CartTotal.module.scss';

type CartTotalProps = {
  cartTotalAmount: number;
  summary?: boolean;
};

const CartTotal = ({ cartTotalAmount, summary }: CartTotalProps) => {
  const shipping = cartTotalAmount === 0 ? 0 : 50;
  const vat = (cartTotalAmount / 100) * 21;

  return (
    <ul className={classes.total}>
      <li>
        <p>total</p>
        <h6 className='heading-6'>$ {formatPrice(cartTotalAmount)}</h6>
      </li>
      {summary && (
        <>
          <li>
            <p>shipping</p>
            <h6 className='heading-6'>$ {shipping}</h6>
          </li>
          <li>
            <p>vat (included)</p>
            <h6 className='heading-6'>$ {formatPrice(vat)}</h6>
          </li>
          <li className={classes.total__grand}>
            <p>grand total</p>
            <h6 className='heading-6'>
              $ {formatPrice(cartTotalAmount + shipping)}
            </h6>
          </li>
        </>
      )}
    </ul>
  );
};

export default CartTotal;

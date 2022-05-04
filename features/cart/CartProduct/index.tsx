import clsx from 'clsx';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import AmountButtons from '../../../components/ui/AmountButtons';
import { formatPrice } from '../../../helpers/formatPrice';
import { shortName } from '../../../helpers/shortName';
import { ProductToCart } from '../../../types/productToCart-types';
import { decreaseQty, increaseQty } from '../cartSlice';
import classes from './CartProduct.module.scss';

type CartProductProps = {
  product: ProductToCart;
  cart?: boolean;
  checkoutProducts?: boolean;
};

const CartProduct = ({ product, cart, checkoutProducts }: CartProductProps) => {
  const { id, image, name, price, quantity } = product;
  const dispatch = useAppDispatch();

  const increase = () => {
    dispatch(increaseQty(id));
  };

  const decrease = () => {
    dispatch(decreaseQty(id));
  };

  const productsClasses = clsx({
    [classes.product]: true,
    [classes.product__checkout]: checkoutProducts
  });

  return (
    <article className={productsClasses}>
      <Image
        width={checkoutProducts ? 50 : 64}
        height={checkoutProducts ? 50 : 64}
        src={image}
      />
      <div className={classes.product__content}>
        <div>
          <p className={classes.product__name}>{shortName(name)}</p>
          <p className={classes.product__price}>
            $ {formatPrice(price * quantity!)}
          </p>
        </div>
        {cart ? (
          <AmountButtons
            increase={increase}
            decrease={decrease}
            amount={quantity!}
            className={classes.product__amount}
          />
        ) : (
          <p className={classes.product__qty}>x{quantity}</p>
        )}
      </div>
    </article>
  );
};

export default CartProduct;

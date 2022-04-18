import Image from 'next/image';
import AddToCart from '../../../components/ui/AddToCart';
import { formatPrice } from '../../../helpers/formatPrice';
import { shortName } from '../../../helpers/shortName';
import { ProductToCart } from '../../../types/productToCart-types';
import classes from './CartProduct.module.scss';

type CartProductProps = {
  product: ProductToCart;
};

const CartProduct = ({ product }: CartProductProps) => {
  const { image, name, price, quantity } = product;

  return (
    <article className={classes.product}>
      <Image width={64} height={64} src={image} />
      <div>
        <p className={classes.product__name}>{shortName(name)}</p>
        <p className={classes.product__price}>$ {formatPrice(price)}</p>
      </div>
      <AddToCart className={classes.product__qty} />
    </article>
  );
};

export default CartProduct;

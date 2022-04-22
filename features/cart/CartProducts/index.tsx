import { ProductToCart } from '../../../types/productToCart-types';
import CartProduct from '../CartProduct';
import classes from './CartProducts.module.scss';

type CartProductsProps = {
  cartTotal: number;
  cartItems: ProductToCart[];
  cart?: boolean;
};

const CartProducts = ({ cartTotal, cartItems, cart }: CartProductsProps) => {
  return (
    <div className={classes.products}>
      {cartTotal > 0 ? (
        cartItems.map((item) => (
          <CartProduct key={item.id} product={item} cart={cart} />
        ))
      ) : (
        <h6 className='heading-6'>your cart is empty!</h6>
      )}
    </div>
  );
};

export default CartProducts;

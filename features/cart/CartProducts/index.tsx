import clsx from 'clsx';
import { useState } from 'react';
import { ProductToCart } from '../../../types/productToCart-types';
import CartProduct from '../CartProduct';
import classes from './CartProducts.module.scss';

type CartProductsProps = {
  cartTotal: number;
  cartItems: ProductToCart[];
  cart?: boolean;
  checkoutProducts?: boolean;
  viewLess?: boolean;
};

const CartProducts = ({
  cartTotal,
  cartItems,
  cart,
  checkoutProducts,
  viewLess
}: CartProductsProps) => {
  const [firstProduct, setFirstProduct] = useState(cartItems[0]);

  const productsClasses = clsx({
    [classes.products]: true,
    [classes.products__checkout]: checkoutProducts
  });

  return (
    <div className={productsClasses}>
      {cartTotal > 0 ? (
        viewLess ? (
          <CartProduct
            product={firstProduct}
            cart={cart}
            checkoutProducts={checkoutProducts}
          />
        ) : (
          cartItems.map((item) => (
            <CartProduct
              key={item.id}
              product={item}
              cart={cart}
              checkoutProducts={checkoutProducts}
            />
          ))
        )
      ) : (
        <h6 className='heading-6'>your cart is empty!</h6>
      )}
    </div>
  );
};

export default CartProducts;

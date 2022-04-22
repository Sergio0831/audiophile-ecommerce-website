import { ProductType } from '../../../types/product-types';
import Button from '../../ui/Button';
import Image from '../../ui/Image';
import { useAppDispatch } from '../../../app/hooks';
import classes from './ProductDetails.module.scss';
import { addToCart, openCart } from '../../../features/cart/cartSlice';
import { ProductToCart } from '../../../types/productToCart-types';
import { formatPrice } from '../../../helpers/formatPrice';
import AmountButtons from '../../ui/AmountButtons';
import { useState } from 'react';

type ProductDetailsProsp = {
  product: ProductType;
};

const ProductDetails = ({ product }: ProductDetailsProsp) => {
  const [quantity, setQuantity] = useState<number>(1);

  const {
    image: { desktop, tablet, mobile },
    new: newProduct,
    id,
    name,
    description,
    price,
    category,
    slug
  } = product;

  const increase = () => {
    setQuantity((oldQuantity) => oldQuantity + 1);
  };

  const decrease = () => {
    setQuantity((oldQuantity) => {
      let tempQuantity = oldQuantity - 1;

      if (tempQuantity < 1) {
        tempQuantity = 1;
      }
      return tempQuantity;
    });
  };

  const productToCart: ProductToCart = {
    id,
    name,
    price,
    quantity,
    image: `/assets/cart/image-${slug}.jpg`
  };

  const dispatch = useAppDispatch();
  const cartButtonClick = () => {
    dispatch(addToCart(productToCart));
    dispatch(openCart());
  };

  return (
    <section className={`${classes.product} section-center`}>
      <Button link={`/${category}`} className='backLink'>
        go back
      </Button>
      <div className={classes.product__image}>
        <Image
          desktopWebp={desktop}
          tabletWebp={tablet}
          mobileWebp={mobile}
          alt={name}
          mobileWidth='48em'
          tabletWidth='62.5em'
          imageClasses='img'
        />
      </div>
      <div className={classes.product__content}>
        {newProduct ? (
          <span className={`overline ${classes.product__new}`}>
            new product
          </span>
        ) : null}
        <h2 className='heading-2'>{name}</h2>
        <p>{description}</p>
        <h6 className='heading-6'>$ {formatPrice(price)}</h6>
        <div className={classes.product__toCart}>
          <AmountButtons
            amount={quantity}
            increase={increase}
            decrease={decrease}
          />
          <Button className='btn-default-1' onClick={cartButtonClick}>
            add to cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

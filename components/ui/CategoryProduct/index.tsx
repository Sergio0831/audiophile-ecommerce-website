import React from 'react';
import { CategoryProductTypes } from '../../../types/categoryProducts-types';
import Button from '../Button';
import Image from '../Image';
import classes from './CategoryProduct.module.scss';

type CategoryProductProps = {
  product: CategoryProductTypes;
};

const CategoryProduct = ({ product }: CategoryProductProps) => {
  const {
    name,
    new: newProduct,
    description,
    category,
    slug,
    categoryImage
  } = product;

  return (
    <article className={classes.product}>
      <div className={classes.product__image}>
        <Image
          desktopWebp={categoryImage.desktop}
          tabletWebp={categoryImage.tablet}
          mobileWebp={categoryImage.mobile}
          tabletWidth='1000px'
          alt={name}
          imageClasses='img'
        />
      </div>
      <div className={classes.product__text}>
        {newProduct ? <span className='overline'>new product</span> : null}
        <h2 className='heading-2'>{name}</h2>
        <p>{description}</p>
        <Button className='btn-default-1' link={`/${category}/${slug}`}>
          see product
        </Button>
      </div>
    </article>
  );
};

export default CategoryProduct;
